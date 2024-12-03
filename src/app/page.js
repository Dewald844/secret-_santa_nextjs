"use client";

import SecretSantaButton from '../components/SecretSantaButton';
import AvailableParticipants from '../components/ChoseName';
import { useState } from 'react';

export default function Home() {
    const [receivedName , setReceivedName] = useState("");
    if (receivedName) {
        return (
            <div className={"grid grid-cols-1"}>
                <SecretSantaButton userName={receivedName}/>
            </div>
        );
    } else {
        return (
            <div>
                <AvailableParticipants nameSelected={setReceivedName}/>
            </div>
        );
    }
}