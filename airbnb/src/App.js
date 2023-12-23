import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import './App.css'
import Data from './components/data.js'

export default function App(){
    const cardlist = Data.map(i => {
        return (<Card {...i}/>)
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                {cardlist}
            </div>
        </div>
    )
}