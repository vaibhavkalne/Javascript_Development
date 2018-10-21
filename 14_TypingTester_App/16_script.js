
var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorderElement = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButtonElement = document.querySelector('#reset');
var greetMsgElement = document.querySelector('.cong-section');
var textArray = ['My life is my message.',
    'Not how long, but how well you have lived is the main thing.',
    'I love those who can smile in trouble…',
    'Be happy for this moment. This moment is your life.',
    'The purpose of life is to believe, to hope, and to strive.',
    'All our dreams can come true if we have the courage to pursue them.',
    'If you say you can or you can’t you are right either way.',
    'Everything has its beauty, but not everyone see its. ',
    'Because of your smile, you make life more beautiful.',
    'Life doesn’t require that we be the best, only that we try our best.',
    'The first step is you have to say that you can.']


var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;

//keypress event listener for text area
textAreaElement.addEventListener('keypress',function () {
    var textEnteredLength = textAreaElement.value.length;
    if (textEnteredLength === 0 && !timerRunning){
        //Start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});


//keyup event listener for text area

textAreaElement.addEventListener('keyup',function () {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent;
    var partialText = originalText.substr(0,textEntered.length);

    if (textEntered === ''){
        textAreaBorderElement.style.borderColor = 'yellow';

    }
    else {
        if (textEntered === originalText) {
            textAreaBorderElement.style.borderColor = 'forestgreen';
            //stop the timer
            clearInterval(interval);
            //display th emsg
            greetMsgElement.style.display = 'block';
        }
        else {
            if (textEntered === partialText){
                textAreaBorderElement.style.borderColor = 'deepskyblue';
            }
            else{
                textAreaBorderElement.style.borderColor = 'orangered';
            }
        }
    }
});

//click event for reset button
resetButtonElement.addEventListener('click',function(){
    //stop the timer
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaBorderElement.style.borderColor = 'gray';
    textAreaElement.value = '';
    secondsElement.textContent = '00';
    minutesElement.textContent = '00';
    //hide the msg
    greetMsgElement.style.display = 'none';
    //get the random text
    getRandomString();
});


//Start time function
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
    timer++;
}

// leadingZero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// get Random String
function getRandomString() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.textContent = randomString;
}



