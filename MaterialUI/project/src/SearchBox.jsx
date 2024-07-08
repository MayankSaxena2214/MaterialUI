import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react'
export default function SearchBox() {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="56cd75dd1692bdfbca98416e795b0649";

    
    
    let getWeatherInfo=async(eve)=>{

     try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,


            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
     }catch(err){
       throw err;
        setError(true);
     }
       
    };
    let handleChange=(eve)=>{
        setCity(eve.target.value)
    }
    let handleSubmit=async(eve)=>{
        try{
            eve.preventDefault();
            console.log(city)
            setCity("");
            let newInfo=await getWeatherInfo(eve);
            updateInfo(newInfo);
        }catch(err){
            console.log(err);
      
    }

    }
        return (
            <div className="SearchBox">
             
               <form onSubmit={handleSubmit}>
               <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
               <br></br>
               <Button variant="contained" type ="submit">
                Search
               </Button>
               </form>
            </div>
        );
    }