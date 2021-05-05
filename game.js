class Game {
    constructor(){

    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }

    play(){
      form.hide();
      text("Game Start", 130, 100);
      Player.getPlayerInfo();

      if(allPlayers !== undefined){
      var displayP = 130; 
      for(plr in allPlayers){
      if(plr === "player" + player.index){
      fill("red");
      }
      else{
        fill(0);
      }
      }

      displayP = displayP + 20;
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance,100, displayP);
      }

      if(keyIsDown('up') && player.index !== null){
        player.distance = player.distance + 50;
        player.update();
        }
     
    }
 
   
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  }