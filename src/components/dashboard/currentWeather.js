'use client'

import React, { use } from 'react';
import styles from './currentWeather.module.css';

    const API_KEY = "9727c2c6aae9af369bc61a39edbcdbac";
    const latitude = "45.750000";
    const longitude = "4.850000";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const getCurrentWeather = async () => {
        const res = await fetch(API_URL);
        return res.json();
    };

    const weatherData = getCurrentWeather();

export default function CurrentWeather() {

    const weather =  JSON.stringify(use(weatherData));
    console.log(weather)

    return (
        <>
            <div>
                {weather.main}
            </div>
        </>
    );
};
