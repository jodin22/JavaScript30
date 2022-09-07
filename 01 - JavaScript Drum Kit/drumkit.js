// this exercise will add some animation when you click one of the keys

// this is the most basic event listner that will show everything about the key that was pressed. the function(e) is a callback
// function and displays all that key's details which is too much. you're only interested in the attributes for the data-key and
// src so you can animate and play a sound when that is pressed. that's what the code below line 14 does.

window.addEventListener('keydown', function(e) {
    console.log(e);
})

// since e shows too much info, we narrow it down to just the numeric keyCode
window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
})

// next we want to find the audio element that has the data-key attribute of 65 which is our first letter A or a. the case 
// doesn't matter. 65 will find either a or A.

// querySelector('audio') would only find the element. you need the element and attribute. you need [] after the audio element 
// the audio[data-key="65"] would only find the one that is 65. you want any number so you use e.

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // get <audio tag with attributes and their values>
    console.log(audio); // print to console. be aware that his ex of e.keyCode is deprecated but it still works. 
});

/*  the above returns all key presses even the ones you aren't interested in. the ones that are not on the page, the keypress 
returns null. so do a conditional that exits the function for those that don't exist on your page. and for those that do 
exist, it will print to the console and play a sound.
*/

/*
the play takes some time so if you hit the key in quick succession, it won't play it repeatedly because after it plays it, it 
has to sort of reset for the next time and this can be a few seconds. by adding audio.currentTime you can make the reset faster.
*/

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) { // !audio is the opposite of audio meaning it doesn't exist on your page
    return; // this will exit the function(e) immediately
    }
    else {  // for those that exist, it prints to the console and plays a sound
    console.log(audio);
    audio.currentTime = 0;
    audio.play(); 
    }
});

// next you're going to add the animation. so far from lines 37 to 47, the audio part works.





