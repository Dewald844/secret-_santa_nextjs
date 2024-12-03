import { availableNames, hasReceivedName, updateParticipants } from '../api/participants';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { person } = req.body;

        if (!person) {
            return res.status(400).json({ error: "No name provided" });
        }

        if (!availableNames().length) {
            return res.status(400).json({ error: "No more names available" });
        }

        if (hasReceivedName(person)) {
            return res.status(400).json({ error: "You have already received a name" });
        }

        const randomIndex = Math.floor(Math.random() * availableNames().length);
        const secretSantaName = availableNames()[randomIndex];
        updateParticipants(person, secretSantaName);
        return res.status(200).json({ name: secretSantaName });

    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}