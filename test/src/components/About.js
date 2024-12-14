import React from 'react'

export default function About(props) {
return (
    <>
    <div><h1 style={{textAlign:"center",color:props.mode==="light"?"black":"white"}}>ABOUT US</h1></div>
    <div>
    <div className="accordion" id="accordionExample">
  <div style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}  className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        QUICK AND FAST
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} className="accordion-body">
        <strong>Edit On The Go:</strong> No Installations , No sharing your Credentials safe and Secure
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        LATTEST & NEW
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} className="accordion-body">
        <strong>Magic Wand of editing</strong> Convert, Format, Copy, Paste Easily
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Developer
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} className="accordion-body">
        <strong>Developed By Me:</strong> Myself Hrishikesh Indulkar Nerdy and Curious, Thank you for using QuikEdit
      </div>
    </div>
  </div>
</div>
    </div>
    </>
)
}
