import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Input, TextField } from '@material-ui/core';

function CreateUser () {
    const [input, setInput] = useState({
        title:  '',
        content: ''
    })

    function handleChange(e) {
        console.log(e.target.value);
        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        alert(`From submitted`)
        const newUser = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:5000/users', newUser)
        console.log(newUser)
    }

    return(
        <div>
            <h1>Post Data</h1>
            <form>
                <div>
                    <Input 
                    type="text" 
                    name="title" 
                    placeholder="Add Title"
                    onChange={handleChange}
                    value={input.value}
                    margin="dense"
                    />
                </div>
                <div>
                <TextField 
                name="content" 
                placeholder="Content placeholder" 
                onChange={handleChange}
                value={input.value}
                >
                </TextField>
                </div>

                <Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>
            </form>
        </div>
    )
}

export default CreateUser;