const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
const groupRoutes = require('./routes/groups');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
