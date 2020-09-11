const app = require('../app');

const port = process.env.PORT || 3000;

app.listen(3000, (req, res) => console.log(`listening on localhost:${port}`));