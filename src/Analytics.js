import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { getAllCountriesDetails, getCasesOfLastDays } from "./api";
import { Chart } from "react-google-charts";
import Select from "react-select";

const Analytics = () => {
  const gridStyle = {
    width: "15%",
    textAlign: "center",
  };

  const [state, setState] = useState([]);
  const [lastDays, setLastDays] = useState([]);
  const [country, setCountry] = useState(["India"]);
  useEffect(() => {
    async function fetchResponse() {
      try {
        const i = "India";
        const data = await getAllCountriesDetails();
        setState(data);
        const LastDays = await getCasesOfLastDays(i);
        setLastDays(LastDays);
        console.log(lastDays);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, []);

  const dataPoints = state.map((data) => {
    return [data.country, data.active];
  });

  const countries = state?.map((data) => {
    return {
      value: data.country,
      label: <div>{data.country}</div>,
    };
  });

  const value = [];

  state.map((data) => {
    if (data.country === "India") {
      return value.push(data);
    }
  });

  const points = [["Country", "Cases"], ...dataPoints];
  const active = value.map((e) => e.active);
  const recovered = value.map((e) => e.recovered);
  const deaths = value.map((e) => e.deaths);

  const handleSelect = async (e) => {
    const lasttenDays = await getCasesOfLastDays(e.value);
    setCountry(e.value);
    setLastDays(lasttenDays);
  };

  const updated = new Date().toUTCString()

  return (
    <div>
      <div>
        <Card title="COVID DETAILS OF INDIA">
          <Card.Grid style={gridStyle}>
            {" "}
            Total Cases : {value.map((e) => e.cases)}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            {" "}
            Active : {value.map((e) => e.active)}
            <span className="eye">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </span>
          </Card.Grid>

          <Card.Grid style={gridStyle}>
            Recovered : {value.map((e) => e.recovered)}
            <span className="thumbs-up">
              <i class="fas fa-thumbs-up"></i>
            </span>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Deaths : {value.map((e) => e.deaths)}
            <span className="death">
              <i class="fa fa-flag" aria-hidden="true"></i>
            </span>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Today Cases : {value.map((e) => e.todayCases)}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Today Recovered : {value.map((e) => e.todayRecovered)}
            <span className="thumbs-up">
              <i class="fas fa-thumbs-up"></i>
            </span>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Today Deaths : {value.map((e) => e.todayDeaths)}
            <span className="death">
              <i class="fa fa-flag" aria-hidden="true"></i>
            </span>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Tested : {value.map((e) => e.tests)}
          </Card.Grid>
        </Card>
      </div>
      <br></br>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-6">
          <div style={{color:"darkblue"}}>Last Updated : {updated} <i class="fa fa-bell" aria-hidden="true"></i></div> 
          <br></br>    
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Case", "Percentage"],
                ["Active", ...active],
                ["Recovered", ...recovered],
                ["Deaths", ...deaths],
              ]}
              options={{
                title: "Active - Recovered Percentage in India",
              }}
              rootProps={{ "data-testid": "1" }}
            />
           
            <br></br>
            <div style={{ width: "500px" }}>
              <h5>Select country to get details <i class="fa fa-check" aria-hidden="true"></i> </h5>
              <Select
                label="Country"
                placeholder={"Country"}
                options={countries}
                defaultValue={{ label: "India", value: "India" }}
                onChange={handleSelect}
              />
            </div>
            <br></br>   
          </div>
          <div class="col-sm-9 col-md-6">
            <h5>
              {" "}
              <i class="fas fa-info-circle"></i> Details for Last 10 Days of{" "}
              {country}
            </h5>
            <table
              class="table table-bordered"
              style={{ backgroundColor: "white" }}
            >
              <thead style={{ backgroundColor: "cornflowerblue" }}>
                <tr>
                  <th>Cases</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    {lastDays?.timeline &&
                      Object.entries(lastDays?.timeline?.cases).map(
                        ([key, value]) => {
                          return (
                            <tr>
                              <td>{key}</td>
                              <td>{value}</td>
                            </tr>
                          );
                        }
                      )}
                  </td>
                  <td style={{ fontWeight: "bold" }}>
                    {lastDays?.timeline &&
                      Object.entries(lastDays?.timeline?.deaths).map(
                        ([key, value]) => {
                          return (
                            <tr>
                              <td>{key}</td>
                              <td>{value}</td>
                            </tr>
                          );
                        }
                      )}
                  </td>
                  <td style={{ fontWeight: "bold" }}>
                    {lastDays?.timeline &&
                      Object.entries(lastDays?.timeline?.recovered).map(
                        ([key, value]) => {
                          return (
                            <tr>
                              <td>{key}</td>
                              <td>{value}</td>
                            </tr>
                          );
                        }
                      )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <h4 className="activecases">
          Active Cases across the Globe <i class="fa fa-globe"></i>
        </h4>
        <Chart
          chartType="GeoChart"
          data={points}
          options={{ colors: ["#FF0000"] }}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default Analytics;
