import React from 'react'

export default function NoteList(props){
     

    const NoteListContainer = ()=>{
        return (props.notes.map(n=>(
            props.currentNoteId === n.id ?
            (<button key={n.id} className='btn w-100 rounded-0 mt-1 fw-bold btn-outline-primary'
                onClick={()=>props.handlenotelists(n.id)}>
                {n.name}
            </button>) :
            (<button key={n.id} className='btn w-100 rounded-0 mt-1 fw-bold btn-outline-secondary'
            onClick={()=>props.handlenotelists(n.id)}>
            {n.name}
            </button>)
            
        )))
    }

    return(
        <div className="notelist">
            <header className={`d-flex notes-header border-bottom
                 align-items-center justify-content-center 
                    ${props.isdark && 'bg-dark'}`}>
                <h4 className="text-primary">Notes</h4>
                <button className="btn btn-sm btn-outline-primary ms-2" onClick={props.addnotes}
                >+</button>
            </header>
            <div className='notes-container'>
                <NoteListContainer/>
            </div>
        </div>
    )
}