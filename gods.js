document.addEventListener('click', function(e) {
  if(document.activeElement.toString() == '[object HTMLButtonElement]'){
    document.activeElement.blur();
  }
});

$(".magical").on("click", function(){
  if($(".magical").hasClass("active")) {
    $(".mage").removeClass("active");
    $(".guardian").removeClass("active");
  }
  else {
    $(".mage").addClass("active");
    $(".guardian").addClass("active");
  }
});

$(".physical").on("click", function(){
  if($(".physical").hasClass("active")) {
    $(".warrior").removeClass("active");
    $(".assassin").removeClass("active");
    $(".hunter").removeClass("active");
  }
  else {
    $(".warrior").addClass("active");
    $(".assassin").addClass("active");
    $(".hunter").addClass("active");
  }
});

$(".mage").on("click", function(){
  $(".magical").addClass("active");
});
$(".guardian").on("click", function(){
  $(".magical").addClass("active");
});
$(".warrior").on("click", function(){
  $(".physical").addClass("active");
});
$(".assassin").on("click", function(){
  $(".physical").addClass("active");
});
$(".hunter").on("click", function(){
  $(".physical").addClass("active");
});

$(".all-players").on("click", function(){
  $(".Gio").addClass("active");
  $(".Tarik").addClass("active");
  $(".Z").addClass("active");
});

$(".Gio").on("click", function(){
    $(".all-players").removeClass("active");
});
$(".Tarik").on("click", function(){
    $(".all-players").removeClass("active");
});
$(".Z").on("click", function(){
    $(".all-players").removeClass("active");
});

function picker() {
  var damageTypes = [];
  if($(".magical").hasClass("active")) {
    damageTypes.push("Magical");
  }
  if($(".physical").hasClass("active")) {
    damageTypes.push("Physical");
  }

  var allPlayers = false;
  if($(".all-players").hasClass("active")){
    allPlayers = true;
  }
  else {
    var players = [];
    if($(".Gio").hasClass("active")){
      players.push("Gio");
    }
    if($(".Tarik").hasClass("active")){
      players.push("Tarik");
    }
    if($(".Z").hasClass("active")){
      players.push("Z");
    }
  }

  var classes = [];
  if($(".mage").hasClass("active")) {
    classes.push("Mage");
  }
  if($(".guardian").hasClass("active")) {
    classes.push("Guardian");
  }
  if($(".warrior").hasClass("active")) {
    classes.push("Warrior");
  }
  if($(".assassin").hasClass("active")) {
    classes.push("Assassin");
  }
  if($(".hunter").hasClass("active")) {
    classes.push("Hunter");
  }

  var newArray = JSON.parse(JSON.stringify(gods));
  var i,j,k;
  var classOn = false;
  var damageTypeOn = false;
  var playerFound = false;

  for(i = 0; i < newArray.length; i++) {
    for(j = 0; j < damageTypes.length; j++) {
      if(newArray[i].PowerType == damageTypes[j]) {
        damageTypeOn = true;
        break;
      }
    }
    if(!damageTypeOn) {
      newArray.splice(i,1);
      i--;
      continue;
    }
    else {
      damageTypeOn = false;
    }

    if(!allPlayers){
      for(j = 0; j < players.length; j++) {
        for(k = 0; k < newArray[i].player.length; k++) {
          if(newArray[i].player[k] == players[j]) {
            playerFound = true;
            break;
          }
        }
        if(playerFound) {
          break;
        }
      }
      if(!playerFound) {
        newArray.splice(i,1);
        i--;
        continue;
      }
      else {
        playerFound = false;
      }
    }

    for(j = 0; j < classes.length; j++) {
      if(newArray[i].Class == classes[j]) {
        classOn = true;
        break;
      }
    }
    if(!classOn) {
      newArray.splice(i,1);
      i--;
      continue;
    }
    else {
      classOn = false;
    }
  }

  var index = Math.floor(Math.random()*newArray.length);
  document.getElementById("answer").innerHTML = newArray[index].name;
}