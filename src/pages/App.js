import { useEffect, useState } from 'react';
import { Container } from './styles';
import {api} from '../services/api'
import Card from '../components/card'
import Input from '../components/Input';
import { Button } from '../components/Button';

function App() {

  const[city, setCity] = useState('');
  const[cityForecast, setCityForecast] = useState('');
  const[forecast, setForecast] = useState('');
  const[icon, setIcon] = useState('');
  const[temperature, setTemperature] = useState('');
  const[manualSearch, setManualSearch] = useState(false);
  //const[cards, setCards] = useState([]);

const getWeatherByLocation = async (latitude, longitude) => {
  try{
    const {data} = await api.get(`/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}&aqi=no&lang=pt`);  
      setCityForecast(data.location.name + ', ' + data.location.country);
      setForecast(data.current.condition.text);
      setIcon(data.current.condition.icon);
      setTemperature(data.current.temp_c)
  }
  catch(e){
    alert('Localização não encontrada.')
  }
}

  const handleCitySearch = async () => {
    
    try{
      const {data} = await api.get(`/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no&lang=pt`);  
      setCityForecast(data.location.name + ', ' + data.location.country);
      setForecast(data.current.condition.text);
      setIcon(data.current.condition.icon);
      setTemperature(data.current.temp_c)
      

      // setCards(cards => [
      //   ...cards,
      //   {cityForecast, forecast, icon}
      // ])

      setCity('');
      setManualSearch(true);
    } catch(error){
      alert('Cidade não encontrada, tente novamente.')
      console.log(error.message);
    }
  }


  useEffect(() => {
    if(!manualSearch){
      if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition( (position) => {
          const {latitude, longitude} = position.coords;
          getWeatherByLocation(latitude, longitude);
        })
      }
      else{
        alert('Não foi possível se conectar à sua localização')
      }
    }
  })

  return (
    <Container >
      <h1>CLIMA AO VIVO</h1>

      <nav className='search-bar'>
      <Input value={city} onChange={(event) => setCity(event.target.value)}/>
      <Button onClick={handleCitySearch}/>
      </nav>


      {/* {cards.map( card => <Card cityName={card.cityForecast} forecast={card.forecast} icon={card.icon}/>)} */}
      <Card cityName={cityForecast} temperature={temperature} forecast={forecast} icon={icon} />
      
    </Container>

  );
}

export default App;
