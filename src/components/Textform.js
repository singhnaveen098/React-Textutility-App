import React, {useState} from 'react'


export default function Textform(props) {
    const handleupclick = ()=>{
        let newtext = Text.toUpperCase() 
        setText(newtext)
        props.showalert("Converted to Uppercase.", "success")
    }
    const handlelowclick = ()=>{
        let newtext = Text.toLowerCase() 
        setText(newtext)
        props.showalert("Converted to Lowercase.", "success")
    }
    const handlecapclick = ()=>{
        let words = Text.split("\n")
        for(let i=0;i<words.length;i++){
            let word = words[i].split(' ')
            for(let j=0;j<word.length;j++){
                word[j] = word[j].charAt(0).toUpperCase() + word[j].slice(1).toLowerCase()
            }
            words[i] = word.join(' ')
        }
        let newtext = words.join("\n")
        setText(newtext)
        props.showalert("Converted to Capitalized.", "success")
    }
    const handlesentclick = ()=>{
        let words = Text.split(".")
        for(let i=0;i<words.length;i++){
            let index = words[i].search(/\s\w/)
            if(i===0 && words[i].charAt(0)!==' '){
                index = -1
            }
            words[i] = words[i].toUpperCase()
            words[i] = words[i].substring(0,index+2) + words[i].substring(index+2).toLowerCase() 
        }
        let newtext = words.join(".")
        setText(newtext)
        props.showalert("Converted to Sentence case.", "success")
    }
    const handlealtclick = ()=>{
        let sentence = ''
        for(let i=0;i<Text.length;){
            sentence = sentence + Text.charAt(i).toLowerCase() +Text.charAt(i+1).toUpperCase()
            i+=2
        }
        setText(sentence)
        props.showalert("Converted to aLtErNaTiNg cAsE.", "success")
    }
    const handleinverseclick = ()=>{
        let sentence = ''
        for(let i=0;i<Text.length;i++){
            if(Text.charAt(i)===Text.charAt(i).toUpperCase()){
                sentence = sentence + Text.charAt(i).toLowerCase()
            }
            else{
                sentence = sentence + Text.charAt(i).toUpperCase()
            }
        }
        setText(sentence)
        props.showalert("Converted to InVeRsE CaSe.", "success")
    }
    const handleclearclick = ()=>{
        let newtext = ""
        setText(newtext)
        props.showalert("Textbox Cleared.", "success")
    }
    const handlecopy = ()=>{
        navigator.clipboard.writeText(Text)
        props.showalert("Text Copied.", "success")
    }
    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    const [Text, setText] = useState('')
    let words = Text.split(" ").join('\n').split('\n')
    words = words.filter(String)
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':props.textcolor[props.mode], color:props.mode==='light'?'black':'white'}} value={Text} onChange={handleonchange} id="mybox" rows="10" placeholder="Enter text here"></textarea>
            </div>
            <button disabled={words.length===0} type="button" onClick={handleupclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to Uppercase</button>
            <button disabled={words.length===0} type="button" onClick={handlelowclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to Lowercase</button>
            <button disabled={words.length===0} type="button" onClick={handlecapclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to Capitalized</button>
            <button disabled={words.length===0} type="button" onClick={handlesentclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to Sentance case</button>
            <button disabled={words.length===0} type="button" onClick={handlealtclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to aLtErNaTiVe case</button>
            <button disabled={words.length===0} type="button" onClick={handleinverseclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Convert to InVeRsE case</button>
            <button disabled={words.length===0} type="button" onClick={handlecopy} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Copy text</button>
            <button disabled={words.length===0} type="button" onClick={handleclearclick} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1`}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary :</h2>
            <p>Lines: {Text.split('\n').filter(String).length} , {words.length} words and {Text.length} characters</p>
            <p>{0.008 * words.length} Minutes Reading Time</p>
            <h3>Text Preview :</h3>
            <p>{Text.length>0?Text:"Enter the text above to see it's preview here."}</p>
        </div>
        </>
    )
}
