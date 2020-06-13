<h1>React-Daily</h1>
<h3>Installation Parts</h3>
<ul>
  <li>Install the react globally:npm install -g create-react-app</li>
  <li>Create App:create-react-app app-name</li>
  <li>Now you have created app.</li>
  </ul>

<h3>Day 1:</h3>
  <ul>
    <li>->Installation</li>
    <li>->While running the project, react run index.js then app.js then index.html</li>
    <li>->React is more popular because of the components</li>
    <li>->Components can be create through the function and class based</li>
    <li>->Create component using function</li>
    <li>->first import the react(import React from 'react')</li>
    <li>->create function(function Firstday(){return()})</li>
    <li>->we must export the function(export default Firstday())</li>
    --------------------------------------------------------
    <li><b>Note:Function name and export name must be the same and the first character must be capital.Component name need not to be same</b></li>
    <li>Now the function is export</li>
    <li>this component is child class which include the JSX</li>
    <li>APP.JS is the Parent Component so to display the jsx in browser we have import the component file in App.js</li>
    <li>import component name which has been export i.e. Firstday from the file path(Import Firstday from './components/firstday.js')</li>
  <li>Render Component using JSX</li>
    <li><b>JSX IS ALMOST SIMILAR TO HTML.MAIN DIFF IS WE CANNOT USE SOME HTML ATTRIBUTE SUCH AS CLASS ,FOR IN JSX DIRECTLY BEACUSE THEY ARE THE PART OF JS.INSTEAD OF THOSE ATTRIBUTE WE CAN USE className,htmlFor</b></li>
    <b>We can also return the view without using  JSX.In the place of jsx we have can use javascript attributes createElement()which have three parameters first is tage name,,second is attributes name and the last is value(React.createElement('div','{id:subash,class:thapa}','Hello world'))</b>
    <b>AT a time only one elements can be render so we have to wrap all the elements into <div> </div></b>
  </ul>
  <ul>
  <li><b>ClassBased</b></li>
  <li>Import React,{Component} from 'react';</li>
  <li>class classname extends Component</li>
  <li>NOW render(){return();}</li>
  </ul>
  <h3>Day 2</h3>
  <ul>
  <li><b>PROPS AND STATES</b></li>
  </ul>
