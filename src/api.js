const handleJson = async (res) => {
    if (!res.ok) {
      throw new Error(`Response failed with status: ${res.status}`);
    }
    try {
      const json = await res.json();
      return json;
    } catch (errJson) {
      try {
        const resText = await res.text();
        throw new Error(resText); // if we can parse response text
      } catch (errTxt) {
        throw new Error(`Error parsing json: ${errJson.message}`);
      }
    }
  };


export const getAllCountriesDetailsURL = () =>
  'https://corona.lmao.ninja/v2/countries?yesterday=&sort='


export const getAllCountriesDetails = () =>
  fetch(getAllCountriesDetailsURL(), {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleJson);

  export const getCaseOfLastDaysURL = (i) => 
  `https://corona.lmao.ninja/v2/historical/${i}?lastdays=10`

  export const getCasesOfLastDays = (i) => 
    fetch(getCaseOfLastDaysURL(i), {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      }).then(handleJson);
