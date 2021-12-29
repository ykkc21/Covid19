function Country({ ID, Country, TotalConfirmed, TotalDeaths }) {
  //   console.log(ID, Country, TotalConfirmed, TotalDeaths);
  return (
    <li id="itmes" className="global_Date">
      {Country}
    </li>
  );
}

export default Country;
