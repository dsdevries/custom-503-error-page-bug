import Error from 'next/error'
import { NextPageContext } from 'next'

function ErrorPage({ statusCode }: {statusCode: number}) {
  return (
      <Error
        statusCode={statusCode}
      />
  )
}

ErrorPage.getInitialProps = ({ err, res, req }: NextPageContext) => {
  if (typeof err?.message !== 'undefined' && err.message === 'Service Unavailable') {
    if (res) {
      res.statusCode = 503
    }

    return {
      statusCode: 503
    }
  }

  return {
    statusCode: 500
  }
}

export default ErrorPage
