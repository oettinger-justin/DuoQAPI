# DuoQ (needs new name)

The mission of this application is to create an Amazon Alexa based voice controlled tool to improve League of Legends performance.
This will be achieved by providing quick response information that is basic to the game including:
## Item Data:
 - Prices of Items (both for build cost and overall total)
 - The effect of the item (i.e. in the case of Bloodthirster: `+75 Attack Damage, UNIQUE: +20% Life Steal, UNIQUE: Your life steal overheals you, converting the excess healing into a shield that absorbs up to 50 - 350 (based on level) damage and decays when out of combat for 25 seconds.`)
 - The summary of the item's effect (i.e. in the case of Bloodthirster: something something deals damage heals you etc)

## In-Game Timers:

Create a hands-free timer experience for different in-game events.

### Feature Components
 - User tells Alexa start of game, starts a 2:30 timer to the first drake spawn, and a 19:45 countdown to the despawn of Rift Herald.
 - User tells Alexa when Drake is killed, start a 6 minute timer to the next spawn.
  - Unless game clock will be over 35:00 at the time of the next spawn, at which point "Elder Dragon spawn" will be announced.
  - All respawns after the first Elder Dragon take are all Elder Dragons, and will respawn 10 minutes after being killed.
 - After 20 minutes on game clock, announce that Baron Nasher has spawned.
 - Once the user reports Baron has been killed, start a 7 minute timer to the respawn.
 - Similarly, after the user reports taking Red Buff or Blue Buff, start a 5 minute timer.

### Challenges

 - [We can't have Alexa spontaneously start talking](https://www.reddit.com/r/amazonecho/comments/4cn84i/spoken_reminders_alarms/?st=isse7i5n&sh=f804a75f). We might be able to leverage alarms to do a similar thing.

## Counterpicks and Winrates:

Allow the user to query game analytics for hands-free intelligence to help decision-making.

### Feature Components
 - Using the past month of aggregate match data, provides:
  - The winrate for a champion of choice, potentially broken down by ranked level.
  - The top three champions with the highest winrate against a given champion, again potentially
                broken down by rank.

### Challenges

 - This requires us to be able to run queries against an aggregate dataset. Unfortunately we can't pull this data out of the League API, so we might have to use some fancy statistics and random sampling to run these queries.
