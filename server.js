const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;

//Setting static folder
app.use(express.static(path.join(__dirname,'public')))




//Server Running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
