import { Link } from "react-router-dom";
import '../styles/App.css';
import '../styles/Home.css';
import { useState } from 'react';
import Header from './Header';

const Home = () => {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  const handleUpdate = (event) => {
    const input = document.getElementById('pltFile');
    setFileName(URL.createObjectURL(input.files[0]))
    // alert(fileName);
  }

  const handleSubmit = (event) => {
    setResult("Loading...")
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
        setResult(result.bestMatch)
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
    </div>
  )
};

export default Home;




