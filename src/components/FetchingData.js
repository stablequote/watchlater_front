import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchingData() {

  const [user, setUser] = useState([]);
  const [link, setLink] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/users';
    // const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
    .then(res => {
      console.log(res)
      setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);


  useEffect(() => {
    const url = 'http://localhost:5000/user/links';
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const interval = setInterval(() => {
      axios.get(url)
      .then(res => {
        console.log(res)
        setLink(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, 8000);
    return () => clearInterval(interval)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Submitting Name ${user}`)
  }



  return (
    <div>

      <form mathod="POST" onSubmit={handleSubmit}>

        <label htmlFor="name">Username</label>
        <input type="text" id="name" placeholder="username" value={user} onChange={e => setUser(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password" value={user} onChange={e => setUser(e.target.value)}/>

        <button>Get links</button>
      </form>

      <h2>Listing users from DB</h2>
      <ul>
        {user.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <h2>Links coming from DB</h2>
      <ul>
        {link.map(link => (
          <li key={link._id}><a href={link.link}>{link.link}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default FetchingData
