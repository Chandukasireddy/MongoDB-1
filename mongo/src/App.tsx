import React, { useState } from 'react';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  place: string;
  query: string;
}

function App() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    place: '',
    query: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('/api/queries', values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Submit a Query</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={values.place}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="query">Query:</label>
        <textarea
          id="query"
          name="query"
          rows={5}
          cols={30}
          value={values.query}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;