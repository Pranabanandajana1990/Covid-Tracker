import React from "react";

import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

//import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import "./App.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fatchedData = await fetchData();

    this.setState({ data: fatchedData });
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);

    this.setState({ data: fatchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
