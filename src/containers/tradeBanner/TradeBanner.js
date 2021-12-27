import React from 'react';
import './tradeBanner.css';
import Button from '@mui/material/Button';




const TradeBanner = () => {
    return (
        <>
            <div className="wrapper">
                <div id="one">
                    <img src="https://static.okex.com/cdn/assets/imgs/MjAyMDM/A7CCC0A6735C83609C08D586CBD6489B.png" />
                </div>
                <div id="two">
                <div className='content'>
                <h1>Trade on the go</h1>
                <p>A powerful Bitcoin and cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.

</p>

<ul>
<li>View real-time cryptocurrency prices</li>
<li>Buy and sell BTC, ETH, XRP, OKB and other digital assets with ease</li>
<li>Get live price-change alerts for cryptocurrencies you follow</li>
<li>Check BTC spot, futures and options prices</li>
<li>Compare cryptocurrency prices across exchanges</li>
</ul>

<div className="flex social-btns">
  <a className="app-btn blu flex vert" href="http:apple.com">
    <i class="fab fa-apple"></i>
    <p>Available on the <br/> <span class="big-txt">App Store</span></p>
  </a>

  <a className="app-btn blu flex vert" href="http:google.com">
    <i className="fab fa-google-play"></i>
    <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
  </a>
	
	<a className="app-btn blu flex vert" href="http:alphorm.com">
    <i className="fas fa-desktop"></i>
    <p>Application <br/> <span class="big-txt">Desktop</span></p>
  </a>
</div>



<Button>hashir</Button>
<Button>hashir</Button>
<br/>
<a>OKEx API Documentation</a>

                </div>
                
                </div>
            </div>
        </>
    )
}

export default TradeBanner;
