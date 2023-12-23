import mailimg from '../images/mail.png'
import linkedinimg from '../images/linkedin.png'

export default function Header(){
    return(
        <header>
            <p className="name">Ebaneshar Vedharaj</p>
            <p className="skill">Full stack developer</p>
            <p className="website">www.vedharaj.com</p>
            <div className="btn-group">
                <button className="mail-btn">
                    <img className="mail-btn-icon" src={mailimg} alt="mail  "/>
                    Mail
                </button>
                <button className="linkedin-btn">
                    <img className="linkedin-btn-icon" src={linkedinimg} alt="linkedin"/>
                    Linkedin
                </button>
            </div>
        </header>
    )
}