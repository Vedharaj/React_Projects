import './App.css';
import React from 'react';
import NoteList from './components/notelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Split from 'react-split';
import Editor from './components/editor';
import Header from './components/header';
import Cookies from 'js-cookie';


function App() {
  const [notes, setNotes] = React.useState(
    Cookies.get('notes') ? 
    (JSON.parse(Cookies.get('notes'))) :([
    {
      id:0,
      name: 'Notes 1',
      body: "this is notes 1"
    }
    ])
  )

  React.useEffect(()=>{
    Cookies.set('notes', JSON.stringify(notes))
  },[notes])

  const [currentNoteId, setCurrentNoteId] = React.useState(0)

  const [isdark, setIsDark] = React.useState(true)

  function updateNoteText(body){
    setNotes(prevstate=>{
      return prevstate.map((n, i)=>{
        if (currentNoteId === i){
          return ({
            ...n,
            body: body
          })
        } else {
          return n
        }
      })
    })
  }

  function handleaddnotes() {
    setNotes(prevstate => (
      [
      ...prevstate,
      {
        id:prevstate.at(-1).id+1,
        name: 'Notes ' + (prevstate.length + 1),
        body: "This is notes "+ (prevstate.length + 1),
      }
    ])
    )
  }

  const handledarkmode = ()=>{
    setIsDark(prevstate=>!prevstate)
  }

  const handlenotelists = (id)=>{
    setCurrentNoteId(prevstate=>id)
  }

  function RightPanel() {
    return (
      <div>
        <Split
          className='rightpanel'
          sizes={[6, 94]}
          expandToMin={false}
          minSize={[100, Infinity]}
          maxSize={[100, Infinity]}
          direction='vertical'
          gutterSize={10}>
          <Header isdark={isdark} handledarkmode={handledarkmode}/>
          <Editor currentnote={notes[currentNoteId]} updateNoteText={updateNoteText}/>
        </Split>
      </div>
    )
  }  

  return (
    <div className={`app container-fluid py-2 ${isdark && 'bg-dark'}`}>
      <Split
        className='main-split'
        sizes={[15, 90]}
        minSize={[200, 500]}
        maxSize={[500, Infinity]}
        direction='horizontal'
        gutterSize={10}
        dragInterval={1}>
        <NoteList notes={notes} addnotes={handleaddnotes} isdark={isdark} 
            handlenotelists={handlenotelists} currentNoteId={currentNoteId}/>
        <RightPanel />
      </Split>
    </div>
  );
}

export default App
