import axios from "axios";
import { useEffect, useState } from "react";
import PageComponent from "../models/pageComponent";
import weather from "../models/weatherInfo";

const CardWeather:React.FC<{component?:PageComponent}> = (props) => {
    const [weatherData,setWeatherData] = useState<weather|undefined>(undefined);

    useEffect(()=>{
        getData();
    },[props.component?.options])

    if( typeof props.component === 'number' )
    {//cleanup comma in response 
        return null;
    };

    async function getData() {
        const pageUrl = 'http://localhost:3030/integration/weather?lat=' + props.component?.options.lat +'&lon='+  props.component?.options.lon;
        //currently calls twice, needs fetch 
        await axios.get(pageUrl)
        .then(res=>{
            updateData(res.data.data)
        })
        .catch((error)=>{
            console.error('failed to get weather data!',error);
        });
    }
    

    const updateData=(updatedData:weather)=>{
        setWeatherData(updatedData);
    }


return(
    
    <div className="weather">
        {JSON.stringify(weatherData)}
        <div><img src= {'../icons/'+ weatherData?.condition +'.svg'} alt={weatherData?.condition}/></div>
        <div>
            <div>{weatherData?.temperature} {weatherData?.unit.toUpperCase()}</div>
            <div>{weatherData?.conditionName}</div>
        </div>
        <div>{weatherData?.location}</div>
        <div className="upcoming">
        
        </div>
        
    </div>
);
}

export default CardWeather;