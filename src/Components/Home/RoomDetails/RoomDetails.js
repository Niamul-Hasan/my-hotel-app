import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const RoomDetails = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    const handleToBooking = e => {
        e.preventDefault();
        navigate("/booking")
    }

    return (
        <div>
            <h2 className="text-success text-center">Your Choosen Room Id Is : {roomId}</h2>
            <div className='text-center'>
                <Button onClick={handleToBooking} variant="warning">Confirm Booking</Button>{' '}
            </div>
        </div>
    );
};

export default RoomDetails;