const express = require('express');
const cors = require('cors');
const cardRoutes = require('./src/routes/cardRoutes');

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json()); 
app.use('/api', cardRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
