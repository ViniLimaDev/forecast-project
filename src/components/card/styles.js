import styled from "styled-components";

export const CardContainer = styled.div`

    width: 300px;
    padding: 20px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
`;

export const CityName = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 15px;
`;

export const WeatherIcon = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
`;

export const Forecast = styled.p`
    font-size: 1.4rem;
    color: #555;
    margin-bottom: 20px;
`;

export const Temperature = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: #f76c6c;
`;