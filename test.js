//create division objects
for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  

  //create 1st row of plinko objects
  /*for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var j = 25; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for(var j = 0; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects*/
  

  
    

 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }



  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  //display the paricles 
  for(var h = 0; h < particles.length; h++){
    particles[h].display();
  }


}

pacman = createSprite(300,450,10,10);
pacman.shapeColor = "yellow";
ghost1 = createSprite(200,550,10,10);
ghost1.shapeColor = "pink";
ghost2 = createSprite(100,600,10,10); 
ghost2.shapeColor = "green";
ghost3 = createSprite(400,320,10,10);
ghost3.shapeColor = "blue";


"images/pacleft.gif","images/pacright.gif","images/pacup.gif"