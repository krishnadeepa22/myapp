import React, {useState} from 'react'

function Form() {
    const [name, setName]= useState("deepa"); 
    const [email,setEmail]=useState("deepa@gmail.com");
    const [usn, setUsn]=useState("4mk19cs012");
    const [phone, setPhone]=useState('80883215');
    const [branch, setBranch]=useState("cse");
    const [sem, setSem]=useState ("7")


    const handleSubmit= (e) => {
      e.preventDefault();
      //console.log("inside");

      const data= {
        name: name,
        email: email,
        phone: phone,
        usn: usn,
        branch: branch,
        sem: sem
      }

      console.log(data);
    };

   
    
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" value={name} placeholder="Student name" onChange={(e)=> setName(e.target.value)}></input>
            <br></br><br></br>
            
              <input type="email" value={email} placeholder="Student email" onChange={(e)=> setEmail(e.target.value)}></input>
              <br></br><br></br>

              <input type="usn" value={usn} placeholder="Student usn" onChange={(e)=> setUsn(e.target.value)}></input>
              <br></br><br></br>

              <input type="number" value={phone} placeholder="Student phone" onChange={(e)=> setPhone(e.target.value)}></input>
              <br></br><br></br>

              <input type="text" value={branch} placeholder="Student branch" onChange={(e)=> setBranch(e.target.value)}></input>
              <br></br><br></br>

              <input type="number" value={sem} placeholder="Student sem" onChange={(e)=> setSem(e.target.value)}></input>
              <br></br><br></br>



              <button type="submit" >Submit</button>

           

              
            </form>
            
            </div>
  );
}

export default Form