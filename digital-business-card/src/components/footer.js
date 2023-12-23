import fbicon from '../images/Facebook Icon.png'
import ghicon from '../images/GitHub Icon.png'
import igicon from '../images/Instagram Icon.png'
import twicon from '../images/Twitter Icon.png'

export default function Footer(){
    return(
        <footer>
            <img src={twicon} alt="twitter" />
            <img src={fbicon} alt="facebook" />
            <img src={igicon} alt="instagram" />
            <img src={ghicon} alt="github" />
        </footer>
    )
}