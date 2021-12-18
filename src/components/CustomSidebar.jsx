import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Profile from './Profile'

const useStyles = makeStyles ((theme) => ({
    root: {

    },

}))

function CustomSidebar() {
    return (
        <div>
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default CustomSidebar
