function AdsProvider() {
    
	
}



AdsProvider.prototype.ShowInterstitial= function(user_id)
{
	console.log("function ShowInterstitial for user id");
	Promise.resolve(user_id).then(function(value) {
		console.log(value);
		var app_id = 7766386;  // your app's id
 
		admanInit({
		  user_id: value,
		  app_id: 7766386,
		  type: 'preloader'         // 'preloader' or 'rewarded' (default - 'preloader')
		   //,params: {preview: 1}   // to verify the correct operation of advertising
		}, onAdsReady, onNoAds);
	 
		function onAdsReady(adman) {
		  adman.onStarted(function () {console.log("onstart");});
		  adman.onCompleted(function() {console.log("oncompl");});          
		  adman.onSkipped(function() {console.log("onskip");});          
		  adman.onClicked(function() {console.log("onclick");});
		  adman.start('preroll');
		};
		function onNoAds() {console.log("noads");};
		});
	
    
}

AdsProvider.prototype.ShowReward= function(user_id, reward)
{
	console.log("function ShowInterstitial for user id");
	Promise.resolve(user_id).then(function(value) {
		console.log(value);
		var app_id = 7766386;  // your app's id
 
		admanInit({
		  user_id: value,
		  app_id: 7766386,
		  type: 'rewarded'         // 'preloader' or 'rewarded' (default - 'preloader')
		   //,params: {preview: 1}   // to verify the correct operation of advertising
		}, onAdsReady, onNoAds);
	 
		function onAdsReady(adman) {
		  adman.onStarted(function () {
			  console.log("onstart");
			  
			  });
		  adman.onCompleted(function() {
			  console.log("oncompl");
				onComplete(reward);
		  });          
		  adman.onSkipped(function() {console.log("onskip");});          
		  adman.onClicked(function() {console.log("onclick");});
		  adman.start('preroll');
		};
		function onNoAds() {console.log("noads");};
		});
	
    
}

