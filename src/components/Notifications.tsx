import ReactDom from "react-dom"

type Props = {
    messages: string[] | string
}

function Notifications({messages}: Props) {

  
return (
        <div className="fixed top-0 left-0">
        { typeof messages !== "string"
        ? messages.map( (msg,i) => (
                     <div 
                    key={msg+i} 
                    className={`bg-main notification p-3 ${i == messages.length - 1 ? "rounded-br-3xl" : ""}`}
                    >{msg}</div>
        ))
    
        : 
        
         <div 
            className={`bg-main notification p-3 rounded-br-3xl`}
            >{messages}</div>
        }
    
        </div>
    )
}

export default Notifications