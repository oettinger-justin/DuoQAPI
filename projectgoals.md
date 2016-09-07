# DuoQ (needs new name)

The mission of this application is to create an Amazon Alexa based voice controlled tool to improve League of Legends performance.
This will be achieved by providing quick response information that is basic to the game including:
## Item Data:
 - Prices of Items (both for build cost and overall total)
 - The effect of the item (i.e. in the case of Bloodthirster: `+75 Attack Damage, UNIQUE: +20% Life Steal, UNIQUE: Your life steal overheals you, converting the excess healing into a shield that absorbs up to 50 - 350 (based on level) damage and decays when out of combat for 25 seconds.`)
 - The summary of the item's effect (i.e. in the case of Bloodthirster: something something deals damage heals you etc)

## In-Game Timers:
 - At start of game, starts a 2:30 timer to the first drake spawn, and a 19:45 countdown to the despawn of Rift Herald.
 - Also starts a running game clock, relevance explained later.
 - Upon killing a drake, start a 6 minute timer to the next spawn.
  - Unless game clock will be over 35:00 at the time of the next spawn, at which point "Elder Dragon spawn" will be announced after the 6 minutes have elapsed.
  - All respawns after the first Elder Dragon take are all Elder Dragons, and will respawn 10 minutes after being killed.
 - After 20 minutes on game clock, announce that Baron Nasher has spawned.
 - Once Baron has been killed, start a 7 minute timer to the respawn.
 - Similarly, after taking Red Buff or Blue Buff, start a 5 minute timer.

## Counterpicks and Winrates:
 - Using the past month of aggregate match data, provides:
  - The winrate for a champion of choice, potentially broken down by ranked level.
  - The top three champions with the highest winrate against a given champion, again potentially
                broken down by rank.

All of this will be done using the information provided through the Riot League of Legends API, and using the npm files of "leagueapi"