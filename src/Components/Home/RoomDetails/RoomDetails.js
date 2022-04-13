import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
    const { roomId } = useParams();
    return (
        <div>
            <h2 className="text-success text-center">Your Choosen Room Id Is : {roomId}</h2>
        </div>
    );
};

export default RoomDetails;