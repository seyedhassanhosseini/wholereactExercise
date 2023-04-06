import React, {useState} from 'react'

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    isAccepted: false
  });

  const handler = (event:any) => {
    setData({...data,[event.target.name] : event.target.value})
  };

  console.log(data)



  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input type='text' name="name" value={data.name}  onChange={handler}/>
        </div>
        <div>
          <label>Email</label>
          <input type='email' name="email" value={data.email} onChange={handler}/>
        </div>
        <div>
          <label>Password</label>
          <input type='password' name="password" value={data.password} onChange={handler}/>
        </div>
        <div>
          <label>Policy</label>
          <input type='checkbox' name="isAccepted" value={data.password} onChange={handler}/>
        </div>
        <div>
           <a href="#"> Login </a>
           <button type='submit'> Sign Up</button>
        </div>
      </form>
      
    </div>
  )
}

export default SignIn
