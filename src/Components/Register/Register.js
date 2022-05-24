import React,{useState} from 'react';
import './Register.css';
import axios from 'axios';

const Register = () =>{
    let [email,setEmail] = useState("");
    let [passwod,setPassword] = useState("");

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const passwordHandle = (event) =>{
        setPassword(event.target.value)
    }
    let [form,setForm] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        contact : "",
        city : "",
        experience : "",
        average_rate_per_stitching:"",
        address : "",
        lang : "",
        lat : ""
    });

    const handleText = (event) =>{
        const {name,value} = event.target;
        setForm({...form , [name] : value})
        
      }
    const handleRate = (event) =>{
        setForm({...form , average_rate_per_stitching : parseInt(event.target.value)})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(form)
        const link = "http://localhost:8080/api/tailor/signup"
        axios.post(link,
            {
                first_name : form.first_name,
                last_name : form.last_name,
                email : form.email,
                password : form.password,
                contact : form.contact,
                city : form.city,
                experience : form.experience,
                average_rate_per_stitching : form.average_rate_per_stitching,
                address : form.address,
                lang : form.lang,
                lat : form.lat
            })
            .then((res) => {
                console.log(res.data)
                if (res.data.success) { 
                    console.log("Alhamdulillah")
                    window.location = "/"
                }
                else {
                    
                }
            })
        
    }

    return(
        <>
          <div className="float-container">

            <div className="float-child">
            <div >
                <p className='mainHeading'>Gulaan</p>
            </div>
            </div>

            <div className="float-child">
               <div className='loginForm'>
                   <p>Register</p>
                   <form>
                       <label>First Name</label>
                       <input type="text" name="first_name" onChange={handleText}></input>
                       <label >Last Name</label>
                       <input type="text" name="last_name" onChange={handleText}></input>
                       <label>Email</label>
                       <input type="text" style={{marginLeft : '8%'}} name="email" onChange={handleText}></input>
                       <br></br>
                       <label>Password</label>
                       <input type="password" style={{marginLeft : '4%'}} name="password" onChange={handleText}></input>
                       <label>Contact</label>
                       <input type="text" style={{marginLeft : '6%'}} name="contact" onChange={handleText}></input>
                       <label>City</label>
                       <input type="text" style={{marginLeft : '10%'}} name="city" onChange={handleText}></input>
                       <label>Experience</label>
                       <input type="text" style={{marginLeft : '4%'}} name="experience" onChange={handleText}></input>
                       <label>Address</label>
                       <input type="text" style={{marginLeft : '6%'}} name="address" onChange={handleText}></input>
                       <label>Rate</label>
                       <input style={{marginLeft : '9%'}} name="average_rate_per_stitch" onChange={handleRate}></input>
                       <label>Long</label>
                       <input type="text" style={{marginLeft : '9%'}} name="lang" onChange={handleText}></input>
                       <label>Late</label>
                       <input type="text" style={{marginLeft : '10%'}} name="lat" onChange={handleText}></input>
                       <button onClick={submitHandler}>Register</button>
                       
                   </form>
                   <a href="/">Login</a>
               </div>
            </div>

          </div>
        </>
    )
}

export default Register;