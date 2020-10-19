import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Quotebox} from './Components/Quotebox.js'

function App() {
    const [color, setColor] = useState([
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ]);
    
    const [wrapperclass, setWrapperclass] = useState('wrapper')
    var [colornow , setColornow] = useState(0)
    const mystyle = {
        backgroundColor: color[colornow],
        color: color[colornow]
        };
    
    function colorchange() {
        if(colornow >= color.length) {
            colornow = 0
        } 
        setWrapperclass('wrapperClass')
        setTimeout(function(){
            setWrapperclass('wrapper')
            setColornow(colornow+1)

        },10)
    }

    return (<>
        <div className={wrapperclass} style={mystyle}>
            <Quotebox color={color[colornow]} colorchange={colorchange} ></Quotebox>
        </div></>
    );
}

export default App;
