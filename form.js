class Form {

  constructor (){
  this.input = createInput("name");
  this.button = createButton("play");
  this.greeting = createElement("h3");
  }
hide (){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
}
  display(){
  var title = createElement("h1");
  title.html("Car Racing Game");
  title.position(550,10);
  
  this.input.position(550, 300);

  this.button.position(600,340);
  this.button.mousePressed( ()=> {
      this.input.hide();
      this.button.hide();

    player.name = this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("Hello " + player.name);
    this.greeting.position(600,300);
  });
  }
}