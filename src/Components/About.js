import React from "react";

export default function About(props) {
  let myStyle ={
    color: props.mode === 'dark'? 'white': '#0d0c31',
    backgroundColor:  props.mode === 'dark'? 'rgb(0 40 71)': 'white',
    // border: '2px solid',
    // borderColor: props.mode === 'dark'? 'white': '#0d0c31'
  }
  return (
    
    <div className="container" >
          <h2 className="my-3" style={{color: props.mode === 'dark'? 'white': '#0d0c31'}}>About us</h2>
      <div class="accordion" id="accordionExample" >
        <div class="accordion-item" >
          <h2 class="accordion-header" id="headingOne" >
            
            <button
              class="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze Your Text</strong>  
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"  style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word cound, character count or  
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong> 
             
            </button>
          </h2>
          
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"  style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
              
            </button>
          </h2>

          <div
            id="collapseThree"
            class="accordion-collapse collapse" 
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"   style={myStyle}>
            This word counter software works in ay web browsers such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog excel document, pdf document, essays,etc.  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
