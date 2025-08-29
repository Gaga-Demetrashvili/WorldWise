/** @format */

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message"; // Import the Message component
import CountryItem from "./CountryItem"; // Import the CountryItem component
import { useCities } from "../contexts/CitiesContext"; // Adjust the path based on the actual location of the hook

function CountryList() {
  const { cities, isLoading } = useCities(); // Assuming useCities is a custom hook that fetches city data

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
