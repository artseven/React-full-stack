const mongoose       = require('mongoose');
const requireLogin   = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer         = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,        // create new object with key of email and value of recipients email that is trimmed off
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		//we send an email
		const mailer = new Mailer(survey, surveyTemplate(survey));
		//if any of asynchronous requests fail, we send error to the user
		try{
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();
			
			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}

	});
}