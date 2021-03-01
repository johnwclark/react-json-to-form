//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// loading json data from file
import myData from './input.json';

import React from 'react';
import button from 'react-bootstrap';

// just a random unique id 
var uniqueID = ( function() {
  var id =
    Math.floor(Math.random() * Math.floor(Math.pow(2,32)-1));
  return function() { return id++ };
})();

function App() {

  
  const formIds = [];
  var dataStr = JSON.stringify(myData);


  // I can't get this to fire 
  function handleSubmit(event) {
    event.preventDefault();
    alert('You have submitted the form.');
  }

  function prettyPrint() {
    var ugly = document.getElementById('jsonTextArea').value
    if ( ugly.length > 0 )
    {
      var obj = JSON.parse(ugly)
      var pretty = JSON.stringify(obj, undefined, 4)
      document.getElementById('jsonTextArea').value = pretty
    }
  }

  function defaultValues() {
    document.getElementById('jsonTextArea').value = dataStr
    prettyPrint()
  }

  function clearValues() {
    document.getElementById('jsonTextArea').value = ""
  }

  function clearFormElements() {
    var elemArea = document.getElementById('elementArea')
    elemArea.innerHTML = "";
  }

  function captureFormData () {
    console.log("captureFormData")
    console.log(formIds)
    // not getting here
  }

  
  function generateFormElements() {
    var ugly = document.getElementById('jsonTextArea').value
    if ( ugly.length === 0 )
    {
      console.log("Blank jsonTextArea")
      return;
    }
    var obj = JSON.parse(ugly)

    clearFormElements();
    var elemArea = document.getElementById('elementArea')

    for ( var item in obj ) {
      if ( obj[item].tag === "input" )
      {
        var tmpId = uniqueID()
        var inputStr = "<div class=\"row\">"
        + "<div class=\"col text-right\">"
        + "<label>" + obj[item].human_label + "</label></div>"
        + "<div class=\"col text-left\">"
        + "<input type=" + obj[item].type +" name=" 
        + obj[item].name + " id=" + tmpId
        +"></input></div></div>"
        elemArea.innerHTML += inputStr
      }
    }

    inputStr = "<button onClick=" + {captureFormData}
    + " class=\"btn btn-primary\">Capture Form Data</button>"
    elemArea.innerHTML += inputStr


    /*
     As a design issue this might be better with a FormItem type,
     and pass the elements through and assemble each div inside that type
     and return it. For the purpose of this problem, it just seemed to 
     complicate matters. 
     */

  }

  return (
    <div className="App">
      <div>
      This is a sample application to display form elements
      </div>
      <div>
      Input the JSON in this textarea, 
      or use the default values button below
      </div>
      <textarea id="jsonTextArea" cols="80" rows="20"  />
      <div class="buttonArea">
        <button onClick={prettyPrint} class="btn btn-outline-primary">Pretty Print</button>
        <button onClick={defaultValues} class="btn btn-outline-secondary">Fill Default Values</button>
        <button onClick={clearValues} class="btn btn-outline-info">Clear Values</button>
        <br />
        <button onClick={generateFormElements} class="btn btn-primary">Generate Form Elements</button>
        <button onClick={clearFormElements} class="btn btn-secondary">Clear Form Elements</button>
      </div>
      <div id="elementArea"> </div>
    </div>
  );

}

export default App;