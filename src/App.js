import React, { useState, useEffect } from 'react';
import './App.css';

function CovidTable(props) {
  return (
    <div>
  <h1>Covid Stats</h1>
  <p>Her kommer data {props.country}</p>
  </div>
  )

}

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pomber.github.io/covid19/timeseries.json").then(
        response => response.json());
         setData(result);
    };
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <header className="App">
        <div>
          <h1>Covid-19 data</h1>
        </div>
      </header>
      <main>
      <CovidTable country="Denmark">
        {data.map(dato => (
        <div key={dato.date}>
          <h2>{dato.date}</h2>
          </div>
      ))}
     {data}
      </CovidTable>
        <table>
          <tbody>
          <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          </tr> 
          {console.log(data)}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </main>
      <footer>
        Copyright 2020
      </footer>
    </div>
  );
}

export default App;
