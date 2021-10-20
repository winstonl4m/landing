import React,{useState} from 'react'
import './ContactForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sentEmail, setSentEmail] = useState(false);
    const [status, setStatus] = useState("Submit");


    const handleSubmit = async (event) => {
      event.preventDefault();

        let detail = {  
            email: email,
            name: name,
            message : message,
        }
        console.log(detail);

        let response = await fetch("https://boiling-meadow-00556.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(detail),
            });
        setStatus("Thanks for the message!");
        setSentEmail(true);
        resetForm()
        let result = await response.json();
        alert(result.status);    
    }
    





    const resetForm = () =>{
        setEmail('');
        setMessage('');
        setName('');
    }


    return (
        <form className="form" id="contact" onSubmit={handleSubmit}>
            <div className="form__container">
            <h1>Contact Me!</h1>
            <br></br>
            <br></br>
                <div className="form__contact">
                <TextField 
                    required = {true}
                    fullWidth
                    helperText="Please enter your email" 
                    label="Email"
                    id="standard-basic"
                    variant="standard"
                    value = {email}
                    onChange= {(event) => setEmail(event.target.value)}
                    />
                <TextField 
                    required = {true}
                    fullWidth
                    helperText="Please enter your name" 
                    label="Name"
                    id="standard-basic"
                    variant="standard"
                    value = {name}
                    onChange= {(event) => setName(event.target.value)}/>
                <TextField 
                    multiline 
                    fullWidth
                    required = {true}
                    rows={4} 
                    id="standard-multiline-static" 
                    helperText="Please enter your message" 
                    label="Message"
                    variant="standard"
                    value = {message}
                    onChange= {(event) => setMessage(event.target.value)}/>
                <Button type='submit'  variant= "contained" color={sentEmail ? "success": "primary"} >{status}</Button>
                </div>
            </div>
        </form>

    )
}

export default ContactForm
