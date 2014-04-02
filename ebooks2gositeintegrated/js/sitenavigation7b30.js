(function (b) { function c() { } for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop() ;) { b[a] = b[a] || c } })((function () { try { console.log(); return window.console; } catch (err) { return window.console = {}; } })());

$(function () {


    var userMenu = $("#sitenav-personal-info-menu"),
        userPanel = $("#sitenav-personal-info-panel"),
        notLogged = userMenu.find(".liSignInRedirect"),
        isLogged = userMenu.find(".dn.user-welcome");

    if (document.getElementById('AuthenticatedUser')) {
        notLogged.hide();
        isLogged.show();
    }
    else {
        userPanel.remove();
        notLogged.siblings(".arrow").remove();
        notLogged.show();
        isLogged.hide();
    }

    state = false;

    var naviButton = $('#toggle-link'),
        sitenavMain = $('#sitenav-main'),
        slogan = $('#telerik-slogan'),
        sitenav = $('#sitenav'),
        sitenaviPanel = $(".sitenavi-panel"),
        buttons = $('#sitenav-personal-info-menu li'),
        personalInfoPanel = $('#sitenav-personal-info-panel'),
        aboutUsPanel = $('#sitenav-about-us-panel'),
        speedIn = 800,
        speedOut = 600,
        doc = $.browser.msie || $.browser.mozilla ? $('html') : $('body'),
        kendoSlider = $("#slider");

    naviButton.click(function (e) {
        var $this = $(this);

        (!state) ? showSitenavMain() : hideSitenavMain();

        e.stopPropagation();
    });

    sitenav.add(sitenaviPanel).click(function (e) {
        e.stopPropagation();
    });

    doc.click(function (event) {
        if (state && sitenavMain.not(':animated')) {
            hideSitenavMain();
        }

        if (buttons.hasClass('active')) {
            buttons.removeClass('active');
            sitenaviPanel.fadeOut();
        }
    });

    function showSitenavMain() {


        if (!sitenavMain.is(':animated')) {

            if (kendoSlider.length > 0) kendoSlider.tlrkSlider("stop");
            buttons.removeClass('active').find('.sitenavi-panel').fadeOut();

            sitenavMain.animate({
                top: "-40"
            }, speedIn, 'easeOutBack', function () {
                state = true;
                //animate slogan
                slogan.css({ display: 'block' }).delay(100).animate({ bottom: -12, opacity: 1 });
            });

            naviButton.toggleClass('active');

        }
        else {
            return false;
        }
    }


    function hideSitenavMain() {

        if (!sitenavMain.is(':animated')) {
            //animate slogan
            slogan.animate({ opacity: 0 }, function () { $(this).css({ bottom: -22, display: 'none' }) });

            sitenavMain.animate({
                top: "-=520"
            }, speedOut, 'easeInBack', function () {
                state = false;
                naviButton.toggleClass('active');
                if (kendoSlider.length > 0) kendoSlider.tlrkSlider("start");
            });

        }
        else {
            return false;
        }
    }

    $(window).bind('scrollstop', function (e) {
        if (state && doc.scrollTop() < 330) {
            hideSitenavMain();
        }
    });

    //sign in
    buttons.on("click", function (e) {
        var $this = $(this);

        if ($this.find(".sign-input.login").is(":visible")) {
            return;
        }

        if (!$this.hasClass('active')) {
            buttons.removeClass('active');
            $('.sitenavi-panel').fadeOut();

            $this.addClass('active').find('.sitenavi-panel').stop(true, true).fadeIn();

            if (state) {
                hideSitenavMain();
            }
        }
        else {
            buttons.removeClass('active');
            $('.sitenavi-panel').fadeOut();
        }

        e.stopPropagation();
    });
});

//unComment
function unComment(e) { var t = e; for (var n = 0, r = t.length; n < r; n++) { var i = document.getElementById(t[n]); for (var s = 0, o = i.childNodes.length; s < o; s++) { var u = i.childNodes[s]; if (u.nodeType == 3) { if (u.nodeType == document.COMMENT_NODE) { i.innerHTML = u.nodeValue; break } } else { i.innerHTML = u.nodeValue } } } }

//scrollstop
(function () { var special = jQuery.event.special, uid1 = 'D' + (+new Date()), uid2 = 'D' + (+new Date() + 1); special.scrollstop = { latency: 300, setup: function () { var timer, handler = function (evt) { var _self = this, _args = arguments; if (timer) { clearTimeout(timer) } timer = setTimeout(function () { timer = null; evt.type = 'scrollstop'; jQuery.event.handle.apply(_self, _args) }, special.scrollstop.latency) }; jQuery(this).bind('scroll', handler).data(uid2, handler) }, teardown: function () { jQuery(this).unbind('scroll', jQuery(this).data(uid2)) } } })();

// jquery scroll - a custom stylable scrollbar Version 0.4 https://github.com/thomd/jquery-scroll Copyright (c) 2011 Thomas Duerr (me-at-thomd-dot-net) Licensed under the MIT license (https://raw.github.com/thomd/jquery-scroll/master/MIT-LICENSE) + fix for hidden element height
(function ($, document) { var methods = { init: function (fn, opts) { var options = $.extend({}, $.fn.scrollbar.defaults, opts); var navContainer = $("#sitenav-personal-info-panel"); return this.each(function () { var container = $(this), props = { arrows: options.arrows }; if (!container.height()) { navContainer.css({ visibility: 'hidden', display: 'block' }); container.css({ visibility: 'hidden', display: 'block' }) } options.containerHeight != "auto" && container.height(options.containerHeight), props.containerHeight = container.height(), props.contentHeight = $.fn.scrollbar.contentHeight(container); if (props.contentHeight <= props.containerHeight) return !0; this.scrollbar = new $.fn.scrollbar.Scrollbar(container, props, options), this.scrollbar.buildHtml().setHandle().appendEvents(), typeof fn == "function" && fn(container.find(".scrollbar-pane"), this.scrollbar) }) }, repaint: function () { return this.each(function () { this.scrollbar.repaint(); var navContainer = $("#sitenav-personal-info-panel"); $(this).css({ visibility: '', display: '' }); if (navContainer.css('visibility') == 'hidden') { navContainer.css({ visibility: '', display: '' }) } else navContainer.css('visibility', '') }) }, scrollto: function (to) { return this.each(function () { this.scrollbar.scrollto(to) }) } }; $.fn.scrollbar = function (method) { if (methods[method]) return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); if (typeof method == "function" || method === undefined) return methods.init.apply(this, arguments); if (typeof method == "object") return methods.init.apply(this, [null, method]); $.error("method '" + method + "' does not exist for $.fn.scrollbar") }, $.fn.scrollbar.defaults = { containerHeight: 100, arrows: !0, handleHeight: "auto", handleMinHeight: 30, scrollTimeout: 50, scrollStep: 20, scrollTimeoutArrows: 40, scrollStepArrows: 3 }, $.fn.scrollbar.Scrollbar = function (container, props, options) { this.container = container, this.props = props, this.opts = options, this.mouse = {}, this.props.arrows = this.container.hasClass("no-arrows") ? !1 : this.props.arrows }, $.fn.scrollbar.Scrollbar.prototype = { buildHtml: function () { this.container.wrapInner('<div class="scrollbar-pane"/>'), this.container.append('<div class="scrollbar-handle-container"><div class="scrollbar-handle"/></div>'), this.props.arrows && this.container.append('<div class="scrollbar-handle-up"/>').append('<div class="scrollbar-handle-down"/>'); var height = this.container.height(); return this.pane = this.container.find(".scrollbar-pane"), this.handle = this.container.find(".scrollbar-handle"), this.handleContainer = this.container.find(".scrollbar-handle-container"), this.handleArrows = this.container.find(".scrollbar-handle-up, .scrollbar-handle-down"), this.handleArrowUp = this.container.find(".scrollbar-handle-up"), this.handleArrowDown = this.container.find(".scrollbar-handle-down"), this.pane.defaultCss({ top: 0, left: 0 }), this.handleContainer.defaultCss({ right: 0 }), this.handle.defaultCss({ top: 0, right: 0 }), this.handleArrows.defaultCss({ right: 0 }), this.handleArrowUp.defaultCss({ top: 0 }), this.handleArrowDown.defaultCss({ bottom: 0 }), this.container.css({ position: this.container.css("position") === "absolute" ? "absolute" : "relative", overflow: "hidden", height: height }), this.pane.css({ position: "absolute", overflow: "visible", height: "auto" }), this.handleContainer.css({ position: "absolute", top: this.handleArrowUp.outerHeight(!0), height: this.props.containerHeight - this.handleArrowUp.outerHeight(!0) - this.handleArrowDown.outerHeight(!0) + "px" }), this.handle.css({ position: "absolute", cursor: "pointer" }), this.handleArrows.css({ position: "absolute", cursor: "pointer" }), this.pane.top = 0, this }, setHandle: function () { return this.props.handleContainerHeight = this.handleContainer.height(), this.props.contentHeight = this.pane.height(), this.props.handleHeight = this.opts.handleHeight == "auto" ? Math.max(Math.ceil(this.props.containerHeight * this.props.handleContainerHeight / this.props.contentHeight), this.opts.handleMinHeight) : this.opts.handleHeight, this.handle.height(this.props.handleHeight), this.handle.height(2 * this.handle.height() - this.handle.outerHeight(!0)), this.props.handlePosition = { min: 0, max: this.props.handleContainerHeight - this.props.handleHeight }, this.props.handleContentRatio = (this.props.contentHeight - this.props.containerHeight) / (this.props.handleContainerHeight - this.props.handleHeight), this.handle.top == undefined ? this.handle.top = 0 : this.handle.top = -1 * this.pane.top / this.props.handleContentRatio, this }, appendEvents: function () { return this.handle.bind("mousedown.handle", $.proxy(this, "startOfHandleMove")), this.handleContainer.bind("mousedown.handle", $.proxy(this, "onHandleContainerMousedown")), this.handleContainer.bind("mouseenter.container mouseleave.container", $.proxy(this, "onHandleContainerHover")), this.handleArrows.bind("mousedown.arrows", $.proxy(this, "onArrowsMousedown")), this.container.bind("mousewheel.container", $.proxy(this, "onMouseWheel")), this.container.bind("mouseenter.container mouseleave.container", $.proxy(this, "onContentHover")), this.handle.bind("click.scrollbar", this.preventClickBubbling), this.handleContainer.bind("click.scrollbar", this.preventClickBubbling), this.handleArrows.bind("click.scrollbar", this.preventClickBubbling), this }, mousePosition: function (ev) { return ev.pageY || ev.clientY + (document.documentElement.scrollTop || document.body.scrollTop) || 0 }, repaint: function () { this.setHandle(), this.setHandlePosition() }, scrollto: function (to) { var distance = 0; typeof to == "number" ? distance = (to < 0 ? 0 : to) / this.props.handleContentRatio : typeof to == "string" ? (to == "bottom" && (distance = this.props.handlePosition.max), to == "middle" && (distance = Math.ceil(this.props.handlePosition.max / 2))) : typeof to == "object" && !$.isPlainObject(to) && (distance = Math.ceil(to.position().top / this.props.handleContentRatio)), this.handle.top = distance, this.setHandlePosition(), this.setContentPosition() }, startOfHandleMove: function (ev) { ev.preventDefault(), ev.stopPropagation(), this.mouse.start = this.mousePosition(ev), this.handle.start = this.handle.top, $(document).bind("mousemove.handle", $.proxy(this, "onHandleMove")).bind("mouseup.handle", $.proxy(this, "endOfHandleMove")), this.handle.addClass("move"), this.handleContainer.addClass("move") }, onHandleMove: function (ev) { ev.preventDefault(); var distance = this.mousePosition(ev) - this.mouse.start; this.handle.top = this.handle.start + distance, this.setHandlePosition(), this.setContentPosition() }, endOfHandleMove: function (ev) { $(document).unbind(".handle"), this.handle.removeClass("move"), this.handleContainer.removeClass("move") }, setHandlePosition: function () { this.handle.top = this.handle.top > this.props.handlePosition.max ? this.props.handlePosition.max : this.handle.top, this.handle.top = this.handle.top < this.props.handlePosition.min ? this.props.handlePosition.min : this.handle.top, this.handle[0].style.top = this.handle.top + "px" }, setContentPosition: function () { this.pane.top = -1 * this.props.handleContentRatio * this.handle.top, this.pane[0].style.top = this.pane.top + "px" }, onMouseWheel: function (ev, delta) { this.handle.top -= delta * 6, this.setHandlePosition(), this.setContentPosition(), this.handle.top > this.props.handlePosition.min && this.handle.top < this.props.handlePosition.max && ev.preventDefault() }, onHandleContainerMousedown: function (ev) { ev.preventDefault(); if (!$(ev.target).hasClass("scrollbar-handle-container")) return !1; this.handle.direction = this.handle.offset().top < this.mousePosition(ev) ? 1 : -1, this.handle.step = this.opts.scrollStep; var that = this; $(document).bind("mouseup.handlecontainer", function () { clearInterval(timer), that.handle.unbind("mouseenter.handlecontainer"), $(document).unbind("mouseup.handlecontainer") }), this.handle.bind("mouseenter.handlecontainer", function () { clearInterval(timer) }); var timer = setInterval($.proxy(this.moveHandle, this), this.opts.scrollTimeout) }, onArrowsMousedown: function (ev) { ev.preventDefault(), this.handle.direction = $(ev.target).hasClass("scrollbar-handle-up") ? -1 : 1, this.handle.step = this.opts.scrollStepArrows, $(ev.target).addClass("move"); var timer = setInterval($.proxy(this.moveHandle, this), this.opts.scrollTimeoutArrows); $(document).one("mouseup.arrows", function () { clearInterval(timer), $(ev.target).removeClass("move") }) }, moveHandle: function () { this.handle.top = this.handle.direction === 1 ? Math.min(this.handle.top + this.handle.step, this.props.handlePosition.max) : Math.max(this.handle.top - this.handle.step, this.props.handlePosition.min), this.handle[0].style.top = this.handle.top + "px", this.setContentPosition() }, onContentHover: function (ev) { ev.type === "mouseenter" ? (this.container.addClass("hover"), this.handleContainer.addClass("hover")) : (this.container.removeClass("hover"), this.handleContainer.removeClass("hover")) }, onHandleContainerHover: function (ev) { ev.type === "mouseenter" ? this.handleArrows.addClass("hover") : this.handleArrows.removeClass("hover") }, preventClickBubbling: function (ev) { ev.stopPropagation() } }, $.fn.scrollbar.contentHeight = function (container) { var wrapper = container.wrapInner("<div/>").find(":first"), height = wrapper.css({ overflow: "hidden", zoom: "1" }).height(); return wrapper.replaceWith(wrapper.contents()), height }, $.fn.defaultCss = function (styles) { var notdef = { right: "auto", left: "auto", top: "auto", bottom: "auto", position: "static" }; return this.each(function () { var elem = $(this); for (var style in styles) elem.css(style) === notdef[style] && elem.css(style, styles[style]) }) }, $.event.special.mousewheel = { setup: function () { this.addEventListener ? (this.addEventListener("mousewheel", $.fn.scrollbar.mouseWheelHandler, !1), this.addEventListener("DOMMouseScroll", $.fn.scrollbar.mouseWheelHandler, !1)) : this.onmousewheel = $.fn.scrollbar.mouseWheelHandler }, teardown: function () { this.removeEventListener ? (this.removeEventListener("mousewheel", $.fn.scrollbar.mouseWheelHandler, !1), this.removeEventListener("DOMMouseScroll", $.fn.scrollbar.mouseWheelHandler, !1)) : this.onmousewheel = null } }, $.fn.extend({ mousewheel: function (fn) { return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel") }, unmousewheel: function (fn) { return this.unbind("mousewheel", fn) } }), $.fn.scrollbar.mouseWheelHandler = function (event) { var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = !0, deltaX = 0, deltaY = 0; return event = $.event.fix(orgEvent), event.type = "mousewheel", event.wheelDelta && (delta = event.wheelDelta / 120), event.detail && (delta = -event.detail / 3), orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaY = 0, deltaX = -1 * delta), orgEvent.wheelDeltaY !== undefined && (deltaY = orgEvent.wheelDeltaY / 120), orgEvent.wheelDeltaX !== undefined && (deltaX = -1 * orgEvent.wheelDeltaX / 120), args.unshift(event, delta, deltaX, deltaY), $.event.handle.apply(this, args) } })(jQuery, document);

//v1.3
jQuery["\x65\x61\x73\x69\x6E\x67"]["\x6A\x73\x77\x69\x6E\x67"] = jQuery["\x65\x61\x73\x69\x6E\x67"]["\x73\x77\x69\x6E\x67"]; jQuery["\x65\x78\x74\x65\x6E\x64"](jQuery["\x65\x61\x73\x69\x6E\x67"], { def: "\x65\x61\x73\x65\x4F\x75\x74\x51\x75\x61\x64", swing: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return jQuery["\x65\x61\x73\x69\x6E\x67"][jQuery["\x65\x61\x73\x69\x6E\x67"]["\x64\x65\x66"]](_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4); }, easeInQuad: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1 + _0x2a40x2; }, easeOutQuad: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return -_0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * (_0x2a40x1 - 2) + _0x2a40x2; }, easeInOutQuad: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }; return -_0x2a40x3 / 2 * ((--_0x2a40x1) * (_0x2a40x1 - 2) - 1) + _0x2a40x2; }, easeInCubic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }, easeOutCubic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * ((_0x2a40x1 = _0x2a40x1 / _0x2a40x4 - 1) * _0x2a40x1 * _0x2a40x1 + 1) + _0x2a40x2; }, easeInOutCubic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }; return _0x2a40x3 / 2 * ((_0x2a40x1 -= 2) * _0x2a40x1 * _0x2a40x1 + 2) + _0x2a40x2; }, easeInQuart: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }, easeOutQuart: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return -_0x2a40x3 * ((_0x2a40x1 = _0x2a40x1 / _0x2a40x4 - 1) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 - 1) + _0x2a40x2; }, easeInOutQuart: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }; return -_0x2a40x3 / 2 * ((_0x2a40x1 -= 2) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 - 2) + _0x2a40x2; }, easeInQuint: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }, easeOutQuint: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * ((_0x2a40x1 = _0x2a40x1 / _0x2a40x4 - 1) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + 1) + _0x2a40x2; }, easeInOutQuint: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + _0x2a40x2; }; return _0x2a40x3 / 2 * ((_0x2a40x1 -= 2) * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 * _0x2a40x1 + 2) + _0x2a40x2; }, easeInSine: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return -_0x2a40x3 * Math["\x63\x6F\x73"](_0x2a40x1 / _0x2a40x4 * (Math["\x50\x49"] / 2)) + _0x2a40x3 + _0x2a40x2; }, easeOutSine: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * Math["\x73\x69\x6E"](_0x2a40x1 / _0x2a40x4 * (Math["\x50\x49"] / 2)) + _0x2a40x2; }, easeInOutSine: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return -_0x2a40x3 / 2 * (Math["\x63\x6F\x73"](Math["\x50\x49"] * _0x2a40x1 / _0x2a40x4) - 1) + _0x2a40x2; }, easeInExpo: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return (_0x2a40x1 == 0) ? _0x2a40x2 : _0x2a40x3 * Math["\x70\x6F\x77"](2, 10 * (_0x2a40x1 / _0x2a40x4 - 1)) + _0x2a40x2; }, easeOutExpo: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return (_0x2a40x1 == _0x2a40x4) ? _0x2a40x2 + _0x2a40x3 : _0x2a40x3 * (-Math["\x70\x6F\x77"](2, -10 * _0x2a40x1 / _0x2a40x4) + 1) + _0x2a40x2; }, easeInOutExpo: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if (_0x2a40x1 == 0) { return _0x2a40x2; }; if (_0x2a40x1 == _0x2a40x4) { return _0x2a40x2 + _0x2a40x3; }; if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * Math["\x70\x6F\x77"](2, 10 * (_0x2a40x1 - 1)) + _0x2a40x2; }; return _0x2a40x3 / 2 * (-Math["\x70\x6F\x77"](2, -10 * --_0x2a40x1) + 2) + _0x2a40x2; }, easeInCirc: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return -_0x2a40x3 * (Math["\x73\x71\x72\x74"](1 - (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1) - 1) + _0x2a40x2; }, easeOutCirc: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 * Math["\x73\x71\x72\x74"](1 - (_0x2a40x1 = _0x2a40x1 / _0x2a40x4 - 1) * _0x2a40x1) + _0x2a40x2; }, easeInOutCirc: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return -_0x2a40x3 / 2 * (Math["\x73\x71\x72\x74"](1 - _0x2a40x1 * _0x2a40x1) - 1) + _0x2a40x2; }; return _0x2a40x3 / 2 * (Math["\x73\x71\x72\x74"](1 - (_0x2a40x1 -= 2) * _0x2a40x1) + 1) + _0x2a40x2; }, easeInElastic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { var _0x2a40x5 = 1.70158; var _0x2a40x6 = 0; var _0x2a40x7 = _0x2a40x3; if (_0x2a40x1 == 0) { return _0x2a40x2; }; if ((_0x2a40x1 /= _0x2a40x4) == 1) { return _0x2a40x2 + _0x2a40x3; }; if (!_0x2a40x6) { _0x2a40x6 = _0x2a40x4 * 0.3; }; if (_0x2a40x7 < Math["\x61\x62\x73"](_0x2a40x3)) { _0x2a40x7 = _0x2a40x3; var _0x2a40x5 = _0x2a40x6 / 4; } else { var _0x2a40x5 = _0x2a40x6 / (2 * Math["\x50\x49"]) * Math["\x61\x73\x69\x6E"](_0x2a40x3 / _0x2a40x7); }; return -(_0x2a40x7 * Math["\x70\x6F\x77"](2, 10 * (_0x2a40x1 -= 1)) * Math["\x73\x69\x6E"]((_0x2a40x1 * _0x2a40x4 - _0x2a40x5) * (2 * Math["\x50\x49"]) / _0x2a40x6)) + _0x2a40x2; }, easeOutElastic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { var _0x2a40x5 = 1.70158; var _0x2a40x6 = 0; var _0x2a40x7 = _0x2a40x3; if (_0x2a40x1 == 0) { return _0x2a40x2; }; if ((_0x2a40x1 /= _0x2a40x4) == 1) { return _0x2a40x2 + _0x2a40x3; }; if (!_0x2a40x6) { _0x2a40x6 = _0x2a40x4 * 0.3; }; if (_0x2a40x7 < Math["\x61\x62\x73"](_0x2a40x3)) { _0x2a40x7 = _0x2a40x3; var _0x2a40x5 = _0x2a40x6 / 4; } else { var _0x2a40x5 = _0x2a40x6 / (2 * Math["\x50\x49"]) * Math["\x61\x73\x69\x6E"](_0x2a40x3 / _0x2a40x7); }; return _0x2a40x7 * Math["\x70\x6F\x77"](2, -10 * _0x2a40x1) * Math["\x73\x69\x6E"]((_0x2a40x1 * _0x2a40x4 - _0x2a40x5) * (2 * Math["\x50\x49"]) / _0x2a40x6) + _0x2a40x3 + _0x2a40x2; }, easeInOutElastic: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { var _0x2a40x5 = 1.70158; var _0x2a40x6 = 0; var _0x2a40x7 = _0x2a40x3; if (_0x2a40x1 == 0) { return _0x2a40x2; }; if ((_0x2a40x1 /= _0x2a40x4 / 2) == 2) { return _0x2a40x2 + _0x2a40x3; }; if (!_0x2a40x6) { _0x2a40x6 = _0x2a40x4 * (0.3 * 1.5); }; if (_0x2a40x7 < Math["\x61\x62\x73"](_0x2a40x3)) { _0x2a40x7 = _0x2a40x3; var _0x2a40x5 = _0x2a40x6 / 4; } else { var _0x2a40x5 = _0x2a40x6 / (2 * Math["\x50\x49"]) * Math["\x61\x73\x69\x6E"](_0x2a40x3 / _0x2a40x7); }; if (_0x2a40x1 < 1) { return -0.5 * (_0x2a40x7 * Math["\x70\x6F\x77"](2, 10 * (_0x2a40x1 -= 1)) * Math["\x73\x69\x6E"]((_0x2a40x1 * _0x2a40x4 - _0x2a40x5) * (2 * Math["\x50\x49"]) / _0x2a40x6)) + _0x2a40x2; }; return _0x2a40x7 * Math["\x70\x6F\x77"](2, -10 * (_0x2a40x1 -= 1)) * Math["\x73\x69\x6E"]((_0x2a40x1 * _0x2a40x4 - _0x2a40x5) * (2 * Math["\x50\x49"]) / _0x2a40x6) * 0.5 + _0x2a40x3 + _0x2a40x2; }, easeInBack: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4, _0x2a40x5) { if (_0x2a40x5 == undefined) { _0x2a40x5 = 1.70158; }; return _0x2a40x3 * (_0x2a40x1 /= _0x2a40x4) * _0x2a40x1 * ((_0x2a40x5 + 1) * _0x2a40x1 - _0x2a40x5) + _0x2a40x2; }, easeOutBack: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4, _0x2a40x5) { if (_0x2a40x5 == undefined) { _0x2a40x5 = 1.70158; }; return _0x2a40x3 * ((_0x2a40x1 = _0x2a40x1 / _0x2a40x4 - 1) * _0x2a40x1 * ((_0x2a40x5 + 1) * _0x2a40x1 + _0x2a40x5) + 1) + _0x2a40x2; }, easeInOutBack: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4, _0x2a40x5) { if (_0x2a40x5 == undefined) { _0x2a40x5 = 1.70158; }; if ((_0x2a40x1 /= _0x2a40x4 / 2) < 1) { return _0x2a40x3 / 2 * (_0x2a40x1 * _0x2a40x1 * (((_0x2a40x5 *= (1.525)) + 1) * _0x2a40x1 - _0x2a40x5)) + _0x2a40x2; }; return _0x2a40x3 / 2 * ((_0x2a40x1 -= 2) * _0x2a40x1 * (((_0x2a40x5 *= (1.525)) + 1) * _0x2a40x1 + _0x2a40x5) + 2) + _0x2a40x2; }, easeInBounce: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { return _0x2a40x3 - jQuery["\x65\x61\x73\x69\x6E\x67"]["\x65\x61\x73\x65\x4F\x75\x74\x42\x6F\x75\x6E\x63\x65"](_0x2a40x0, _0x2a40x4 - _0x2a40x1, 0, _0x2a40x3, _0x2a40x4) + _0x2a40x2; }, easeOutBounce: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if ((_0x2a40x1 /= _0x2a40x4) < (1 / 2.75)) { return _0x2a40x3 * (7.5625 * _0x2a40x1 * _0x2a40x1) + _0x2a40x2; } else { if (_0x2a40x1 < (2 / 2.75)) { return _0x2a40x3 * (7.5625 * (_0x2a40x1 -= (1.5 / 2.75)) * _0x2a40x1 + 0.75) + _0x2a40x2; } else { if (_0x2a40x1 < (2.5 / 2.75)) { return _0x2a40x3 * (7.5625 * (_0x2a40x1 -= (2.25 / 2.75)) * _0x2a40x1 + 0.9375) + _0x2a40x2; } else { return _0x2a40x3 * (7.5625 * (_0x2a40x1 -= (2.625 / 2.75)) * _0x2a40x1 + 0.984375) + _0x2a40x2; }; }; }; }, easeInOutBounce: function (_0x2a40x0, _0x2a40x1, _0x2a40x2, _0x2a40x3, _0x2a40x4) { if (_0x2a40x1 < _0x2a40x4 / 2) { return jQuery["\x65\x61\x73\x69\x6E\x67"]["\x65\x61\x73\x65\x49\x6E\x42\x6F\x75\x6E\x63\x65"](_0x2a40x0, _0x2a40x1 * 2, 0, _0x2a40x3, _0x2a40x4) * 0.5 + _0x2a40x2; }; return jQuery["\x65\x61\x73\x69\x6E\x67"]["\x65\x61\x73\x65\x4F\x75\x74\x42\x6F\x75\x6E\x63\x65"](_0x2a40x0, _0x2a40x1 * 2 - _0x2a40x4, 0, _0x2a40x3, _0x2a40x4) * 0.5 + _0x2a40x3 * 0.5 + _0x2a40x2; } });


