import React, {useState, useEffect} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({currentnote, updateNoteText}){
    // const [value,setValue] = React.useState(currentnote.text)
    const [selectedTab, setSelectedTab] = useState("write")
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });
    
    useEffect(()=>{
        let  textarea = document.querySelector('textarea.mde-text')
        textarea.selectionStart = textarea.value.length;
        textarea.selectionEnd = textarea.value.length;
        textarea.focus();

    },[currentnote.text])
    
    
    return( 
        <div className="bg-light">
            <ReactMde
                value={currentnote.text}
                onChange={updateNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                minEditorHeight={84}
                heightUnits="vh"
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </div>
    )
  }