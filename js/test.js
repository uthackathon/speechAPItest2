
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';
// 録音終了時トリガー
// recognition.addEventListener('result', function(event){
// 	console.log(event);
//     var text = event.results.item(0).item(0).transcript;
//     $("#result_text").val(text);
// }, false);
var startTime;
//連続してとる
recognition.continuous = true;

recognition.onresult = function(event,$scope) {
		console.log('Result');
	var currentTime = new Date();
	//経過時間
	var time = (currentTime - startTime)/1000;
	var length = event.results.length;
	if (length > 0) {
		console.log(event.results[length-1][0].transcript);
	    var text = event.results[length-1][0].transcript;
    	$("#result_text").val(text);
    	
		$scope.texts = [];
    	$scope.texts.push(text);
    	console.log($scope.texts);
		recognition.stop();
		console.log('Speech recognition abort!');
	recognition.stop();
	
//	    	$("#result_time").val(time);
	}
}

recognition.onstart = function() {
		console.log('Speech recognition service has started');
}
recognition.onend = function(){
	console.log('On End');
        recognition.start();
}

recognition.onaudiostart = function() {
		console.log('Audio capturing started');
}

recognition.onsoundstart = function() {
		console.log('Some sound is being received');
}

recognition.onspeechstart = function() {
		console.log('Speech has been detected');
}

recognition.onspeechend = function() {
		console.log('Speech has stopped being detected');
}

recognition.onsoundend = function() {
		console.log('Sound has stopped being received');
}
recognition.onaudioend = function() {
		console.log('Audio capturing ended');
}

recognition.onspeechstart = function() {
		console.log('Speech has been detected');
		var currentTime = new Date();
	//経過時間
	var time = (currentTime - startTime)/1000;
    	$("#result_time").val(time);
}
// 録音開始
// recognition.start();
function record()
{
    recognition.start();
	startTime = new Date();
	console.log(startTime);
}
function stop()
{
	var currentTime = new Date();
}