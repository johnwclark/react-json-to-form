//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// loading json data from file
import myData from './input.json';

import React from 'react';
import { Button } from 'react-bootstrap';

function App() {

  var dataStr = JSON.stringify(myData);

  function prettyPrint() {
    var ugly = document.getElementById('jsonTextArea').value
    var obj = JSON.parse(ugly)
    var pretty = JSON.stringify(obj, undefined, 4)
    document.getElementById('jsonTextArea').value = pretty
  }

  function defaultValues() {
    document.getElementById('jsonTextArea').innerHTML = dataStr
    prettyPrint()
  }

  function clearFormElements() {
    var elemArea = document.getElementById('elementArea')
    elemArea.innerHTML = "";
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
        var inputStr = "<div><label>" + obj[item].human_label + "</label>" 
        + "<input type=" + obj[item].type +" name=" 
        + obj[item].name +"></input></div>"
        elemArea.innerHTML += inputStr
      }
    }

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
      <textarea id="jsonTextArea" cols="50" rows="20" />
      <button onClick={prettyPrint} class="btn btn-primary">Pretty Print</button>
      <button onClick={defaultValues} class="btn btn-secondary">Use Default Values</button>
      <br />
      <button onClick={generateFormElements} class="btn btn-success">Generate Form Elements</button>
      <button onClick={clearFormElements} class="btn btn-danger">Clear Form Elements</button>
      <br />
      <div id="elementArea"> </div>
    </div>
  );

}

export default App;