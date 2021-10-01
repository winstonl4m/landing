import React,{useState} from 'react'
import './ContactForm.css'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function ContactForm() {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };


    return (
        <div className="form" id="contact">
            <h1>Contact Me!</h1>
            <br></br>
            <br></br>
            <div className="form__container">
                <TextField 
                    required = {true}
                    fullWidth
                    helperText="Please enter your email" 
                    label="Email"
                    id="standard-basic"
                    variant="standard"
                    />
                <TextField 
                    required = {true}
                    fullWidth
                    helperText="Please enter your name" 
                    label="Name"
                    id="standard-basic"
                    variant="standard"/>
                <TextField 
                    multiline 
                    fullWidth
                    required = {true}
                    rows={4} 
                    id="standard-multiline-static" 
                    helperText="Please enter your message" 
                    label="Message"
                    variant="standard"/>
                <Button variant="contained">Submit</Button>
            </div>
        </div>

    )
}

export default ContactForm
