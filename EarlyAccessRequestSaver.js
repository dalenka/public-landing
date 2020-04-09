const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite3');

class EarlyAccessRequestSaver {
  constructor() {
    db.run('CREATE TABLE IF NOT EXISTS early_access_request (' +
    'id INTEGER PRIMARY KEY AUTOINCREMENT);');
    'inn TEXT, '
    'orgName TEXT, '
    'approxUsers TEXT, '
    'email TEXT, '
    'recapchaScore TEXT, '
    ');';
  }
  appendEarlyAccessRequest({
    inn,
    orgName,
    approxUsers,
    email,
    recapchaScore,
  }) {
    console.log('INSERTING TO DB', JSON.stringify({
      inn,
      orgName,
      approxUsers,
      email,
      recapchaScore,
    }, null, 2));
    db.serialize(() => {
      const stmt = db.prepare('INSERT INTO early_access_request (inn, orgName, approxUsers, email, recapchaScore) VALUES (?, ?, ?, ?, ?)');
      stmt.run([
        inn,
        orgName,
        approxUsers,
        email,
        recapchaScore,
      ]);
      stmt.finalize();
    });
  }
}

module.exports = EarlyAccessRequestSaver;