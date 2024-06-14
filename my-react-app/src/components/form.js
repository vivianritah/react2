import { useState } from 'react';

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setcomment] = useState("");
  console.log(lastName, firstName, email, password,comment);
  return (
    <form onSubmit={() =>alert(firstName, lastName, email, password, comment)}>
      <label>Enter your First name:
        <input  type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
      </label>
      <label>Enter your Last name:
        <input  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
      </label>
      <label> Enter your Email:
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label> Enter your Password:
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label> Enter your comment:
        <input type='text' value={comment} onChange={(e) => setcomment(e.target.value)} />
      </label>
      

    </form>
  ) 
}

export default MyForm;
