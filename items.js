var LolApi = require('leagueapi');

LolApi.init('0bbf0e88-abd5-40a0-bbb5-034a2f7442c6', 'na');

/*LolApi.getChampions(false)
    .then(function (champs) {
        champs.sort(function (a, b) {
            return (a.id - b.id);
        })
        console.log(champs);
        console.log(champs.length);
        let num = 0;
        for (let i=0; i<champs.length; i++){
            if (champs[i].active){
                num++;
            }
        }
        console.log(num);
    });

LolApi.getChampions(true)
    .then(function (champs) {
        champs.sort(function (a, b) {
            return (a.id - b.id);
        })
        console.log(champs);
    });
    


//The wrapper also accepts promises:

LolApi.Summoner.getByName('YOLO Swag 5ever')
.then(summoner=>{
    console.log(summoner);
});
*/

// What are you asking about? //

//var category = process.argv[2];

//Search Params//

var search = process.argv[2];
var search1 = process.argv[3];

//Item Searches//

LolApi.Static.getItemList({ itemListData: "gold" })
    .then(function (item) {
        //console.log(dance.data);
        let searched = []
        let aubase = []
        let autotal = []
        let stats = []
        let summary = []

        for (let i in item.data) {
            //console.log(dance.data[i].name);
            if (item.data[i].name && item.data[i].name.toUpperCase().includes(search.toUpperCase())) {
                searched.push(item.data[i].name);
                aubase.push(item.data[i].gold.base);
                autotal.push(item.data[i].gold.total);
                stats.push(item.data[i].description);
                summary.push(item.data[i].plaintext);
            }
        }
        if (search1 == "gold") {
            for (let i in searched) {
                console.log(searched[i] + " costs " + aubase[i] + " gold, for " + autotal[i] + " total.");
            }
        }
        else if (search1 == "summary") {
            for (let i in searched) {
                console.log(searched[i] + ": " + summary[i]);
            }
        }
        else if (search1 == "stats") {
            for (let i in searched) {
                var cleanedstat = removetags(stats[i]).split("  ").join(", ");
                console.log(searched[i] + " adds " + cleanedstat + ".")
            }
        }
        else {
            for (let i in searched) {
                console.log("Request information about " + searched[i] + "? Use keywords gold, summary, or stats.")
            }
        }
    })
    .catch(function (err) {
        console.log(err);
    });


//Remove HTMML Tags Function for Item Searches    

// removetags("my <pants> are on <fire>");
function removetags (s){ //removetags only works assuming that all tags have a close tag
    let mark = null;
    let mark2 = null;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "<") {
            mark = i;
            for (let t = (i+1); t < s.length; t++) {
                if (s[t] == ">") {
                    mark2 = (t + 1);
                    s = (s.slice(0, mark)) + (s.slice(mark2));
                    i = 0;
                    break;
                }
            }
        }
    }
    return s;
}

/*function easierRemoveTags(s) {
    let pos = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "<") {
            pos = i;
        }
        if (pos > -1 && s[i] === ">") {
            s = s.slice(0,pos) + s.slice(pos + 1);
            i = pos;
        }
    }
    return s;
} */