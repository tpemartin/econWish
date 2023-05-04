import "./index.css"
import postalStamp from "./stamps.jsx"

export default function PostalStamp(){
    
    return (
        <div className="seal">

            <div className="seal-icon"><img class="seal-color" src={postalStamp[3]} /></div>
          </div>
    )
}