import React from 'react';
import {useState, useEffect} from "react";
import './styleW.css';

const WeatherAPI = () => {
    const url = "https://api.weatherapi.com/v1/forecast.json?key=8b57b73b85104757b59222609220903&q=ukraine&days=7&aqi=no&alerts=no";

    let [country, SetCountry] = useState();
    let [city, SetCity] = useState();
    let [region, SetRegion] = useState();
    let [temp, SetTemp] = useState();
    let [date, SetDate] = useState();

    function sendRequest(url){
        return fetch(url).then(rez => {return rez.json()})
    };


     useEffect(() => {
         sendRequest(url).then(rez =>{
             console.log(rez)
             SetCountry(country = rez.location.country);
             SetCity(city = rez.location.name);
             SetRegion(region = rez.location.region);
             SetTemp(temp = rez.current.temp_c);
             SetDate(date = rez.current.last_updated);
              });

    });




    // let user = {};
    //         async function Rez(e){
    //         const responce = await fetch("https://api.weatherapi.com/v1/forecast.json?key=8b57b73b85104757b59222609220903&q=ukraine&days=7&aqi=no&alerts=no");
    //         e = await responce.json();
    //         console.log(e.location)
    //         // return e;
    //     };
    //    Rez(user);

    //    console.log(user);
            
return (
    <div className="widget1">
        <div className="widget">
            
            <div className="left-panel panel">
                <div className="date">
                   {date}
                </div>
                <div className="city">
                   {city}
                </div>
                <div className="temp">
                   <img src="#" alt="" width="60"/>
                   {temp}&deg;
                </div>
            </div>
            <div className="right-panel panel">
                <img src="https://cdn.w600.comps.canstockphoto.fr/ukraine-blanc-noir-kyiv-logo-vecteurs-eps_csp59355834.jpg" alt="" width="120" height='120'/>
            </div>

        </div>
        {/* <div> {country} </div>
        <div> {city} </div>
        <div> {region} </div>
        <div> {temp} C </div> */}
    </div>
    
)
  
};

export default WeatherAPI;

