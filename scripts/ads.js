function AdsProvider() {
    
	
}

AdsProvider.prototype.isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i) ? true : false;
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i) ? true : false;
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) ? true : false;
            },
			Kindle: function () {
                return navigator.userAgent.match(/Silk/i) ? true : false;
            },
            any: function () {
                return (isMobile.Kindle() || isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
 };

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
	//var user_id = this.userId;//   // user's id
    
}

