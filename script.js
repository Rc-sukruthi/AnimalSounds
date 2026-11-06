let audio = new Audio();

function lion(){
    document.body.style.background = "gold";
    document.getElementById('message').innerHTML = "Lion is Here!! RUN!";
    audio.pause();
    audio = new Audio('sounds/lion.mp3');
    audio.play();
}

function elephant(){
    document.body.style.background = "grey";
    document.getElementById('message').innerHTML = "Thats an Elephant!!!";
    audio.pause();
    audio = new Audio('sounds/elephant.mp3');
    audio.play();
}

function monkey(){
    document.body.style.background = "lightbrown";
    document.getElementById('message').innerHTML = "Monkey is Here!!!";
    audio.pause();
    audio = new Audio('sounds/monkey.mp3');
    audio.play();
}

function dog(){
    document.body.style.background = "white";
    document.getElementById('message').innerHTML = "Here comes the dog!!!";
    audio.pause();
    audio = new Audio('sounds/dog.mp3');
    audio.play();
}


   
function stopSound(){
    audio.pause();
}