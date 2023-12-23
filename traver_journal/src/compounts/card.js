import locationimg from '../images/location.png'

// {
//     "id": 100,
//     "imgsrc": "https://picsum.photos/300/400.jpg?random=100",
//     "country": "Syria",
//     "city": "Clayville",
//     "about": "Labore do quis laborum quis. Elit esse ullamco pariatur do officia sunt. Elit ex commodo quis sit sint duis consectetur ut. Adipisicing adipisicing sunt aliquip elit nisi ullamco deserunt exercitation. Qui magna ad in tempor tempor.\r\n",
//     "fromdate": "06 Mar 2008",
//     "todate": "14 May 2011"
//   }

export default function Card(props){
    console.log(props.imgsrc);
    return(
        <div className="card">
            <img src={props.imgsrc} alt="card"/>
            <div className="card-content">
                <div className="card-location">
                    <section>
                        <img src={locationimg} alt='location'/>
                        <p>{props.country}</p>
                    </section>
                    <a href="www.google.com" className='gray'>View on Google Maps</a>
                </div>
                <div className='card-detail'>
                    <h1>{props.city}</h1>
                    <p className='card-date'>{props.fromdate} - {props.todate}</p>
                    <p  className='card-about'>{props.about}</p>
                </div>
            </div>
        </div>
    );
}