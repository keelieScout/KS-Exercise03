$(document).ready(function () {
    const character = $("#character");
  
    character.on("mouseleave", function () {
      console.log("Mouse left: Neutral state triggered");
      character.attr("src", "images/neutral.png");
    });
  

    character.on("click", function () {
      console.log("Click: Happy state triggered");
      character.attr("src", "images/happy.png");
    });
  
  
    character.on("mouseenter", function () {
      console.log("Hover: Surprised state triggered");
      character.attr("src", "images/surprised.png");
    });
  
  
    character.on("dblclick", function () {
      console.log("Double Click: Sad state triggered");
      character.attr("src", "images/sad.png");
    });
  
  
    character.on("contextmenu", function (e) {
      e.preventDefault(); 
      console.log("Right-click: Angry state triggered");
      character.attr("src", "images/angry.png");
    });
  });
  