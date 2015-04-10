var delay = 50;
var person1;
var person2;
var called = false;
var scene = 1;
var dialogue = 1;
var bubble1 = new Array();
var bubble2 = new Array();

var marker1Detected = false;
var marker2Detected = false;
arel.ready(function() 
{
     console.log("yk!");
     opening();
     arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
     arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});
    //debug
   // arel.Debug.activate();
  var social = new arel.Plugin.Social();
  var tweetMessage = "This is a custom Tweet Message!";
  var urlToShare = "http://www.junaio.com";
  /*
   * Social-HTML-Overlay-Buttons
   */
  
  // adds a twitter-button to the HTML-Overlay of the channel with a custom tweet-message
  social.addTweetButton(tweetMessage);

  // adds a facebook-share-button to the HTML-Overlay of the channel with a custom urlToShare
  social.addFacebookShareButton(urlToShare);

});

//callback funtion

function trackingHandler(type, param)
{
   console.log("z!");
    //check if there is tracking information available
    if(param[0] !== undefined)
    {
        //if the pattern is found, hide the information to hold your phone over the pattern
        if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
        {
           marker1Detected = true;
           marker2Detected = true;
        }
        //if the pattern is lost tracking, show the information to hold your phone over the pattern
        else if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_NOTTRACKING)
        {
             $(".instruction-3").delay(600).fadeIn("slow");
             //$(".instruction-3").delay(2000).fadeOut("slow");
        }
    }
};
function receiveTrackingStatus(trackingValues)
{
   console.log("i!");
    arel.Scene.setTrackingConfiguration(trackingData2.zip);
    if(trackingValues[0] !== undefined) {         
        var trans = trackingValues[0].getTranslation();
        arel.Scene.getScreenCoordinatesFrom3DPosition(trans, 0, function(position, 0) {
          changeBubblePosition();
        })
      }
    if(trackingValues[1] !== undefined) {         
        var trans = trackingValues[1].getTranslation();
        arel.Scene.getScreenCoordinatesFrom3DPosition(trans, 1, function(position, 1) {
          changeBubblePosition();
        })
      }
};
function changeBubblePosition(position, index) {
      if (index === 0) {
        var bubble1x = position.getX() / 2;
        var bubble2y = position.getY() / 2;
        person1.style.bottom = y + "px";
      }
      else if (index === 1) {
         var bubble2x = position.getX() / 2;
         var bubble2y = position.getY() / 2;
         person2.style.bottom = y + "px";
      }
}
function opening() {
   console.log("y!");
  $(".start").click(function(){
          $(".opening").fadeOut(function(){
             /*console.log("hii!!"); */
             $("body").delay(400).toggleClass("toTransparent", 1000);
             /*var x = document.getElementsByTagName("BODY")[0];
             console.log(x.className); */
                if ($(".instruction").css('display') == 'none') {
                 $(".instruction").delay(600).fadeIn("slow");
                 $(".instruction").delay(2000).fadeOut("slow", function () {
                   // body...
                   if ($(".instruction-2").css('display') == 'none') {
                     $(".instruction-2").delay(600).fadeIn("slow");
                       console.log("here!");
                     $(".instruction-2").delay(2000).fadeOut("slow", function() {
                          if ($(".instruction-3").css('display') == 'none') {
                           $(".instruction-3").delay(600).fadeIn("slow");
                           $(".instruction-3").delay(2000).fadeOut("slow", function() {
                                if (marker1Detected && marker2Detected) {
                                 addConvoClasses();
                                 addNarration(); 
                                }
                           });
                          // console.log("here!");
                          }
                     });
                    }
                 });
              }         
         });
     });
}
function startConversation() {
  console.log("done.");
  console.log(scene);
      var narration = $(".narration");
      var person1 = $("#person1");
      var person2 = $("#person2");
      backgroundStory = "He’d been looking at her for some time as he held on to the pole of the bus, swaying and shifting as the bus abruptly stopped and accelerated. His eyes lit up as he saw his chance. A seat finally opened up right beside her.";
     addTextByDelay(backgroundStory, narration, 50);
     bubble1 = ["Oh, Gone Girl. That’s a good one. Have you seen the movie?", "….I was asking if you’ve seen the movie. Gone Girl.", "I wish I could do that. I’ve never considered myself much of a reader.", "Mmm", "Maybe I will."];
     bubble2 = ["Sorry what?", "Oh no, I haven’t. I wanted to read the book first. The books are always so much better.", "I didn’t either but then one of my friends went to the bookstore, bought me this one and literally dropped it on my bed and told me to read it. So I did.", "It’s really fun when you get into it."];

     var starttime = 12000;
     var biginterval = 9000;
     var i = 0;
     var t;
     //for(var i = 0;i<bubble1.length;i++)
     //{

        console.log(bubble1[0]);
        setTimeout(function() {
            addTextByDelay(bubble1[0], person1, 50);
        }, starttime+(i*biginterval));

        console.log(bubble2[0]);
        setTimeout(function() {
            addTextByDelay(bubble2[0], person2, 50);
        }, starttime+(i*biginterval)+2000);

        setTimeout(function() {
            removeText(person1);
           }, starttime+(i*biginterval)+4000);

        setTimeout(function() {
          removeText(person2);
        }, starttime+(i*biginterval)+6000);

        i = 1;

        console.log(bubble1[1]);
        setTimeout(function() {
            addTextByDelay(bubble1[1], person1, 50);
        }, starttime+(i*biginterval));

        console.log(bubble2[1]);
        setTimeout(function() {
            addTextByDelay(bubble2[1], person2, 50);
        }, starttime+(i*biginterval)+2000);

        setTimeout(function() {
            removeText(person1);
           }, starttime+(i*biginterval)+4000);

        setTimeout(function() {
          removeText(person2);
        }, starttime+(i*biginterval)+6000);

     //}

}



var addTextByDelay = function(story,elem,delay){
    //console.log(story);
    if(!delay){
        delay = 50;
    }
    if(story.length >0){
         // console.log("sup");
        //append first character 
        elem.append(story[0]);
        setTimeout(
            function(){
                //Slice text by 1 character and call function again                
                addTextByDelay(story.slice(1),elem,delay);            
             },delay                 
            );
    }
}
var removeText = function(elem) {
  elem.empty();
}
function addNarration() {
  if ($(".narration").css('display') == 'none') {
       $(".narration").delay(3000).show("slow", function() {
         startConversation();
         console.log("here!"); 
       }) 
        
  }
}
function addConvoClasses() {
  person1 = document.getElementById("person1");
  person2 = document.getElementById("person2");
  person1.className = "convo1 left";
  person2.className = "convo2 right";
}
function share(button)
  {
    button.style.backgroundColor='#fff';
    arel.Scene.shareScreenshot();
  }


