import { getNamesToDraw } from "@/pages/api/participants";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const names = getNamesToDraw();
            console.log(names);
            res.status(200).json(names);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}