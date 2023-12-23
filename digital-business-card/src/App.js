import profileimg from './images/profile.jpg'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

export default function App(){
    return(
        <div className="container">
            <img src={profileimg} className="profileimg" alt="profile"/>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}