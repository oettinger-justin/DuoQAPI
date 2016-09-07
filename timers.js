var LolApi = require('leagueapi');

LolApi.init('0bbf0e88-abd5-40a0-bbb5-034a2f7442c6', 'na');

//UserID for Game ID Purposes//
let userid = /* TODO BECAUSE IDK */
//Search Params//

var search = process.argv[2];
var search1 = process.argv[3];

//Game Start Timer//
var startTime = 0;
var gamestatus;
if (search === "start game") {
    startTime = Date.now();
    gamestatus = true;
}

//Running Time//
var currenttime = 0;
var gametime = 0;
while (gamestatus === true) {
    currenttime = Date.now();
    gametime = currenttime - startTime
}

//Dragon Timers//
var gametime = currenttime - startTime
var dragtake = 0;
var elderdrag = 0;
while (gametime < 2100000) {                                                 // before elder drag spawns at 35:00 (in ms)
    if (gametime === 150000) {                                               // announce at 2:30
        console.log("First drake is on the rift.")
    }
    if (search === "drag taken") {                                           //at drag take, start 6:00 timer
        dragtake = Date.now();
        if (currenttime - dragtake === 360000) {
            console.log("A new drake has spawned.")
        }

        if (dragtake + 360000 >= 2100000) {                                  //notification of next drag changing to elder
            console.log("Next drake will be the Elder Dragon.")
        }
    }
}
else{
    if (currenttime - dragtake === 360000) {
        console.log("Elder Dragon has spawned.");
    }
    if (search === "drag taken") {
        elderdrag = Date.now();
        if (currenttime - dragtake === 600000) (
            console.log("A new Elder Dragon has spawned.")
        )
    }
}

//Rift Herald Timers//                                                        //going to reuse currenttime and gametime
var heraldtime = 0;
while (gametime < 1185000) {
    if (search === "herald taken") {
        heraldtime = Date.now();
        if (currenttime - heraldtime === 1200000) {
            console.log("Glimpse of the Void has expired.");
        }
    }
}
else {
    console.log("Rift Herald has returned to the void.");
}

//Baron Nashor Timers//
var barontime = 0;
while (gametime > 1200000) {
    console.log("Baron Nashor is on the Rift.");
    if (search === "baron taken") {
        barontime = Date.now;
        if (currenttime - barontime === 420000) {
            console.log("Baron Nashor has spawned.");
        }
    }
}

//Blue and Red Timers//
var bluetime = 0;
var redtime = 0;
if (search === "red taken") {
    redtime = Date.now();
    if (currenttime - barontime === 300000) {
        console.log("Red Buff has spawned.");
    }
}
if (search === "blue taken") {
    redtime = Date.now();
    if (currenttime - barontime === 300000) {
        console.log("Blue Buff has spawned.");
    }
}


/* 
    Timers format:
    {
        "%eventName%": Timer
        ...
    }
*/

/* 
    Timer format:
    {
        starttime: number,
        ocurrencecount: number
    }
    
*/

/*
 * takeAThing: called whenever someone takes something (basically resetting the timer and increasing the timer ocurrencecount)
 * @param string Thing that we've taken (same as %eventName% in the Timers object)
 * @param Timers Timers object representing the game
 * @return none
 */
function takeAThing(thing, timers) {
    /* TODO */
}

/*
 * getTimersFromStorage: gets the user's current timers
 * @param: user Id
 * @return Timers Timers object representing the game
 */
function getTimersFromStorage(userId) {
    /* TODO */
    return [];
}

/*
 * getAlerts: tells us 
 * @param Timers Timers object representing the game
 * @return [string] Any alerts that should be read to the user
 */
function getAlerts(timers) {
    let alerts = [];
    /* TODO */
    return alerts;
}

