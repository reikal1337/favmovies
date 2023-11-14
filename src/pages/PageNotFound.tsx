import { useRouteError } from "react-router-dom"

const PageNotFound = () => {
    const error = useRouteError()

  return (
    <>
        <h1>Ups!</h1>
        <p>{"Tokio puslapio nera :("}</p>
        <p>{(error as Error)?.message ||
         (error as { statusText?: string })?.statusText}</p>
    </>

  )
}

export default PageNotFound