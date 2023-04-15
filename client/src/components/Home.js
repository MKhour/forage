import React from "react";  
import '../styles/App.css';
import '../styles/Home.css';
import { useState } from 'react';
import Header from './Header';
import data from './USRIISv2Cleaned.json';

const Home = () => {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");
  // const [name, setName] = useState("");
  // const [isInvasive, setIsInvasive] = useState(false);
  const [invasiveDetails, setInvasiveDetails] = useState("");

  const handleUpdate = (event) => {
    const input = document.getElementById('pltFile');
    setFileName(URL.createObjectURL(input.files[0]));
    setResult("");
    setInvasiveDetails("");
    // alert(fileName);
  }

  const handleSubmit = (event) => {
    setResult("Loading...");
    setInvasiveDetails("");
    event.preventDefault();
    const input = document.getElementById('pltFile');

    const fd = new FormData()
    fd.append("images", input.files[0], input.files[0].name);
    fd.append("organs", ["auto"]);
    console.log(fd);
    // alert('fetching');
    fetch("https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=2b10gZoCiPfqdoc0OQ9So4f6V", {
    body: fd,
    method: "POST"
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        setResult(result.bestMatch); // {result} of UI updates automatically when it's ready
        // setName(result.results[0].species.scientificNameWithoutAuthor);
        console.log(result.results[0]);
        console.log(result.results[0].species);
        console.log(result.results[0].species.scientificNameWithoutAuthor); // correct
        // console.log(name); // this isn't updated yet due to the method being asynchronous
        // however, after some time and uploading another file, console.log shows this name updates

        // console.log(data);
        // console.log(data.items);
        // console.log(data.items[0].scientificName);
        for(var item in data.items) {
          // console.log(item); // an index number for some reason
          // console.log(item.scientificName); // undefined
          // console.log(data.items[item].scientificName);
          if(data.items[item].scientificName === result.results[0].species.scientificNameWithoutAuthor) {
            console.log(data.items[item].scientificName);
            // setIsInvasive(true);
            setInvasiveDetails("This species is INVASIVE!");
            break;
          }
          // console.log(data.items.length);
          if(item == data.items.length - 1 && data.items[item].scientificName !== result.results[0].species.scientificNameWithoutAuthor) {
            // console.log(item);
            setInvasiveDetails("This species is NOT invasive!");
          }
        }
        // if(invasiveDetails === "") {
        //   setInvasiveDetails("This species is NOT invasive!"); // this doesn't update in time
        // }
    });

    // alert(`The name you entered was: ${input.files[0].name}`)
  }

  return (
    <div className="App">
        <Header />
        <h1>Home</h1>
        <div id="formBox">
          <form onSubmit={handleSubmit} onChange={handleUpdate}>
          <label id="fileLabel">Upload a Picture:
              <input 
                  type="file"
                  id="pltFile"
              />
          </label>
          <img id='pltImg' src={fileName}/>
          <input type="submit" />
          </form>
        </div>
        <h3>{result}</h3>
        {/* {isInvasive && 
          <h3>This species is invasive!</h3>
        }
        {!isInvasive && 
          <h3>This species is not invasive!</h3>
        } */}
        <h3>{invasiveDetails}</h3>
    </div>
  )
};

export default Home;




