import React from 'react'
import ComingSoon from "react-coming-soon";
import './App.css';
import { AiFillAppstore } from "react-icons/ai";


function Loading() {
    return (
        <div  className="App App-header-coomig">
            <ComingSoon
                style={{margin: '200px', padding: '200px'}}
                bgColor="#282c34"
                textColor="#000"
                >
                <AiFillAppstore width="200" height="200" style={{width: '200px', height: '200px'}}/>        
                </ComingSoon>
        </div>
    )
}

export default Loading
