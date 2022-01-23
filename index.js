// receives one argument & returns it in all caps
function shout(string) {
    return string.toUpperCase();
}

// receives one argument & returns it in all lowercase
function whisper(string) {
    return string.toLowerCase();
}

// takes a string argument & logs it in all caps using console.log()
function logShout(string) {
    console.log('HELLO');
}

// takes a string argument & logs it in all lowercase using console.log()
function logWhisper(string) {
    console.log('hello'); 
}

function sayHiToHeadphonedRoommate(string) {
    // returns "I can't hear you!" if `string` is lowercase
    var cantHear = "I can't hear you!";
    if (string.toLowerCase(string) === string) {
        return cantHear;
      }
    // returns "YES INDEED!" if `string` is uppercase
    var canHear = "YES INDEED!";
    if (string.toUpperCase(string) === string) {
        return canHear;
    }
    // returns "I would love to!" if `string` is "Let's have dinner together!"
    var wouldLoveTo = "I would love to!";
    if (string === "Let's have dinner together!") {
        return wouldLoveTo;
    }
}
