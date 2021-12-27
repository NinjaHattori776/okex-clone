import React from 'react';
import './chart.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {
    return (
        <div>

        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='roundBar'>
            <div className='roundBar2'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                            <Tab label="Popular assets" {...a11yProps(0)} />
                            <Tab label="New assets" {...a11yProps(1)} />
                            <Tab label="Gains ranking" {...a11yProps(2)} />
                            <Tab label="Turnover ranking" {...a11yProps(3)} />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>

                        <div class="container">
                            <div class="table">
                                <div class="table-header">
                                    <div class="header__item asset"><a id="name" class="filter__link" href="#">Asset</a></div>
                                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#" style={{ alignSelf: 'flex-end' }}>Last price
                                    </a></div>
                                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Today's change
                                    </a></div>
                                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Chart</a></div>
                                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Trade</a></div>
                                </div>
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data asset_data"><img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/btc.png?x-oss-process=image/format,webp" width="24" height="24" />&nbsp;<b> BTC </b> &nbsp;<span>Bitcoin</span></div>
                                        <div class="table-data">
                                            <h4 style={{ fontSize: 16, fontWeight: 500 }}>$48,084.90 </h4>
                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "green", fontWeight: 500 }}>+0.03%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>

                                    <div class="table-row">
                                        <div class="table-data asset_data">
                                            <img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/eth.png" width="24" height="24" />&nbsp;<b> ETH </b> &nbsp;<span>Ethereum</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>$3,954.54
                                        </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "red", fontWeight: 500 }}>-0.07%</h5>
                                        </div>
                                        <div class="table-data">
                                            <ResponsiveContainer width="50%" height="100%" >
                                                <LineChart width={300} height={100} data={data}>
                                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data asset_data"><img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/okb.png" width="24" height="24" />&nbsp;<b> OKB </b> &nbsp;<span> OKB</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>$31.04 </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "red", fontWeight: 500 }}>-1.51%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data asset_data"><img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/okt.png" width="24" height="24" />&nbsp;<b> OKT </b> &nbsp;<span>OEC Token</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>$45.85 </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "red", fontWeight: 500 }}>-1.56%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data asset_data"><img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/ltc.png" width="24" height="24" />&nbsp;<b> LTC </b> &nbsp;<span>Litecoin</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>$168.34 </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "green", fontWeight: 500, fontFamily: "SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;" }}>+0.13%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data asset_data">
                                            <img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/dot.png" width="24" height="24" />&nbsp;<b> DOT </b> &nbsp;<span>Polkadot</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>28.24 </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "red", fontWeight: 500 }}>-1.21%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data asset_data">
                                            <img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/ada.png" width="24" height="24" />&nbsp;<b> ADA </b> &nbsp;<span>Cardano</span></div>
                                        <div class="table-data">                                <h4 style={{ fontSize: 16, fontWeight: 500 }}>$1.43 </h4>

                                        </div>
                                        <div class="table-data"><h5 style={{ fontSize: 16, color: "red", fontWeight: 500 }}>-2.82%</h5>
                                        </div>
                                        <div class="table-data">     <ResponsiveContainer width="50%" height="100%" >
                                            <LineChart width={300} height={100} data={data}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer></div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>            </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div class="container">
                            <div class="table">
                                <div class="table-header">
                                    <div class="header__item"><a id="name" class="filter__link" href="#">Asset</a></div>
                                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Last price
                                    </a></div>
                                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Today's change
                                    </a></div>
                                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Chart</a></div>
                                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Trade</a></div>
                                </div>
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data"><img src="https://static.okex.com/cdn/oksupport/asset/currency/icon/btc.png?x-oss-process=image/format,webp" width="24" height="24" /><b> BTC </b> <span>Bitcoin</span></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div class="container">
                            <div class="table">
                                <div class="table-header">
                                    <div class="header__item"><a id="name" class="filter__link" href="#">Asset</a></div>
                                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Last price
                                    </a></div>
                                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Today's change
                                    </a></div>
                                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Chart</a></div>
                                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Trade</a></div>
                                </div>
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div class="container">
                            <div class="table">
                                <div class="table-header">
                                    <div class="header__item"><a id="name" class="filter__link" href="#">Asset</a></div>
                                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Last price
                                    </a></div>
                                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Today's change
                                    </a></div>
                                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Chart</a></div>
                                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Trade</a></div>
                                </div>
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>              </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div class="container">
                            <div class="table">
                                <div class="table-header">
                                    <div class="header__item"><a id="name" class="filter__link" href="#">Asset</a></div>
                                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Last price
                                    </a></div>
                                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Today's change
                                    </a></div>
                                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Chart</a></div>
                                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Trade</a></div>
                                </div>
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data"><b>BTC</b></div>
                                        <div class="table-data">$48,084.90
                                        </div>
                                        <div class="table-data">-1.47%
                                        </div>
                                        <div class="table-data">chart</div>
                                        <div class="table-data">
                                            <button class="skewBtn purple">Buy</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>              </TabPanel>
                    <center> <a> View more popular cryptocurrency prices </a> <a>{'>'}</a> </center>

                </Box>
            </div>
        </div>
    );
}

// export default Chart;
