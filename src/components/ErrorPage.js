import { Button } from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'
import MyNav from './MyNav'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <MyNav />
      <div id='error-page' className='bg center title titleBlock text-center'>
        <h1>Oops!</h1>
        <br />
        <p>
          Sorry, an unexpected error has occurred, The URL you are trying to
          reach is <i>{error.statusText || error.message}</i>
        </p>
        <br />
        <Button href='https://chaunce.dev' variant='dark' className='bgColor1'>
          Link to Main Page
        </Button>
      </div>
    </div>
  )
}
