const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route helpers
const serve = page => (req, res) =>
  res.sendFile(path.join(__dirname, 'public', page));

// Routes
app.get('/', serve('index.html'));
app.get('/history', serve('guineaPigHistory.html'));
app.get('/care', serve('guineaPigCare.html'));
app.get('/foods', serve('guineaPigFoods.html'));
app.get('/adoption', serve('guineaPigAdoption.html'));
app.get('/life-daily', serve('guineaPigLifeDaily.html'));

// Fallback 404
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});