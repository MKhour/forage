import React from "react";  
import * as XLSX from "xlsx";
import Header from './Header';

// Ended up not using the file because FileReader requires a file to be uploaded by the user and can't use a file name
const ExcelConvert = () => {
    console.log("in ExcelConvert");

    var file = "../../../USRIISv2.xlsx";
    const reader = new FileReader();
    reader.onload = (event) => { // event = on_file_select event
        /* Parse data */
        console.log("FileReader event loaded");
        const result = event.target.result;
        const wb = XLSX.read(result);
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */
        console.log("Data>>>"+data);
    };
    reader.readAsArrayBuffer(file);

    return (
        <div className="App">
            <Header />
        </div>

    );
};

export default ExcelConvert;
