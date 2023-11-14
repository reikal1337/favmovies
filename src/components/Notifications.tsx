import ReactDom from "react-dom"

type Props = {
    messages: string[]
}

function Notifications({messages}: Props) {

  
return (
        <div className="fixed top-0 left-0">
        {messages.map( (msg,i) => {
            return <div 
                    key={msg+i} 
                    className={`bg-main notification p-3 ${i == messages.length - 1 ? "rounded-br-3xl" : ""}`}
                    >{msg}</div>
        })

        }
        </div>
    )
}

export default Notifications