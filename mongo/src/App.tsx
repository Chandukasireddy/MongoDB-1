import React from 'react';
import logo from './logo.svg';
import './App.css';

javascript
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows="5"
          cols="30"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
