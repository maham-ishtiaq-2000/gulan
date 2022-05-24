import React,{useState} from 'react';

const UpdateProfile = () =>{
    var axios = require('axios');
    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
    let [email,setEmail] = useState("");
    let [passwod,setPassword] = useState("");
    let [details,setDetails] = useState([]);
    

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
        console.log("Alhamdulillah ! I am pressed")
        console.log(form)
        var config = {
            method: 'put',
            url: 'http://localhost:8080/api/tailor/update_detils/'+userJson,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : form
          };
          
          axios(config)
          .then(function (response) {
            setDetails(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }
        console.log(details)
 
  

    return(
        <div className="float-container">

            
            <div className="float-child"  style={{marginLeft : '26%'}}>
               <div className='loginForm'>
                   <p>My Profile</p>
                   <form>
                       <label>First Name</label>
                       <input type="text" name="first_name" onChange={handleText}  style={{fontWeight : 'lighter'}} placeholder={details.first_name}></input>
                       <label >Last Name</label>
                       <input type="text" name="last_name" onChange={handleText}style={{fontWeight : 'lighter'}}></input>
                       <br></br>
                       <label>Password</label>
                       <input type="password" style={{marginLeft : '4%'}} name="password" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <label>Contact</label>
                       <input type="text" style={{marginLeft : '6%'}} name="contact" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <label>City</label>
                       <input type="text" style={{marginLeft : '10%'}} name="city" onChange={handleText} style={{fontWeight : 'lighter'}}></input>
                       <label>Experience</label>
                       <input type="text" style={{marginLeft : '4%'}} name="experience" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <label>Address</label>
                       <input type="text" style={{marginLeft : '6%'}} name="address" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <label>Rate</label>
                       <input style={{marginLeft : '9%'}} name="average_rate_per_stitch" onChange={handleRate}  style={{fontWeight : 'lighter'}}></input>
                       <label>Long</label>
                       <input type="text" style={{marginLeft : '9%'}} name="lang" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <label>Late</label>
                       <input type="text" style={{marginLeft : '10%'}} name="lat" onChange={handleText}  style={{fontWeight : 'lighter'}}></input>
                       <button onClick={submitHandler}>Update</button>
                       
                   </form>
                   
               </div>
            </div>

          </div>
    )
}

export default UpdateProfile;