"use client";

import { useState, useEffect } from 'react';

function SecretSantaButton({ userName }) {
    const [receivedName, setReceivedName] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSecretSantaName = async () => {
            try {
                const response = await fetch('/api/secret-santa', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ person: userName }),
                });

                const data = await response.json();

                if (response.ok) {
                    setReceivedName(data.name);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError("An error occurred");
            }
        };

        getSecretSantaName();
    }, [userName]);

    return (
        <div className={"grid grid-cols-1 text-red-200 h-screen place-items-center"}>
            {receivedName && <h2 className={"m-4 p-4 border-2 border-blue-800 bg-blue-200 text-blue-600 rounded-3xl font-bold"}>Your Secret Santa is: {receivedName}</h2>}
            {error && <p>Response from server: {error}</p>}
        </div>
    );
}

export default SecretSantaButton;