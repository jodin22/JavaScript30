// this exercise will add some animation when you type one of the keys

// this is the most basic event listner that will show everything about the key that was pressed. the function(e) is a callback
// function and displays all that key's details which is too much. you're only interested in the attributes for the data-key and
// src so you can animate and play a sound when that is pressed. that's what the code below line 14 does.


window.addEventListener('keydown', function(e) {
    console.log(e);
})

// since e shows too much info, we narrow it down to just the numeric keyCode
/*
window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
})
*/

// next we want to find the audio element that has the data-key attribute of 65 which is our first letter A or a. the case 
// doesn't matter. 65 will find either a or A.

// querySelector('audio') would only find the element. you need the element and attribute. you need [] after the audio element 
// the audio[data-key="65"] would only find the one that is 65. you want any number so you use e.

/*
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // get <audio tag with attributes and their values>
    console.log(audio); // print to console. be aware that his ex of e.keyCode is deprecated but it still works. 
});
*/

/*  the above returns all key presses even the ones you aren't interested in. the ones that are not on the page, the keypress 
returns null. so do a conditional that exits the function for those that don't exist on your page. and for those that do 
exist, it will print to the console and play a sound.
*/

/*
the play takes some time so if you hit the key in quick succession, it won't play it repeatedly because after it plays it, it 
has to sort of reset for the next time and this can be a few seconds. by adding audio.currentTime you can make the reset faster.
*/

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // get the audio tag with data-key attribute and put
    // in a var
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // get the class key with data-key attribute and put in a var
    // notice this line is almost identical to the one above it. bc the data-key match you want is the key that is pressed.
    // since the prev line was finding the audio tag data-key attribute, this selector is finding the class='key' with the same
    // data-key attribute. when the keyCode equals some number, you can now have the audio data-key and the class='key'
    if (!audio) { // !audio is the opposite of audio meaning it doesn't exist on your page
    return; // this will exit the function(e) immediately
    }
    else {  // for those that exist, it prints to the console and plays a sound
    console.log(audio); // <audio data-key='65' src=sound file>
    audio.currentTime = 0;
    audio.play();
    console.log(key); // <div data-key="65" class="key">  the corresponding attributes that we need to connect our animation to 
    //  the html
    key.classList.add('playing'); // at this line, it adds the class='playing' and now the div has class='key playing' which will 
    // show the animation. but the animation doesn't go away bc you need to remove the new class for it to flash briefly.
    }

/* one way to end the animation is to set a timeout. but he says it isn't always a good idea bc it could get out of sync 
from the css transition time if anyone changes the .07s to something else. instead he says to use a transition end event instead 
of a setTimeOut function.

an event is when a click or keydown happens. then js recognizes that event and knows the event happened which can 
then do some code. a transition end event is where js will see that nothing was clicked but saw that a transition (or change)
happened and can still do some code. in this ex, the transition is that the scale is changing in the css and the border color 
also changed or transitioned. */

    function removeTransition(e) {  // in the console, it will show 6 transitionend events bc the element that changed has 
        // 4 border colors, 1 box shadow and 1 transform which totals 6. to limit just the transform, edit the e.
        // console.log(e); this shows all 6 properties. we only want 'transform'
        if (e.propertyName !== 'transform') return; // this skips the non transform
        console.log(e.propertyName); // only shows the transform property
        console.log(this); // 'this' shows what was called against it. in this ex, 'this' is the class=key from the arrow function 
        // below. the key is the element from the node list that the event listener is on when it is passed to the 
        // removeTransition function. <div data-key='65'  class=key>
        this.classList.remove('playing');
        console.log(keys); // shows all the nodes for class=key and no longer shows class=key playing bc of the remove line above
    };

    const keys = document.querySelectorAll('.key'); // selects all the class=key. puts it into an array-like aka node list
    /* window.addEventListener('transitionend', function(e) {  this is same as line 73. it will show all 6 properties which 
        we don't want. we only want to see the transform property
        console.log(e);
    }) */
    console.log(keys); // shows all the nodes for the class=key and will also show the class=key playing
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // loop through each class=key in the node list 
    // and use an arrow function that has the event listener. it is listening for 'transitionend'. once that happens, then it 
    // does the removeTransition function which you will create above this block of code.

});

/* now that we can get the data-key and class attributes, we can connect our style sheet code to the elements which will show 
the animation each time a key is pressed along with the audio
*/

/* on the css file, the .key {  } has many properties and values. the one that really matters is this one 
transition: all .07s ease. and when you add the .playing {  }  properties/values to the div, the scale will increase 
the size and the color and shadow properties will also add to the animation effect.
*/





