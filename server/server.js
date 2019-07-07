
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const createAuction = require('./routes/createAuction.router');
const getAuctions = require('./routes/getAuctions.router');
const addNewItem = require('./routes/addNewItem.router');
const getAuctionItems = require('./routes/getAuctionItems.router');
const deleteItem = require ('./routes/deleteItem.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/createAuction', createAuction);
app.use('/api/getauctions', getAuctions);
app.use('/api/add-new-item', addNewItem);
app.use('/api/get-auction-items', getAuctionItems);
app.use('/api/delete', deleteItem);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
