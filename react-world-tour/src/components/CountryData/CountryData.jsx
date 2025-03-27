const CountryData = (props) => {
  const { country } = props;

  return (
    <div>
      <h5>Country Data: {country.name.common}</h5>
    </div>
  );
};

export default CountryData;
