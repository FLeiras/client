export const sortCountriesByName = (order, array) => {
  switch (order) {
    case "All":
      return array;
    case "asc":
      return array.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    case "des":
      return array.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    default:
      return array;
  }
};

export const sortCountriesByPopulation = (order, array) => {
  switch (order) {
    case "All":
      return array;
    case "men":
      return array.sort((a, b) => {
        return a.population - b.population;
      });
    case "may":
      return array.sort((a, b) => {
        return b.population - a.population;
      });
    default:
      return array;
  }
};

export const countryByContinent = (order, array) => {
  switch (order) {
    case "All":
      return array;
    case "Africa":
      return array.filter((country) => country.continent === "Africa");
    case "Asia":
      return array.filter((country) => country.continent === "Asia");
    case "Europe":
      return array.filter((country) => country.continent === "Europe");
    case "Americas":
      return array.filter((country) => country.continent === "Americas");
    case "Oceania":
      return array.filter((country) => country.continent === "Oceania");
    case "Antarctic":
      return array.filter((country) => country.continent === "Antarctic");
    default:
      return array;
  }
};

export const filterByActivity = (select, array) => {
  if (select === "All") {
    return array;
  } else {
    return array.filter(
      (c) => c.activities && c.activities.map((e) => e.name).includes(select)
    );
  }
};

export const findCountries = (name, arr) => {
  return arr.filter(
    (country) => country.name.toLowerCase() === name.toLowerCase()
  );
};

export const searchCountry = (name, arr) => {
  switch (name) {
    case "":
      return arr;
    default:
      return arr.filter((e) =>
        e.name.toLowerCase().includes(name.toString().toLowerCase())
      );
  }
};
