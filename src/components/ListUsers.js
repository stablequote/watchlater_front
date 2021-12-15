import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from '@material-ui/core';

function FetchingData() {

  const [user, setUser] = useState([]);
  // const [link, setLink] = useState([]);

  // useEffect(() => {
  //   const url = 'http://localhost:5000/users';
  //   // const url = 'https://jsonplaceholder.typicode.com/users';
  //   axios.get(url)
  //   .then(res => {
  //     console.log(res)
  //     setUser(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, []);


  // useEffect(() => {
  //   const url = 'http://localhost:5000/user/links';
  //   // const url = 'https://jsonplaceholder.typicode.com/users';
  //   const interval = setInterval(() => {
  //     axios.get(url)
  //     .then(res => {
  //       console.log(res)
  //       setLink(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   }, 8000);
  //   return () => clearInterval(interval)
  // }, []);


  function handleClick(e) {
    e.preventDefault();
    const res = axios.get('http://localhost:5000/users').then((res) => setUser(res.data))
    console.log(res.data)
}

  return (
    <div>

      <h2>Listing users from DB</h2>
      <form method="GET">
        <Button color="primary" variant="contained" onClick={handleClick}>Get Info</Button>
      </form>
      <ul>
        {user.map(user => (
          <li key={user._id}>{user.title}</li>
        ))}
      </ul>

      {/* <h2>Links coming from DB</h2>
      <ul>
        {link.map(link => (
          <li key={link._id}><a href={link.link}>{link.link}</a></li>
        ))}
      </ul> */}
    </div>
  )
}

export default FetchingData
