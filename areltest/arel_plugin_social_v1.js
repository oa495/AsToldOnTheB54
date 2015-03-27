/**
Arel-Social-Plugin
*/



arel.Plugin.Social = function ()
{
	this.resourcePath = undefined;
	this.cssButtonContainer = undefined;
	this.cssTwitterButtonStyle = undefined;
	this.cssFbShareButtonStyle = undefined;
	this.isAndroidDevice = undefined;
	
	console.log("please work plz");
	//constructor
	this.init = function()
	{	
		//build up the right absolut path to the resources
		if( window.location.href.lastIndexOf("/") == window.location.href.length - 1 )
		{
			this.resourcePath = window.location.href + "/images/";
		}
		else
		{
			this.resourcePath = window.location.href.substring( 0, window.location.href.lastIndexOf("/") + 1 ) + "/images/";
		}
		
		
		this.cssButtonContainer = 		"position: absolute;" +
										"bottom: 5px;" +
										"right: 5px;" +
										"display: block;";
		
		
		this.cssTwitterButtonStyle = 	"float: right;" +
										"margin-left: 5px; " +
										"display: block;" +
										"outline: none;" +
										"background: #eee url('" + this.resourcePath + "favicon.ico') 3px center no-repeat;" +
										"padding: 4px 5px 4px 20px;" +
										"font: 16px/100% 'Lucida Grande','Lucida Sans Unicode', sans-serif;" +
										"font-color: #fff;" +
										"border-radius: 3px;";
		
		
		this.cssFbShareButtonStyle = 	"float: right;" +
										"display:inline-block;" +
										"font-size:16px;" +
										"font-family: Arial, Helvetica, sans-serif;" +
										"line-height:1em;" +
										"text-decoration:none;" +
										"color:#3B5998;" +
										"margin-left: 5px; " +
										"padding:3px 4px 3px 20px;" +
										"border:1px solid #CAD4E7;" +
										"-webkit-border-radius:3px;" +
										"border-radius:3px;" +
										"background-color:#eceef5;" +
										"background-image:url('" + this.resourcePath + "facebook_share_icon.png');" +
										"background-position:2px 3px;" +
										"background-repeat:no-repeat;";
		
		
		
		var buttonContainer = document.createElement("div");
		buttonContainer.setAttribute("id", "buttonContainer");
		buttonContainer.setAttribute("style", this.cssButtonContainer);
		
		document.body.appendChild(buttonContainer);
		
		
		//determines if the mobile-device is an Android or iOS device
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))
		{
			this.isAndroidDevice = false;
		}
		else
		{
			this.isAndroidDevice = true;
		}
	};
	
	
	/*
	 * Social-Functionalities
	 */
	
	//Twitter
	this.sendTweetMessage = function (customTweetMessage)
	{
		var tweetMessage;
		
		if(customTweetMessage)
		{
			tweetMessage = customTweetMessage;
		}
		else
		{
			tweetMessage = "Check out this Channel http://dev.junaio.com/channels/info/channel/" + arel.Scene.getID() + " on junaio!";
		}
				
		var url = encodeURI( "http://twitter.com/intent/tweet?text=" + tweetMessage );
//		var url = "http://www.junaio.com";
		
		//opens a webview with the according twitter-page
		arel.Media.openWebsite(url, false);
	};
	
	
	//Facebook
	this.shareFbURL = function (customURL)
	{
		var url;
		
		if(customURL)
		{
			url = encodeURI( "http://www.facebook.com/sharer.php?u=" + customURL);
		}
		else
		{
			url = encodeURI( "http://www.facebook.com/sharer.php?u=http://dev.junaio.com/channels/info/channel/" + arel.Scene.getID() );
		}
		
		//opens a webview with the according facebook-page
		arel.Media.openWebsite(url, false);
	};
	
	
	//GooglePlus
	this.shareGpURL = function (customURL)
	{
		var url;

		if(customURL)
		{
			url = encodeURI( "https://plus.google.com/share?url=" + customURL);
		}
		else
		{
			url = encodeURI( "https://plus.google.com/share?url=http://dev.junaio.com/channels/info/channel/" + arel.Scene.getID() );
		}
		
		//opens a webview with the according google-plus-page
		arel.Media.openWebsite(url, false);
	};
	
	
	
	/*
	 * Custom-Social-Objects
	 */
	
	
	this.addTwitterFunctionality = function (customObject, tweetMessage)
	{
		var social = this;
		
		try 
		{
			if(customObject.nodeType && customObject.nodeType == 1)
			{
				// adds the Twitter-Functionaltiy to the object
				customObject.onclick = function(){ social.sendTweetMessage( tweetMessage ); };
			}
			else
			{
				// adds a eventlistener to the object
				arel.Events.setListener( customObject, function(obj, type, message){social.handleTwitterModelEvents(obj, type, tweetMessage);});
			}
		}
		catch(e)
		{
			arel.Debug.error("Exception: " + e);
		}
		
	};
	
	
	this.addFacebookFunctionality = function (customObject, customUrl)
	{
		var social = this;
		
		try 
		{
			if(customObject.nodeType && customObject.nodeType == 1)
			{
				// adds the Facebook-Functionaltiy to the object
				customObject.onclick = function(){ social.shareFbURL( customUrl ); };
			}
			else
			{
				// adds a eventlistener to the object
				arel.Events.setListener( customObject, function(obj, type, url){social.handleFacebookModelEvents(obj, type, customUrl);});
			}
		}
		catch(e)
		{
			arel.Debug.error("Exception: " + e);
		}
		
	};
	
	
	/*
	 * Social-HTML-Overlay-Buttons
	 */
	
	
	//Twitter-Button
	this.addTweetButton = function (customTweetMessage)
	{
		//creats the according html-elements of the twitter-button
		var tweetButton = document.createElement("div");
		tweetButton.setAttribute("id", "tweetButton");
		tweetButton.setAttribute("style", this.cssTwitterButtonStyle);
		tweetButton.innerText = "Tweet";
		tweetButton.textContent = "Tweet";
		
		// adds the Twitter-Functionaltiy to the button
		this.addTwitterFunctionality(tweetButton, customTweetMessage);	
		
		//adds the button to the HTML-DOM
		document.getElementById("buttonContainer").appendChild(tweetButton);
	};
	
	
	//FB-Share-Button
	this.addFacebookShareButton = function (customURL)
	{			
		//creats the according html-elements of the fb-share-button
		var fbShareButton = document.createElement("a");
		fbShareButton.setAttribute("id", "fbShareButton");
		fbShareButton.setAttribute("style", this.cssFbShareButtonStyle);
		fbShareButton.innerText = "Share";
		fbShareButton.textContent = "Share";
		
		// adds the Facebook-Functionaltiy to the button
		this.addFacebookFunctionality(fbShareButton, customURL);
		
		//adds the button to the HTML-DOM
		document.getElementById("buttonContainer").appendChild(fbShareButton);
		
	};
	this.init();
	console.log("hey hey hey");
};

	
	



