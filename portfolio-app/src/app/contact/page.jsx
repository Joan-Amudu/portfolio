'use client'
import React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Thank you ${name}. You're message has been submitted successfully! `)
    }
  return (
    <div>
        <h2>Contact Me</h2>
        <p>To contact me and subscribe to this website, please enter your name and email address here. We
            will send updates occasionally.
        </p>
        <form onSubmit={handleSubmit}>
        <TextField
                helperText="Please enter your first name"    
                margin="dense"
                id="name"
                label="Full Name"
                type="text"                
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}                
            />
            <TextField
                autoFocus
                helperText="Please enter your email"
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                required
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}                
            />
            <TextField
                helperText="Please enter your message here"
                margin="dense"
                id="message"
                label="Message"
                type="text"
                multiline
                rows={4}                
                fullWidth
                variant="standard"
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
            />     
      <Button type="submit">Submit</Button>
      
    </form>
    </div>
    
  );
}
// ++ Build a MUI version of your LoginForm component
