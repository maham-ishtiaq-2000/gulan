import React,{useState} from 'react';
import './Login.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Login = () =>{
    let person = localStorage.getItem("person");
    console.log(person)
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    
    if(person === "tailor"){
        console.log("ok i am going to login as a tailor")
    }
    else{
        console.log("ok i am going to login as a customer")
    }
    let [form,setForm] = useState({
        email : "",
        password : "",
    });

    const handleText = (event) =>{
        const {name,value} = event.target;
        setForm({...form , [name] : value})
        console.log(form)
      }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("i am clicked , Alhamduliilah")
        console.log(form)
        let link;
        if(person === "tailor"){
            link = "http://localhost:8080/api/tailor/login"
        }
        else{
            link = "http://localhost:8080/api/user/login"
        }
        
        axios.post(link,
            {
                email : form.email,
                password : form.password,
            })
            .then((res) => {
                
                if (res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.data._id));
                    console.log("Alhamdulillah")
                    if(person == "tailor"){
                        window.location = "/allPostsTailor"
                    }
                    else{
                        window.location="/allPostsCustomer"
                    }
                    
                }
                else {
                    alert("Email or password is incorrect")
                }
            })
        
    }

    let registerLink;
    if(person == "tailor"){
        registerLink = "/register"
    }
    else{
        registerLink = "/registerCustomer"
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
                   <p>Login</p>
                   <form>
                       <label >Email</label>
                       <input type="text" style={{marginLeft : '8%'}} name="email" onChange={handleText}></input>
                       <br></br>
                       <label>Password</label>
                       <input type="password" name="password" onChange={handleText}></input>
                       <button onClick={submitHandler}>Login</button>
                   </form>
                   
                   <NavLink className="links" to={registerLink}>Create an Account</NavLink>
               </div>
            </div>

          </div>
        </>
    )
}

export default Login;