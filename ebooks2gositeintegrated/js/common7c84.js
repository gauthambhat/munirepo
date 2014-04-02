$(function () {

        var $document = $(document);

		// == Kendo Navigation > dropdowns functionality

		var header = $(".header-main"),
			submenus = header.find(".nav-submenu nav"),
            expander = header.find('a[href="#expand"]');

		expander.on("click", function (e) {console.log("x");
			var $this = $(this);
			submenus.fadeOut();
			$this.toggleClass("expanded");
			expander.not($this).removeClass("expanded");
			$this.siblings("nav").not(":animated").fadeToggle(250);
			e.stopPropagation();
			e.preventDefault();
		});

		////on click outside of dropdowns and searchpanel, they disappear
		$document.on("click", function () {
			searchPanel.fadeOut();
			submenus.fadeOut();
			expander.removeClass("expanded");
		});


		////opening Sitenav closes dropdown menus
		$("#toggle-link").on("click", function () {
			submenus.fadeOut();
			expander.removeClass("expanded");
		});

		////close dropdowns, sitenav and searchpanel on ESC key
		$document.keyup(function (e) {
			if (e.keyCode == 27) {
				//close dropdowns
				submenus.fadeOut();
				expander.removeClass("expanded");
				//close sitenav
				$("#toggle-link.active").click();
				//close searchpanel
				searchPanel.fadeOut();
			}
		});


        // == Search Panel in Navigation

        var searchPanel = $('#search-login');

        searchPanel.find('#search-close').on("click", function () {
            searchPanel.fadeOut();
        });
        header.find(".search-panel").on("click", function () {
                searchPanel.fadeIn(200, function(){
                    searchPanel.find("input.main-search").focus();
                });
                submenus.fadeOut();
                expander.removeClass("expanded");
                return false;
        });
        searchPanel.click(function (e) {
            e.stopPropagation();
        });


		// == Active states on main site navigations

			var footerNavi = $("#footer-navi"),
                curPage = window.location.pathname,
                nav1 = header.find("nav a:not([href='#expand'])"),
                nav2 = footerNavi.find("a");
                nav3 = $(".third-level-navi").find("a");

                processLinks(nav1.add(nav3), curPage)
                curPage = (curPage.split("index.html").length > 2) ? "/" + curPage.split("index.html")[1] + ".aspx" : curPage;
                processLinks(nav2, curPage)

            function processLinks(elems, curPage) {
                elems.each(function(){
                    var $link = $(this);
                    if ($link.attr("href") == curPage) $link.addClass("active");
                });
            }


});


// necessary global variables for our scripts

var GoSquared = {},
    _kiq = _kiq || [];

window._gstc_lt = +(new Date)
GoSquared.acct = "GSN-096897-X";

    function addJS(url) {
        var script = document.createElement("script");
        script.setAttribute("async", "true");
        script.setAttribute("src", url);
        document.body.appendChild(script);
    }

$(window).load(function () {


    //add kiss insights
    addJS("../s3.amazonaws.com/ki.js/24100/4Nr.js");

    //add goSquared
    window._gstc_lt = +(new Date);
    addJS("../d1l6p2sc9645hc.cloudfront.net/tracker.js");

});







