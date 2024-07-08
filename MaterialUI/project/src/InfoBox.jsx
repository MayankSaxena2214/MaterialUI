import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox(){
    const INIT_URL="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdCUyMHN0b3JtfGVufDB8fDB8fHww"

    let info={
        city:"Delhi",
        feelsLike: 30.05,
        humidity: 28,
        pressure : 1010,
        temp: 30.05,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "haze"



    }
    return (
    <div className="InfoBox">
      
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Weather={info.weather}</div>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Feels Like={info.feelsLike}</div>
         <div>Humidity={info.humidity}</div>
         <div>Pressure={info.pressure}</div>
         <div>Temperature Max={info.tempMax}</div>
         <div>Temperature Min={info.tempMin}</div>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>)
}