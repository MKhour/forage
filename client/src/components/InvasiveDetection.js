import React from "react";  
import Header from './Header';
import data from './USRIISv2Cleaned.json';

const InvasiveDetection = () => {
    console.log("in InvasiveDetection");
    console.log(data);

    return (
        <div className="App">
            <Header />
        </div>

    );
};

export default InvasiveDetection;
