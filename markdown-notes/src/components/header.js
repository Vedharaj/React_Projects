export default function Header(props){
    return(
        <div className={`header ${props.isdark && 'bg-dark'}`}>
            <div className="d-flex flex-row justify-content-between">
                <div>
                </div>
                <p className="ml-4 fw-bold text-primary">MarkDown Notes</p>
                <div className="switch-container d-flex flex-row mt-1">
                <p className=" text-primary">Light</p>
                    <label className="switch ms-2">
                        <input type="checkbox" className="switch-input" 
                            onChange={()=>props.handledarkmode()} checked={props.isdark}/>
                        <span className="slider"></span>
                    </label>
                <p className="ms-2 text-primary">Dark</p>
                </div>
            </div>
        </div>
    )
}