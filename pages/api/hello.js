var request = require('request');

export default async function handler(req, res) {
  var options = {
    'method': 'POST',
    'url': 'http://icemelt7.pythonanywhere.com/gpt',
    'headers': {
    },
    formData: {
      'query': req.body.query
    }
  };
  request(options, function (error, response) {
    if (error) {
      res.status(500).json({ error: error })
      return
    }
    res.status(200).json({ answer: response.body })
  });
}
