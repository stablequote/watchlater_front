import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Button, Input, TextField, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    centerText: {
      textAlign: "center"
    },
    spacing: {
      marginBottom: "30px"
    }
}));


function AddLink () {

    const classes = useStyles();

    const [input, setInput] = useState({
        title:  '',
        url: ''
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
        const newLink = {
            title: input.title,
            url: input.url
        }
        axios.post('http://localhost:5000/user/links', newLink)
        console.log(newLink)
    }

    return(
        <div className='container'>
            <form>
                <div>
                    <Input 
                    type="text" 
                    name="title" 
                    placeholder="Add Title"
                    onChange={handleChange}
                    value={input.value}
                    margin="dense"
                    fullWidth
                    
                    />
                </div>
                <div>
                    <TextField 
                    name="url" 
                    placeholder="Content placeholder" 
                    onChange={handleChange}
                    value={input.value}
                    fullWidth
                    >
                    </TextField>
                </div>
                <Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>
            </form>
        </div>
    )
}

export default AddLink;