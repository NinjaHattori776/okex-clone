import React from 'react';
import './cardsBanner.css';

const cardsBanner = () => {
    return (
       <>
           <h1>Learn about CryptoCurrency and BlockChain</h1>
           <div class="row_cards">
                    <div className="column_cards">
                    <img src='https://static.okex.com/cdn/assets/imgs/2111/D71454C2DD9DB370.png'/>
                    <p>How to buy and sell cryptocurrency on OKEx</p>
                    </div>
                    <div className="column_cards">
                    <img src='https://static.okex.com/cdn/assets/imgs/2111/AE588CA01A1EC655.png'/>
                        <p>Start Trading cryptocurrency on OKEx</p>
                    </div>
                    <div className="column_cards">
                    <img src='https://static.okex.com/cdn/assets/imgs/2111/8362BB2E7FDB9449.png'/>
                        <p>Use your crypto assets to earn passive income on OKEx</p>
                    </div>
                </div>
       </>
    )
}

export default cardsBanner;
