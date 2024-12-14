import React ,{useState} from 'react'

export default function Form(props) {
  const [text,seText]= useState('Enter Text Here');
  let[count,setCount]=useState(0);

 
  function handleclick(){
    let newText= text.toUpperCase();
    seText(newText);
    props.showAlert("Converted to upper case", "success")
  }
  function handleclick2(){
    let newText=text.toLowerCase();
    seText(newText);
    props.showAlert("Converted to lower case", "success")
  }
  const handlecopy =() => {
    var val=text;
    
    navigator.clipboard.writeText(val);
    props.showAlert("Copy Cat!", "success")
  }

  function handleformat(){
    let newText= text.split(/[ ]+/);
    seText(newText.join(" "));
    props.showAlert("Laaaazzzyyyy.....!!", "success")
  }
  function handleonchange(event){
    let updated= event.target.value;
    let vowcount=0;
    seText(updated);
    let vow='aeiouAEIOU';
    for (let char of updated){
      if (vow.includes(char)){
        vowcount++
        setCount(vowcount);
      }
    }
  }
  return (
    <div >
      <div className="my-3" >
    <div className="my-3" >
    <textarea style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}  className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleclick}>Click to uppercase</button>
    <button style={{ marginLeft: '10px' }}className="btn btn-secondary" onClick={handleclick2}>Click to lowercase</button>
    <button style={{ marginLeft: '10px' }}className="btn btn-secondary" onClick={handlecopy}>Copy Text</button>
    <button style={{ marginLeft: '10px' }}className="btn btn-secondary" onClick={handleformat}>Format Text</button>
    </div> 

    <div className="container my-3" >
      <h1 style={{color:props.mode==="light"?"black":"white"}}>Your Text Summary</h1>
      <p style={{color:props.mode==="light"?"black":"white"}}>Words are <b>{text.split(" ").length}</b> and Characters are <b>{text.length}</b></p>
      <p style={{color:props.mode==="light"?"black":"white"}}>you will take<b> {0.008 * text.split(" ").length}</b> Minutes to read</p>
      <p style={{color:props.mode==="light"?"black":"white"}}> number of vowels : <b>{count}</b></p>
    </div>
    </div>
  )
}
