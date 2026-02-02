const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve all files inside "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route → serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
