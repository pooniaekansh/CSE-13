import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'


function App() {
return (
<>
<h2>Student Information</h2>
<Student name="Raj" course="B.tech" marks="90" />
<Student name="Ram" course="M.tech" marks="95" />
<Student name="Rohan" course="MCA" marks="99" />
</>
)
}




{/*

function App() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function showData() {
if(name === "" || email === "" || password === ""){
alert("Please Fill All Fields")
}
else{
alert("Registered Successfully")
}
}
return (
<>
<h2>Registration Form</h2>
<input type="text" placeholder="Enter Your Name"
onChange={(e)=>setName(e.target.value)} /> <br /><br />
<input type="email"placeholder="Enter Your Email"
onChange={(e) => setEmail(e.target.value)} /><br /><br
/>
<input type="password"placeholder="Enter Your Password"
onChange={(e) => setPassword(e.target.value)} /><br
/><br />
<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Password: {password}</p>
<button onClick={showData}>
Submit
</button>
</>
)
}
*/}


{/*
  
function App() {
const [count, setCount] = useState(0)
const increment = () => {
setCount(count + 1)
}
const decrement = () => {
setCount(count - 1)
}
const reset = () => {
setCount(0)
}
return (
<>
<h2>React Counter Application</h2>
<h2>{count}</h2>
<button onClick={increment}>Increment</button>
<br /><br />
<button onClick={decrement}>Decrement</button>
<br /><br />
<button onClick={reset}>Reset</button>
</>
)
}
*/}



  {/*}
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")
  */}

  {/*const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
*/}

{/*
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <input type="text" placeholder="Enter your name" /><br/>
      <input type="email" placeholder="Enter your email" /><br/>
      <input type="password" placeholder="Enter your password" /><br/>
      <button>Submit</button>
    */}


    {/*<h2>React Counter Application</h2>
    <h2>{count}</h2>
    <button onClick={increment}>Increment</button><br/>
    <button onClick={decrement}>Decrement</button><br/>
    <button onClick={reset}>Reset</button><br/>
*/}



    {/*<h2>Student Information</h2>
    <div className="Student-info">
      <p>Name: John Doe</p>
      <p>Age: 20</p>
      <p>Major: Computer Science</p>
    </div>
    */}
    {/*
    <div></div>
    <p>Welcome to my webpage</p>
    <p>hello</p>
    <h2>CSE-13</h2>
    <img src="https://images.pexels.com/photos/18699398/pexels-photo-18699398.jpeg" width="800" height="1200" ></img>
    <iframe src="https://www.youtube.com/embed/lJZ8wWCnwow?si=caZC6rAPQYXTeCis" allowFullScreen width="600" height="400"></iframe>
    <button>Click me</button>
    </div>
    */}
    

  



export default App
