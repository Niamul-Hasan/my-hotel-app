import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import "./Home.css";

const Home = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('hotel.json')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])
    return (
        <div>
            <p className='text-info text-center fs-1'>this is from Homepage........</p>
            <div className='room-container'>
                {
                    rooms.map(room => <HomePage key={room.id}
                        room={room}
                    ></HomePage>)
                }
            </div>

        </div>
    );
};

export default Home;