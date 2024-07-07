// server.js

const express = require('express');
require('dotenv').config();

let fetch;
(async () => {
    try {
        // Dynamic import of node-fetch
        fetch = await import('node-fetch');
    } catch (error) {
        console.error('Error importing node-fetch:', error);
        process.exit(1);
    }

    const app = express();
    const port = process.env.PORT || 3000;

    const userProfileEndpoint = process.env.INSTAGRAM_API_ENDPOINT;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    app.get('/instagram-feed', async (req, res) => {
        try {
            const response = await fetch.default(`${userProfileEndpoint}&access_token=${accessToken}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Instagram data');
            }
            const data = await response.json();
            res.json(data);
        } catch (error) {
            console.error('Error fetching Instagram data:', error);
            res.status(500).json({ error: 'Failed to fetch Instagram data' });
        }
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
