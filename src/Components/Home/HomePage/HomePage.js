import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ room }) => {
    const { id, pic, name } = room;
    const navigate = useNavigate();

    const hanldeRoomInfo = (id) => {
        navigate(`/room/${id}`)
    }
    return (
        <>

            <div className='ms-5'>
                <img className='w-75 h-75' src={pic} alt="" />
                <h3 className='text-success ps-3 py-3'>{name} </h3>
                <div className=''>
                    <Button onClick={() => hanldeRoomInfo(id)} variant="warning" size="lg">
                        Discover This Room
                    </Button>
                </div>
            </div>

        </>

    );
};

export default HomePage;