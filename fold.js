var poker = require('./lib/node-poker');

var table = new poker.Table(50,100,4,8,100,1000);

// them player
table.AddPlayer('A',1000)  // 0
table.AddPlayer('B',1000) // 1
table.AddPlayer('C',1000) // 2
table.AddPlayer('D',1000) //3
// table.AddPlayer('A',1000) //4
// table.AddPlayer('B',1000) //5
// table.AddPlayer('C',1000) //6
// table.AddPlayer('D',1000) //7


// bat dau game
table.StartGame()


table.players[1].Fold();
table.players[2].Bet(200);
printInfo(3);
table.players[3].Call();
printInfo(3);
table.players[0].Call();
table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
table.players[0].Call();
table.players[1].Bet(50);
table.players[2].Bet(100);
table.players[3].Call();
table.players[0].Call();
table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
// table.players[3].Bet(1000);
table.players[0].Call();

printInfo(1);
printInfo(2);
printInfo(3);

console.log("***********************************TABLE**************************************");
console.log(table.game);
console.log("*************************************************************************");

// table.initNewRound()

function printInfo(playerId){
    console.log("*************************************************************************");
    console.log(`
    Player: ${table.players[playerId].playerName} 
    - chips: ${table.players[playerId].chips}
    `);
    // console.log(table.players[playerId]);
    // console.log(table.game)
}