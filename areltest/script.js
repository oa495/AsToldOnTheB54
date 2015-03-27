
var backgroundStory = "She has been on her phone for the last 5 minutes with her boyfriend trying to figure out who should hang up first.";
var speech1 = "Hey, isn't this your stop?";
var speech2 = "Oh yeah... thank you";
var delay = 50;
var person1;
var person2;

arel.ready(function() 
{
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

function setToTransparent() {
   // document.body.style.background = 'transparent';
}
$(document).ready(function(){
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
                         $(".instruction-3").delay(2000).fadeOut("slow");
                        // console.log("here!");
                        }
                   });
                  }
               });
            }
          //  var instruction = document.getElementById('instructions');
         //   instruction.addEventListener("click", function(){
                addConvoClasses();
                addNarration();
         //   });

       });
   });
 });


var addTextByDelay = function(story,elem,delay){
    if(!delay){
        delay = 50;
    }
    if(story.length >0){
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
function addNarration() {
  if ($(".narration").css('display') == 'none') {
       $(".narration").delay(10000).show("slow") 
        console.log("here!");   
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