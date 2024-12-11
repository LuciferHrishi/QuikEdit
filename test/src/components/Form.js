import React ,{useState} from 'react'

export default function Form() {
  const [text,seText]= useState('Enter Text Here');
  let[count,setCount]=useState(0);
  function handleclick(){
    let newText= text.toUpperCase();
    seText(newText);
  }
  function handleclick2(){
    let newText=text.toLowerCase();
    seText(newText);
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
    <div>
      <div>
    <div className="mb-3">
    <label htmlFor="textarea1" className="form-label">Enter Text Below</label>
    <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleclick}>Click to uppercase</button>
    <button style={{ marginLeft: '10px' }}className="btn btn-secondary" onClick={handleclick2}>Click to lowercase</button>
    </div> 

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>Words are {text.split(" ").length} and Characters are {text.length}</p>
      <p>you will take {0.008 * text.split(" ").length} Minutes to read</p>
      <p> number of vowels : {count}</p>
    </div>
    </div>
  )
}
