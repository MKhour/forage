import { useState } from 'react';
import Header from './Header';

function PlantForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('pltImg');

    const body = new FormData
    body.append("images", input.files[0]);
    body.append("", "\\")
    body.append("organs", "auto");
    console.log(body);
    alert('fetching');
    fetch("https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=2b10gZoCiPfqdoc0OQ9So4f6V", {
    body,
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    },
    method: "POST"
    })
    .then((response) => response.json())
    .then((result) => {
        const x = result;
        console.log(result);
        alert(result);
    });

    alert(`The name you entered was: ${input.files[0].name}`)
  }

  return (
    <div className="App">
        <Header />
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input 
                type="file"
                id="pltImg"
            />
        </label>
        <input type="submit" />
        </form>
    </div>
  )
}

export default PlantForm;