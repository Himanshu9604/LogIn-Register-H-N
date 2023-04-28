import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { myAtom } from '../Atom/Atom'

function Register() {
  const [name, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)
  const [number, setNumber] = useState(0)

  // let [arr, setArr] = useState(JSON.parse(localStorage.getItem('data')) || [])  // json.parse -convert stringify into object

  let [arr,setArr]=useRecoilState(myAtom);

    let register=JSON.parse(localStorage.getItem('userData'));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submited');
    let newData = [...arr, { firstName: name, surname: lastname, Emailid: email, password: password, MobileNumber: number }]
    setArr(newData)     //assign values in array
    localStorage.setItem('userData', JSON.stringify(newData))   //convert object  into string
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setNumber('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type='text' value={name} onChange={(e) => setFirstName(e.target.value)} required='required' >
          </input>
          <label>Last Name</label>
          <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} >
          </input>
          <label>Emai</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} >
          </input>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} >
          </input>
          <label>Number</label>
          <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} >
          </input>
          <button>Register</button>
          {arr.map((data, index) => {
            return <>
              <div key={index}>{data.firstName}</div>
            </>
          })}
        </div>
      </form>
    </div>
  )
}

export default Register