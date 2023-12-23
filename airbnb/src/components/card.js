import star from '../images/Star.png'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imgsrc} className='card-img' alt='card1'/>
            <div className="card-stats">
                <img src={star} className='card-star' alt='star' />
                <span>{props.rating}</span>
                <span className='gray'>({props.totalreview}) • {props.country}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span>/ person</p>
        </div>
    )

}