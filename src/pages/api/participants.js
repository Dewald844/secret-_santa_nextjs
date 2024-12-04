let participants = [
    {Name : "Dewald"      , Assigned : false, Received : false},
    {Name : "Anja"        , Assigned : false, Received : false},
    {Name : "Johan SNR"   , Assigned : false, Received : false},
    {Name : "Johan JNR"   , Assigned : false, Received : false},
    {Name : "Louis"       , Assigned : false, Received : false},
    {Name : "Marichen"    , Assigned : false, Received : false},
    {Name : "Mari"        , Assigned : false, Received : false},
    {Name : "Francois"    , Assigned : false, Received : false},
    {Name : "Sonneke"     , Assigned : false, Received : false},
    {Name : "Marietjie"   , Assigned : false, Received : false},
    {Name : "Schalk"      , Assigned : false, Received : false},
    {Name : "Nele"        , Assigned : false, Received : false},
]


export const availableNames = (person) => {
    return participants
        .filter((p) => !p.Assigned && p.Name !== person)
        .map((p) => p.Name);
};

export const getParticipantByName = (name) => {
    return participants.find((participant) => participant.Name === name);
};

export const hasReceivedName = (name) => {
    const participant = getParticipantByName(name);
    return participant ? participant.Received : false;
};

export const getNamesToDraw = () => {
    return participants
        .filter((participant) => !participant.Received)
        .map((participant) => participant.Name);
};

export const updateParticipants = (person, secretSantaName) => {
    participants = participants.map((participant) => {
        if (participant.Name === person) {
            return { ...participant, Received: true };
        }

        if (participant.Name === secretSantaName) {
            return { ...participant, Assigned: true };
        }

        return participant;
    });
}