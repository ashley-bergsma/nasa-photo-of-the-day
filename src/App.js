import './App.css';
import React, { useState, useEffect } from 'react' ;
import axios from 'axios';
import { BASE_URL } from './base_constants/index';

export default function App() {
    const [nasa, setNasa] = useState([]); 

//     useEffect(() => {
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=DmqHDWfkfTBQlUPcUQrjqRxiaJSrhaRKRjacfKDV')
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//     })
// }, [])

return null;
}