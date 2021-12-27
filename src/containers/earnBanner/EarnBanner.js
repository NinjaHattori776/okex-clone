import React from 'react';
import './earnBanner.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const EarnBanner = () => {
    return (
        <>
            <div className='main_bg'>
                <h4>Ready to start trading cryptocurrency?
                </h4>
                <h1>New users can earn up to <span>$30 </span> in crypto rewards</h1>
                <center>
                    <TextField
                        label="Email/Phone"
                        id="outlined-size-small"
                        size="small"
                    />                <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </center>
                <p>Already have an account?       <a>Sign in</a></p>
            </div>
        </>
    )
}

export default EarnBanner;
