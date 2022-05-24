import React,{useState} from 'react';
import './MainLogin.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MainLogin = () =>{
    let history = useHistory();
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    
    let [form,setForm] = useState({
        email : "",
        password : "",
    });

    const handleText = (event) =>{
        const {name,value} = event.target;
        setForm({...form , [name] : value})
        console.log(form)
      }

      const loginTailor = () =>{
          console.log("login as a tailor Alhamdulillah")
          localStorage.setItem("person", "tailor");
          history.push("/login")
      }

      const loginCustomer = () =>{
          console.log("login as a customer Alhamdulillah")
          localStorage.setItem("person","customer")
          history.push("/login")
      }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("i am clicked , Alhamduliilah")
        console.log(form)
        const link = "http://localhost:8080/api/tailor/login"
        axios.post(link,
            {
                email : form.email,
                password : form.password,
            })
            .then((res) => {
                
                if (res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.data._id));
                    console.log("Alhamdulillah")
                    window.location = "/allPostsTailor"
                }
                else {
                    alert("Email or password is incorrect")
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
               <button className='loginButton text-center' style={{marginTop : '12%' , marginBottom : '3%'}} onClick={loginTailor}>Login As Tailor</button>
               <button className='loginButton text-center' onClick={loginCustomer}>Login As Customer</button>
            </div>

          </div>
        </>
    )
}

export default MainLogin;