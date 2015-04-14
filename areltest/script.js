var today = new Date();
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayOfWeek = today.getDay();
dayOfWeekInText = convertToDay(dayOfWeek);
console.log(dayOfWeekInText);
var delay = 50;
var person1;
var person2;
var called = false;
var scene = 1;
var dialogue = 1;
var bubble1 = new Array();
var bubble2 = new Array();
var social;
//var marker1Detected = false;
//var marker2Detected = false;
arel.ready(function() 
{
     console.log("yk!");
     opening();
    // arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
   //  arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});
    //debug
   // arel.Debug.activate();
  social = new arel.Plugin.Social();
  var tweetMessage = "This is a custom Tweet Message!";
  var urlToShare = "http://www.junaio.com";
  /*
   * Social-HTML-Overlay-Buttons
   */
  
  // adds a twitter-button to the HTML-Overlay of the channel with a custom tweet-message
});
//callback funtion

/*function trackingHandler(type, param)
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
             

             
        }
    }
};*/
/*function receiveTrackingStatus(trackingValues)
{
   console.log("i!");
    arel.Scene.setTrackingConfiguration(trackingData2.zip);
    if(trackingValues[0] !== undefined) {         
        var trans = trackingValues[0].getTranslation();
        arel.Scene.getScreenCoordinatesFrom3DPosition(trans, 0, function(position) {
          changeBubblePosition(0);

        })
      }
  /*  if(trackingValues[1] !== undefined) {         
        var trans = trackingValues[1].getTranslation();
        arel.Scene.getScreenCoordinatesFrom3DPosition(trans, 1, function(position) {
          changeBubblePosition(1);
        })
      }
}; */
/*
function changeBubblePosition(position) {
     // if (index === 0) {
        var bubble1x = position.getX() / 2;
        var bubble2y = position.getY() / 2;
        person1.style.bottom = y + "px";
    //  }
   //   else if (index === 1) {
   //      var bubble2x = position.getX() / 2;
   //      var bubble2y = position.getY() / 2;
         person2.style.bottom = y + "px";
    //  }
}*/
function convertToDay(dayOfWeek) {
  if (dayOfWeek === 1) {
    print("it's here");
    dayOfWeek = daysOfWeek[0];
  }
  else if (dayOfWeek == 2) {
    dayOfWeek = daysOfWeek[1];
  }
  else if (dayOfWeek == 3) {
    dayOfWeek = daysOfWeek[2];
  }
  else if (dayOfWeek == 4) {
    dayOfWeek = daysOfWeek[3];
  }
  else if (dayOfWeek == 5) {
    dayOfWeek = daysOfWeek[4];
  }
  else if (dayOfWeek == 6) {
    dayOfWeek = daysOfWeek[5];
  }
  else if (dayOfWeek == 0) {
    dayOfWeek = daysOfWeek[6];
  }
  return dayOfWeek;
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
                              //  if (marker1Detected && marker2Detected) {
                                 addConvoClasses();
                                 addNarration(); 
                              //  }
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
      var starttime = 12000;
      var biginterval = 10000;
      var i = 0;
      var t;
      console.log(dayOfWeek)
        if (dayOfWeekInText === 'Monday') {
           print("'yes!");
           backgroundStory = "He’d been looking at her for some time as he held on to the pole of the bus, swaying and shifting as the bus abruptly stopped and accelerated. His eyes lit up as he saw his chance. A seat finally opened up right beside her. He looked at the book she was reading and tried to unearth some association with it.";
           addTextByDelay(backgroundStory, narration, 50);
           bubble1 = ["Oh, Gone Girl. That’s a good one. Have you seen the movie?", "..........I was asking if you’ve seen the movie. Gone Girl.", "Ah I saw it by myself this weekend and I’ve been trying to find someone to talk to about that ending.", "Um um yeah I’m sorry I just thought.....", "I won’t talk to you about the movie. Promise. What’s your name?", "Joffrey."];
           bubble2 = ["Sorry what?", "Oh no, I haven’t. I wanted to read the book first. The books are always so much better.", "And you decided on some random girl in the bus?", "I’m only kidding. But you can’t talk to me.......about the book. Otherwise, sure. Yeah.", "Alice."];
           console.log(bubble1[0]);
          setTimeout(function() {
              addTextByDelay(bubble1[0], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[0]);
          setTimeout(function() {
              addTextByDelay(bubble2[0], person2, 50);
          }, starttime+(i*biginterval)+3000);

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
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          i = 2;

          console.log(bubble1[2]);
          setTimeout(function() {
              addTextByDelay(bubble1[2], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[2]);
          setTimeout(function() {
              addTextByDelay(bubble2[2], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          
          i = 3;

          console.log(bubble1[3]);
          setTimeout(function() {
              addTextByDelay(bubble1[3], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[3]);
          setTimeout(function() {
              addTextByDelay(bubble2[3], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);
   

           i = 4;
          console.log(bubble1[4]);
          setTimeout(function() {
              addTextByDelay(bubble1[i], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[i]);
          setTimeout(function() {
              addTextByDelay(bubble2[i], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

           i = 5;
            setTimeout(function() {
              addTextByDelay(bubble1[i], person1, 50);
          }, starttime+(i*biginterval));

            setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

       }
      else if (dayOfWeekInText === 'Tuesday') {
            bubble1 = ["Hi there.", "What? No book today? Are you done already?", "Oh wow. Ouch. I wouldn’t say mediocre. More like…. Ordinary.", "Fair enough. So what can I do to make this conversation… not mediocre?", "I don’t know. I guess that’s the way things have always been. Also, apart from the few times I’ve creeped on you from the back of the bus, this is the 2nd time I’m seeing you.", "That’s an interesting way to think about it.", "Um...........ok I got one. Why do you take this bus every morning?", "........................I don’t think I can think of anything else."];
            bubble2 = ["Oooh hi! Nice to see you again.", "No. Not even close. I just forgot to take it with me today. Looks like I have to settle for mediocre conversation.", "Well exactly. It’s nothing compared to the world in the book.", "Well you can start by asking me some interesting questions. I mean, why do we have to start each day with so how was work yesterday or how are you?", "But then it’s better then! We don’t know each other. There’s probably no danger in us digging a little deeper. Who else are you going to share your big bad secrets with except some random girl on the bus?", "So...do you have any interesting questions for me?", "Because it’s the cheapest option. Next.", "It’s ok. I wasn't expecting much. It was a weird exercise."];
             
             setTimeout(function() {
              addTextByDelay(bubble1[0], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[0]);
          setTimeout(function() {
              addTextByDelay(bubble2[0], person2, 50);
          }, starttime+(i*biginterval)+3000);

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
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          i = 2;

          console.log(bubble1[2]);
          setTimeout(function() {
              addTextByDelay(bubble1[2], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[2]);
          setTimeout(function() {
              addTextByDelay(bubble2[2], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          
          i = 3;

          console.log(bubble1[3]);
          setTimeout(function() {
              addTextByDelay(bubble1[3], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[3]);
          setTimeout(function() {
              addTextByDelay(bubble2[3], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);
   

           i = 4;
          console.log(bubble1[4]);
          setTimeout(function() {
              addTextByDelay(bubble1[4], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[4]);
          setTimeout(function() {
              addTextByDelay(bubble2[4], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          i = 5;
          console.log(bubble1[i]);
          setTimeout(function() {
              addTextByDelay(bubble1[i], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[i]);
          setTimeout(function() {
              addTextByDelay(bubble2[i], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          i = 6;

          console.log(bubble1[i]);
          setTimeout(function() {
              addTextByDelay(bubble1[i], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble1[i]);
          setTimeout(function() {
              addTextByDelay(bubble2[i], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+6000);

          i = 7;

             console.log(bubble1[i]);
          setTimeout(function() {
              addTextByDelay(bubble1[i], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble1[i]);
          setTimeout(function() {
              addTextByDelay(bubble2[i], person2, 50);
          }, starttime+(i*biginterval)+3000);

          console.log(bubble2[i]);
          setTimeout(function() {
              addTextByDelay(bubble2[i], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person2);
             }, starttime+(i*biginterval)+4000);

       }
       else if (dayOfWeek === 'Wednesday') {

       }
       else if (dayOfWeek === 'Thursday') {

       }
       else if (dayOfWeek === 'Friday') {

       }
       else if (dayOfWeek === 'Saturday') {
        
       }
       else if (dayOfWeek === 'Sunday') {
        
       } 
     //for(var i = 0;i<bubble1.length;i++)
     //{


     //}
     //  social.addTweetButton(tweetMessage);

  // adds a facebook-share-button to the HTML-Overlay of the channel with a custom urlToShare
     //  social.addFacebookShareButton(urlToShare);
}



var addTextByDelay = function(story,elem,delay){
    //console.log(story);
    if(!delay){
        delay = 75;
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

