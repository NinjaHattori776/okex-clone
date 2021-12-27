import React from 'react';
import './banner.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const EarnBanner = () => {
    return (
        <>
            <div className='main_bg_banner'>
                <h1>The cryptocurrency exchange<br />
                    with the most options
                </h1>
                <p>OKEx offers a fully customizable Bitcoin and cryptocurrency exchange for traders at every level
                </p>
                <center>
                    <TextField
                        label="Email/Phone"
                        id="outlined-size-small"
                        size="small"
                    />                <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </center>
                <p className="below_p"> Buy $100 or more in crypto on your first order and you'll get up to $10 in free BTC as a reward
                </p>            </div>
        </>
    )
}

export default EarnBanner;
