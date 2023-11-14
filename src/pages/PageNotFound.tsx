import { useRouteError } from "react-router-dom"

const PageNotFound = () => {
    const error = useRouteError()

  return (
    <main
    className='w-screen bg-main h-screen flex flex-col text-white justify-center items-center'>
  
        <h1 className="font-extrabold text-4xl mb-5">Ups!</h1>
        <p className="text-xl">{"Tokio puslapio nera :("}</p>
        <p>{(error as Error)?.message ||
         (error as { statusText?: string })?.statusText}</p>
    </main>

  )
}

export default PageNotFound