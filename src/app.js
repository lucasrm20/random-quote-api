const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(morgan('combined', {
  stream: require('./util/log2file')
}));

app.use('/', require('./routes/index.routes'));
app.use('/quotes', require('./routes/quotes.routes'));

const listener = app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${listener.address().port}`);
});
