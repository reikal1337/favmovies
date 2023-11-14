
function BackgroundImg() {
  return (
    <>
    <div 
        className='fixed z-[-99] bg-cover bg-center bg-no-repeat w-screen h-screen' 
        style={{backgroundImage: "url(./background.jpg)"}}/>
    <div className="fixed z-[-98] bg-opacity-50 w-screen h-screen bg-black" />

    </>
  )
}

export default BackgroundImg