import React from 'react';
import axios from "axios";
const Data = () => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://skyscanner- skyscanner- flight- search- v1. p. rapidapi. com/apiservices/browsequotes/v1.0/US/USD/en- US/SFO- sky/JFK- sky/2022-12-12',
    //     params: { inboundpartialdate: '2022-12-12' },
    //     headers: {
    //         'x- rapidapi- key': 'SIGN- UP- FOR- KEY',
    //         'x- rapidapi- host': 'skyscanner- skyscanner- flight- search- v1. p. rapidapi. com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'b88fdc70bamsh054f1d205ea6b83p16f9f0jsn4fdc5d0d49a3',
    //         'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
    //     }
    // };

    // const calling = async () => {
    //     // let data = await fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20221212/', options);
    //     // data = await data.json();
    //     // console.log(data);
    //     fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20221212/', options).then((res) => res.json()).then((res) => console.log(res));
    // }
    // calling();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b88fdc70bamsh054f1d205ea6b83p16f9f0jsn4fdc5d0d49a3',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };

    fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOM/DEL/20221212/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return <p>ajau</p>
}
export default Data;