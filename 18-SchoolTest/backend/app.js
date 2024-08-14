const bodyParser = require('body-parser');
const express = require('express');

const zcrudRoutes = require('./routes/zcruds');
const student_subjectRoutes = require('./routes/student_subjects');
const studentRoutes = require('./routes/students');

const eventRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');
const ccrudRoutes = require('./routes/ccruds');
// THIS IS THE END OF ccruds require

// THIS IS THE BEGINING OF payments require
const paymentRoutes = require('./routes/payments');
// THIS IS THE END OF payments require 

// THIS IS THE BEGINING OF sampleas require
const sampleaRoutes = require('./routes/sampleas');
// THIS IS THE END OF sampleas require
 

// THIS IS THE BEGINING OF samples require
const sampleRoutes = require('./routes/samples');
// THIS IS THE END OF samples require
 

// THIS IS THE BEGINING OF homeworks require
const homeworkRoutes = require('./routes/homeworks');
// THIS IS THE END OF homeworks require
 

// THIS IS THE BEGINING OF dcruds require
const dcrudRoutes = require('./routes/dcruds');
// THIS IS THE END OF dcruds require 

// THIS IS THE BEGINING OF ecruds require
const ecrudRoutes = require('./routes/ecruds');
// THIS IS THE END OF ecruds require

// THIS IS THE BEGINING OF fcruds require
const fcrudRoutes = require('./routes/fcruds');
// THIS IS THE END OF fcruds require 

// THIS IS THE BEGINING OF gcruds require
const gcrudRoutes = require('./routes/gcruds');
// THIS IS THE END OF gcruds require 

// THIS IS THE BEGINING OF xcruds require
const xcrudRoutes = require('./routes/xcruds');
// THIS IS THE END OF xcruds require 

// THIS IS THE BEGINING OF acruds require
const acrudRoutes = require('./routes/acruds');
// THIS IS THE END OF acruds require 

// THIS IS THE BEGINING OF bcruds require
const bcrudRoutes = require('./routes/bcruds');
// THIS IS THE END OF bcruds require


// THIS IS THE BEGINING OF ycruds require
const ycrudRoutes = require('./routes/ycruds');
// THIS IS THE END OF ycruds require

 // THIS IS THE BEGINING OF scruds require
const scrudRoutes = require('./routes/scruds');
// THIS IS THE END OF scruds require 

// THIS IS THE BEGINING OF vcruds require
const vcrudRoutes = require('./routes/vcruds');
// THIS IS THE END OF vcruds require
 

// THIS IS THE BEGINING OF ucruds require
const ucrudRoutes = require('./routes/ucruds');
// THIS IS THE END OF ucruds require
 

// THIS IS THE BEGINING OF tcruds require
const tcrudRoutes = require('./routes/tcruds');
// THIS IS THE END OF tcruds require
 


const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(authRoutes);

app.use('/events', eventRoutes);
app.use('/student_subjects', student_subjectRoutes);
app.use('/students', studentRoutes);
app.use('/zcruds', zcrudRoutes);
app.use('/ccruds', ccrudRoutes);
// THIS IS THE END OF ccruds use 

// THIS IS THE BEGINING OF payments use
app.use('/payments', paymentRoutes);
// THIS IS THE END OF payments use 

// THIS IS THE BEGINING OF sampleas use
app.use('/sampleas', sampleaRoutes);
// THIS IS THE END OF sampleas use
 

// THIS IS THE BEGINING OF samples use
app.use('/samples', sampleRoutes);
// THIS IS THE END OF samples use

// THIS IS THE BEGINING OF homeworks use
app.use('/homeworks', homeworkRoutes);
// THIS IS THE END OF homeworks use
 

// THIS IS THE BEGINING OF dcruds use
app.use('/dcruds', dcrudRoutes);
// THIS IS THE END OF dcruds use 

// THIS IS THE BEGINING OF fcruds use
app.use('/fcruds', fcrudRoutes);
// THIS IS THE END OF fcruds use 

// THIS IS THE BEGINING OF gcruds use
app.use('/gcruds', gcrudRoutes);
// THIS IS THE END OF gcruds use 

// THIS IS THE BEGINING OF xcruds use
app.use('/xcruds', xcrudRoutes);
// THIS IS THE END OF xcruds use 

// THIS IS THE BEGINING OF acruds use
app.use('/acruds', acrudRoutes);
// THIS IS THE END OF acruds use 

// THIS IS THE BEGINING OF bcruds use
app.use('/bcruds', bcrudRoutes);
// THIS IS THE END OF bcruds use

// THIS IS THE BEGINING OF ycruds use
app.use('/ycruds', ycrudRoutes);
// THIS IS THE END OF ycruds use


// THIS IS THE BEGINING OF ecruds use
app.use('/ecruds', ecrudRoutes);
// THIS IS THE END OF ecruds use


// THIS IS THE BEGINING OF scruds use
app.use('/scruds', scrudRoutes);
// THIS IS THE END OF scruds use 

// THIS IS THE BEGINING OF vcruds use
app.use('/vcruds', vcrudRoutes);
// THIS IS THE END OF vcruds use
 

// THIS IS THE BEGINING OF ucruds use
app.use('/ucruds', ucrudRoutes);
// THIS IS THE END OF ucruds use
 

// THIS IS THE BEGINING OF tcruds use
app.use('/tcruds', tcrudRoutes);
// THIS IS THE END OF tcruds use
 


app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);




















