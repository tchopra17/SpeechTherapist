var express = require('express');
var router = express.Router();
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');


router.get('/text', function(req, res, next) {
	 	
	var text_to_speech = new TextToSpeechV1({
	  username: "05614f79-c094-4704-94c3-55622cf6b2d0",
	  password: "h0oybSwJOMBN",
	  version_date: '2016-05-19'
	});

	var params = {
	  text: 'Hello from IBM Watson',
	  voice: 'en-US_AllisonVoice', // Optional voice
	  accept: 'audio/wav'
	};
	 
	text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav')),

  	function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
	};
	// Pipe the synthesized text to a file
  	res.render('lessons', { title: 'Lesson Modules'});
});

module.exports = router;
