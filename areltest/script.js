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
var marker1Detected = false;
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
       //  social.addTweetButton(tweetMessage);

  // adds a facebook-share-button to the HTML-Overlay of the channel with a custom urlToShare
     //  social.addFacebookShareButton(urlToShare);
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
           //marker2Detected = true;
        }
        //if the pattern is lost tracking, show the information to hold your phone over the pattern
        else if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_NOTTRACKING)
        {
             

             
        }
    }
};
function receiveTrackingStatus(trackingValues)
{
   console.log("i!");
    arel.Scene.setTrackingConfiguration(trackingData.zip);
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
      } */
}; 

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
}
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
                if ($("#instruction").css('display') == 'none') {
                 $("#instruction").delay(600).fadeIn("slow");
                 $("#instruction").delay(4000).fadeOut("slow", function () {
                   // body...
                   if ($("#instruction-2").css('display') == 'none') {
                     $("#instruction-2").delay(600).fadeIn("slow");
                       console.log("here!");
                     $(".instruction-2").delay(4000).fadeOut("slow", function() {
                          if ($("#instruction-3").css('display') == 'none') {
                           $("#instruction-3").delay(600).fadeIn("slow");
                           $("#instruction-3").delay(4000).fadeOut("slow", function() {
                              // if (marker1Detected) {
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
      var starttime = 16000;
      var biginterval = 10000;
      var i = 0;
      var t;
      console.log(dayOfWeek);
    /*   if (dayOfWeekInText === 'Monday') {
           backgroundStory = "He’d been looking at her for some time as he held on to the pole of the bus, swaying and shifting as the bus abruptly stopped and accelerated. His eyes lit up as he saw his chance. A seat finally opened up right beside her. He looked at the book she was reading and tried to unearth some association with it.";
           addTextByDelay(backgroundStory, narration, 50);
           bubble1 = ["Oh, Gone Girl. That’s a good one. Have you seen the movie?", "..........I was asking if you’ve seen the movie. Gone Girl.", "Ah I saw it by myself this weekend and I’ve been trying to find someone to talk to about that ending.", "Um um yeah I’m sorry I just thought.....", "I won’t talk to you about the movie. Promise. What’s your name?", "Joffrey."];
           bubble2 = ["Sorry what?", "Oh no, I haven’t. I wanted to read the book first. The books are always so much better.", "And you decided on some random girl in the bus?", "I’m only kidding. But you can’t talk to me.......about the book. Otherwise, sure. Yeah.", "Alice."];
         //  console.log(bubble1[0]);
          setTimeout(function() {
              addTextByDelay(bubble1[0], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[0]);
          setTimeout(function() {
              addTextByDelay(bubble2[0], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+7000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+9000);

          i = 1;

          console.log(bubble1[1]);
          setTimeout(function() {
              addTextByDelay(bubble1[1], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[1]);
          setTimeout(function() {
              addTextByDelay(bubble2[1], person2, 50);
          }, starttime+(i*biginterval)+4000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+7000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+9000);


          i = 2;

          console.log(bubble1[2]);
          setTimeout(function() {
              addTextByDelay(bubble1[2], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[2]);
          setTimeout(function() {
              addTextByDelay(bubble2[2], person2, 50);
          }, starttime+(i*biginterval)+6000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+8000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+10000);

          
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
             }, starttime+(i*biginterval)+10000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+12000);
   
           i = 4;
          console.log(bubble1[4]);
          setTimeout(function() {
              addTextByDelay(bubble1[4], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[4]);
          setTimeout(function() {
              addTextByDelay(bubble2[4], person2, 50);
          }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+8000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+10000);

          i = 5;
           console.log(bubble1[5]);
          setTimeout(function() {
              addTextByDelay(bubble1[5], person1, 50);
          }, starttime+(i*biginterval));

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+4600);


        setTimeout(function() {
              removeText(narration);
              $( "#dialog" ).dialog( "open" );
             }, starttime+(i*biginterval)+4600);

        }
    else if (dayOfWeekInText === 'Tuesday') {
            console.log("on a tuesday");
            bubble1 = ["Hi there.", "What? No book today? Are you done already?", "Oh wow. Ouch. I wouldn’t say mediocre. More like…. Ordinary.", "Fair enough. So what can I do to make this conversation… not mediocre?", "I don’t know. I guess that’s the way things have always been. Also, apart from the few times I’ve creeped on you from the back of the bus, this is the 2nd time I’m seeing you.", "That’s an interesting way to think about it.", "Um...........ok I got one...Why do you take this bus every morning?", "You're right. That was pretty weak. It's hard to think of something...personal to ask someone."];
            bubble2 = ["Oooh hi! Nice to see you again.", "No. Not even close. I just forgot to take it with me today. Looks like I have to settle for mediocre conversation.", "Well exactly. It’s nothing compared to the world in the book.", "Well you can start by asking me some interesting questions. I mean, why do we have to start each day with so how was work yesterday or how are you?", "But then it’s better then! We don’t know each other. There’s probably no danger in us digging a little deeper. Who else are you going to share your big bad secrets with except some random girl on the bus?", "So...do you have any interesting questions for me?", "Really? That's what you're asking? Because it’s the cheapest option. Next.", "It’s ok. I wasn't expecting much. It was a weird exercise."];
            backgroundStory = "She looked back at her phone dissapointedly and he put on his headphones. He looked up at her curiously at seemingly timed intervals until she got off. He didn't quite get her but he liked her."
            starttime = 2000;
             setTimeout(function() {
              addTextByDelay(bubble1[0], person1, 50);
          }, starttime+(i*biginterval));

          console.log(bubble2[0]);
          setTimeout(function() {
              addTextByDelay(bubble2[0], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+7000);

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
           }, starttime+(i*biginterval)+8000);

            setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+12000);
            
          i = 2;
          console.log(bubble1[2]);
            setTimeout(function() {
              addTextByDelay(bubble1[2], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[2])
            setTimeout(function() {
              addTextByDelay(bubble2[2], person2, 50);
            }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+8000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+10000);

            i = 3;
          console.log(bubble1[3]);
            setTimeout(function() {
              addTextByDelay(bubble1[3], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[3])
            setTimeout(function() {
              addTextByDelay(bubble2[3], person2, 50);
            }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+9000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+18000);
          
          i = 4;
          starttime = 6000;
          console.log(bubble1[4]);
            setTimeout(function() {
              addTextByDelay(bubble1[4], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[4])
            setTimeout(function() {
              addTextByDelay(bubble2[4], person2, 50);
            }, starttime+(i*biginterval)+13000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+17000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+35000); 

          i = 5;
          starttime = 20000;
           setTimeout(function() {
              addTextByDelay(bubble1[5], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[5])
            setTimeout(function() {
              addTextByDelay(bubble2[5], person2, 50);
            }, starttime+(i*biginterval)+8000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+14000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+28000);


          i = 6;
          starttime = 30000;
          console.log(bubble1[6]);
            setTimeout(function() {
              addTextByDelay(bubble1[6], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[6])
            setTimeout(function() {
              addTextByDelay(bubble2[6], person2, 50);
            }, starttime+(i*biginterval)+6000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+9000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+15000);

          i = 7;
          
           console.log(bubble1[7]);
            setTimeout(function() {
              addTextByDelay(bubble1[7], person1, 50);
            }, starttime+(i*biginterval));

          console.log(bubble2[7])
            setTimeout(function() {
              addTextByDelay(bubble2[7], person2, 50);
            }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
          }, starttime+(i*biginterval)+9000);

          setTimeout(function() {
              removeText(person2);
           }, starttime+(i*biginterval)+15000);

          setTimeout(function() {
          addTextByDelay(backgroundStory, narration, 50);
          }, starttime+(i*biginterval)+20000);
          
            setTimeout(function() {
          removeText(narration);
          $( "#dialog" ).dialog( "open" );
          }, starttime+(i*biginterval)+26000);
                   
       } */
     //  else if (dayOfWeek === 'Wednesday') {
           bubble2 = ["Hi.", "Shoot.", ".....I would jump off the bus, skip work and do one of those things where you pick a random place to buy a ticket to in the airport.", "Yeah. I’ve lived here my whole life. Never left. Not even once.", "I mean, I don’t think I ever got a chance to...but I also never really wanted to...I mean it would’ve been nice to travel I guess but.....I was always comfortable here.", "I probably sound like such a bore. I never travelled anywhere because I was too comfortable.", "I suppose so.", "No it’s fine... I was the one asked you to ask a personal question. I should be apologizing. You’re probably thinking this woman on the bus is super weird.", "I cannot imagine why he wouldn’t be. Well, this is my stop. See you again tomorrow.", "So, what would you do?",];
           bubble1 = ["Hi.", "So I think I have a question for you.", "What would you do right now if there wouldn’t be any repercussions whatsoever?", "Really? If you could do ANYTHING?", "Really? Not even once?............Any particular reason?", "Oh, understandable.", "No! Not at all. Um....I mean what’s the reason to leave if you feel like you have everything you want right here with you...if you have that something there’s no reason to move right?", "I didn’t mean to pry. I’m sorry.", "No not at all. I make it a habit of asking and revealing personal things. Yesterday I told the bus driver about my irritable bowel syndrome. He didn’t look too pleased.", "Wait you never asked me what I would do…. If there weren’t any repercussions.", "I would kiss you."];
           backgroundStory = "The doors of the bus were about to close. He wasn’t even sure if she’d heard him properly. She was trying to make it outside. But he saw a smile from the window as she walked past."
           
           starttime = 2000;
           setTimeout(function() {
              addTextByDelay(bubble1[0], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[0], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+7000);

          i = 1;

           setTimeout(function() {
              addTextByDelay(bubble1[1], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[1], person2, 50);
          }, starttime+(i*biginterval)+3000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+7000);

          i = 2;

          setTimeout(function() {
              addTextByDelay(bubble1[2], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[2], person2, 50);
          }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+7000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+15000);

          i = 3;

          starttime = 5000;
            setTimeout(function() {
              addTextByDelay(bubble1[3], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[3], person2, 50);
          }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+7000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+15000);

          i = 4;

            setTimeout(function() {
              addTextByDelay(bubble1[4], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[4], person2, 50);
          }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+12000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+18000);

          i = 5;
          starttime = 10000;
            setTimeout(function() {
              addTextByDelay(bubble1[5], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[5], person2, 50);
          }, starttime+(i*biginterval)+5000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+12000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+18000);

          i = 6;
          starttime = 12000;
            setTimeout(function() {
              addTextByDelay(bubble1[6], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[6], person2, 50);
          }, starttime+(i*biginterval)+16000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+26000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+29000);

          i = 7;

          starttime = 32000;
            setTimeout(function() {
              addTextByDelay(bubble1[7], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[7], person2, 50);
          }, starttime+(i*biginterval)+10000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+24000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+28000);



          i = 8;

          starttime = 48000;
            setTimeout(function() {
              addTextByDelay(bubble1[8], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[8], person2, 50);
          }, starttime+(i*biginterval)+10000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+20000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+22000);

          i = 9;

          starttime = 63000;
            setTimeout(function() {
              addTextByDelay(bubble1[9], person1, 50);
          }, starttime+(i*biginterval));

           setTimeout(function() {
              addTextByDelay(bubble2[9], person2, 50);
          }, starttime+(i*biginterval)+10000);

          setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+22000);

          setTimeout(function() {
            removeText(person2);
          }, starttime+(i*biginterval)+24000);

          i = 10;
          starttime = 78000;
            setTimeout(function() {
              addTextByDelay(bubble1[10], person1, 50);
          }, starttime+(i*biginterval));


            setTimeout(function() {
              removeText(person1);
             }, starttime+(i*biginterval)+32000);


          setTimeout(function() {
          addTextByDelay(backgroundStory, narration, 50);
          }, starttime+(i*biginterval)+20000);
          
            setTimeout(function() {
          removeText(narration);
          $( "#dialog" ).dialog( "open" );
          }, starttime+(i*biginterval)+42000);

          

      /* }
       else if (dayOfWeek === 'Thursday') {
           bubble1 = [""];
           bubble2 = [""];

       }
       else if (dayOfWeek === 'Friday') {
           bubble1 = [""];
           bubble2 = [""];

       }
       */
     //for(var i = 0;i<bubble1.length;i++)
     //{


     //}

}

$(function() {
    console.log("dialog");
    $("#dialog").dialog({
      autoOpen: false,
      maxWidth:600,
      maxHeight: 500,
      width: 300,
      height: 300,
      show: {
        effect: "fade",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      }
    });

    $("#home").click(function() {
        console.log("reload");
        location.reload();
    });
    $("#refresh").click(function() {
         console.log("restart");
         startConversation();
    });
  });



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

