import React from 'react'
import './footer.css';

const Footer = () => {
    return (
       <>
           <footer className="footer">
        <div className="container_footer">
          <div className="row_footer">
            <div className="footer-col">
              <h4><img src="https://static.okex.com/cdn/assets/imgs/212/E197F77FDB5033C5.png" />
              </h4>
              <ul>
                <li>
                  +1 226 798 4487<br />
                  support@okex.com
                </li>
                <li>©2021 OKEX.COM</li>
                <li />
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Dropdown
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About </h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Room</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal and privacy </h4>
              <ul>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Disclosures</a></li>
                <li><a href="#">Whistleblower notice</a></li>
                <li><a href="#">Law enforcement</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service</h4>
              <ul>
                <li><a href="#">API</a></li>
                <li><a href="#">V5 API</a></li>
                <li><a href="#">Historical Market Data</a></li>
                <li><a href="#">Fee schedule </a></li>
                <li><a href="#">Token listing </a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support </h4>
              <ul>
                <li><a href="#">Support center</a></li>
                <li><a href="#">Channel verification</a></li>
                <li><a href="#">Announcement</a></li>
                <li><a href="#">Community</a></li>
              </ul>
              <div className="social-links">
                <a href="#"><i className="fab fa-telegram-plane" /></a>&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fab fa-line" /></a>&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fab fa-twitter" /></a>&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fab fa-facebook-f" /></a>&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fab fa-reddit-alien" /></a>&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fab fa-weibo" /></a>&nbsp;&nbsp;&nbsp;
                <br/>
                <a href="#"><i className="fab fa-medium-m" /></a>&nbsp;&nbsp;
                <a href="#"><i className="fas fa-ellipsis-h" /></a>
              </div>
            </div>
          </div>
          <div className="nav-bar" />
          <div className='last_footer'> 
          <p>
            Links: &nbsp;&nbsp;&nbsp;
            <a href>Bitcoin</a>
            <a href>Bitcoin Exchange</a>
            <a href>Bitcoin Price</a>
            <a href>Bitcoin Wallet </a>
            <a href>BTC Exchange</a>
            <a href>BTC to INR </a>
            <a href>Buy Bitcoin </a>
            <a href>Buy Crypto </a>
            <a href>Buy Cryptocurrency </a>
            <a href>Buy Ethereum</a>
            <a href>Buy Litecoin(LTC)</a>
            <a href>Cryptocurrency News</a>
            <a href>Ethereum Price</a>
            <a href>Free Bitcoin</a>
            <a href>Futures Trading</a>
            <a href>Limit Order</a>
            <a href>Options Trading</a>
            <a href>Ripple</a>
            <a href>Stop Limit Order</a>
            <a href>What is Bitcoin</a>
            <a href>What is Blockchain</a>
            <a href>What is Cryptocurrency</a>
            <a href>Cryptocurrency List</a>
          </p>
          </div>
        </div>
      </footer>
       </>
    )
}

export default Footer;
