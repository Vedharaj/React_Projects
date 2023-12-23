import earthimg from '../images/earth.png'

export default function Navbar(){
    return(
        <nav>
            <img src={earthimg} alt='earth'/>
            <p>My Travel Journal.</p>
        </nav>
    );
}