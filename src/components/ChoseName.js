"use client";

import { useState, useEffect } from 'react';

export default function AvailableParticipants({ nameSelected }) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('/api/available-participants')
            .then(response => response.json())
            .then(data => setNames(data))
            .catch(error => console.error('Error fetching available participants:', error));
    }, []);

    return (

        <div className="flex flex-col items-center">
            <h2 className="m-4 p-4 border-2 border-blue-800 bg-blue-200 text-blue-600 rounded-3xl font-bold">Please select your name</h2>
            <div className="flex flex-col items-center space-y-2">
                {names.map((name, index) => (
                    <button key={index} onClick={() => nameSelected(name)}
                            className="flex justify-center w-full m-auto border-2 bg-red-100 border-red-400 rounded-md p-2 hover:bg-red-400 hover:text-white text-red-600 font-bold text-center">
                        {name}
                    </button>
                ))}
            </div>
        </div>

    );
}