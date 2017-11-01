const express = require('express');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);