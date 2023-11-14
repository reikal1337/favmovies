import { NotificationBlue, NotificationRed } from './styles/Notification.styles'
import {AiFillCloseCircle, AiFillCheckCircle} from "react-icons/ai"
import ReactDom from "react-dom"

type Props = {
    messages: string[]
}

function Notification({messages}: Props) {

  
return(
        <>
        {messages.map( (msg,i) => {
            return <div 
                    key={msg+i} 
                    className='bg-main '
                    >{msg}</div>
        })

        }
        
        </>
    )
  )
  
}

export default Notification