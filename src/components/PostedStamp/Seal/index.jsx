import "./index.css"
import seals from "./seals.jsx"

export default function Seal({variant, location}) {

    variant = variant? variant:2

    console.log('seal variant')
    console.log(seals)
    console.log(location)

   
    return (

        <div className="seal" style={location}>

            <div className="seal-icon">
                <img class="seal-color" src={seals[variant].src} style={seals[variant].style} />
            </div>
        </div>
    )
}