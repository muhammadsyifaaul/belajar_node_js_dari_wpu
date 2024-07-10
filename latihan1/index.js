const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');



const port = 3000;
app.use(express.static('img'));

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home | MYNIME',
    layout: 'layouts/main-layout'
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
