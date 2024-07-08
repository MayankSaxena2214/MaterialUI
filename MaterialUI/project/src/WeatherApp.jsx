

import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
         city:"Delhi",
         feelsLike: 30.05,
         humidity: 28,
         pressure : 1010,
         temp: 30.05,
         tempMax: 30.05,
         tempMin: 30.05,
         weather: "haze"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Delta</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    );
}