import heroimg from '../images/hero-img.png'

export default function Hero(){
    return(
        <section className='hero'>
            <img src={heroimg} alt='hero'/>
            <div className='hero-text'>
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activites led by
                    one-of-a-kind hosts-all leaving home.
                </p>
            </div>
        </section>
        )
}
