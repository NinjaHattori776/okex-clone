import React from 'react';
import './bottomBanner.css';

const BottomBanner = () => {
    return (
        <>
            <div className='main_bottom'>
                <div className='main_heading'>
                    <h2>The industry leader in cryptocurrency trading
                        <br /> instruments and pairs for traders around the world
                    </h2>
                    <p>With over 20 million traders in more than 200 countries, we are the most trusted cryptocurrency marketplace in the world to buy BTC, ETH, USDT, XRP and <br /> many more digital assets.</p>
                </div>
                <div class="row">
                    <div className="column">
                        <h2>200+</h2>
                        <p>Countries</p>
                    </div>
                    <div className="column">
                        <h2>20 million+</h2>
                        <p>Traders</p>
                    </div>
                    <div className="column">
                        <h2>400+</h2>
                        <p>Trading pairs</p>
                    </div>
                    <div className="column">
                        <h2>24/7</h2>
                        <p>Online support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomBanner;
