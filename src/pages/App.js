import { useEffect, useState } from 'react';
import { Container } from './styles';
import {api} from '../services/api'
import Card from '../components/card'
import Input from '../components/Input';
import { Button } from '../components/Button';

function App() {

  const[city, setCity] = useState('');
  const[cityCurrent, setCityCurrent] = useState('');
  const[current, setCurrent] = useState('');
  const[icon, setIcon] = useState('');
  const[temperature, setTemperature] = useState('');
  const[humidity, setHumidity] = useState('');
  const[manualSearch, setManualSearch] = useState(false);
  const[viewCard, setViewCard] = useState(false);

  const handleCitySearch = async (latitude = null, longitude = null) => {
    
    try{
      const searchParam = latitude !== null && longitude !== null
      ? `${latitude},${longitude}`
      : city;

      const {data} = await api.get(`/current.json?key=${process.env.REACT_APP_API_KEY}&q=${searchParam}&aqi=no&lang=pt`); 
      setCityCurrent(data.location.name + ', ' + data.location.country);
      setCurrent(data.current.condition.text);
      setIcon(data.current.condition.icon);
      setTemperature(data.current.temp_c);
      setHumidity(data.current.humidity);

      setViewCard(true);
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
          handleCitySearch(latitude, longitude);
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

      {viewCard ? <Card cityName={cityCurrent} temperature={temperature} current={current} icon={icon} humidity={humidity} /> : <></>}
    </Container>

  );
}

export default App;
