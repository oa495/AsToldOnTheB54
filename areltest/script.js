
var command;
arel.sceneReady(function() 
{
    //debug
    arel.Debug.activate();
    arel.Debug.activateArelLogStream();
});


function setToTransparent() {
    console.log("hii!!");
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "transparent";
    var containerDiv = document.getElementsByClassName("instruction-page");
    containerDiv.innerHTML = "";
}

