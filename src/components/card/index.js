import { CardContainer, CityName, WeatherIcon, Forecast, Temperature } from "./styles";

function Card({cityName, temperature, forecast, icon}){

    return(
        <CardContainer>
            <CityName className='city-name'>{cityName}</CityName>
            <div className="info">
                <WeatherIcon src={icon} alt='wheater icon'/>
                <Forecast className='forecast'>{forecast}</Forecast>
                <Temperature className="temp">{temperature + '°C'}</Temperature>
            </div>
        </CardContainer>
    );
}

export default Card;