var express = require('express');
var router = express.Router();
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

router.get('/speech_text', function(req, res, next) {

	var speech_to_text = new SpeechToTextV1({
	  username: "a589470f-8382-4fec-af92-cafb5c181f85",
	  password: "i4b1DnUsvw3u"
	});
	 
	var params = {
	  // From file
	  audio: fs.createReadStream('./audio-file.flac'),
	  content_type: 'audio/flac'
	};
	 
	speech_to_text.recognize(params, function(err, res) {
	  if (err)
	    console.log(err);
	  else
	    console.log(JSON.stringify(res, null, 2));
	});
	 
	// or streaming
	fs.createReadStream('./audio-file.flac')
	  .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/flac' }))
	  .pipe(fs.createWriteStream('./transcription.txt'));

  	// res.render('index', { title: 'Speech Therapy App' });
});

module.exports = router;
