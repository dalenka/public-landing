// To be used later, now empty bloilerplate

const express = require('express');
const router = express.Router();
const EarlyAccessRequestSaver = require('./earlyAccessRequestSaver.js');
const earlyAccessRequestSaver = new EarlyAccessRequestSaver();
router.post('/api/early-access-request', function(req, res, next) {
  const token = req.body['recapcha-token'];
  if (!token) {
    return res.status(498).send('Ошибка google recaptcha. Данные не были приняты.');
  }
  const secretKey = "xxxx";

  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + token + "&remoteip=" + req.connection.remoteAddress;

  request(verificationURL, (error, response, bodyAsString) => {
    const verificatorResponseBody = JSON.parse(bodyAsString);
    if(!verificatorResponseBody.success) {
      return res.status(499).send('Ошибка google recaptcha. Данные не были приняты.');
    } else {
      const recapchaScore = verificatorResponseBody.score;
      const inn = req.body['inn'];
      const orgName = req.body['orgName'];
      const approxUsers = req.body['approxUsers'];
      const email = req.body['email'];
      earlyAccessRequestSaver.appendEarlyAccessRequest({inn, orgName, approxUsers, email, recapchaScore});
      res.send('Спасибо, ваши данные приняты. После обработки заявки вы получите уведомление на указанную вами электронную почту.');
    }
  });
});




module.exports = router;
