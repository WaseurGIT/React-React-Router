import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  // for way 1
  //   const { country, handleVisitedCountries, handleVisitedFlags } = props;

  return (
    <div>
      <h4>Country Detail:</h4>
      <hr />

      {/* way 1 */}
      {/* <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}

      {/* way 2 */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
