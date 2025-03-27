import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, cca2, capital, flags, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Country Name: {name?.common}</h3>
      <h4>Country Code : {cca2}</h4>
      <h4>Capital : {capital}</h4>
      <h4>Population: {population}</h4>

      <img
        src={flags.png}
        style={{ width: "100px", height: "50px" }}
        alt=""
      />{" "}
      
      <br />

      <button onClick={handleVisited}>Visit Country</button>
      <button onClick={() => handleVisitedCountries(country)}>
        mark visited
      </button>
      <button onClick={() => handleVisitedFlags(country?.flags?.png)}>
        Add Visited Flags
      </button>
      <hr />
      
      <CountryDetail
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
