import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries : {countries.length}</h3>

      <div>
        <h3>Visited Countries : {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {visitedFlags.map((flag, idx) => (
            <img
              src={flag}
              key={idx}
              style={{ width: "80px", height: "50px", marginRight: "5px" }}
            ></img>
          ))}
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
