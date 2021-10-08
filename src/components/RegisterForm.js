import React from "react";

const RegisterForm=()=>{
  return(
    <>
      <form className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="example-name=Andres"/>
        </div>
        <div>
          <label htmlFor="lastname">LastName</label>
          <input type="text" id="lastname" name="lastname" placeholder="example-lastname=Bravo"/>
        </div>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" name="username" placeholder="example-user=Andres-Bravo"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" placeholder="example-password=123aaA/*"/>
        </div>
        <div>
          <label htmlFor="repeat-password">RepeatPassword</label>
          <input type="text" id="repeat-password" name="repeat-password" placeholder="repeat-password=123aaA/*"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="example-email=andres.bravo@gmail.com"/>
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" id="ID" name="id" placeholder="example-id=514232261a"/>
        </div>


      </form>
    
    </>
 
     );
 }

  export default RegisterForm;
  

