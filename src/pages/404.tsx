
import Error from 'next/error'
import { NextPageContext } from 'next'

function ErrorPage({ statusCode }: {statusCode: number}) {
  console.log('rendering 404 page', statusCode)
  return (
      <>404</>
  )
}


export default ErrorPage
