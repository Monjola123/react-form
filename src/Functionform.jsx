import React, { useState } from "react"; function FunctionForm() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const handleChange =(e)=>{
    setName(e.target.value);
    }
    const handleEmailChange =(e)=>{ setEmail(e.target.value);}
     const handlePasswordChange =(e)=>{setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
    alert('A form was submitted with Name :"' + name +'" and Email :"' + email + '"');
    e.preventDefault();
    }
    return (
    <div className="App">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h1> FUNCTIONFORM </h1>
    <label>
    Name:
    </label><br/>
    <input type="text" value={name} required onChange={(e)=> {handleChange (e)}} /><br/>
<label>
 Email:
</label><br/>
<input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
<label>
Password:
</label><br/>
<input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><br/>
<button input type="submit"> SUBMIT</button>
</form>
</div>
);
    }

    export default FunctionForm;