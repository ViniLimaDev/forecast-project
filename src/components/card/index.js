import { CardContainer, CityName, WeatherIcon, Current, Temperature, Humidity } from "./styles";


function Card({cityName, temperature, icon, current, humidity}){

    return(
        <CardContainer>
            <CityName className='city-name'>{cityName}</CityName>
            <div className="info">
                <WeatherIcon src={icon} alt='wheater icon'/>
                <Current className='current'>{current}</Current>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <Temperature className="temp">{temperature + '°C'}</Temperature>
                    <Humidity className="humidity">{humidity + '%'}</Humidity>
                </div>
            </div>
        </CardContainer>
    );
}

export default Card;