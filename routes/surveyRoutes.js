const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {
  //Check user authenticated before posting
  app.post('/api/surveys',requireLogin, requireCredits, (req,res)=>{
    const {title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent : Date.now(),
    });

    //Send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });

  //Check user authenticated before fetching surveys
  app.get('/api/surveys',requireLogin, requireCredits, (req,res)=>{

  });
}