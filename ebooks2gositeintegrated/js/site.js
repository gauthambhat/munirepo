 jt = jQuery.noConflict();
jt(function () {
     // start the ticker 
	jt('#js-news').ticker();
	
	// hide the release history when the page loads
	jt('#release-wrapper').css('margin-top', '-' + (jt('#release-wrapper').height() + 20) + 'px');

	// show/hide the release history on click
	jt('a[href="#release-history"]').toggle(function () {	
		jt('#release-wrapper').animate({
			marginTop: '0px'
		}, 600, 'linear');
	}, function () {
		jt('#release-wrapper').animate({
			marginTop: '-' + (jt('#release-wrapper').height() + 20) + 'px'
		}, 600, 'linear');
	});	
	
	jt('#download a').mousedown(function () {
		_gaq.push(['_trackEvent', 'download-button', 'clicked'])		
	});
});

// google analytics code
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6132309-2']);
_gaq.push(['_setDomainName', 'www.jquerynewsticker.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();