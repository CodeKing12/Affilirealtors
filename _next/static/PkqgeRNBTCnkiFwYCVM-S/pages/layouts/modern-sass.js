(window.webpackJsonp = window.webpackJsonp || []).push([
    [124], {
        "+SFK": function(e, t, n) {
            n("AUvm"), n("wgeU"), n("adOz"), n("dl0q"), e.exports = n("WEpk").Symbol
        },
        "+iuc": function(e, t, n) {
            n("wgeU"), n("FlQf"), n("bBy9"), n("B9jh"), n("dL40"), n("xvv9"), n("V+O7"), e.exports = n("WEpk").Set
        },
        "+jru": function(e, t, n) {
            n("aPfg")("WeakMap")
        },
        "+oT+": function(e, t, n) {
            var r = n("eVuF");

            function i(e, t, n, i, o, a, s) {
                try {
                    var l = e[a](s),
                        c = l.value
                } catch (u) {
                    return void n(u)
                }
                l.done ? t(c) : r.resolve(c).then(i, o)
            }
            e.exports = function(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new r(function(r, o) {
                        var a = e.apply(t, n);

                        function s(e) {
                            i(a, r, o, s, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, s, l, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }
        },
        "+plK": function(e, t, n) {
            n("ApPD"), e.exports = n("WEpk").Object.getPrototypeOf
        },
        "/+P4": function(e, t, n) {
            var r = n("Bhuq"),
                i = n("TRZx");

            function o(t) {
                return e.exports = o = i ? r : function(e) {
                    return e.__proto__ || r(e)
                }, o(t)
            }
            e.exports = o
        },
        "/0+H": function(e, t, n) {
            "use strict";
            var r = n("hfKm"),
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            r(t, "__esModule", {
                value: !0
            });
            var o = i(n("q1tI")),
                a = n("lwAK");

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    i = void 0 !== r && r,
                    o = e.hasQuery;
                return n || i && (void 0 !== o && o)
            }
            t.isInAmpMode = s, t.useAmp = function() {
                return s(o.default.useContext(a.AmpStateContext))
            }
        },
        "/4Y8": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("kOwS"),
                i = n("q1tI"),
                o = n.n(i),
                a = n("OS56"),
                s = n.n(a),
                l = n("1Yj4"),
                c = n("rhny"),
                u = n("ok1R"),
                p = o.a.createElement,
                f = {
                    dots: !0,
                    infinite: !0,
                    speed: 500,
                    arrows: !1,
                    autoplay: !1,
                    centerMode: !0,
                    swipeToSlide: !0,
                    centerPadding: "0px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !0
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: "160px",
                            padding: "20px",
                            slidesToScroll: 1,
                            centerMode: !0,
                            autoplay: !0,
                            dots: !0
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                };
            t.default = function() {
                var e = Object(i.useState)(!0),
                    t = e[0],
                    n = e[1];
                return p("section", {
                    className: "saas1 pricing",
                    id: "plan"
                }, p(l.a, null, p(c.a, {
                    md: "12",
                    className: "text-center"
                }, p("div", {
                    className: "title"
                }, p("img", {
                    alt: "title-logo",
                    className: "img-fluid",
                    src: "/assets/images/saas1/title-logo.png"
                }), p("div", {
                    className: "main-title"
                }, p("h2", {
                    className: "text-white"
                }, p("span", {
                    className: "theme-color"
                }, "O"), "ur ", p("span", {
                    className: "theme-color"
                }, "P"), "lan")), p("hr", null), p("div", {
                    className: "sub-title"
                }, p("p", {
                    className: "p-padding text-white"
                }, "Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens.")))), p(c.a, {
                    lg: "12",
                    md: "12",
                    sm: "12",
                    xs: "12",
                    className: "text-center p-0"
                }, p("div", {
                    className: "pricing "
                }, p("div", {
                    className: "pricing__switcher switcher"
                }, p("div", {
                    className: "switcher__buttons",
                    onClick: function() {
                        n(!t)
                    }
                }, p("div", {
                    className: "switcher__button monthly ".concat(t ? "switcher__button--enabled" : "")
                }, "Monthly"), p("div", {
                    className: "switcher__button yearly ".concat(t ? "" : "switcher__button--enabled")
                }, "Yearly ", p("span", null, "20% ", p("sup", null, "off"))), p("div", {
                    className: "switcher__border"
                })))))), p(l.a, null, p("div", {
                    className: "wrapper-full",
                    id: "monthly"
                }, p(u.a, null, p(c.a, {
                    lg: "12",
                    md: "12",
                    sm: "12",
                    xs: "12",
                    className: "text-center"
                }, p(s.a, Object(r.a)({
                    className: "owl-carousel owl-theme pricing-slider plan-box"
                }, f), p("div", {
                    className: "item"
                }, p("div", {
                    className: "price-box"
                }, p("h3", {
                    className: "price-heading"
                }, "free"), p("img", {
                    alt: "pan-line",
                    src: "/assets/images/saas1/plan-box.png"
                }), p("h4", {
                    className: "no-weight"
                }, "$", p("span", null, "0"), "/Month"), p("ul", null, p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "1"), "User Account"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "10"), "Team Members"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Emails Accounts"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Set And Manage"), p("li", null, "API & extension support"), p("li", null, "Developer support"), p("li", null, "A/B Testing")), p("a", {
                    className: "btn btn-default btn-white"
                }, "Sign up"))), p("div", {
                    className: "item"
                }, p("div", {
                    className: "price-box active"
                }, p("h3", {
                    className: "price-heading"
                }, "pro"), p("img", {
                    alt: "plan-line",
                    src: "/assets/images/saas1/plan-box.png"
                }), p("h4", {
                    className: "no-weight"
                }, "$", p("span", null, "49"), "/Month"), p("ul", null, p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "50"), "User Account"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "500"), " Team Member"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Emails Accounts"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Set And Manage"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "API & extension support"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Devloper support"), p("li", null, "A/B Testing")), p("a", {
                    className: "btn btn-default btn-white"
                }, "Sign up"))), p("div", {
                    className: "item"
                }, p("div", {
                    className: "price-box"
                }, p("h3", {
                    className: "price-heading"
                }, "ultra"), p("img", {
                    alt: "plan-line",
                    src: "/assets/images/saas1/plan-box.png"
                }), p("h4", {
                    className: "no-weight"
                }, "$", p("span", null, "99"), "/Month"), p("ul", null, p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "User Account"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Team Member"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Emails Accounts"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Set And Manage"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "API & extension support"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Developer support"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "A / B Testing")), p("a", {
                    className: "btn btn-default btn-white"
                }, "Sign up"))), p("div", {
                    className: "item"
                }, p("div", {
                    className: "price-box"
                }, p("h3", {
                    className: "price-heading"
                }, "ultra"), p("img", {
                    alt: "plan-line",
                    src: "/assets/images/saas1/plan-box.png"
                }), p("h4", {
                    className: "no-weight"
                }, "$", p("span", null, "99"), "/Month"), p("ul", null, p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "User Account"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Team Member"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), p("span", null, "Unlimited"), "Emails Accounts"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Set And Manage"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "API & extension support"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "Developer support"), p("li", null, p("img", {
                    alt: "plan-icon",
                    src: "/assets/images/saas1/plan-round.png"
                }), "A / B Testing")), p("a", {
                    className: "btn btn-default btn-white"
                }, "Sign up")))))))))
            }
        },
        "/HRN": function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        "/eQG": function(e, t, n) {
            n("v5Dd");
            var r = n("WEpk").Object;
            e.exports = function(e, t) {
                return r.getOwnPropertyDescriptor(e, t)
            }
        },
        "/h46": function(e, t, n) {
            n("cHUd")("Map")
        },
        "/jkW": function(e, t, n) {
            "use strict";
            n("hfKm")(t, "__esModule", {
                value: !0
            });
            var r = /\/\[[^/]+?\](?=\/|$)/;
            t.isDynamicRoute = function(e) {
                return r.test(e)
            }
        },
        "0Bsm": function(e, t, n) {
            "use strict";
            var r = n("KI45");
            t.__esModule = !0, t.default = function(e) {
                function t(t) {
                    return o.default.createElement(e, (0, i.default)({
                        router: (0, a.useRouter)()
                    }, t))
                }
                t.getInitialProps = e.getInitialProps, t.origGetInitialProps = e.origGetInitialProps, 0;
                return t
            };
            var i = r(n("htGi")),
                o = r(n("q1tI")),
                a = n("nOHt")
        },
        "0tVQ": function(e, t, n) {
            n("FlQf"), n("VJsP"), e.exports = n("WEpk").Array.from
        },
        "1YBW": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("kOwS"),
                i = n("q1tI"),
                o = n.n(i),
                a = n("OS56"),
                s = n.n(a),
                l = n("1Yj4"),
                c = n("ok1R"),
                u = n("rhny"),
                p = o.a.createElement,
                f = {
                    dots: !0,
                    infinite: !0,
                    speed: 500,
                    autoplay: !0,
                    swipeToSlide: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }, {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                };
            t.default = function() {
                return p("section", {
                    className: "saas1 build-bg"
                }, p("div", {
                    className: "build-right-slider"
                }, p(s.a, Object(r.a)({
                    className: "owl-carousel owl-theme sync2",
                    id: "sync2"
                }, f), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "work-slider",
                    className: "img-fluid work-slide",
                    src: "/assets/images/saas1/work.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "work-slider",
                    className: "img-fluid work-slide",
                    src: "/assets/images/saas1/work.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "work-slider",
                    className: "img-fluid work-slide",
                    src: "/assets/images/saas1/work.png"
                })))), p(l.a, null, p(c.a, null, p(u.a, {
                    lg: "6"
                }, p(s.a, Object(r.a)({
                    className: "sync1 owl-carousel owl-theme overflow-hidden",
                    id: "sync1"
                }, f), p("div", {
                    className: "item"
                }, p("div", {
                    className: "build-box"
                }, p("h3", {
                    className: "build-head text-white"
                }, p("span", {
                    className: "theme-color"
                }, "Let\u2019s "), "Build Something Great. Together"), p("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), p("ul", null, p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We provide free initial consultation and support."), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We work with some of the most successful businesses"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We Are Entrepreneurs & Innovators of Website Building"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We\u2019d love to hear from you to discuss web design.")))), p("div", {
                    className: "item"
                }, p("div", {
                    className: "build-box"
                }, p("h3", {
                    className: "build-head text-white"
                }, p("span", {
                    className: "theme-color"
                }, "Let\u2019s "), "Build Something Great. Together"), p("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), p("ul", null, p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We provide free initial consultation and support."), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We work with some of the most successful businesses"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We Are Entrepreneurs & Innovators of Website Building"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We\u2019d love to hear from you to discuss web design.")))), p("div", {
                    className: "item"
                }, p("div", {
                    className: "build-box"
                }, p("h3", {
                    className: "build-head text-white"
                }, p("span", {
                    className: "theme-color"
                }, "Let\u2019s "), "Build Something Great. Together"), p("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), p("ul", null, p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We provide free initial consultation and support."), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We work with some of the most successful businesses"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We Are Entrepreneurs & Innovators of Website Building"), p("li", null, p("img", {
                    alt: "icon",
                    src: "/assets/images/saas1/build-.png"
                }), "We\u2019d love to hear from you to discuss web design.")))))))))
            }
        },
        "1w3K": function(e, t, n) {
            "use strict";
            var r = s(n("Si88")),
                i = s(n("PAGr")),
                o = s(n("UnXY")),
                a = s(n("S3Uj"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                Transition: a.default,
                TransitionGroup: o.default,
                ReplaceTransition: i.default,
                CSSTransition: r.default
            }
        },
        "2Nb0": function(e, t, n) {
            n("FlQf"), n("bBy9"), e.exports = n("zLkG").f("iterator")
        },
        "2PDY": function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }
        },
        "3GJH": function(e, t, n) {
            n("lCc8");
            var r = n("WEpk").Object;
            e.exports = function(e, t) {
                return r.create(e, t)
            }
        },
        "4JlD": function(e, t, n) {
            "use strict";
            var r = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(e, t, n, s) {
                return t = t || "&", n = n || "=", null === e && (e = void 0), "object" === typeof e ? o(a(e), function(a) {
                    var s = encodeURIComponent(r(a)) + n;
                    return i(e[a]) ? o(e[a], function(e) {
                        return s + encodeURIComponent(r(e))
                    }).join(t) : s + encodeURIComponent(r(e[a]))
                }).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
            };
            var i = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };

            function o(e, t) {
                if (e.map) return e.map(t);
                for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n
            }
            var a = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
        },
        "4wDe": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("1Yj4"),
                a = n("ok1R"),
                s = n("rhny"),
                l = i.a.createElement;
            t.default = function() {
                return l("footer", {
                    className: "saas1 footer2"
                }, l(o.a, null, l(a.a, null, l(s.a, {
                    md: "3"
                }, l("div", {
                    className: "logo-sec"
                }, l("div", {
                    className: "footer-title mobile-title"
                }, l("h3", {
                    className: "text-white"
                }, "About Us")), l("div", {
                    className: "footer-contant"
                }, l("img", {
                    alt: "",
                    className: "img-fluid footer-logo",
                    src: "/assets/images/logo/3.png"
                }), l("div", {
                    className: "footer-para"
                }, l("h6", {
                    className: "text-white para-address"
                }, "Sassy"), l("h6", {
                    className: "text-white para-address"
                }, "324 Madison Street New york "), l("h6", {
                    className: "text-white para-address"
                }, "City,NY 10001.")), l("ul", {
                    className: "d-d-flex footer-social social"
                }, l("li", {
                    className: "footer-social-list"
                }, l("a", {
                    href: "#"
                }, l("i", {
                    "aria-hidden": "true",
                    className: "fa fa-facebook"
                }))), l("li", {
                    className: "footer-social-list"
                }, l("a", {
                    href: "#"
                }, l("i", {
                    "aria-hidden": "true",
                    className: "fa fa-twitter"
                }))), l("li", {
                    className: "footer-social-list"
                }, l("a", {
                    href: "#"
                }, l("i", {
                    "aria-hidden": "true",
                    className: "fa fa-google"
                }))))))), l(s.a, {
                    md: "3"
                }, l("div", {
                    className: "footer-title mobile-title"
                }, l("h3", {
                    className: "text-white"
                }, "services")), l("div", {
                    className: "footer-contant"
                }, l("h5", {
                    className: "footer-headings"
                }, "services"), l("div", null, l("ul", {
                    className: "footer-lists"
                }, l("li", null, l("a", {
                    href: "#"
                }, "Portfolio Website")), l("li", null, l("a", {
                    href: "#"
                }, "Set up an account")), l("li", null, l("a", {
                    href: "#"
                }, "Invoice Creation")), l("li", null, l("a", {
                    href: "#"
                }, "Get Our Specials")))))), l(s.a, {
                    md: "3"
                }, l("div", {
                    className: "footer-title mobile-title"
                }, l("h3", {
                    className: "text-white"
                }, "brand")), l("div", {
                    className: "footer-contant"
                }, l("h5", {
                    className: "footer-headings"
                }, "brand"), l("div", null, l("ul", {
                    className: "footer-lists"
                }, l("li", null, l("a", {
                    href: "#"
                }, "Chat24")), l("li", null, l("a", {
                    href: "#"
                }, "Zoom")), l("li", null, l("a", {
                    href: "#"
                }, "Alpha Payment")), l("li", null, l("a", {
                    href: "#"
                }, "Upwork")))))), l(s.a, {
                    md: "3"
                }, l("div", {
                    className: "footer-title mobile-title"
                }, l("h3", {
                    className: "text-white"
                }, "Support")), l("div", {
                    className: "footer-contant"
                }, l("h5", {
                    className: "footer-headings"
                }, "Support"), l("div", null, l("ul", {
                    className: "footer-lists"
                }, l("li", null, l("a", {
                    href: "#"
                }, "For Freelancers")), l("li", null, l("a", {
                    href: "#"
                }, "For Companies")), l("li", null, l("a", {
                    href: "#"
                }, "For Business")), l("li", null, l("a", {
                    href: "#"
                }, "General Help")))))))))
            }
        },
        "5Uuq": function(e, t, n) {
            var r = n("Jo+v"),
                i = n("hfKm"),
                o = n("G4HQ");

            function a() {
                if ("function" !== typeof o) return null;
                var e = new o;
                return a = function() {
                    return e
                }, e
            }
            e.exports = function(e) {
                if (e && e.__esModule) return e;
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {};
                if (null != e) {
                    var o = i && r;
                    for (var s in e)
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            var l = o ? r(e, s) : null;
                            l && (l.get || l.set) ? i(n, s, l) : n[s] = e[s]
                        }
                }
                return n.default = e, t && t.set(e, n), n
            }
        },
        "6/1s": function(e, t, n) {
            var r = n("YqAc")("meta"),
                i = n("93I4"),
                o = n("B+OT"),
                a = n("2faE").f,
                s = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                c = !n("KUxP")(function() {
                    return l(Object.preventExtensions({}))
                }),
                u = function(e) {
                    a(e, r, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                p = e.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!o(e, r)) {
                            if (!l(e)) return "F";
                            if (!t) return "E";
                            u(e)
                        }
                        return e[r].i
                    },
                    getWeak: function(e, t) {
                        if (!o(e, r)) {
                            if (!l(e)) return !0;
                            if (!t) return !1;
                            u(e)
                        }
                        return e[r].w
                    },
                    onFreeze: function(e) {
                        return c && p.NEED && l(e) && !o(e, r) && u(e), e
                    }
                }
        },
        "61Hx": function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n("q1tI"),
                    i = n.n(r),
                    o = n("YFqc"),
                    a = n.n(o),
                    s = n("ebB4"),
                    l = n("1Yj4"),
                    c = n("ok1R"),
                    u = i.a.createElement;
                t.a = function() {
                    var t = Object(r.useState)(s.a),
                        n = t[0],
                        i = t[1],
                        o = Object(r.useState)(!1),
                        p = o[0],
                        f = o[1];
                    Object(r.useEffect)(function() {
                        var e = location.pathname;
                        n.filter(function(t) {
                            if (t.path === e && d(t), !t.children) return !1;
                            t.children.filter(function(t) {
                                if (t.path === e && d(t), !t.children) return !1;
                                t.children.filter(function(t) {
                                    t.path === e && d(t)
                                })
                            })
                        })
                    }, []);
                    var d = function(e) {
                            s.a.filter(function(t) {
                                t != e && (t.active = !1), t.children && t.children.includes(e) && (t.active = !0), t.children && t.children.filter(function(n) {
                                    n.children && n.children.includes(e) && (t.active = !0, n.active = !0)
                                })
                            }), e.active = !e.active, i({
                                mainmenu: s.a
                            })
                        },
                        h = function(e) {
                            e.active || s.a.forEach(function(t) {
                                if (s.a.includes(e) && (t.active = !1), !t.children) return !1;
                                t.children.forEach(function(n) {
                                    if (t.children.includes(e) && (n.active = !1), !n.children) return !1;
                                    n.children.forEach(function(t) {
                                        n.children.includes(e) && (t.active = !1)
                                    })
                                })
                            }), e.active = !e.active, i({
                                mainmenu: s.a
                            })
                        };
                    return u("div", {
                        className: "navbar",
                        id: "togglebtn"
                    }, u("div", {
                        className: "responsive-btn"
                    }, u("a", {
                        className: "btn-back",
                        onClick: function() {
                            f(!p), document.querySelector(".navbar").classList.remove("openSidebar")
                        }
                    }, u("h5", null, "back"))), u("ul", {
                        className: "main-menu"
                    }, s.a.slice(0, 3).map(function(t, n) {
                        return u("li", {
                            key: n,
                            className: " ".concat(t.megaMenu ? "mega-menu" : "")
                        }, t.sidebartitle ? u("div", {
                            className: "dropdown"
                        }, t.sidebartitle) : "", "sub" === t.type ? u("a", {
                            className: "dropdown",
                            href: "#javascript",
                            onClick: function() {
                                return h(t)
                            }
                        }, u("span", null, t.title)) : "", "link" === t.type ? u(a.a, {
                            href: "".concat(e.env.PUBLIC_URL).concat(t.path),
                            className: "".concat(t.active ? "active" : ""),
                            onClick: function() {
                                return h(t)
                            }
                        }, u("span", null, t.title), t.children ? u("i", {
                            className: "fa fa-angle-right pull-right"
                        }) : "") : "", u("div", {
                            className: "mega-menu-container resize ".concat(t.active ? "opensubmenu" : "")
                        }, !0 === t.megaMenu ? u(l.a, null, u(c.a, null, t.children.map(function(e, n) {
                            return u("div", {
                                className: "".concat("small" == t.megaMenuType ? "col-lg-4" : "medium" == t.megaMenuType ? "col-lg-3" : "large" == t.megaMenuType ? "col" : "", " "),
                                key: n
                            }, u("div", {
                                className: "menu-container"
                            }, u("a", {
                                className: "menu-head"
                            }, e.title), u("ul", {
                                className: "menu-icon ".concat(e.title ? "openSubChildMenu" : "")
                            }, "Elements" === t.title ? e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, u("a", {
                                    href: e.path
                                }, u("i", {
                                    className: "icon-".concat(e.icon)
                                }), e.title))
                            }) : e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, u("a", {
                                    href: e.path
                                }, e.title))
                            }))))
                        }))) : ""), t.children && !t.megaMenu ? u("ul", {
                            className: "".concat(t.active ? "menu-open activeSubmenu" : ""),
                            style: t.active ? {
                                opacity: 1,
                                transition: "opacity 500ms ease-in"
                            } : {}
                        }, t.children.map(function(e, t) {
                            return u("li", {
                                key: t,
                                className: "".concat(e.children ? "sub-menu " : "")
                            }, "sub" === e.type ? u("a", {
                                href: "#javascript",
                                onClick: function() {
                                    return h(e)
                                }
                            }, e.title) : "", "link" === e.type ? u(a.a, {
                                href: "".concat(e.path)
                            }, u("a", null, "    ", e.title, " ")) : "", e.children ? u("ul", {
                                className: "".concat(e.active ? "menu-open" : "active")
                            }, e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, "link" === e.type ? u(a.a, {
                                    href: "".concat(e.path)
                                }, u("a", {
                                    className: "sub-menu-title"
                                }, e.title)) : "")
                            })) : "")
                        })) : "")
                    })), u("ul", {
                        className: "main-menu"
                    }, s.a.slice(3, 7).map(function(t, n) {
                        return u("li", {
                            key: n,
                            className: " ".concat(t.megaMenu ? "mega-menu" : "")
                        }, t.sidebartitle ? u("div", {
                            className: "dropdown"
                        }, t.sidebartitle) : "", "sub" === t.type ? u("a", {
                            className: "dropdown",
                            href: "#javascript",
                            onClick: function() {
                                return h(t)
                            }
                        }, u("span", null, t.title)) : "", "link" === t.type ? u(a.a, {
                            href: "".concat(e.env.PUBLIC_URL).concat(t.path),
                            className: "".concat(t.active ? "active" : ""),
                            onClick: function() {
                                return h(t)
                            }
                        }, u("span", null, t.title), t.children ? u("i", {
                            className: "fa fa-angle-right pull-right"
                        }) : "") : "", u("div", {
                            className: "mega-menu-container ".concat("Elements" === t.title ? "resize" : "", " ").concat(t.active ? "opensubmenu activeSubmenu" : "")
                        }, !0 === t.megaMenu ? u(l.a, null, u(c.a, null, t.children.map(function(e, n) {
                            return u("div", {
                                className: "".concat("small" == t.megaMenuType ? "col-lg-4" : "medium" == t.megaMenuType ? "col-lg-3" : "large" == t.megaMenuType ? "col" : "", " "),
                                key: n
                            }, u("div", {
                                className: "menu-container"
                            }, u("a", {
                                className: "menu-head"
                            }, e.title), u("ul", {
                                className: "menu-icon ".concat(e.title ? "openSubChildMenu" : "")
                            }, "Elements" === t.title ? e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, u("a", {
                                    href: e.path
                                }, u("i", {
                                    className: "icon-".concat(e.icon)
                                }), e.title))
                            }) : e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, u("a", {
                                    href: e.path
                                }, e.title))
                            }))))
                        }))) : ""), t.children && !t.megaMenu ? u("ul", {
                            className: "".concat(t.active ? "menu-open activeSubmenu" : ""),
                            style: t.active ? {
                                opacity: 1,
                                transition: "opacity 500ms ease-in"
                            } : {}
                        }, t.children.map(function(e, t) {
                            return u("li", {
                                key: t,
                                className: "".concat(e.children ? "sub-menu " : "")
                            }, "sub" === e.type ? u("a", {
                                href: "#javascript",
                                onClick: function() {
                                    return h(e)
                                }
                            }, e.title) : "", "link" === e.type ? u(a.a, {
                                href: "".concat(e.path)
                            }, u("a", null, "    ", e.title, " ")) : "", e.children ? u("ul", {
                                className: "".concat(e.active ? "menu-open activeSubmenu" : "active")
                            }, e.children.map(function(e, t) {
                                return u("li", {
                                    key: t
                                }, "link" === e.type ? u(a.a, {
                                    href: "".concat(e.path)
                                }, u("a", {
                                    className: "sub-menu-title"
                                }, e.title)) : "")
                            })) : "")
                        })) : "")
                    })))
                }
            }).call(this, n("8oxB"))
        },
        "6tYh": function(e, t, n) {
            var r = n("93I4"),
                i = n("5K7Z"),
                o = function(e, t) {
                    if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
                };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                    try {
                        (r = n("2GTP")(Function.call, n("vwuL").f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                    } catch (i) {
                        t = !0
                    }
                    return function(e, n) {
                        return o(e, n), t ? e.__proto__ = n : r(e, n), e
                    }
                }({}, !1) : void 0),
                check: o
            }
        },
        "8+Nu": function(e, t, n) {
            var r = n("8bdy"),
                i = n("fprZ"),
                o = n("Bh1o");
            e.exports = function(e, t) {
                return r(e) || i(e, t) || o()
            }
        },
        "8//2": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = l(n("q1tI")),
                i = n("ueNE"),
                o = l(n("pIsd")),
                a = l(n("BBPU")),
                s = n("x9Za");

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(n, !0).forEach(function(t) {
                        g(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = (0, s.canUseDOM)() && n("jpXb"),
                b = function(e) {
                    function t(e) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = function(e, t) {
                            return !t || "object" !== c(t) && "function" !== typeof t ? m(e) : t
                        }(this, h(t).call(this, e)), g(m(n), "innerSliderRefHandler", function(e) {
                            return n.innerSlider = e
                        }), g(m(n), "slickPrev", function() {
                            return n.innerSlider.slickPrev()
                        }), g(m(n), "slickNext", function() {
                            return n.innerSlider.slickNext()
                        }), g(m(n), "slickGoTo", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return n.innerSlider.slickGoTo(e, t)
                        }), g(m(n), "slickPause", function() {
                            return n.innerSlider.pause("paused")
                        }), g(m(n), "slickPlay", function() {
                            return n.innerSlider.autoPlay("play")
                        }), n.state = {
                            breakpoint: null
                        }, n._responsiveMediaHandlers = [], n
                    }
                    var n, l, p;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && v(e, t)
                    }(t, r["default"].Component), n = t, (l = [{
                        key: "media",
                        value: function(e, t) {
                            y.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map(function(e) {
                                    return e.breakpoint
                                });
                                t.sort(function(e, t) {
                                    return e - t
                                }), t.forEach(function(n, r) {
                                    var i;
                                    i = 0 === r ? (0, o.default)({
                                        minWidth: 0,
                                        maxWidth: n
                                    }) : (0, o.default)({
                                        minWidth: t[r - 1] + 1,
                                        maxWidth: n
                                    }), (0, s.canUseDOM)() && e.media(i, function() {
                                        e.setState({
                                            breakpoint: n
                                        })
                                    })
                                });
                                var n = (0, o.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, s.canUseDOM)() && this.media(n, function() {
                                    e.setState({
                                        breakpoint: null
                                    })
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._responsiveMediaHandlers.forEach(function(e) {
                                y.unregister(e.query, e.handler)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter(function(e) {
                                return e.breakpoint === n.state.breakpoint
                            }))[0].settings ? "unslick" : f({}, a.default, {}, this.props, {}, t[0].settings) : f({}, a.default, {}, this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var o = r.default.Children.toArray(this.props.children);
                            o = o.filter(function(e) {
                                return "string" === typeof e ? !!e.trim() : !!e
                            }), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var s = [], l = null, c = 0; c < o.length; c += e.rows * e.slidesPerRow) {
                                for (var p = [], d = c; d < c + e.rows * e.slidesPerRow; d += e.slidesPerRow) {
                                    for (var h = [], m = d; m < d + e.slidesPerRow && (e.variableWidth && o[m].props.style && (l = o[m].props.style.width), !(m >= o.length)); m += 1) h.push(r.default.cloneElement(o[m], {
                                        key: 100 * c + 10 * d + m,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    p.push(r.default.createElement("div", {
                                        key: 10 * c + d
                                    }, h))
                                }
                                e.variableWidth ? s.push(r.default.createElement("div", {
                                    key: c,
                                    style: {
                                        width: l
                                    }
                                }, p)) : s.push(r.default.createElement("div", {
                                    key: c
                                }, p))
                            }
                            if ("unslick" === e) {
                                var v = "regular slider " + (this.props.className || "");
                                return r.default.createElement("div", {
                                    className: v
                                }, s)
                            }
                            return s.length <= e.slidesToShow && (e.unslick = !0), r.default.createElement(i.InnerSlider, u({
                                style: this.props.style,
                                ref: this.innerSliderRefHandler
                            }, e), s)
                        }
                    }]) && d(n.prototype, l), p && d(n, p), t
                }();
            t.default = b
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            var r = n("ttDY"),
                i = n("hfKm"),
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            i(t, "__esModule", {
                value: !0
            });
            var a = o(n("q1tI")),
                s = o(n("Xuae")),
                l = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        key: "charSet",
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    key: "viewport",
                    name: "viewport",
                    content: "width=device-width,minimum-scale=1,initial-scale=1"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            t.defaultHead = p;
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                return e.reduce(function(e, t) {
                    var n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }, []).reduce(f, []).reverse().concat(p(t.inAmpMode)).filter(function() {
                    var e = new r,
                        t = new r,
                        n = new r,
                        i = {};
                    return function(o) {
                        if (o.key && "number" !== typeof o.key && 0 === o.key.indexOf(".$")) return !e.has(o.key) && (e.add(o.key), !0);
                        if (e.has(".$".concat(o.key))) return !1;
                        switch (o.type) {
                            case "title":
                            case "base":
                                if (t.has(o.type)) return !1;
                                t.add(o.type);
                                break;
                            case "meta":
                                for (var a = 0, s = d.length; a < s; a++) {
                                    var l = d[a];
                                    if (o.props.hasOwnProperty(l))
                                        if ("charSet" === l) {
                                            if (n.has(l)) return !1;
                                            n.add(l)
                                        } else {
                                            var c = o.props[l],
                                                u = i[l] || new r;
                                            if (u.has(c)) return !1;
                                            u.add(c), i[l] = u
                                        }
                                }
                        }
                        return !0
                    }
                }()).reverse().map(function(e, t) {
                    var n = e.key || t;
                    return a.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            var m = s.default();

            function v(e) {
                var t = e.children;
                return a.default.createElement(l.AmpStateContext.Consumer, null, function(e) {
                    return a.default.createElement(c.HeadManagerContext.Consumer, null, function(n) {
                        return a.default.createElement(m, {
                            reduceComponentsToState: h,
                            handleStateChange: n,
                            inAmpMode: u.isInAmpMode(e)
                        }, t)
                    })
                })
            }
            v.rewind = m.rewind, t.default = v
        },
        "8PcY": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getChildMapping = i, t.mergeChildMappings = o, t.getInitialChildMapping = function(e, t) {
                return i(e.children, function(n) {
                    return (0, r.cloneElement)(n, {
                        onExited: t.bind(null, n),
                        in: !0,
                        appear: a(n, "appear", e),
                        enter: a(n, "enter", e),
                        exit: a(n, "exit", e)
                    })
                })
            }, t.getNextChildMapping = function(e, t, n) {
                var s = i(e.children),
                    l = o(t, s);
                return Object.keys(l).forEach(function(i) {
                    var o = l[i];
                    if ((0, r.isValidElement)(o)) {
                        var c = i in t,
                            u = i in s,
                            p = t[i],
                            f = (0, r.isValidElement)(p) && !p.props.in;
                        !u || c && !f ? u || !c || f ? u && c && (0, r.isValidElement)(p) && (l[i] = (0, r.cloneElement)(o, {
                            onExited: n.bind(null, o),
                            in: p.props.in,
                            exit: a(o, "exit", e),
                            enter: a(o, "enter", e)
                        })) : l[i] = (0, r.cloneElement)(o, { in: !1
                        }) : l[i] = (0, r.cloneElement)(o, {
                            onExited: n.bind(null, o),
                            in: !0,
                            exit: a(o, "exit", e),
                            enter: a(o, "enter", e)
                        })
                    }
                }), l
            };
            var r = n("q1tI");

            function i(e, t) {
                var n = Object.create(null);
                return e && r.Children.map(e, function(e) {
                    return e
                }).forEach(function(e) {
                    n[e.key] = function(e) {
                        return t && (0, r.isValidElement)(e) ? t(e) : e
                    }(e)
                }), n
            }

            function o(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var r, i = Object.create(null),
                    o = [];
                for (var a in e) a in t ? o.length && (i[a] = o, o = []) : o.push(a);
                var s = {};
                for (var l in t) {
                    if (i[l])
                        for (r = 0; r < i[l].length; r++) {
                            var c = i[l][r];
                            s[i[l][r]] = n(c)
                        }
                    s[l] = n(l)
                }
                for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]);
                return s
            }

            function a(e, t, n) {
                return null != n[t] ? n[t] : e.props[t]
            }
        },
        "8bdy": function(e, t, n) {
            var r = n("p0XB");
            e.exports = function(e) {
                if (r(e)) return e
            }
        },
        "8gHz": function(e, t, n) {
            var r = n("5K7Z"),
                i = n("eaoh"),
                o = n("UWiX")("species");
            e.exports = function(e, t) {
                var n, a = r(e).constructor;
                return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n)
            }
        },
        "8iia": function(e, t, n) {
            var r = n("QMMT"),
                i = n("RRc/");
            e.exports = function(e) {
                return function() {
                    if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                    return i(this)
                }
            }
        },
        "8oxB": function(e, t) {
            var n, r, i = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var l, c = [],
                u = !1,
                p = -1;

            function f() {
                u && l && (u = !1, l.length ? c = l.concat(c) : p = -1, c.length && d())
            }

            function d() {
                if (!u) {
                    var e = s(f);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (l = c, c = []; ++p < t;) l && l[p].run();
                        p = -1, t = c.length
                    }
                    l = null, u = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function m() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || u || s(d)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        "9/5/": function(e, t, n) {
            (function(t) {
                var n = "Expected a function",
                    r = NaN,
                    i = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    l = /^0o[0-7]+$/i,
                    c = parseInt,
                    u = "object" == typeof t && t && t.Object === Object && t,
                    p = "object" == typeof self && self && self.Object === Object && self,
                    f = u || p || Function("return this")(),
                    d = Object.prototype.toString,
                    h = Math.max,
                    m = Math.min,
                    v = function() {
                        return f.Date.now()
                    };

                function g(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function y(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && d.call(e) == i
                        }(e)) return r;
                    if (g(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = g(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(o, "");
                    var n = s.test(e);
                    return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e
                }
                e.exports = function(e, t, r) {
                    var i, o, a, s, l, c, u = 0,
                        p = !1,
                        f = !1,
                        d = !0;
                    if ("function" != typeof e) throw new TypeError(n);

                    function b(t) {
                        var n = i,
                            r = o;
                        return i = o = void 0, u = t, s = e.apply(r, n)
                    }

                    function w(e) {
                        var n = e - c;
                        return void 0 === c || n >= t || n < 0 || f && e - u >= a
                    }

                    function k() {
                        var e = v();
                        if (w(e)) return S(e);
                        l = setTimeout(k, function(e) {
                            var n = t - (e - c);
                            return f ? m(n, a - (e - u)) : n
                        }(e))
                    }

                    function S(e) {
                        return l = void 0, d && i ? b(e) : (i = o = void 0, s)
                    }

                    function O() {
                        var e = v(),
                            n = w(e);
                        if (i = arguments, o = this, c = e, n) {
                            if (void 0 === l) return function(e) {
                                return u = e, l = setTimeout(k, t), p ? b(e) : s
                            }(c);
                            if (f) return l = setTimeout(k, t), b(c)
                        }
                        return void 0 === l && (l = setTimeout(k, t)), s
                    }
                    return t = y(t) || 0, g(r) && (p = !!r.leading, a = (f = "maxWait" in r) ? h(y(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d), O.cancel = function() {
                        void 0 !== l && clearTimeout(l), u = 0, i = c = o = l = void 0
                    }, O.flush = function() {
                        return void 0 === l ? s : S(v())
                    }, O
                }
            }).call(this, n("yLpj"))
        },
        "9BDd": function(e, t, n) {
            n("GvbO"), e.exports = n("WEpk").Array.isArray
        },
        "9n7U": function(e, t) {
            e.exports = {
                FeatureData: [{
                    img: "/assets/images/saas1/feature/1.png",
                    heading: "Responsive",
                    layout: "Layout",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }, {
                    img: "/assets/images/saas1/feature/2.png",
                    heading: "Saas Landing",
                    layout: "Page",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }, {
                    img: "/assets/images/saas1/feature/3.png",
                    heading: "Smart",
                    layout: "Responsive",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }, {
                    img: "/assets/images/saas1/feature/4.png",
                    heading: "Smart and",
                    layout: "optimized",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }, {
                    img: "/assets/images/saas1/feature/5.png",
                    heading: "Well",
                    layout: "Documented",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }, {
                    img: "/assets/images/saas1/feature/6.png",
                    heading: "Easy",
                    layout: "Integration",
                    desc: "Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists"
                }],
                NavData: [{
                    img: "/assets/images/saas1/tab-icon/installation.png",
                    title: "Initializing"
                }, {
                    img: "/assets/images/saas1/tab-icon/001-tap.png",
                    title: "Add Instances"
                }, {
                    img: "/assets/images/saas1/tab-icon/button.png",
                    title: "Configuration"
                }, {
                    img: "/assets/images/saas1/tab-icon/002-settings.png",
                    title: "API Setting"
                }, {
                    img: "/assets/images/saas1/tab-icon/key-1.png",
                    title: "Security"
                }],
                ContentData: [{
                    img: "/assets/images/saas1/tab/Initializing.png",
                    title: "Initializing"
                }, {
                    img: "/assets/images/saas1/tab/Add-instant.png",
                    title: "Add Instances"
                }, {
                    img: "/assets/images/saas1/tab/Configuration.png",
                    title: "Configuration"
                }, {
                    img: "/assets/images/saas1/tab/Api.png",
                    title: "API Setting"
                }, {
                    img: "/assets/images/saas1/tab/Security.png",
                    title: "Security"
                }]
            }
        },
        A5Xg: function(e, t, n) {
            var r = n("NsO/"),
                i = n("ar/p").f,
                o = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return a && "[object Window]" == o.call(e) ? function(e) {
                    try {
                        return i(e)
                    } catch (t) {
                        return a.slice()
                    }
                }(e) : i(r(e))
            }
        },
        AUvm: function(e, t, n) {
            "use strict";
            var r = n("5T2Y"),
                i = n("B+OT"),
                o = n("jmDH"),
                a = n("Y7ZC"),
                s = n("kTiW"),
                l = n("6/1s").KEY,
                c = n("KUxP"),
                u = n("29s/"),
                p = n("RfKB"),
                f = n("YqAc"),
                d = n("UWiX"),
                h = n("zLkG"),
                m = n("Zxgi"),
                v = n("R+7+"),
                g = n("kAMH"),
                y = n("5K7Z"),
                b = n("93I4"),
                w = n("JB68"),
                k = n("NsO/"),
                S = n("G8Mo"),
                O = n("rr1i"),
                x = n("oVml"),
                E = n("A5Xg"),
                N = n("vwuL"),
                _ = n("mqlF"),
                C = n("2faE"),
                T = n("w6GO"),
                j = N.f,
                P = C.f,
                M = E.f,
                L = r.Symbol,
                A = r.JSON,
                I = A && A.stringify,
                R = d("_hidden"),
                D = d("toPrimitive"),
                W = {}.propertyIsEnumerable,
                F = u("symbol-registry"),
                U = u("symbols"),
                q = u("op-symbols"),
                B = Object.prototype,
                z = "function" == typeof L && !!_.f,
                H = r.QObject,
                G = !H || !H.prototype || !H.prototype.findChild,
                Y = o && c(function() {
                    return 7 != x(P({}, "a", {
                        get: function() {
                            return P(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(e, t, n) {
                    var r = j(B, t);
                    r && delete B[t], P(e, t, n), r && e !== B && P(B, t, r)
                } : P,
                X = function(e) {
                    var t = U[e] = x(L.prototype);
                    return t._k = e, t
                },
                K = z && "symbol" == typeof L.iterator ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return e instanceof L
                },
                V = function(e, t, n) {
                    return e === B && V(q, t, n), y(e), t = S(t, !0), y(n), i(U, t) ? (n.enumerable ? (i(e, R) && e[R][t] && (e[R][t] = !1), n = x(n, {
                        enumerable: O(0, !1)
                    })) : (i(e, R) || P(e, R, O(1, {})), e[R][t] = !0), Y(e, t, n)) : P(e, t, n)
                },
                Z = function(e, t) {
                    y(e);
                    for (var n, r = v(t = k(t)), i = 0, o = r.length; o > i;) V(e, n = r[i++], t[n]);
                    return e
                },
                J = function(e) {
                    var t = W.call(this, e = S(e, !0));
                    return !(this === B && i(U, e) && !i(q, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, R) && this[R][e]) || t)
                },
                Q = function(e, t) {
                    if (e = k(e), t = S(t, !0), e !== B || !i(U, t) || i(q, t)) {
                        var n = j(e, t);
                        return !n || !i(U, t) || i(e, R) && e[R][t] || (n.enumerable = !0), n
                    }
                },
                $ = function(e) {
                    for (var t, n = M(k(e)), r = [], o = 0; n.length > o;) i(U, t = n[o++]) || t == R || t == l || r.push(t);
                    return r
                },
                ee = function(e) {
                    for (var t, n = e === B, r = M(n ? q : k(e)), o = [], a = 0; r.length > a;) !i(U, t = r[a++]) || n && !i(B, t) || o.push(U[t]);
                    return o
                };
            z || (s((L = function() {
                if (this instanceof L) throw TypeError("Symbol is not a constructor!");
                var e = f(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) {
                        this === B && t.call(q, n), i(this, R) && i(this[R], e) && (this[R][e] = !1), Y(this, e, O(1, n))
                    };
                return o && G && Y(B, e, {
                    configurable: !0,
                    set: t
                }), X(e)
            }).prototype, "toString", function() {
                return this._k
            }), N.f = Q, C.f = V, n("ar/p").f = E.f = $, n("NV0k").f = J, _.f = ee, o && !n("uOPS") && s(B, "propertyIsEnumerable", J, !0), h.f = function(e) {
                return X(d(e))
            }), a(a.G + a.W + a.F * !z, {
                Symbol: L
            });
            for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
            for (var re = T(d.store), ie = 0; re.length > ie;) m(re[ie++]);
            a(a.S + a.F * !z, "Symbol", {
                for: function(e) {
                    return i(F, e += "") ? F[e] : F[e] = L(e)
                },
                keyFor: function(e) {
                    if (!K(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in F)
                        if (F[t] === e) return t
                },
                useSetter: function() {
                    G = !0
                },
                useSimple: function() {
                    G = !1
                }
            }), a(a.S + a.F * !z, "Object", {
                create: function(e, t) {
                    return void 0 === t ? x(e) : Z(x(e), t)
                },
                defineProperty: V,
                defineProperties: Z,
                getOwnPropertyDescriptor: Q,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: ee
            });
            var oe = c(function() {
                _.f(1)
            });
            a(a.S + a.F * oe, "Object", {
                getOwnPropertySymbols: function(e) {
                    return _.f(w(e))
                }
            }), A && a(a.S + a.F * (!z || c(function() {
                var e = L();
                return "[null]" != I([e]) || "{}" != I({
                    a: e
                }) || "{}" != I(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                    if (n = t = r[1], (b(t) || void 0 !== e) && !K(e)) return g(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
                    }), r[1] = t, I.apply(A, r)
                }
            }), L.prototype[D] || n("NegM")(L.prototype, D, L.prototype.valueOf), p(L, "Symbol"), p(Math, "Math", !0), p(r.JSON, "JSON", !0)
        },
        ApPD: function(e, t, n) {
            var r = n("JB68"),
                i = n("U+KD");
            n("zn7N")("getPrototypeOf", function() {
                return function(e) {
                    return i(r(e))
                }
            })
        },
        B9jh: function(e, t, n) {
            "use strict";
            var r = n("Wu5q"),
                i = n("n3ko");
            e.exports = n("raTm")("Set", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                add: function(e) {
                    return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
                }
            }, r)
        },
        BBPU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n("q1tI")) && r.__esModule ? r : {
                default: r
            };
            var o = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function(e) {
                    return i.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function(e) {
                    return i.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            };
            t.default = o
        },
        BJfS: function(e, t) {
            e.exports = function(e) {
                return e.replace(/[A-Z]/g, function(e) {
                    return "-" + e.toLowerCase()
                }).toLowerCase()
            }
        },
        BURE: function(e, t, n) {
            n("cHUd")("WeakMap")
        },
        Bh1o: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        },
        Bhuq: function(e, t, n) {
            e.exports = n("+plK")
        },
        C2SN: function(e, t, n) {
            var r = n("93I4"),
                i = n("kAMH"),
                o = n("UWiX")("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
            }
        },
        CaDr: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                i = n("zLVn"),
                o = n("q1tI"),
                a = n.n(o),
                s = n("17x9"),
                l = n.n(s),
                c = n("TSYQ"),
                u = n.n(c),
                p = n("33Jr"),
                f = {
                    tag: p.n,
                    className: l.a.string,
                    cssModule: l.a.object
                },
                d = function(e) {
                    var t = e.className,
                        n = e.cssModule,
                        o = e.tag,
                        s = Object(i.a)(e, ["className", "cssModule", "tag"]),
                        l = Object(p.j)(u()(t, "modal-body"), n);
                    return a.a.createElement(o, Object(r.a)({}, s, {
                        className: l
                    }))
                };
            d.propTypes = f, d.defaultProps = {
                tag: "div"
            }, t.a = d
        },
        CxY0: function(e, t, n) {
            "use strict";
            var r = n("GYWy"),
                i = n("Nehr");

            function o() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            t.parse = b, t.resolve = function(e, t) {
                return b(e, !1, !0).resolve(t)
            }, t.resolveObject = function(e, t) {
                return e ? b(e, !1, !0).resolveObject(t) : t
            }, t.format = function(e) {
                i.isString(e) && (e = b(e));
                return e instanceof o ? e.format() : o.prototype.format.call(e)
            }, t.Url = o;
            var a = /^([a-z0-9.+-]+:)/i,
                s = /:[0-9]*$/,
                l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                u = ["'"].concat(c),
                p = ["%", "/", "?", ";", "#"].concat(u),
                f = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                m = {
                    javascript: !0,
                    "javascript:": !0
                },
                v = {
                    javascript: !0,
                    "javascript:": !0
                },
                g = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                y = n("s4NR");

            function b(e, t, n) {
                if (e && i.isObject(e) && e instanceof o) return e;
                var r = new o;
                return r.parse(e, t, n), r
            }
            o.prototype.parse = function(e, t, n) {
                if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var o = e.indexOf("?"),
                    s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                    c = e.split(s);
                c[0] = c[0].replace(/\\/g, "/");
                var b = e = c.join(s);
                if (b = b.trim(), !n && 1 === e.split("#").length) {
                    var w = l.exec(b);
                    if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                }
                var k = a.exec(b);
                if (k) {
                    var S = (k = k[0]).toLowerCase();
                    this.protocol = S, b = b.substr(k.length)
                }
                if (n || k || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var O = "//" === b.substr(0, 2);
                    !O || k && v[k] || (b = b.substr(2), this.slashes = !0)
                }
                if (!v[k] && (O || k && !g[k])) {
                    for (var x, E, N = -1, _ = 0; _ < f.length; _++) {
                        -1 !== (C = b.indexOf(f[_])) && (-1 === N || C < N) && (N = C)
                    } - 1 !== (E = -1 === N ? b.lastIndexOf("@") : b.lastIndexOf("@", N)) && (x = b.slice(0, E), b = b.slice(E + 1), this.auth = decodeURIComponent(x)), N = -1;
                    for (_ = 0; _ < p.length; _++) {
                        var C; - 1 !== (C = b.indexOf(p[_])) && (-1 === N || C < N) && (N = C)
                    } - 1 === N && (N = b.length), this.host = b.slice(0, N), b = b.slice(N), this.parseHost(), this.hostname = this.hostname || "";
                    var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!T)
                        for (var j = this.hostname.split(/\./), P = (_ = 0, j.length); _ < P; _++) {
                            var M = j[_];
                            if (M && !M.match(d)) {
                                for (var L = "", A = 0, I = M.length; A < I; A++) M.charCodeAt(A) > 127 ? L += "x" : L += M[A];
                                if (!L.match(d)) {
                                    var R = j.slice(0, _),
                                        D = j.slice(_ + 1),
                                        W = M.match(h);
                                    W && (R.push(W[1]), D.unshift(W[2])), D.length && (b = "/" + D.join(".") + b), this.hostname = R.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = r.toASCII(this.hostname));
                    var F = this.port ? ":" + this.port : "",
                        U = this.hostname || "";
                    this.host = U + F, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
                }
                if (!m[S])
                    for (_ = 0, P = u.length; _ < P; _++) {
                        var q = u[_];
                        if (-1 !== b.indexOf(q)) {
                            var B = encodeURIComponent(q);
                            B === q && (B = escape(q)), b = b.split(q).join(B)
                        }
                    }
                var z = b.indexOf("#"); - 1 !== z && (this.hash = b.substr(z), b = b.slice(0, z));
                var H = b.indexOf("?");
                if (-1 !== H ? (this.search = b.substr(H), this.query = b.substr(H + 1), t && (this.query = y.parse(this.query)), b = b.slice(0, H)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), g[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    F = this.pathname || "";
                    var G = this.search || "";
                    this.path = F + G
                }
                return this.href = this.format(), this
            }, o.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    n = this.pathname || "",
                    r = this.hash || "",
                    o = !1,
                    a = "";
                this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = y.stringify(this.query));
                var s = this.search || a && "?" + a || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || g[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (n = n.replace(/[?#]/g, function(e) {
                    return encodeURIComponent(e)
                })) + (s = s.replace("#", "%23")) + r
            }, o.prototype.resolve = function(e) {
                return this.resolveObject(b(e, !1, !0)).format()
            }, o.prototype.resolveObject = function(e) {
                if (i.isString(e)) {
                    var t = new o;
                    t.parse(e, !1, !0), e = t
                }
                for (var n = new o, r = Object.keys(this), a = 0; a < r.length; a++) {
                    var s = r[a];
                    n[s] = this[s]
                }
                if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
                if (e.slashes && !e.protocol) {
                    for (var l = Object.keys(e), c = 0; c < l.length; c++) {
                        var u = l[c];
                        "protocol" !== u && (n[u] = e[u])
                    }
                    return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                }
                if (e.protocol && e.protocol !== n.protocol) {
                    if (!g[e.protocol]) {
                        for (var p = Object.keys(e), f = 0; f < p.length; f++) {
                            var d = p[f];
                            n[d] = e[d]
                        }
                        return n.href = n.format(), n
                    }
                    if (n.protocol = e.protocol, e.host || v[e.protocol]) n.pathname = e.pathname;
                    else {
                        for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
                    }
                    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                        var m = n.pathname || "",
                            y = n.search || "";
                        n.path = m + y
                    }
                    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
                }
                var b = n.pathname && "/" === n.pathname.charAt(0),
                    w = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    k = w || b || n.host && e.pathname,
                    S = k,
                    O = n.pathname && n.pathname.split("/") || [],
                    x = (h = e.pathname && e.pathname.split("/") || [], n.protocol && !g[n.protocol]);
                if (x && (n.hostname = "", n.port = null, n.host && ("" === O[0] ? O[0] = n.host : O.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), k = k && ("" === h[0] || "" === O[0])), w) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, O = h;
                else if (h.length) O || (O = []), O.pop(), O = O.concat(h), n.search = e.search, n.query = e.query;
                else if (!i.isNullOrUndefined(e.search)) {
                    if (x) n.hostname = n.host = O.shift(), (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift());
                    return n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
                }
                if (!O.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                for (var E = O.slice(-1)[0], N = (n.host || e.host || O.length > 1) && ("." === E || ".." === E) || "" === E, _ = 0, C = O.length; C >= 0; C--) "." === (E = O[C]) ? O.splice(C, 1) : ".." === E ? (O.splice(C, 1), _++) : _ && (O.splice(C, 1), _--);
                if (!k && !S)
                    for (; _--; _) O.unshift("..");
                !k || "" === O[0] || O[0] && "/" === O[0].charAt(0) || O.unshift(""), N && "/" !== O.join("/").substr(-1) && O.push("");
                var T, j = "" === O[0] || O[0] && "/" === O[0].charAt(0);
                x && (n.hostname = n.host = j ? "" : O.length ? O.shift() : "", (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift()));
                return (k = k || n.host && O.length) && !j && O.unshift(""), O.length ? n.pathname = O.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }, o.prototype.parseHost = function() {
                var e = this.host,
                    t = s.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        },
        DCcX: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("wx14"),
                o = n("JX7q"),
                a = n("dI71"),
                s = n("q1tI"),
                l = n.n(s),
                c = n("17x9"),
                u = n.n(c),
                p = n("TSYQ"),
                f = n.n(p),
                d = n("i8i4"),
                h = n.n(d),
                m = n("33Jr"),
                v = {
                    children: u.a.node.isRequired,
                    node: u.a.any
                },
                g = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(a.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
                    }, n.render = function() {
                        return m.c ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), h.a.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
                    }, t
                }(l.a.Component);
            g.propTypes = v;
            var y = g,
                b = n("zLVn"),
                w = n("1w3K");

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var O = S(S({}, w.Transition.propTypes), {}, {
                    children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]),
                    tag: m.n,
                    baseClass: u.a.string,
                    baseClassActive: u.a.string,
                    className: u.a.string,
                    cssModule: u.a.object,
                    innerRef: u.a.oneOfType([u.a.object, u.a.string, u.a.func])
                }),
                x = S(S({}, w.Transition.defaultProps), {}, {
                    tag: "div",
                    baseClass: "fade",
                    baseClassActive: "show",
                    timeout: m.b.Fade,
                    appear: !0,
                    enter: !0,
                    exit: !0,
                    in: !0
                });

            function E(e) {
                var t = e.tag,
                    n = e.baseClass,
                    r = e.baseClassActive,
                    o = e.className,
                    a = e.cssModule,
                    s = e.children,
                    c = e.innerRef,
                    u = Object(b.a)(e, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]),
                    p = Object(m.l)(u, m.a),
                    d = Object(m.k)(u, m.a);
                return l.a.createElement(w.Transition, p, function(e) {
                    var u = "entered" === e,
                        p = Object(m.j)(f()(o, n, u && r), a);
                    return l.a.createElement(t, Object(i.a)({
                        className: p
                    }, d, {
                        ref: c
                    }), s)
                })
            }
            E.propTypes = O, E.defaultProps = x;
            var N = E;

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function T() {}
            var j = u.a.shape(N.propTypes),
                P = {
                    isOpen: u.a.bool,
                    autoFocus: u.a.bool,
                    centered: u.a.bool,
                    scrollable: u.a.bool,
                    size: u.a.string,
                    toggle: u.a.func,
                    keyboard: u.a.bool,
                    role: u.a.string,
                    labelledBy: u.a.string,
                    backdrop: u.a.oneOfType([u.a.bool, u.a.oneOf(["static"])]),
                    onEnter: u.a.func,
                    onExit: u.a.func,
                    onOpened: u.a.func,
                    onClosed: u.a.func,
                    children: u.a.node,
                    className: u.a.string,
                    wrapClassName: u.a.string,
                    modalClassName: u.a.string,
                    backdropClassName: u.a.string,
                    contentClassName: u.a.string,
                    external: u.a.node,
                    fade: u.a.bool,
                    cssModule: u.a.object,
                    zIndex: u.a.oneOfType([u.a.number, u.a.string]),
                    backdropTransition: j,
                    modalTransition: j,
                    innerRef: u.a.oneOfType([u.a.object, u.a.string, u.a.func]),
                    unmountOnClose: u.a.bool,
                    returnFocusAfterClose: u.a.bool,
                    container: m.o,
                    trapFocus: u.a.bool
                },
                M = Object.keys(P),
                L = {
                    isOpen: !1,
                    autoFocus: !0,
                    centered: !1,
                    scrollable: !1,
                    role: "dialog",
                    backdrop: !0,
                    keyboard: !0,
                    zIndex: 1050,
                    fade: !0,
                    onOpened: T,
                    onClosed: T,
                    modalTransition: {
                        timeout: m.b.Modal
                    },
                    backdropTransition: {
                        mountOnEnter: !0,
                        timeout: m.b.Fade
                    },
                    unmountOnClose: !0,
                    returnFocusAfterClose: !0,
                    container: "body",
                    trapFocus: !1
                },
                A = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this)._element = null, n._originalBodyPadding = null, n.getFocusableChildren = n.getFocusableChildren.bind(Object(o.a)(n)), n.handleBackdropClick = n.handleBackdropClick.bind(Object(o.a)(n)), n.handleBackdropMouseDown = n.handleBackdropMouseDown.bind(Object(o.a)(n)), n.handleEscape = n.handleEscape.bind(Object(o.a)(n)), n.handleStaticBackdropAnimation = n.handleStaticBackdropAnimation.bind(Object(o.a)(n)), n.handleTab = n.handleTab.bind(Object(o.a)(n)), n.onOpened = n.onOpened.bind(Object(o.a)(n)), n.onClosed = n.onClosed.bind(Object(o.a)(n)), n.manageFocusAfterClose = n.manageFocusAfterClose.bind(Object(o.a)(n)), n.clearBackdropAnimationTimeout = n.clearBackdropAnimationTimeout.bind(Object(o.a)(n)), n.trapFocus = n.trapFocus.bind(Object(o.a)(n)), n.state = {
                            isOpen: !1,
                            showStaticBackdropAnimation: !1
                        }, n
                    }
                    Object(a.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.isOpen,
                            n = e.autoFocus,
                            r = e.onEnter;
                        t && (this.init(), this.setState({
                            isOpen: !0
                        }), n && this.setFocus()), r && r(), document.addEventListener("focus", this.trapFocus, !0), this._isMounted = !0
                    }, n.componentDidUpdate = function(e, t) {
                        if (this.props.isOpen && !e.isOpen) return this.init(), void this.setState({
                            isOpen: !0
                        });
                        this.props.autoFocus && this.state.isOpen && !t.isOpen && this.setFocus(), this._element && e.zIndex !== this.props.zIndex && (this._element.style.zIndex = this.props.zIndex)
                    }, n.componentWillUnmount = function() {
                        this.clearBackdropAnimationTimeout(), this.props.onExit && this.props.onExit(), this._element && (this.destroy(), (this.props.isOpen || this.state.isOpen) && this.close()), document.removeEventListener("focus", this.trapFocus, !0), this._isMounted = !1
                    }, n.trapFocus = function(e) {
                        if (this.props.trapFocus && this._element && (!this._dialog || this._dialog.parentNode !== e.target) && !(this.modalIndex < t.openCount - 1)) {
                            for (var n = this.getFocusableChildren(), r = 0; r < n.length; r++)
                                if (n[r] === e.target) return;
                            n.length > 0 && (e.preventDefault(), e.stopPropagation(), n[0].focus())
                        }
                    }, n.onOpened = function(e, t) {
                        this.props.onOpened(), (this.props.modalTransition.onEntered || T)(e, t)
                    }, n.onClosed = function(e) {
                        var t = this.props.unmountOnClose;
                        this.props.onClosed(), (this.props.modalTransition.onExited || T)(e), t && this.destroy(), this.close(), this._isMounted && this.setState({
                            isOpen: !1
                        })
                    }, n.setFocus = function() {
                        this._dialog && this._dialog.parentNode && "function" === typeof this._dialog.parentNode.focus && this._dialog.parentNode.focus()
                    }, n.getFocusableChildren = function() {
                        return this._element.querySelectorAll(m.e.join(", "))
                    }, n.getFocusedChild = function() {
                        var e, t = this.getFocusableChildren();
                        try {
                            e = document.activeElement
                        } catch (n) {
                            e = t[0]
                        }
                        return e
                    }, n.handleBackdropClick = function(e) {
                        if (e.target === this._mouseDownElement) {
                            e.stopPropagation();
                            var t = this._dialog ? this._dialog.parentNode : null;
                            if (t && e.target === t && "static" === this.props.backdrop && this.handleStaticBackdropAnimation(), !this.props.isOpen || !0 !== this.props.backdrop) return;
                            t && e.target === t && this.props.toggle && this.props.toggle(e)
                        }
                    }, n.handleTab = function(e) {
                        if (9 === e.which && !(this.modalIndex < t.openCount - 1)) {
                            var n = this.getFocusableChildren(),
                                r = n.length;
                            if (0 !== r) {
                                for (var i = this.getFocusedChild(), o = 0, a = 0; a < r; a += 1)
                                    if (n[a] === i) {
                                        o = a;
                                        break
                                    }
                                e.shiftKey && 0 === o ? (e.preventDefault(), n[r - 1].focus()) : e.shiftKey || o !== r - 1 || (e.preventDefault(), n[0].focus())
                            }
                        }
                    }, n.handleBackdropMouseDown = function(e) {
                        this._mouseDownElement = e.target
                    }, n.handleEscape = function(e) {
                        this.props.isOpen && e.keyCode === m.i.esc && this.props.toggle && (this.props.keyboard ? (e.preventDefault(), e.stopPropagation(), this.props.toggle(e)) : "static" === this.props.backdrop && (e.preventDefault(), e.stopPropagation(), this.handleStaticBackdropAnimation()))
                    }, n.handleStaticBackdropAnimation = function() {
                        var e = this;
                        this.clearBackdropAnimationTimeout(), this.setState({
                            showStaticBackdropAnimation: !0
                        }), this._backdropAnimationTimeout = setTimeout(function() {
                            e.setState({
                                showStaticBackdropAnimation: !1
                            })
                        }, 100)
                    }, n.init = function() {
                        try {
                            this._triggeringElement = document.activeElement
                        } catch (e) {
                            this._triggeringElement = null
                        }
                        this._element || (this._element = document.createElement("div"), this._element.setAttribute("tabindex", "-1"), this._element.style.position = "relative", this._element.style.zIndex = this.props.zIndex, this._mountContainer = Object(m.g)(this.props.container), this._mountContainer.appendChild(this._element)), this._originalBodyPadding = Object(m.f)(), Object(m.d)(), 0 === t.openCount && (document.body.className = f()(document.body.className, Object(m.j)("modal-open", this.props.cssModule))), this.modalIndex = t.openCount, t.openCount += 1
                    }, n.destroy = function() {
                        this._element && (this._mountContainer.removeChild(this._element), this._element = null), this.manageFocusAfterClose()
                    }, n.manageFocusAfterClose = function() {
                        if (this._triggeringElement) {
                            var e = this.props.returnFocusAfterClose;
                            this._triggeringElement.focus && e && this._triggeringElement.focus(), this._triggeringElement = null
                        }
                    }, n.close = function() {
                        if (t.openCount <= 1) {
                            var e = Object(m.j)("modal-open", this.props.cssModule),
                                n = new RegExp("(^| )" + e + "( |$)");
                            document.body.className = document.body.className.replace(n, " ").trim()
                        }
                        this.manageFocusAfterClose(), t.openCount = Math.max(0, t.openCount - 1), Object(m.m)(this._originalBodyPadding)
                    }, n.renderModalDialog = function() {
                        var e, t = this,
                            n = Object(m.k)(this.props, M);
                        return l.a.createElement("div", Object(i.a)({}, n, {
                            className: Object(m.j)(f()("modal-dialog", this.props.className, (e = {}, e["modal-" + this.props.size] = this.props.size, e["modal-dialog-centered"] = this.props.centered, e["modal-dialog-scrollable"] = this.props.scrollable, e)), this.props.cssModule),
                            role: "document",
                            ref: function(e) {
                                t._dialog = e
                            }
                        }), l.a.createElement("div", {
                            className: Object(m.j)(f()("modal-content", this.props.contentClassName), this.props.cssModule)
                        }, this.props.children))
                    }, n.render = function() {
                        var e = this.props.unmountOnClose;
                        if (this._element && (this.state.isOpen || !e)) {
                            var t = !!this._element && !this.state.isOpen && !e;
                            this._element.style.display = t ? "none" : "block";
                            var n = this.props,
                                r = n.wrapClassName,
                                o = n.modalClassName,
                                a = n.backdropClassName,
                                s = n.cssModule,
                                c = n.isOpen,
                                u = n.backdrop,
                                p = n.role,
                                d = n.labelledBy,
                                h = n.external,
                                v = n.innerRef,
                                g = {
                                    onClick: this.handleBackdropClick,
                                    onMouseDown: this.handleBackdropMouseDown,
                                    onKeyUp: this.handleEscape,
                                    onKeyDown: this.handleTab,
                                    style: {
                                        display: "block"
                                    },
                                    "aria-labelledby": d,
                                    role: p,
                                    tabIndex: "-1"
                                },
                                b = this.props.fade,
                                w = C(C(C({}, N.defaultProps), this.props.modalTransition), {}, {
                                    baseClass: b ? this.props.modalTransition.baseClass : "",
                                    timeout: b ? this.props.modalTransition.timeout : 0
                                }),
                                k = C(C(C({}, N.defaultProps), this.props.backdropTransition), {}, {
                                    baseClass: b ? this.props.backdropTransition.baseClass : "",
                                    timeout: b ? this.props.backdropTransition.timeout : 0
                                }),
                                S = u && (b ? l.a.createElement(N, Object(i.a)({}, k, { in: c && !!u,
                                    cssModule: s,
                                    className: Object(m.j)(f()("modal-backdrop", a), s)
                                })) : l.a.createElement("div", {
                                    className: Object(m.j)(f()("modal-backdrop", "show", a), s)
                                }));
                            return l.a.createElement(y, {
                                node: this._element
                            }, l.a.createElement("div", {
                                className: Object(m.j)(r)
                            }, l.a.createElement(N, Object(i.a)({}, g, w, { in: c,
                                onEntered: this.onOpened,
                                onExited: this.onClosed,
                                cssModule: s,
                                className: Object(m.j)(f()("modal", o, this.state.showStaticBackdropAnimation && "modal-static"), s),
                                innerRef: v
                            }), h, this.renderModalDialog()), S))
                        }
                        return null
                    }, n.clearBackdropAnimationTimeout = function() {
                        this._backdropAnimationTimeout && (clearTimeout(this._backdropAnimationTimeout), this._backdropAnimationTimeout = void 0)
                    }, t
                }(l.a.Component);
            A.propTypes = P, A.defaultProps = L, A.openCount = 0;
            t.a = A
        },
        DKLB: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/layouts/modern-sass", function() {
                return n("cAFv")
            }])
        },
        EXMj: function(e, t) {
            e.exports = function(e, t, n, r) {
                if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                return e
            }
        },
        FYa8: function(e, t, n) {
            "use strict";
            var r = n("hfKm"),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
            r(t, "__esModule", {
                value: !0
            });
            var o = i(n("q1tI"));
            t.HeadManagerContext = o.createContext(null)
        },
        FlQf: function(e, t, n) {
            "use strict";
            var r = n("ccE7")(!0);
            n("MPFp")(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e, t = this._t,
                    n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        },
        G4HQ: function(e, t, n) {
            e.exports = n("m5qO")
        },
        GYWy: function(e, t, n) {
            (function(e, r) {
                var i;
                ! function(o) {
                    t && t.nodeType, e && e.nodeType;
                    var a = "object" == typeof r && r;
                    a.global !== a && a.window !== a && a.self;
                    var s, l = 2147483647,
                        c = 36,
                        u = 1,
                        p = 26,
                        f = 38,
                        d = 700,
                        h = 72,
                        m = 128,
                        v = "-",
                        g = /^xn--/,
                        y = /[^\x20-\x7E]/,
                        b = /[\x2E\u3002\uFF0E\uFF61]/g,
                        w = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        k = c - u,
                        S = Math.floor,
                        O = String.fromCharCode;

                    function x(e) {
                        throw new RangeError(w[e])
                    }

                    function E(e, t) {
                        for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                        return r
                    }

                    function N(e, t) {
                        var n = e.split("@"),
                            r = "";
                        return n.length > 1 && (r = n[0] + "@", e = n[1]), r + E((e = e.replace(b, ".")).split("."), t).join(".")
                    }

                    function _(e) {
                        for (var t, n, r = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
                        return r
                    }

                    function C(e) {
                        return E(e, function(e) {
                            var t = "";
                            return e > 65535 && (t += O((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += O(e)
                        }).join("")
                    }

                    function T(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    }

                    function j(e, t, n) {
                        var r = 0;
                        for (e = n ? S(e / d) : e >> 1, e += S(e / t); e > k * p >> 1; r += c) e = S(e / k);
                        return S(r + (k + 1) * e / (e + f))
                    }

                    function P(e) {
                        var t, n, r, i, o, a, s, f, d, g, y, b = [],
                            w = e.length,
                            k = 0,
                            O = m,
                            E = h;
                        for ((n = e.lastIndexOf(v)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && x("not-basic"), b.push(e.charCodeAt(r));
                        for (i = n > 0 ? n + 1 : 0; i < w;) {
                            for (o = k, a = 1, s = c; i >= w && x("invalid-input"), ((f = (y = e.charCodeAt(i++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : c) >= c || f > S((l - k) / a)) && x("overflow"), k += f * a, !(f < (d = s <= E ? u : s >= E + p ? p : s - E)); s += c) a > S(l / (g = c - d)) && x("overflow"), a *= g;
                            E = j(k - o, t = b.length + 1, 0 == o), S(k / t) > l - O && x("overflow"), O += S(k / t), k %= t, b.splice(k++, 0, O)
                        }
                        return C(b)
                    }

                    function M(e) {
                        var t, n, r, i, o, a, s, f, d, g, y, b, w, k, E, N = [];
                        for (b = (e = _(e)).length, t = m, n = 0, o = h, a = 0; a < b; ++a)(y = e[a]) < 128 && N.push(O(y));
                        for (r = i = N.length, i && N.push(v); r < b;) {
                            for (s = l, a = 0; a < b; ++a)(y = e[a]) >= t && y < s && (s = y);
                            for (s - t > S((l - n) / (w = r + 1)) && x("overflow"), n += (s - t) * w, t = s, a = 0; a < b; ++a)
                                if ((y = e[a]) < t && ++n > l && x("overflow"), y == t) {
                                    for (f = n, d = c; !(f < (g = d <= o ? u : d >= o + p ? p : d - o)); d += c) E = f - g, k = c - g, N.push(O(T(g + E % k, 0))), f = S(E / k);
                                    N.push(O(T(f, 0))), o = j(n, w, r == i), n = 0, ++r
                                }++n, ++t
                        }
                        return N.join("")
                    }
                    s = {
                        version: "1.4.1",
                        ucs2: {
                            decode: _,
                            encode: C
                        },
                        decode: P,
                        encode: M,
                        toASCII: function(e) {
                            return N(e, function(e) {
                                return y.test(e) ? "xn--" + M(e) : e
                            })
                        },
                        toUnicode: function(e) {
                            return N(e, function(e) {
                                return g.test(e) ? P(e.slice(4).toLowerCase()) : e
                            })
                        }
                    }, void 0 === (i = function() {
                        return s
                    }.call(t, n, t, e)) || (e.exports = i)
                }()
            }).call(this, n("YuTi")(e), n("yLpj"))
        },
        GvbO: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.S, "Array", {
                isArray: n("kAMH")
            })
        },
        Hfiw: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.S, "Object", {
                setPrototypeOf: n("6tYh").set
            })
        },
        IGEp: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("1Yj4"),
                a = n("ok1R"),
                s = n("rhny"),
                l = i.a.createElement;
            t.default = function() {
                return l("section", {
                    className: "saas1 header",
                    id: "home"
                }, l("div", {
                    className: "saas1-header bg header8-content"
                }, l(o.a, null, l(a.a, null, l(s.a, {
                    md: "7"
                }, l("div", {
                    className: "center-text"
                }, l("div", null, l("div", {
                    className: "header-text"
                }, l("div", {
                    className: "d-flex"
                }, l("h1", null, l("span", {
                    className: "theme-color"
                }, "S"), "imple ", l("span", {
                    className: "small-text"
                }, "and "), l("span", {
                    className: "theme-color"
                }, "S"), "mart"), l("div", {
                    className: "center-content slider-logo"
                }, l("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/saas1/slider-logo.png"
                })))), l("div", {
                    className: "header-sub-text"
                }, l("h3", {
                    className: "text-white"
                }, "Landing Page Templates For", l("span", null, " SaaS"), " Companies")), l("div", {
                    className: "header-sub-text"
                }, l("h6", null, "For as low as", l("span", {
                    className: "theme-color"
                }, " $0.95 "), "per user account")), l("div", {
                    className: "link-horizontal"
                }, l("ul", null, l("li", null, l("a", {
                    className: "btn btn-default primary-btn transparent"
                }, "watch demo", l("img", {
                    alt: "video-icon",
                    className: "m-l-5",
                    src: "/assets/images/saas1/video-icon.png"
                }))), l("li", null, l("a", {
                    className: "btn btn-default primary-btn transparent"
                }, "start now"))))))), l("div", null, l("div", {
                    className: "center-text slider-banner"
                }, l("img", {
                    alt: "slid-banner",
                    src: "/assets/images/saas1/slider-laptop2.png",
                    className: "img-fluid"
                })))))), l("img", {
                    alt: "",
                    className: "img-fluid set-abs background",
                    src: "/assets/images/saas1/background2.png"
                }), l("img", {
                    alt: "",
                    className: "img-fluid set-abs dot",
                    src: "/assets/images/saas1/dot.png"
                }))
            }
        },
        IP1Z: function(e, t, n) {
            "use strict";
            var r = n("2faE"),
                i = n("rr1i");
            e.exports = function(e, t, n) {
                t in e ? r.f(e, t, i(0, n)) : e[t] = n
            }
        },
        IX3V: function(e, t) {
            e.exports = {
                isFunction: function(e) {
                    return "function" === typeof e
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function(e, t) {
                    for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
                }
            }
        },
        "JMW+": function(e, t, n) {
            "use strict";
            var r, i, o, a, s = n("uOPS"),
                l = n("5T2Y"),
                c = n("2GTP"),
                u = n("QMMT"),
                p = n("Y7ZC"),
                f = n("93I4"),
                d = n("eaoh"),
                h = n("EXMj"),
                m = n("oioR"),
                v = n("8gHz"),
                g = n("QXhf").set,
                y = n("q6LJ")(),
                b = n("ZW5q"),
                w = n("RDmV"),
                k = n("vBP9"),
                S = n("zXhZ"),
                O = l.TypeError,
                x = l.process,
                E = x && x.versions,
                N = E && E.v8 || "",
                _ = l.Promise,
                C = "process" == u(x),
                T = function() {},
                j = i = b.f,
                P = !! function() {
                    try {
                        var e = _.resolve(1),
                            t = (e.constructor = {})[n("UWiX")("species")] = function(e) {
                                e(T, T)
                            };
                        return (C || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t && 0 !== N.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
                    } catch (r) {}
                }(),
                M = function(e) {
                    var t;
                    return !(!f(e) || "function" != typeof(t = e.then)) && t
                },
                L = function(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        y(function() {
                            for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                                    var n, o, a, s = i ? t.ok : t.fail,
                                        l = t.resolve,
                                        c = t.reject,
                                        u = t.domain;
                                    try {
                                        s ? (i || (2 == e._h && R(e), e._h = 1), !0 === s ? n = r : (u && u.enter(), n = s(r), u && (u.exit(), a = !0)), n === t.promise ? c(O("Promise-chain cycle")) : (o = M(n)) ? o.call(n, l, c) : l(n)) : c(r)
                                    } catch (p) {
                                        u && !a && u.exit(), c(p)
                                    }
                                }; n.length > o;) a(n[o++]);
                            e._c = [], e._n = !1, t && !e._h && A(e)
                        })
                    }
                },
                A = function(e) {
                    g.call(l, function() {
                        var t, n, r, i = e._v,
                            o = I(e);
                        if (o && (t = w(function() {
                                C ? x.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
                                    promise: e,
                                    reason: i
                                }) : (r = l.console) && r.error && r.error("Unhandled promise rejection", i)
                            }), e._h = C || I(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
                    })
                },
                I = function(e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length
                },
                R = function(e) {
                    g.call(l, function() {
                        var t;
                        C ? x.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                            promise: e,
                            reason: e._v
                        })
                    })
                },
                D = function(e) {
                    var t = this;
                    t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), L(t, !0))
                },
                W = function(e) {
                    var t, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === e) throw O("Promise can't be resolved itself");
                            (t = M(e)) ? y(function() {
                                var r = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    t.call(e, c(W, r, 1), c(D, r, 1))
                                } catch (i) {
                                    D.call(r, i)
                                }
                            }): (n._v = e, n._s = 1, L(n, !1))
                        } catch (r) {
                            D.call({
                                _w: n,
                                _d: !1
                            }, r)
                        }
                    }
                };
            P || (_ = function(e) {
                h(this, _, "Promise", "_h"), d(e), r.call(this);
                try {
                    e(c(W, this, 1), c(D, this, 1))
                } catch (t) {
                    D.call(this, t)
                }
            }, (r = function(e) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }).prototype = n("XJU/")(_.prototype, {
                then: function(e, t) {
                    var n = j(v(this, _));
                    return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
                },
                catch: function(e) {
                    return this.then(void 0, e)
                }
            }), o = function() {
                var e = new r;
                this.promise = e, this.resolve = c(W, e, 1), this.reject = c(D, e, 1)
            }, b.f = j = function(e) {
                return e === _ || e === a ? new o(e) : i(e)
            }), p(p.G + p.W + p.F * !P, {
                Promise: _
            }), n("RfKB")(_, "Promise"), n("TJWN")("Promise"), a = n("WEpk").Promise, p(p.S + p.F * !P, "Promise", {
                reject: function(e) {
                    var t = j(this);
                    return (0, t.reject)(e), t.promise
                }
            }), p(p.S + p.F * (s || !P), "Promise", {
                resolve: function(e) {
                    return S(s && this === a ? _ : this, e)
                }
            }), p(p.S + p.F * !(P && n("TuGD")(function(e) {
                _.all(e).catch(T)
            })), "Promise", {
                all: function(e) {
                    var t = this,
                        n = j(t),
                        r = n.resolve,
                        i = n.reject,
                        o = w(function() {
                            var n = [],
                                o = 0,
                                a = 1;
                            m(e, !1, function(e) {
                                var s = o++,
                                    l = !1;
                                n.push(void 0), a++, t.resolve(e).then(function(e) {
                                    l || (l = !0, n[s] = e, --a || r(n))
                                }, i)
                            }), --a || r(n)
                        });
                    return o.e && i(o.v), n.promise
                },
                race: function(e) {
                    var t = this,
                        n = j(t),
                        r = n.reject,
                        i = w(function() {
                            m(e, !1, function(e) {
                                t.resolve(e).then(n.resolve, r)
                            })
                        });
                    return i.e && r(i.v), n.promise
                }
            })
        },
        JX7q: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        JbBM: function(e, t, n) {
            n("Hfiw"), e.exports = n("WEpk").Object.setPrototypeOf
        },
        "Jo+v": function(e, t, n) {
            e.exports = n("/eQG")
        },
        K47E: function(e, t) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        KI45: function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        KOnL: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NextArrow = t.PrevArrow = void 0;
            var r = a(n("q1tI")),
                i = a(n("TSYQ")),
                o = n("x9Za");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(n, !0).forEach(function(t) {
                        p(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t, n) {
                return t && d(e.prototype, t), n && d(e, n), e
            }

            function m(e, t) {
                return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var b = function(e) {
                function t() {
                    return f(this, t), m(this, v(t).apply(this, arguments))
                }
                return g(t, r["default"].PureComponent), h(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-prev": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "0",
                                "data-role": "none",
                                className: (0, i.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            o = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? r.default.cloneElement(this.props.prevArrow, u({}, n, {}, o)) : r.default.createElement("button", l({
                            key: "0",
                            type: "button"
                        }, n), " ", "Previous")
                    }
                }]), t
            }();
            t.PrevArrow = b;
            var w = function(e) {
                function t() {
                    return f(this, t), m(this, v(t).apply(this, arguments))
                }
                return g(t, r["default"].PureComponent), h(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-next": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, o.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "1",
                                "data-role": "none",
                                className: (0, i.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            a = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? r.default.cloneElement(this.props.nextArrow, u({}, n, {}, a)) : r.default.createElement("button", l({
                            key: "1",
                            type: "button"
                        }, n), " ", "Next")
                    }
                }]), t
            }();
            t.NextArrow = w
        },
        LX0d: function(e, t, n) {
            e.exports = n("UDep")
        },
        MCSJ: function(e, t) {
            e.exports = function(e, t, n) {
                var r = void 0 === n;
                switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                return e.apply(n, t)
            }
        },
        MPFp: function(e, t, n) {
            "use strict";
            var r = n("uOPS"),
                i = n("Y7ZC"),
                o = n("kTiW"),
                a = n("NegM"),
                s = n("SBuE"),
                l = n("j2DC"),
                c = n("RfKB"),
                u = n("U+KD"),
                p = n("UWiX")("iterator"),
                f = !([].keys && "next" in [].keys()),
                d = function() {
                    return this
                };
            e.exports = function(e, t, n, h, m, v, g) {
                l(n, t, h);
                var y, b, w, k = function(e) {
                        if (!f && e in E) return E[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    S = t + " Iterator",
                    O = "values" == m,
                    x = !1,
                    E = e.prototype,
                    N = E[p] || E["@@iterator"] || m && E[m],
                    _ = N || k(m),
                    C = m ? O ? k("entries") : _ : void 0,
                    T = "Array" == t && E.entries || N;
                if (T && (w = u(T.call(new e))) !== Object.prototype && w.next && (c(w, S, !0), r || "function" == typeof w[p] || a(w, p, d)), O && N && "values" !== N.name && (x = !0, _ = function() {
                        return N.call(this)
                    }), r && !g || !f && !x && E[p] || a(E, p, _), s[t] = _, s[S] = d, m)
                    if (y = {
                            values: O ? _ : k("values"),
                            keys: v ? _ : k("keys"),
                            entries: C
                        }, g)
                        for (b in y) b in E || o(E, b, y[b]);
                    else i(i.P + i.F * (f || x), t, y);
                return y
            }
        },
        Mqbl: function(e, t, n) {
            var r = n("JB68"),
                i = n("w6GO");
            n("zn7N")("keys", function() {
                return function(e) {
                    return i(r(e))
                }
            })
        },
        MvwC: function(e, t, n) {
            var r = n("5T2Y").document;
            e.exports = r && r.documentElement
        },
        N9n2: function(e, t, n) {
            var r = n("SqZg"),
                i = n("vjea");
            e.exports = function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = r(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t)
            }
        },
        Nehr: function(e, t, n) {
            "use strict";
            e.exports = {
                isString: function(e) {
                    return "string" === typeof e
                },
                isObject: function(e) {
                    return "object" === typeof e && null !== e
                },
                isNull: function(e) {
                    return null === e
                },
                isNullOrUndefined: function(e) {
                    return null == e
                }
            }
        },
        NwJ3: function(e, t, n) {
            var r = n("SBuE"),
                i = n("UWiX")("iterator"),
                o = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (r.Array === e || o[i] === e)
            }
        },
        OS56: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = ((r = n("8//2")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = i
        },
        Oc8Q: function(e, t, n) {
            "use strict";
            var r, i = n("5T2Y"),
                o = n("V7Et")(0),
                a = n("kTiW"),
                s = n("6/1s"),
                l = n("kwZ1"),
                c = n("kB4c"),
                u = n("93I4"),
                p = n("n3ko"),
                f = n("n3ko"),
                d = !i.ActiveXObject && "ActiveXObject" in i,
                h = s.getWeak,
                m = Object.isExtensible,
                v = c.ufstore,
                g = function(e) {
                    return function() {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                },
                y = {
                    get: function(e) {
                        if (u(e)) {
                            var t = h(e);
                            return !0 === t ? v(p(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                        }
                    },
                    set: function(e, t) {
                        return c.def(p(this, "WeakMap"), e, t)
                    }
                },
                b = e.exports = n("raTm")("WeakMap", g, y, c, !0, !0);
            f && d && (l((r = c.getConstructor(g, "WeakMap")).prototype, y), s.NEED = !0, o(["delete", "has", "get", "set"], function(e) {
                var t = b.prototype,
                    n = t[e];
                a(t, e, function(t, i) {
                    if (u(t) && !m(t)) {
                        this._f || (this._f = new r);
                        var o = this._f[e](t, i);
                        return "set" == e ? this : o
                    }
                    return n.call(this, t, i)
                })
            }))
        },
        P5f7: function(e, t, n) {
            "use strict";
            var r = n("8+Nu");
            n("hfKm")(t, "__esModule", {
                value: !0
            }), t.rewriteUrlForNextExport = function(e) {
                var t = e.split("#"),
                    n = r(t, 2),
                    i = n[0],
                    o = n[1],
                    a = i.split("?"),
                    s = r(a, 2),
                    l = s[0],
                    c = s[1];
                return l = l.replace(/\/$/, ""), /\.[^/]+\/?$/.test(l) || (l += "/"), c && (l += "?" + c), o && (l += "#" + o), l
            }
        },
        PAGr: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            a(n("17x9"));
            var r = a(n("q1tI")),
                i = n("i8i4"),
                o = a(n("UnXY"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                var t, n;

                function a() {
                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onEnter", 0, n)
                    }, t.handleEntering = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onEntering", 0, n)
                    }, t.handleEntered = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onEntered", 0, n)
                    }, t.handleExit = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onExit", 1, n)
                    }, t.handleExiting = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onExiting", 1, n)
                    }, t.handleExited = function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.handleLifecycle("onExited", 1, n)
                    }, t
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var s = a.prototype;
                return s.handleLifecycle = function(e, t, n) {
                    var o, a = this.props.children,
                        s = r.default.Children.toArray(a)[t];
                    s.props[e] && (o = s.props)[e].apply(o, n), this.props[e] && this.props[e]((0, i.findDOMNode)(this))
                }, s.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.in,
                        i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, ["children", "in"]),
                        a = r.default.Children.toArray(t),
                        s = a[0],
                        l = a[1];
                    return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(o.default, i, n ? r.default.cloneElement(s, {
                        key: "first",
                        onEnter: this.handleEnter,
                        onEntering: this.handleEntering,
                        onEntered: this.handleEntered
                    }) : r.default.cloneElement(l, {
                        key: "second",
                        onEnter: this.handleExit,
                        onEntering: this.handleExiting,
                        onEntered: this.handleExited
                    }))
                }, a
            }(r.default.Component);
            s.propTypes = {};
            var l = s;
            t.default = l, e.exports = t.default
        },
        PBE1: function(e, t, n) {
            "use strict";
            var r = n("Y7ZC"),
                i = n("WEpk"),
                o = n("5T2Y"),
                a = n("8gHz"),
                s = n("zXhZ");
            r(r.P + r.R, "Promise", {
                finally: function(e) {
                    var t = a(this, i.Promise || o.Promise),
                        n = "function" == typeof e;
                    return this.then(n ? function(n) {
                        return s(t, e()).then(function() {
                            return n
                        })
                    } : e, n ? function(n) {
                        return s(t, e()).then(function() {
                            throw n
                        })
                    } : e)
                }
            })
        },
        PQJW: function(e, t, n) {
            var r = n("d04V"),
                i = n("yLu3");
            e.exports = function(e) {
                if (i(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return r(e)
            }
        },
        "Q/yX": function(e, t, n) {
            "use strict";
            var r = n("Y7ZC"),
                i = n("ZW5q"),
                o = n("RDmV");
            r(r.S, "Promise", {
                try: function(e) {
                    var t = i.f(this),
                        n = o(e);
                    return (n.e ? t.reject : t.resolve)(n.v), t.promise
                }
            })
        },
        QMMT: function(e, t, n) {
            var r = n("a0xu"),
                i = n("UWiX")("toStringTag"),
                o = "Arguments" == r(function() {
                    return arguments
                }());
            e.exports = function(e) {
                var t, n, a;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (n) {}
                }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
            }
        },
        QXhf: function(e, t, n) {
            var r, i, o, a = n("2GTP"),
                s = n("MCSJ"),
                l = n("MvwC"),
                c = n("Hsns"),
                u = n("5T2Y"),
                p = u.process,
                f = u.setImmediate,
                d = u.clearImmediate,
                h = u.MessageChannel,
                m = u.Dispatch,
                v = 0,
                g = {},
                y = function() {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t()
                    }
                },
                b = function(e) {
                    y.call(e.data)
                };
            f && d || (f = function(e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return g[++v] = function() {
                    s("function" == typeof e ? e : Function(e), t)
                }, r(v), v
            }, d = function(e) {
                delete g[e]
            }, "process" == n("a0xu")(p) ? r = function(e) {
                p.nextTick(a(y, e, 1))
            } : m && m.now ? r = function(e) {
                m.now(a(y, e, 1))
            } : h ? (o = (i = new h).port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function(e) {
                u.postMessage(e + "", "*")
            }, u.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), y.call(e)
                }
            } : function(e) {
                setTimeout(a(y, e, 1), 0)
            }), e.exports = {
                set: f,
                clear: d
            }
        },
        QtRH: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("1Yj4"),
                a = n("ok1R"),
                s = n("rhny"),
                l = i.a.createElement;
            t.default = function() {
                return l("div", {
                    className: "saas1 copyright"
                }, l(o.a, null, l(a.a, null, l(s.a, {
                    sm: "6"
                }, l("div", {
                    className: "link-horizontal center-text"
                }, l("ul", null, l("li", null, l("a", {
                    className: "copyright-text op-text",
                    href: "#"
                }, "Privacy Policy")), l("li", null, l("a", {
                    className: "copyright-text op-text",
                    href: "#"
                }, "Terms & Conditions"))))), l(s.a, {
                    sm: "6"
                }, l("div", null, l("h6", {
                    className: "copyright-text text-white text-right op-text"
                }, "Copyright \xa9 2020 Unice by ", l("i", {
                    "aria-hidden": "true",
                    className: "fa fa-heart mx-1"
                }), "pixelstrap"))))))
            }
        },
        "R+7+": function(e, t, n) {
            var r = n("w6GO"),
                i = n("mqlF"),
                o = n("NV0k");
            e.exports = function(e) {
                var t = r(e),
                    n = i.f;
                if (n)
                    for (var a, s = n(e), l = o.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a);
                return t
            }
        },
        RDmV: function(e, t) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    }
                } catch (t) {
                    return {
                        e: !0,
                        v: t
                    }
                }
            }
        },
        "RRc/": function(e, t, n) {
            var r = n("oioR");
            e.exports = function(e, t) {
                var n = [];
                return r(e, !1, n.push, n, t), n
            }
        },
        "RU/L": function(e, t, n) {
            n("Rqdy");
            var r = n("WEpk").Object;
            e.exports = function(e, t, n) {
                return r.defineProperty(e, t, n)
            }
        },
        RfKB: function(e, t, n) {
            var r = n("2faE").f,
                i = n("B+OT"),
                o = n("UWiX")("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                    configurable: !0,
                    value: t
                })
            }
        },
        Rp86: function(e, t, n) {
            n("bBy9"), n("FlQf"), e.exports = n("fXsU")
        },
        Rqdy: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.S + r.F * !n("jmDH"), "Object", {
                defineProperty: n("2faE").f
            })
        },
        S3Uj: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            }
                    return t.default = e, t
                }(n("17x9")),
                i = s(n("q1tI")),
                o = s(n("i8i4")),
                a = n("VCL8");
            n("xfxO");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = "unmounted";
            t.UNMOUNTED = l;
            var c = "exited";
            t.EXITED = c;
            var u = "entering";
            t.ENTERING = u;
            var p = "entered";
            t.ENTERED = p;
            t.EXITING = "exiting";
            var f = function(e) {
                var t, n;

                function r(t, n) {
                    var r;
                    r = e.call(this, t, n) || this;
                    var i, o = n.transitionGroup,
                        a = o && !o.isMounting ? t.enter : t.appear;
                    return r.appearStatus = null, t.in ? a ? (i = c, r.appearStatus = u) : i = p : i = t.unmountOnExit || t.mountOnEnter ? l : c, r.state = {
                        status: i
                    }, r.nextCallback = null, r
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var a = r.prototype;
                return a.getChildContext = function() {
                    return {
                        transitionGroup: null
                    }
                }, r.getDerivedStateFromProps = function(e, t) {
                    return e.in && t.status === l ? {
                        status: c
                    } : null
                }, a.componentDidMount = function() {
                    this.updateStatus(!0, this.appearStatus)
                }, a.componentDidUpdate = function(e) {
                    var t = null;
                    if (e !== this.props) {
                        var n = this.state.status;
                        this.props.in ? n !== u && n !== p && (t = u) : n !== u && n !== p || (t = "exiting")
                    }
                    this.updateStatus(!1, t)
                }, a.componentWillUnmount = function() {
                    this.cancelNextCallback()
                }, a.getTimeouts = function() {
                    var e, t, n, r = this.props.timeout;
                    return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                        exit: e,
                        enter: t,
                        appear: n
                    }
                }, a.updateStatus = function(e, t) {
                    if (void 0 === e && (e = !1), null !== t) {
                        this.cancelNextCallback();
                        var n = o.default.findDOMNode(this);
                        t === u ? this.performEnter(n, e) : this.performExit(n)
                    } else this.props.unmountOnExit && this.state.status === c && this.setState({
                        status: l
                    })
                }, a.performEnter = function(e, t) {
                    var n = this,
                        r = this.props.enter,
                        i = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
                        o = this.getTimeouts(),
                        a = i ? o.appear : o.enter;
                    t || r ? (this.props.onEnter(e, i), this.safeSetState({
                        status: u
                    }, function() {
                        n.props.onEntering(e, i), n.onTransitionEnd(e, a, function() {
                            n.safeSetState({
                                status: p
                            }, function() {
                                n.props.onEntered(e, i)
                            })
                        })
                    })) : this.safeSetState({
                        status: p
                    }, function() {
                        n.props.onEntered(e)
                    })
                }, a.performExit = function(e) {
                    var t = this,
                        n = this.props.exit,
                        r = this.getTimeouts();
                    n ? (this.props.onExit(e), this.safeSetState({
                        status: "exiting"
                    }, function() {
                        t.props.onExiting(e), t.onTransitionEnd(e, r.exit, function() {
                            t.safeSetState({
                                status: c
                            }, function() {
                                t.props.onExited(e)
                            })
                        })
                    })) : this.safeSetState({
                        status: c
                    }, function() {
                        t.props.onExited(e)
                    })
                }, a.cancelNextCallback = function() {
                    null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                }, a.safeSetState = function(e, t) {
                    t = this.setNextCallback(t), this.setState(e, t)
                }, a.setNextCallback = function(e) {
                    var t = this,
                        n = !0;
                    return this.nextCallback = function(r) {
                        n && (n = !1, t.nextCallback = null, e(r))
                    }, this.nextCallback.cancel = function() {
                        n = !1
                    }, this.nextCallback
                }, a.onTransitionEnd = function(e, t, n) {
                    this.setNextCallback(n);
                    var r = null == t && !this.props.addEndListener;
                    e && !r ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
                }, a.render = function() {
                    var e = this.state.status;
                    if (e === l) return null;
                    var t = this.props,
                        n = t.children,
                        r = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(t, ["children"]);
                    if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" === typeof n) return n(e, r);
                    var o = i.default.Children.only(n);
                    return i.default.cloneElement(o, r)
                }, r
            }(i.default.Component);

            function d() {}
            f.contextTypes = {
                transitionGroup: r.object
            }, f.childContextTypes = {
                transitionGroup: function() {}
            }, f.propTypes = {}, f.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: d,
                onEntering: d,
                onEntered: d,
                onExit: d,
                onExiting: d,
                onExited: d
            }, f.UNMOUNTED = 0, f.EXITED = 1, f.ENTERING = 2, f.ENTERED = 3, f.EXITING = 4;
            var h = (0, a.polyfill)(f);
            t.default = h
        },
        SBuE: function(e, t) {
            e.exports = {}
        },
        Si88: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            ! function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                t.default = e
            }(n("17x9"));
            var r = s(n("ycFn")),
                i = s(n("VOcB")),
                o = s(n("q1tI")),
                a = s(n("S3Uj"));
            n("xfxO");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = function(e, t) {
                    return e && t && t.split(" ").forEach(function(t) {
                        return (0, r.default)(e, t)
                    })
                },
                u = function(e, t) {
                    return e && t && t.split(" ").forEach(function(t) {
                        return (0, i.default)(e, t)
                    })
                },
                p = function(e) {
                    var t, n;

                    function r() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).onEnter = function(e, n) {
                            var r = t.getClassNames(n ? "appear" : "enter").className;
                            t.removeClasses(e, "exit"), c(e, r), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function(e, n) {
                            var r = t.getClassNames(n ? "appear" : "enter").activeClassName;
                            t.reflowAndAddClass(e, r), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function(e, n) {
                            var r = t.getClassNames("appear").doneClassName,
                                i = t.getClassNames("enter").doneClassName,
                                o = n ? r + " " + i : i;
                            t.removeClasses(e, n ? "appear" : "enter"), c(e, o), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function(e) {
                            var n = t.getClassNames("exit").className;
                            t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), c(e, n), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            var n = t.getClassNames("exit").activeClassName;
                            t.reflowAndAddClass(e, n), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            var n = t.getClassNames("exit").doneClassName;
                            t.removeClasses(e, "exit"), c(e, n), t.props.onExited && t.props.onExited(e)
                        }, t.getClassNames = function(e) {
                            var n = t.props.classNames,
                                r = "string" === typeof n,
                                i = r ? (r && n ? n + "-" : "") + e : n[e];
                            return {
                                className: i,
                                activeClassName: r ? i + "-active" : n[e + "Active"],
                                doneClassName: r ? i + "-done" : n[e + "Done"]
                            }
                        }, t
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var i = r.prototype;
                    return i.removeClasses = function(e, t) {
                        var n = this.getClassNames(t),
                            r = n.className,
                            i = n.activeClassName,
                            o = n.doneClassName;
                        r && u(e, r), i && u(e, i), o && u(e, o)
                    }, i.reflowAndAddClass = function(e, t) {
                        t && (e && e.scrollTop, c(e, t))
                    }, i.render = function() {
                        var e = l({}, this.props);
                        return delete e.classNames, o.default.createElement(a.default, l({}, e, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, r
                }(o.default.Component);
            p.defaultProps = {
                classNames: ""
            }, p.propTypes = {};
            var f = p;
            t.default = f, e.exports = t.default
        },
        SqZg: function(e, t, n) {
            e.exports = n("3GJH")
        },
        TJWN: function(e, t, n) {
            "use strict";
            var r = n("5T2Y"),
                i = n("WEpk"),
                o = n("2faE"),
                a = n("jmDH"),
                s = n("UWiX")("species");
            e.exports = function(e) {
                var t = "function" == typeof i[e] ? i[e] : r[e];
                a && t && !t[s] && o.f(t, s, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        TRZx: function(e, t, n) {
            e.exports = n("JbBM")
        },
        TbGu: function(e, t, n) {
            var r = n("fGSI"),
                i = n("PQJW"),
                o = n("2PDY");
            e.exports = function(e) {
                return r(e) || i(e) || o()
            }
        },
        TqRt: function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        TuGD: function(e, t, n) {
            var r = n("UWiX")("iterator"),
                i = !1;
            try {
                var o = [7][r]();
                o.return = function() {
                    i = !0
                }, Array.from(o, function() {
                    throw 2
                })
            } catch (a) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var o = [7],
                        s = o[r]();
                    s.next = function() {
                        return {
                            done: n = !0
                        }
                    }, o[r] = function() {
                        return s
                    }, e(o)
                } catch (a) {}
                return n
            }
        },
        "U+KD": function(e, t, n) {
            var r = n("B+OT"),
                i = n("JB68"),
                o = n("VVlx")("IE_PROTO"),
                a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        },
        UDep: function(e, t, n) {
            n("wgeU"), n("FlQf"), n("bBy9"), n("g33z"), n("XLbu"), n("/h46"), n("dVTT"), e.exports = n("WEpk").Map
        },
        UO39: function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        },
        UWiX: function(e, t, n) {
            var r = n("29s/")("wks"),
                i = n("YqAc"),
                o = n("5T2Y").Symbol,
                a = "function" == typeof o;
            (e.exports = function(e) {
                return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
            }).store = r
        },
        UYWM: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("OS56"),
                a = n.n(o),
                s = n("DCcX"),
                l = n("vkoW"),
                c = n("CaDr"),
                u = n("1Yj4"),
                p = n("ok1R"),
                f = n("rhny"),
                d = i.a.createElement,
                h = {
                    dots: !0,
                    infinite: !0,
                    speed: 500,
                    autoplay: !0,
                    swipeToSlide: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                };
            t.default = function() {
                var e = Object(r.useState)(),
                    t = e[0],
                    n = e[1],
                    i = function() {
                        n(!t)
                    };
                return d("section", {
                    className: "saas1 testimonial videos testimonial-bg"
                }, d(u.a, null, d(p.a, null, d(f.a, {
                    md: "12",
                    className: "text-center"
                }, d("div", {
                    className: "title"
                }, d("img", {
                    alt: "title-logo",
                    className: "img-fluid",
                    src: "/assets/images/saas1/title-logo.png"
                }), d("div", {
                    className: "main-title"
                }, d("h2", null, d("span", {
                    className: "theme-color"
                }, "5"), "0k ", d("span", {
                    className: "theme-color"
                }, "E"), "xperts ", d("span", {
                    className: "theme-color"
                }, "T"), "rust ", d("span", {
                    className: "theme-color"
                }, "U"), "s")), d("hr", null), d("div", {
                    className: "sub-title"
                }, d("p", {
                    className: "p-padding"
                }, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.")))), d(f.a, {
                    md: "6",
                    sm: "12"
                }, d("div", {
                    className: "center-content"
                }, d("div", {
                    className: "video w-100"
                }, d("a", {
                    className: "button center-content",
                    onClick: i
                }, d("img", {
                    alt: "video",
                    className: "img-fluid",
                    src: "/assets/images/saas1/testimonial-video-icon.png"
                })), d(s.a, {
                    isOpen: t,
                    toggle: i,
                    centered: !0,
                    size: "lg"
                }, d(l.a, {
                    toggle: i,
                    className: "modal-no-header close-up"
                }), d(c.a, {
                    className: "iframe-modal"
                }, d("iframe", {
                    className: "mfp-iframe",
                    frameborder: "0",
                    allowfullscreen: "",
                    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"
                })))))), d(f.a, {
                    md: "6"
                }, d("div", {
                    className: "testimonial-slider"
                }, d(a.a, h, d("div", {
                    className: "item"
                }, d("div", {
                    className: "testimonial"
                }, d("div", {
                    className: "testimonial-box"
                }, d("img", {
                    alt: "dot",
                    src: "/assets/images/saas1/testimonail-dot.png"
                }), d("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), d("div", {
                    className: "testi-profile"
                }, d("div", {
                    className: "media"
                }, d("img", {
                    alt: "profile-testimonial",
                    src: "/assets/images/saas1/testi-profile.png"
                }), d("div", {
                    className: "media-body"
                }, d("h5", {
                    className: "mt-0"
                }, "Elmer Harvy"), d("h6", null, "Graphics Designer"))))), d("div", {
                    className: "item"
                }, d("div", {
                    className: "testimonial"
                }, d("div", {
                    className: "testimonial-box"
                }, d("img", {
                    alt: "dot",
                    src: "/assets/images/saas1/testimonail-dot.png"
                }), d("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), d("div", {
                    className: "testi-profile"
                }, d("div", {
                    className: "media"
                }, d("img", {
                    alt: "Generic placeholder image",
                    src: "/assets/images/saas1/testi-profile.png"
                }), d("div", {
                    className: "media-body"
                }, d("h5", {
                    className: "mt-0"
                }, "Elmer Harvy"), d("h6", null, "Graphics Designer"))))), d("div", {
                    className: "item"
                }, d("div", {
                    className: "testimonial"
                }, d("div", {
                    className: "testimonial-box"
                }, d("img", {
                    alt: "dot",
                    src: "/assets/images/saas1/testimonail-dot.png"
                }), d("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), d("div", {
                    className: "testi-profile"
                }, d("div", {
                    className: "media"
                }, d("img", {
                    alt: "profile",
                    src: "/assets/images/saas1/testi-profile.png"
                }), d("div", {
                    className: "media-body"
                }, d("h5", {
                    className: "mt-0"
                }, "Elmer Harvy"), d("h6", null, "Graphics Designer")))))))))))
            }
        },
        "UZv/": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var r = a(n("q1tI")),
                i = a(n("TSYQ")),
                o = n("x9Za");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(n, !0).forEach(function(t) {
                        m(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = function(e) {
                    var t, n, r, i, o;
                    return r = (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || o >= e.slideCount, e.centerMode ? (i = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount === 0, o > e.currentSlide - i - 1 && o <= e.currentSlide + i && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                        "slick-slide": !0,
                        "slick-active": t,
                        "slick-center": n,
                        "slick-cloned": r,
                        "slick-current": o === e.currentSlide
                    }
                },
                g = function(e, t) {
                    return e.key || t
                },
                y = function(e) {
                    var t, n = [],
                        a = [],
                        s = [],
                        l = r.default.Children.count(e.children),
                        c = (0, o.lazyStartIndex)(e),
                        u = (0, o.lazyEndIndex)(e);
                    return r.default.Children.forEach(e.children, function(p, f) {
                        var d, m = {
                            message: "children",
                            index: f,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        d = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0 ? p : r.default.createElement("div", null);
                        var y = function(e) {
                                var t = {};
                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase, t.WebkitTransition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase), t
                            }(h({}, e, {
                                index: f
                            })),
                            b = d.props.className || "",
                            w = v(h({}, e, {
                                index: f
                            }));
                        if (n.push(r.default.cloneElement(d, {
                                key: "original" + g(d, f),
                                "data-index": f,
                                className: (0, i.default)(w, b),
                                tabIndex: "-1",
                                "aria-hidden": !w["slick-active"],
                                style: h({
                                    outline: "none"
                                }, d.props.style || {}, {}, y),
                                onClick: function(t) {
                                    d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                                }
                            })), e.infinite && !1 === e.fade) {
                            var k = l - f;
                            k <= (0, o.getPreClones)(e) && l !== e.slidesToShow && ((t = -k) >= c && (d = p), w = v(h({}, e, {
                                index: t
                            })), a.push(r.default.cloneElement(d, {
                                key: "precloned" + g(d, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, i.default)(w, b),
                                "aria-hidden": !w["slick-active"],
                                style: h({}, d.props.style || {}, {}, y),
                                onClick: function(t) {
                                    d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                                }
                            }))), l !== e.slidesToShow && ((t = l + f) < u && (d = p), w = v(h({}, e, {
                                index: t
                            })), s.push(r.default.cloneElement(d, {
                                key: "postcloned" + g(d, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, i.default)(w, b),
                                "aria-hidden": !w["slick-active"],
                                style: h({}, d.props.style || {}, {}, y),
                                onClick: function(t) {
                                    d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                                }
                            })))
                        }
                    }), e.rtl ? a.concat(n, s).reverse() : a.concat(n, s)
                },
                b = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), u(this, p(t).apply(this, arguments))
                    }
                    var n, i, o;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(t, r["default"].PureComponent), n = t, (i = [{
                        key: "render",
                        value: function() {
                            var e = y(this.props),
                                t = this.props,
                                n = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return r.default.createElement("div", l({
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, n), e)
                        }
                    }]) && c(n.prototype, i), o && c(n, o), t
                }();
            t.Track = b
        },
        UnXY: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = s(n("17x9")),
                i = s(n("q1tI")),
                o = n("VCL8"),
                a = n("8PcY");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var u = Object.values || function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                p = function(e) {
                    var t, n;

                    function r(t, n) {
                        var r, i = (r = e.call(this, t, n) || this).handleExited.bind(c(c(r)));
                        return r.state = {
                            handleExited: i,
                            firstRender: !0
                        }, r
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var o = r.prototype;
                    return o.getChildContext = function() {
                        return {
                            transitionGroup: {
                                isMounting: !this.appeared
                            }
                        }
                    }, o.componentDidMount = function() {
                        this.appeared = !0, this.mounted = !0
                    }, o.componentWillUnmount = function() {
                        this.mounted = !1
                    }, r.getDerivedStateFromProps = function(e, t) {
                        var n = t.children,
                            r = t.handleExited;
                        return {
                            children: t.firstRender ? (0, a.getInitialChildMapping)(e, r) : (0, a.getNextChildMapping)(e, n, r),
                            firstRender: !1
                        }
                    }, o.handleExited = function(e, t) {
                        var n = (0, a.getChildMapping)(this.props.children);
                        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
                            var n = l({}, t.children);
                            return delete n[e.key], {
                                children: n
                            }
                        }))
                    }, o.render = function() {
                        var e = this.props,
                            t = e.component,
                            n = e.childFactory,
                            r = function(e, t) {
                                if (null == e) return {};
                                var n, r, i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i
                            }(e, ["component", "childFactory"]),
                            o = u(this.state.children).map(n);
                        return delete r.appear, delete r.enter, delete r.exit, null === t ? o : i.default.createElement(t, r, o)
                    }, r
                }(i.default.Component);
            p.childContextTypes = {
                transitionGroup: r.default.object.isRequired
            }, p.propTypes = {}, p.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var f = (0, o.polyfill)(p);
            t.default = f, e.exports = t.default
        },
        "V+O7": function(e, t, n) {
            n("aPfg")("Set")
        },
        V7Et: function(e, t, n) {
            var r = n("2GTP"),
                i = n("M1xp"),
                o = n("JB68"),
                a = n("tEej"),
                s = n("v6xn");
            e.exports = function(e, t) {
                var n = 1 == e,
                    l = 2 == e,
                    c = 3 == e,
                    u = 4 == e,
                    p = 6 == e,
                    f = 5 == e || p,
                    d = t || s;
                return function(t, s, h) {
                    for (var m, v, g = o(t), y = i(g), b = r(s, h, 3), w = a(y.length), k = 0, S = n ? d(t, w) : l ? d(t, 0) : void 0; w > k; k++)
                        if ((f || k in y) && (v = b(m = y[k], k, g), e))
                            if (n) S[k] = v;
                            else if (v) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return m;
                        case 6:
                            return k;
                        case 2:
                            S.push(m)
                    } else if (u) return !1;
                    return p ? -1 : c || u ? u : S
                }
            }
        },
        VCL8: function(e, t, n) {
            "use strict";

            function r() {
                var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null !== e && void 0 !== e && this.setState(e)
            }

            function i(e) {
                this.setState(function(t) {
                    var n = this.constructor.getDerivedStateFromProps(e, t);
                    return null !== n && void 0 !== n ? n : null
                }.bind(this))
            }

            function o(e, t) {
                try {
                    var n = this.props,
                        r = this.state;
                    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
                } finally {
                    this.props = n, this.state = r
                }
            }

            function a(e) {
                var t = e.prototype;
                if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
                if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof t.getSnapshotBeforeUpdate) return e;
                var n = null,
                    a = null,
                    s = null;
                if ("function" === typeof t.componentWillMount ? n = "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" === typeof t.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" === typeof t.componentWillUpdate ? s = "componentWillUpdate" : "function" === typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== a || null !== s) {
                    var l = e.displayName || e.name,
                        c = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + l + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== a ? "\n  " + a : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                }
                if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount = r, t.componentWillReceiveProps = i), "function" === typeof t.getSnapshotBeforeUpdate) {
                    if ("function" !== typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    t.componentWillUpdate = o;
                    var u = t.componentDidUpdate;
                    t.componentDidUpdate = function(e, t, n) {
                        var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                        u.call(this, e, t, r)
                    }
                }
                return e
            }
            n.r(t), n.d(t, "polyfill", function() {
                return a
            }), r.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0
        },
        VJsP: function(e, t, n) {
            "use strict";
            var r = n("2GTP"),
                i = n("Y7ZC"),
                o = n("JB68"),
                a = n("sNwI"),
                s = n("NwJ3"),
                l = n("tEej"),
                c = n("IP1Z"),
                u = n("fNZA");
            i(i.S + i.F * !n("TuGD")(function(e) {
                Array.from(e)
            }), "Array", {
                from: function(e) {
                    var t, n, i, p, f = o(e),
                        d = "function" == typeof this ? this : Array,
                        h = arguments.length,
                        m = h > 1 ? arguments[1] : void 0,
                        v = void 0 !== m,
                        g = 0,
                        y = u(f);
                    if (v && (m = r(m, h > 2 ? arguments[2] : void 0, 2)), void 0 == y || d == Array && s(y))
                        for (n = new d(t = l(f.length)); t > g; g++) c(n, g, v ? m(f[g], g) : f[g]);
                    else
                        for (p = y.call(f), n = new d; !(i = p.next()).done; g++) c(n, g, v ? a(p, m, [i.value, g], !0) : i.value);
                    return n.length = g, n
                }
            })
        },
        VKFn: function(e, t, n) {
            n("bBy9"), n("FlQf"), e.exports = n("ldVq")
        },
        VOcB: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            e.exports = function(e, t) {
                e.classList ? e.classList.remove(t) : "string" === typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
            }
        },
        W2fC: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("kOwS"),
                i = n("q1tI"),
                o = n.n(i),
                a = n("OS56"),
                s = n.n(a),
                l = n("1Yj4"),
                c = n("ok1R"),
                u = n("rhny"),
                p = o.a.createElement,
                f = {
                    dots: !0,
                    infinite: !0,
                    speed: 500,
                    autoplay: !0,
                    swipeToSlide: !0,
                    arrows: !1,
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 6
                        }
                    }]
                };
            t.default = function() {
                return p("section", {
                    className: "saas1 client brand-slider",
                    id: "client-box"
                }, p(l.a, {
                    fluid: !0
                }, p(c.a, null, p(u.a, {
                    md: "12",
                    className: "client-box text-center"
                }, p(s.a, Object(r.a)({
                    className: "owl-carousel saas-brand owl-theme"
                }, f), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/1.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/2.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/3.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/4.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/5.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/6.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/4.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/3.png"
                })), p("div", {
                    className: "item"
                }, p("img", {
                    alt: "client-slider",
                    className: "img-fluid",
                    src: "/assets/images/saas1/brand/2.png"
                })))))))
            }
        },
        WaGi: function(e, t, n) {
            var r = n("hfKm");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), r(e, i.key, i)
                }
            }
            e.exports = function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        },
        Wg6b: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("qkC2"),
                a = (n("wevc"), n("1Yj4")),
                s = n("ok1R"),
                l = n("rhny"),
                c = i.a.createElement;
            t.default = function() {
                return c("section", {
                    className: "saas1 faq",
                    id: "faq"
                }, c(a.a, null, c(s.a, null, c(l.a, {
                    md: "8"
                }, c("div", {
                    className: "faq-block"
                }, c("div", null, c("h3", {
                    className: "frequent-text"
                }, "Frequently Asked Questions"), c("h6", null, "Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean aesthetics supported by a strong concept is what we stand for."), c(o.Accordion, {
                    atomic: !0
                }, c(o.AccordionItem, {
                    className: "card-header bg-primary",
                    title: "Do I need to make a payment?"
                }, c(function() {
                    return c("div", {
                        className: "collapse show",
                        id: "collapseicon",
                        "aria-labelledby": "collapseicon",
                        "data-parent": "#accordionoc"
                    }, c("div", {
                        className: "card-body"
                    }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."))
                }, {
                    className: "active"
                })), c(o.AccordionItem, {
                    className: "card-header bg-primary",
                    title: "Do I need to make a payment?"
                }, c(function() {
                    return c("div", {
                        className: "collapse show",
                        id: "collapseicon1",
                        "aria-labelledby": "collapseicon1",
                        "data-parent": "#accordionoc"
                    }, c("div", {
                        className: "card-body"
                    }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."))
                }, null)), c(o.AccordionItem, {
                    className: "card-header bg-primary",
                    title: "Do I need to make a payment?"
                }, c(function() {
                    return c("div", {
                        className: "collapse show",
                        id: "collapseicon2",
                        "data-parent": "#accordionoc"
                    }, c("div", {
                        className: "card-body"
                    }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."))
                }, null)), c(o.AccordionItem, {
                    className: "card-header bg-primary",
                    title: "Do I need to make a payment?"
                }, c(function() {
                    return c("div", {
                        className: "collapse show",
                        id: "collapseicon3",
                        "data-parent": "#accordionoc"
                    }, c("div", {
                        className: "card-body"
                    }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."))
                }, null))), c("h6", {
                    className: "link"
                }, "Still have a question? Reach out to us: ", c("a", null, "demo@123.com"))))), c(l.a, {
                    md: "4"
                }, c("div", {
                    className: "faq-img-block"
                }, c("img", {
                    alt: "faq-person",
                    className: "img-fluid",
                    src: "/assets/images/saas1/faq-img.png"
                }))))))
            }
        },
        Wu5q: function(e, t, n) {
            "use strict";
            var r = n("2faE").f,
                i = n("oVml"),
                o = n("XJU/"),
                a = n("2GTP"),
                s = n("EXMj"),
                l = n("oioR"),
                c = n("MPFp"),
                u = n("UO39"),
                p = n("TJWN"),
                f = n("jmDH"),
                d = n("6/1s").fastKey,
                h = n("n3ko"),
                m = f ? "_s" : "size",
                v = function(e, t) {
                    var n, r = d(t);
                    if ("F" !== r) return e._i[r];
                    for (n = e._f; n; n = n.n)
                        if (n.k == t) return n
                };
            e.exports = {
                getConstructor: function(e, t, n, c) {
                    var u = e(function(e, r) {
                        s(e, u, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != r && l(r, n, e[c], e)
                    });
                    return o(u.prototype, {
                        clear: function() {
                            for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                            e._f = e._l = void 0, e[m] = 0
                        },
                        delete: function(e) {
                            var n = h(this, t),
                                r = v(n, e);
                            if (r) {
                                var i = r.n,
                                    o = r.p;
                                delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[m]--
                            }
                            return !!r
                        },
                        forEach: function(e) {
                            h(this, t);
                            for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                                for (r(n.v, n.k, this); n && n.r;) n = n.p
                        },
                        has: function(e) {
                            return !!v(h(this, t), e)
                        }
                    }), f && r(u.prototype, "size", {
                        get: function() {
                            return h(this, t)[m]
                        }
                    }), u
                },
                def: function(e, t, n) {
                    var r, i, o = v(e, t);
                    return o ? o.v = n : (e._l = o = {
                        i: i = d(t, !0),
                        k: t,
                        v: n,
                        p: r = e._l,
                        n: void 0,
                        r: !1
                    }, e._f || (e._f = o), r && (r.n = o), e[m]++, "F" !== i && (e._i[i] = o)), e
                },
                getEntry: v,
                setStrong: function(e, t, n) {
                    c(e, t, function(e, n) {
                        this._t = h(e, t), this._k = n, this._l = void 0
                    }, function() {
                        for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                        return this._t && (this._l = t = t ? t.n : this._t._f) ? u(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, u(1))
                    }, n ? "entries" : "values", !n, !0), p(t)
                }
            }
        },
        "XJU/": function(e, t, n) {
            var r = n("NegM");
            e.exports = function(e, t, n) {
                for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
                return e
            }
        },
        XLbu: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.P + r.R, "Map", {
                toJSON: n("8iia")("Map")
            })
        },
        XVgq: function(e, t, n) {
            e.exports = n("2Nb0")
        },
        XXOK: function(e, t, n) {
            e.exports = n("Rp86")
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("pbKT"),
                i = n("/HRN"),
                o = n("WaGi"),
                a = n("K47E"),
                s = n("N9n2"),
                l = n("ZDA2"),
                c = n("/+P4"),
                u = n("TbGu"),
                p = n("ttDY");

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !r) return !1;
                    if (r.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(r(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = r(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return l(this, n)
                }
            }
            n("hfKm")(t, "__esModule", {
                value: !0
            });
            var d = n("q1tI"),
                h = !1;
            t.default = function() {
                var e, t = new p;

                function n(n) {
                    e = n.props.reduceComponentsToState(u(t), n.props), n.props.handleStateChange && n.props.handleStateChange(e)
                }
                return function(r) {
                    s(c, r);
                    var l = f(c);

                    function c(e) {
                        var r;
                        return i(this, c), r = l.call(this, e), h && (t.add(a(r)), n(a(r))), r
                    }
                    return o(c, [{
                        key: "componentDidMount",
                        value: function() {
                            t.add(this), n(this)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            n(this)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            t.delete(this), n(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }], [{
                        key: "rewind",
                        value: function() {
                            var n = e;
                            return e = void 0, t.clear(), n
                        }
                    }]), c
                }(d.Component)
            }
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        YTqd: function(e, t, n) {
            "use strict";
            n("hfKm")(t, "__esModule", {
                value: !0
            }), t.getRouteRegex = function(e) {
                var t = (e.replace(/\/$/, "") || "/").replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&"),
                    n = {},
                    r = 1,
                    i = t.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function(e, t) {
                        return n[t.replace(/\\([|\\{}()[\]^$+*?.-])/g, "$1").replace(/^\.{3}/, "")] = r++, 0 === t.indexOf("\\.\\.\\.") ? "/(.+?)" : "/([^/]+?)"
                    });
                return {
                    re: new RegExp("^" + i + "(?:/)?$", "i"),
                    groups: n
                }
            }
        },
        YuTi: function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        },
        Z7t5: function(e, t, n) {
            e.exports = n("+SFK")
        },
        ZDA2: function(e, t, n) {
            var r = n("iZP3"),
                i = n("K47E");
            e.exports = function(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? i(e) : t
            }
        },
        ZW5q: function(e, t, n) {
            "use strict";
            var r = n("eaoh");

            function i(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = r
                }), this.resolve = r(t), this.reject = r(n)
            }
            e.exports.f = function(e) {
                return new i(e)
            }
        },
        Zxgi: function(e, t, n) {
            var r = n("5T2Y"),
                i = n("WEpk"),
                o = n("uOPS"),
                a = n("zLkG"),
                s = n("2faE").f;
            e.exports = function(e) {
                var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, {
                    value: a.f(e)
                })
            }
        },
        aPfg: function(e, t, n) {
            "use strict";
            var r = n("Y7ZC"),
                i = n("eaoh"),
                o = n("2GTP"),
                a = n("oioR");
            e.exports = function(e) {
                r(r.S, e, {
                    from: function(e) {
                        var t, n, r, s, l = arguments[1];
                        return i(this), (t = void 0 !== l) && i(l), void 0 == e ? new this : (n = [], t ? (r = 0, s = o(l, arguments[2], 2), a(e, !1, function(e) {
                            n.push(s(e, r++))
                        })) : a(e, !1, n.push, n), new this(n))
                    }
                })
            }
        },
        aW7e: function(e, t, n) {
            n("wgeU"), n("FlQf"), n("bBy9"), n("JMW+"), n("PBE1"), n("Q/yX"), e.exports = n("WEpk").Promise
        },
        aaW0: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var r = o(n("q1tI")),
                i = o(n("TSYQ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var d = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), u(this, p(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(t, r["default"].PureComponent), n = t, (o = [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            n = (e = {
                                slideCount: this.props.slideCount,
                                slidesToScroll: this.props.slidesToScroll,
                                slidesToShow: this.props.slidesToShow,
                                infinite: this.props.infinite
                            }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1,
                            o = this.props,
                            a = {
                                onMouseEnter: o.onMouseEnter,
                                onMouseOver: o.onMouseOver,
                                onMouseLeave: o.onMouseLeave
                            },
                            c = Array.apply(null, Array(n + 1).join("0").split("")).map(function(e, n) {
                                var o = n * t.props.slidesToScroll,
                                    a = n * t.props.slidesToScroll + (t.props.slidesToScroll - 1),
                                    s = (0, i.default)({
                                        "slick-active": t.props.currentSlide >= o && t.props.currentSlide <= a
                                    }),
                                    l = {
                                        message: "dots",
                                        index: n,
                                        slidesToScroll: t.props.slidesToScroll,
                                        currentSlide: t.props.currentSlide
                                    },
                                    c = t.clickHandler.bind(t, l);
                                return r.default.createElement("li", {
                                    key: n,
                                    className: s
                                }, r.default.cloneElement(t.props.customPaging(n), {
                                    onClick: c
                                }))
                            });
                        return r.default.cloneElement(this.props.appendDots(c), function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? s(n, !0).forEach(function(t) {
                                    l(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, a))
                    }
                }]) && c(n.prototype, o), a && c(n, a), t
            }();
            t.Dots = d
        },
        adOz: function(e, t, n) {
            n("Zxgi")("asyncIterator")
        },
        "ar/p": function(e, t, n) {
            var r = n("5vMV"),
                i = n("FpHa").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, i)
            }
        },
        b3CU: function(e, t, n) {
            var r = n("pbKT"),
                i = n("vjea");

            function o(t, n, a) {
                return ! function() {
                    if ("undefined" === typeof Reflect || !r) return !1;
                    if (r.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(r(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? e.exports = o = function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    return n && i(o, n.prototype), o
                } : e.exports = o = r, o.apply(null, arguments)
            }
            e.exports = o
        },
        bBy9: function(e, t, n) {
            n("w2d+");
            for (var r = n("5T2Y"), i = n("NegM"), o = n("SBuE"), a = n("UWiX")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
                var c = s[l],
                    u = r[c],
                    p = u && u.prototype;
                p && !p[a] && i(p, a, c), o[c] = o.Array
            }
        },
        bdgK: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var n = function() {
                            if ("undefined" !== typeof Map) return Map;

                            function e(e, t) {
                                var n = -1;
                                return e.some(function(e, r) {
                                    return e[0] === t && (n = r, !0)
                                }), n
                            }
                            return function() {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function(t) {
                                    var n = e(this.__entries__, t),
                                        r = this.__entries__[n];
                                    return r && r[1]
                                }, t.prototype.set = function(t, n) {
                                    var r = e(this.__entries__, t);
                                    ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                                }, t.prototype.delete = function(t) {
                                    var n = this.__entries__,
                                        r = e(n, t);
                                    ~r && n.splice(r, 1)
                                }, t.prototype.has = function(t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function(e, t) {
                                    void 0 === t && (t = null);
                                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                        var i = r[n];
                                        e.call(t, i[1], i[0])
                                    }
                                }, t
                            }()
                        }(),
                        r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        i = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                        o = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(e) {
                            return setTimeout(function() {
                                return e(Date.now())
                            }, 1e3 / 60)
                        },
                        a = 2;
                    var s = 20,
                        l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        c = "undefined" !== typeof MutationObserver,
                        u = function() {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                    var n = !1,
                                        r = !1,
                                        i = 0;

                                    function s() {
                                        n && (n = !1, e()), r && c()
                                    }

                                    function l() {
                                        o(s)
                                    }

                                    function c() {
                                        var e = Date.now();
                                        if (n) {
                                            if (e - i < a) return;
                                            r = !0
                                        } else n = !0, r = !1, setTimeout(l, t);
                                        i = e
                                    }
                                    return c
                                }(this.refresh.bind(this), s)
                            }
                            return e.prototype.addObserver = function(e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function(e) {
                                var t = this.observers_,
                                    n = t.indexOf(e);
                                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh()
                            }, e.prototype.updateObservers_ = function() {
                                var e = this.observers_.filter(function(e) {
                                    return e.gatherActive(), e.hasActive()
                                });
                                return e.forEach(function(e) {
                                    return e.broadcastActive()
                                }), e.length > 0
                            }, e.prototype.connect_ = function() {
                                r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function() {
                                r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function(e) {
                                var t = e.propertyName,
                                    n = void 0 === t ? "" : t;
                                l.some(function(e) {
                                    return !!~n.indexOf(e)
                                }) && this.refresh()
                            }, e.getInstance = function() {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        p = function(e, t) {
                            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                                var i = r[n];
                                Object.defineProperty(e, i, {
                                    value: t[i],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        f = function(e) {
                            return e && e.ownerDocument && e.ownerDocument.defaultView || i
                        },
                        d = b(0, 0, 0, 0);

                    function h(e) {
                        return parseFloat(e) || 0
                    }

                    function m(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return t.reduce(function(t, n) {
                            return t + h(e["border-" + n + "-width"])
                        }, 0)
                    }

                    function v(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return d;
                        var r = f(e).getComputedStyle(e),
                            i = function(e) {
                                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                    var i = r[n],
                                        o = e["padding-" + i];
                                    t[i] = h(o)
                                }
                                return t
                            }(r),
                            o = i.left + i.right,
                            a = i.top + i.bottom,
                            s = h(r.width),
                            l = h(r.height);
                        if ("border-box" === r.boxSizing && (Math.round(s + o) !== t && (s -= m(r, "left", "right") + o), Math.round(l + a) !== n && (l -= m(r, "top", "bottom") + a)), ! function(e) {
                                return e === f(e).document.documentElement
                            }(e)) {
                            var c = Math.round(s + o) - t,
                                u = Math.round(l + a) - n;
                            1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(u) && (l -= u)
                        }
                        return b(i.left, i.top, s, l)
                    }
                    var g = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                        return e instanceof f(e).SVGGraphicsElement
                    } : function(e) {
                        return e instanceof f(e).SVGElement && "function" === typeof e.getBBox
                    };

                    function y(e) {
                        return r ? g(e) ? function(e) {
                            var t = e.getBBox();
                            return b(0, 0, t.width, t.height)
                        }(e) : v(e) : d
                    }

                    function b(e, t, n, r) {
                        return {
                            x: e,
                            y: t,
                            width: n,
                            height: r
                        }
                    }
                    var w = function() {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function() {
                                var e = y(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function() {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        k = function() {
                            return function(e, t) {
                                var n = function(e) {
                                    var t = e.x,
                                        n = e.y,
                                        r = e.width,
                                        i = e.height,
                                        o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                        a = Object.create(o.prototype);
                                    return p(a, {
                                        x: t,
                                        y: n,
                                        width: r,
                                        height: i,
                                        top: n,
                                        right: t + r,
                                        bottom: i + n,
                                        left: t
                                    }), a
                                }(t);
                                p(this, {
                                    target: e,
                                    contentRect: n
                                })
                            }
                        }(),
                        S = function() {
                            function e(e, t, r) {
                                if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = r
                            }
                            return e.prototype.observe = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new w(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function() {
                                var e = this;
                                this.clearActive(), this.observations_.forEach(function(t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                })
                            }, e.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map(function(e) {
                                            return new k(e.target, e.broadcastRect())
                                        });
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        O = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                        x = function() {
                            return function e(t) {
                                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                var n = u.getInstance(),
                                    r = new S(t, n, this);
                                O.set(this, r)
                            }
                        }();
                    ["observe", "unobserve", "disconnect"].forEach(function(e) {
                        x.prototype[e] = function() {
                            var t;
                            return (t = O.get(this))[e].apply(t, arguments)
                        }
                    });
                    var E = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : x;
                    t.default = E
                }.call(this, n("yLpj"))
        },
        cAFv: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("8Kt/"),
                a = n.n(o),
                s = n("fh0K"),
                l = n("IGEp"),
                c = n("fhE1"),
                u = n("1YBW"),
                p = n("rZ1Z"),
                f = n("/4Y8"),
                d = n("UYWM"),
                h = n("oJNo"),
                m = n("Wg6b"),
                v = n("W2fC"),
                g = n("4wDe"),
                y = n("QtRH"),
                b = i.a.createElement;
            t.default = function() {
                return Object(r.useEffect)(function() {
                    document.body.style.setProperty("--primary", "#fb3b64"), document.body.style.setProperty("--secondary", "#071828"), document.body.style.setProperty("--light", "#071828"), document.body.style.setProperty("--dark", "#fb3b64")
                }), b("div", null, b(a.a, null, b("title", null, "Modern Sass Layout ")), b(s.a, {
                    className: "saas1"
                }), b(l.default, null), b(c.default, null), b(u.default, null), b(p.default, null), b(f.default, null), b(d.default, null), b(h.default, null), b(m.default, null), b(v.default, null), b(g.default, null), b(y.default, null))
            }
        },
        cHUd: function(e, t, n) {
            "use strict";
            var r = n("Y7ZC");
            e.exports = function(e) {
                r(r.S, e, { of: function() {
                        for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                        return new this(t)
                    }
                })
            }
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("pbKT"),
                i = n("/HRN"),
                o = n("WaGi"),
                a = n("N9n2"),
                s = n("ZDA2"),
                l = n("/+P4");

            function c(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !r) return !1;
                    if (r.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(r(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = r(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return s(this, n)
                }
            }
            var u = n("5Uuq"),
                p = n("KI45");
            t.__esModule = !0, t.default = void 0;
            var f, d = p(n("LX0d")),
                h = n("CxY0"),
                m = u(n("q1tI")),
                v = (p(n("17x9")), p(n("nOHt"))),
                g = (n("P5f7"), n("g/15"));

            function y(e) {
                return e && "object" === typeof e ? (0, g.formatWithValidation)(e) : e
            }
            var b = new d.default,
                w = window.IntersectionObserver;

            function k() {
                return f || (w ? f = new w(function(e) {
                    e.forEach(function(e) {
                        if (b.has(e.target)) {
                            var t = b.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (f.unobserve(e.target), b.delete(e.target), t())
                        }
                    })
                }, {
                    rootMargin: "200px"
                }) : void 0)
            }
            var S = function(e) {
                a(n, e);
                var t = c(n);

                function n(e) {
                    var r;
                    return i(this, n), (r = t.call(this, e)).p = void 0, r.cleanUpListeners = function() {}, r.formatUrls = function(e) {
                        var t = null,
                            n = null,
                            r = null;
                        return function(i, o) {
                            if (r && i === t && o === n) return r;
                            var a = e(i, o);
                            return t = i, n = o, r = a, a
                        }
                    }(function(e, t) {
                        return {
                            href: y(e),
                            as: t ? y(t) : t
                        }
                    }), r.linkClicked = function(e) {
                        var t = e.currentTarget,
                            n = t.nodeName,
                            i = t.target;
                        if ("A" !== n || !(i && "_self" !== i || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && 2 === e.nativeEvent.which)) {
                            var o = r.formatUrls(r.props.href, r.props.as),
                                a = o.href,
                                s = o.as;
                            if (function(e) {
                                    var t = (0, h.parse)(e, !1, !0),
                                        n = (0, h.parse)((0, g.getLocationOrigin)(), !1, !0);
                                    return !t.host || t.protocol === n.protocol && t.host === n.host
                                }(a)) {
                                var l = window.location.pathname;
                                a = (0, h.resolve)(l, a), s = s ? (0, h.resolve)(l, s) : a, e.preventDefault();
                                var c = r.props.scroll;
                                null == c && (c = s.indexOf("#") < 0), v.default[r.props.replace ? "replace" : "push"](a, s, {
                                    shallow: r.props.shallow
                                }).then(function(e) {
                                    e && c && (window.scrollTo(0, 0), document.body.focus())
                                })
                            }
                        }
                    }, r.p = !1 !== e.prefetch, r
                }
                return o(n, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.cleanUpListeners()
                    }
                }, {
                    key: "handleRef",
                    value: function(e) {
                        var t = this;
                        this.p && w && e && e.tagName && (this.cleanUpListeners(), this.cleanUpListeners = function(e, t) {
                            var n = k();
                            return n ? (n.observe(e), b.set(e, t), function() {
                                try {
                                    n.unobserve(e)
                                } catch (t) {
                                    console.error(t)
                                }
                                b.delete(e)
                            }) : function() {}
                        }(e, function() {
                            t.prefetch()
                        }))
                    }
                }, {
                    key: "prefetch",
                    value: function() {
                        if (this.p) {
                            var e = window.location.pathname,
                                t = this.formatUrls(this.props.href, this.props.as).href,
                                n = (0, h.resolve)(e, t);
                            v.default.prefetch(n)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.children,
                            n = this.formatUrls(this.props.href, this.props.as),
                            r = n.href,
                            i = n.as;
                        "string" === typeof t && (t = m.default.createElement("a", null, t));
                        var o = m.Children.only(t),
                            a = {
                                ref: function(t) {
                                    e.handleRef(t), o && "object" === typeof o && o.ref && ("function" === typeof o.ref ? o.ref(t) : "object" === typeof o.ref && (o.ref.current = t))
                                },
                                onMouseEnter: function(t) {
                                    o.props && "function" === typeof o.props.onMouseEnter && o.props.onMouseEnter(t), e.prefetch()
                                },
                                onClick: function(t) {
                                    o.props && "function" === typeof o.props.onClick && o.props.onClick(t), t.defaultPrevented || e.linkClicked(t)
                                }
                            };
                        return !this.props.passHref && ("a" !== o.type || "href" in o.props) || (a.href = i || r), m.default.cloneElement(o, a)
                    }
                }]), n
            }(m.Component);
            S.propTypes = void 0;
            var O = S;
            t.default = O
        },
        ccE7: function(e, t, n) {
            var r = n("Ojgd"),
                i = n("Jes0");
            e.exports = function(e) {
                return function(t, n) {
                    var o, a, s = String(i(t)),
                        l = r(n),
                        c = s.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
                }
            }
        },
        czwh: function(e, t, n) {
            var r = n("Y7ZC"),
                i = n("oVml"),
                o = n("eaoh"),
                a = n("5K7Z"),
                s = n("93I4"),
                l = n("KUxP"),
                c = n("wYmx"),
                u = (n("5T2Y").Reflect || {}).construct,
                p = l(function() {
                    function e() {}
                    return !(u(function() {}, [], e) instanceof e)
                }),
                f = !l(function() {
                    u(function() {})
                });
            r(r.S + r.F * (p || f), "Reflect", {
                construct: function(e, t) {
                    o(e), a(t);
                    var n = arguments.length < 3 ? e : o(arguments[2]);
                    if (f && !p) return u(e, t, n);
                    if (e == n) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var r = [null];
                        return r.push.apply(r, t), new(c.apply(e, r))
                    }
                    var l = n.prototype,
                        d = i(s(l) ? l : Object.prototype),
                        h = Function.apply.call(e, d, t);
                    return s(h) ? h : d
                }
            })
        },
        d04V: function(e, t, n) {
            e.exports = n("0tVQ")
        },
        dI71: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, r(e, t)
            }
            n.d(t, "a", function() {
                return i
            })
        },
        dL40: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.P + r.R, "Set", {
                toJSON: n("8iia")("Set")
            })
        },
        dVTT: function(e, t, n) {
            n("aPfg")("Map")
        },
        dZ6Y: function(e, t, n) {
            "use strict";
            var r = n("SqZg");
            n("hfKm")(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = r(null);
                return {
                    on: function(t, n) {
                        (e[t] || (e[t] = [])).push(n)
                    },
                    off: function(t, n) {
                        e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
                    },
                    emit: function(t) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        (e[t] || []).slice().map(function(e) {
                            e.apply(void 0, r)
                        })
                    }
                }
            }
        },
        dl0q: function(e, t, n) {
            n("Zxgi")("observable")
        },
        eVuF: function(e, t, n) {
            e.exports = n("aW7e")
        },
        ebB4: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = [{
                title: "Home",
                type: "sub",
                children: [{
                    path: "/layouts/agency",
                    title: "Agency",
                    type: "link"
                }, {
                    path: "/layouts/app1",
                    title: "App Landing1",
                    type: "link"
                }, {
                    path: "/layouts/app2",
                    title: "App Landing2",
                    type: "link"
                }, {
                    path: "/layouts/event",
                    title: "Event",
                    type: "link"
                }, {
                    path: "/layouts/gym",
                    title: "Gym",
                    type: "link"
                }, {
                    path: "/layouts/music",
                    title: "Music",
                    type: "link"
                }, {
                    path: "/layouts/resume",
                    title: "Resume",
                    type: "link"
                }, {
                    path: "/layouts/modern-sass",
                    title: "Sass1",
                    type: "link"
                }, {
                    path: "/layouts/enterprice-sass",
                    title: "Sass2",
                    type: "link"
                }, {
                    path: "/layouts/wedding",
                    title: "Wedding",
                    type: "link"
                }, {
                    path: "/layouts/yoga",
                    title: "Yoga",
                    type: "link"
                }, {
                    path: "/layouts/portfolioLayouts",
                    title: "Portfolio",
                    type: "link"
                }]
            }, {
                title: "Blog",
                type: "sub",
                children: [{
                    title: "Blog Grid View",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-grid/column-no-sidebar",
                        title: "No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-grid/column-left-sidebar",
                        title: "Left Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-grid/column-right-sidebar",
                        title: "Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-grid/classic-no-sidebar",
                        title: "Full Width No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-grid/classic-right-sidebar",
                        title: "Full Width Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-grid/classic-left-sidebar",
                        title: "Full Width Left Sidebar",
                        type: "link"
                    }]
                }, {
                    title: "Blog List",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-list/list-no-sidebar",
                        title: "List No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-list/list-left-sidebar",
                        title: "List Left Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-list/list-right-sidebar",
                        title: "List Right Sidebar",
                        type: "link"
                    }]
                }, {
                    title: "Blog List Creative",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-list-creative/split-no-sidebar",
                        title: "No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-list-creative/split-left-sidebar",
                        title: "Left Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-list-creative/split-right-sidebar",
                        title: "Right Sidebar",
                        type: "link"
                    }]
                }, {
                    title: "Blog Mix Layout",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-mix-layout/bigpost-list",
                        title: "List Mix With Left Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-mix-layout/bigpost-split",
                        title: "List Mix With Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-mix-layout/bigpost-split-no-sidebar",
                        title: "List Mix With No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-mix-layout/bigpost-list-no-sidebar",
                        title: "List Full Width No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-mix-layout/bigpost-column",
                        title: "Grid Mix With Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-mix-layout/bigpost-column-no-sidebar",
                        title: "Grid Mix With No Sidebar",
                        type: "link"
                    }]
                }, {
                    title: "Blog Details",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-detail/detail-left-sidebar",
                        title: "Left Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-detail/detail",
                        title: "Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-detail/detail-no-sidebar",
                        title: "No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-detail/detail-gallery",
                        title: "Detail Page With Gallery",
                        type: "link"
                    }, {
                        path: "/blog/blog-detail/detail-video",
                        title: "Detail Page With Video",
                        type: "link"
                    }]
                }, {
                    title: "Blog Masonary",
                    type: "sub",
                    children: [{
                        path: "/blog/blog-masonary/fullwidth-2",
                        title: "Full Width 2",
                        type: "link"
                    }, {
                        path: "/blog/blog-masonary/fullwidth-3",
                        title: "Full Width 3",
                        type: "link"
                    }, {
                        path: "/blog/blog-masonary/fullwidth-4",
                        title: "Full Width 4",
                        type: "link"
                    }, {
                        path: "/blog/blog-masonary/masonary-no-sidebar",
                        title: "No Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-masonary/masonary-right-sidebar",
                        title: "Right Sidebar",
                        type: "link"
                    }, {
                        path: "/blog/blog-masonary/masonary-left-sidebar",
                        title: "Left Sidebar",
                        type: "link"
                    }]
                }]
            }, {
                title: "Pages",
                type: "sub",
                children: [{
                    path: "/page/404",
                    title: "404",
                    type: "link"
                }, {
                    path: "/page/faq",
                    title: "FAQ",
                    type: "link"
                }, {
                    path: "/page/typography",
                    title: "Typography",
                    type: "link"
                }, {
                    path: "/page/maintenance",
                    title: "Maintenance",
                    type: "link"
                }, {
                    path: "/page/about-us",
                    title: "About us",
                    type: "link"
                }, {
                    title: "Team",
                    type: "sub",
                    children: [{
                        path: "/page/team",
                        title: "Team",
                        type: "link"
                    }, {
                        path: "/page/team-grid",
                        title: "Team Grid",
                        type: "link"
                    }, {
                        path: "/page/team-list",
                        title: "Team List",
                        type: "link"
                    }]
                }, {
                    title: "Comming Soon",
                    type: "sub",
                    children: [{
                        path: "/page/commingsoon1",
                        title: "Comming Soon1",
                        type: "link"
                    }, {
                        path: "/page/commingsoon2",
                        title: "Comming Soon2",
                        type: "link"
                    }]
                }]
            }, {
                title: "Elements",
                megaMenu: !0,
                megaMenuType: "small",
                type: "sub",
                children: [{
                    title: "Elements1",
                    type: "sub",
                    children: [{
                        path: "/elements/alerts",
                        title: "Alerts",
                        type: "link",
                        icon: "alert"
                    }, {
                        path: "/elements/accordion",
                        title: "Accordion",
                        type: "link",
                        icon: "layout-accordion-merged"
                    }, {
                        path: "/elements/boxshadow",
                        title: "Box Shadow",
                        type: "link",
                        icon: "layers"
                    }, {
                        path: "/elements/button",
                        title: "Buttons",
                        type: "link",
                        icon: "write"
                    }, {
                        path: "/elements/contact",
                        title: "Contact",
                        type: "link",
                        icon: "map-alt"
                    }]
                }, {
                    title: "Elements2",
                    type: "sub",
                    children: [{
                        path: "/elements/event-schedule",
                        title: "Event-Schedule",
                        type: "link",
                        icon: "list"
                    }, {
                        path: "/elements/gallery",
                        title: "Gallery",
                        type: "link",
                        icon: "gallery"
                    }, {
                        path: "/elements/pricing",
                        title: "Pricing",
                        type: "link",
                        icon: "money"
                    }, {
                        path: "/elements/counter",
                        title: "Counter",
                        type: "link",
                        icon: "time"
                    }, {
                        path: "/elements/count-down",
                        title: "Countdown",
                        type: "link",
                        icon: "alarm-clock"
                    }]
                }, {
                    title: "Elements3",
                    type: "sub",
                    children: [{
                        path: "/elements/progressbar",
                        title: "Progress Bar",
                        type: "link",
                        icon: "bar-chart"
                    }, {
                        path: "/elements/testimonial",
                        title: "Testimonial",
                        type: "link",
                        icon: "thought"
                    }, {
                        path: "/elements/video",
                        title: "Video",
                        type: "link",
                        icon: "video-camera"
                    }, {
                        path: "/elements/service",
                        title: "Service",
                        type: "link",
                        icon: "headphone"
                    }, {
                        path: "/elements/subscribe",
                        title: "Subscribe",
                        type: "link",
                        icon: "share-alt"
                    }]
                }]
            }, {
                title: "Portfolio",
                megaMenu: !0,
                megaMenuType: "medium",
                type: "sub",
                children: [{
                    title: "Portfolio-Basic",
                    type: "link",
                    children: [{
                        path: "/portfolio/basic-2-grid",
                        title: "Basic \u2013 2 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/basic-3-grid",
                        title: "Basic \u2013 3 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/basic-4-grid",
                        title: "Basic \u2013 4 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-title-2-col",
                        title: "Basic W Tittle \u2013 2 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-title-3-col",
                        title: "Basic W Tittle \u2013 3 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-title-4-col",
                        title: "Basic W Tittle \u2013 4 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-parallex",
                        title: "Parallex",
                        type: "link"
                    }, {
                        path: "/portfolio/centered-slide",
                        title: "Centered Slides",
                        type: "link"
                    }, {
                        path: "/portfolio/vertical-slide",
                        title: "Vertical Slides",
                        type: "link"
                    }, {
                        path: "/portfolio/multiple-carousel",
                        title: "4 Slide With Center Slider",
                        type: "link"
                    }]
                }, {
                    title: "Portfolio-Details",
                    type: "link",
                    children: [{
                        path: "/portfolio/portfolio-detail-1",
                        title: "Container Layout",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-2",
                        title: "Full Width",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-3",
                        title: "With Bg Bredcrumb",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-4",
                        title: "Details With Slider",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-5",
                        title: "Video Portfolio",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-6",
                        title: "Two Image Portfolio",
                        type: "link"
                    }, {
                        path: "/portfolio/portfolio-detail-7",
                        title: "Left Side Image Portfolio",
                        type: "link"
                    }]
                }, {
                    title: "Trending Layout",
                    type: "link",
                    children: [{
                        path: "/portfolio/creative-1",
                        title: "Trending Layout 1",
                        type: "link"
                    }, {
                        path: "/portfolio/creative-2",
                        title: "Trending Layout 2",
                        type: "link"
                    }, {
                        path: "/portfolio/creative-3",
                        title: "Trending Layout 3",
                        type: "link"
                    }, {
                        path: "/portfolio/creative-4",
                        title: "Trending Layout 4",
                        type: "link"
                    }, {
                        path: "/portfolio/modern-4",
                        title: "Trending Layout 5",
                        type: "link"
                    }, {
                        path: "/portfolio/modern-3",
                        title: "Trending Layout 6",
                        type: "link"
                    }, {
                        path: "/portfolio/modern-2",
                        title: "Trending Layout 7",
                        type: "link"
                    }]
                }, {
                    title: "Portfolio-Masonary",
                    type: "link",
                    children: [{
                        path: "/portfolio/full-width-2-grid",
                        title: "Full-Width \u2013 2 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/full-width-3-grid",
                        title: "Full-Width \u2013 3 Grid",
                        type: "link"
                    }, {
                        path: "/portfolio/full-width-4-grid",
                        title: "Full-Width \u2013 4 Grid",
                        type: "link"
                    }]
                }]
            }, {
                title: "Features",
                megaMenu: !0,
                megaMenuType: "medium",
                type: "sub",
                children: [{
                    title: "Header Style",
                    type: "link",
                    children: [{
                        path: "/features/header-light",
                        title: "Light Header",
                        type: "link"
                    }, {
                        path: "/features/header-dark",
                        title: "Dark Header",
                        type: "link"
                    }, {
                        path: "/features/header-transparent",
                        title: "Glass Header",
                        type: "link"
                    }, {
                        path: "/features/header-right-navigation",
                        title: "Header Right Navigation",
                        type: "link"
                    }, {
                        path: "/features/header-center-logo",
                        title: "Header Center Logo",
                        type: "link"
                    }]
                }, {
                    title: "Breadcrumb Style",
                    type: "link",
                    children: [{
                        path: "/features/breadcrumb-big-typography",
                        title: "Classic Type",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-left",
                        title: "Breadcrumb Left",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-right",
                        title: "Breadcrumb Right",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-center",
                        title: "Breadcrumb Center",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-dark",
                        title: "Breadcrumb Dark",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-parallex-bg",
                        title: "Breadcrumb Parallex-Bg",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-bg",
                        title: "Breadcrumb Bg",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-gallery",
                        title: "Breadcrumb Gallery",
                        type: "link"
                    }, {
                        path: "/features/breadcrumb-video",
                        title: "Breadcrumb Video",
                        type: "link"
                    }]
                }, {
                    title: "Footer Style",
                    type: "link",
                    children: [{
                        path: "/features/footer-default",
                        title: "Footer-Default",
                        type: "link"
                    }, {
                        path: "/features/footer-light",
                        title: "Footer-Light",
                        type: "link"
                    }, {
                        path: "/features/footer-dark",
                        title: "Footer-Dark",
                        type: "link"
                    }, {
                        path: "/features/footer-light2",
                        title: "Footer Dark Light",
                        type: "link"
                    }, {
                        path: "/features/footer-dark2",
                        title: "Footer Dark Gradient",
                        type: "link"
                    }, {
                        path: "/features/footer-dark3",
                        title: "Footer Creative",
                        type: "link"
                    }]
                }, {
                    title: "Gallery",
                    type: "link",
                    children: [{
                        path: "/features/zoom-gallery",
                        title: "Zoom Gallery",
                        type: "link"
                    }, {
                        path: "/features/form-popup",
                        title: "Form Popup",
                        type: "link"
                    }, {
                        path: "/features/modal-popup",
                        title: "Modal Popup",
                        type: "link"
                    }, {
                        path: "/features/youtube-popup",
                        title: "Youtube Popup",
                        type: "link"
                    }, {
                        path: "/features/map-popup",
                        title: "Map Popup",
                        type: "link"
                    }]
                }]
            }]
        },
        elyg: function(e, t, n) {
            "use strict";
            var r = n("ln6h"),
                i = n("+oT+"),
                o = n("8+Nu"),
                a = n("eVuF"),
                s = n("Qetd"),
                l = n("/HRN"),
                c = n("WaGi"),
                u = n("hfKm"),
                p = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            u(t, "__esModule", {
                value: !0
            });
            var f = n("CxY0"),
                d = p(n("dZ6Y")),
                h = n("g/15"),
                m = n("P5f7"),
                v = n("/jkW"),
                g = n("gguc"),
                y = n("YTqd");

            function b(e) {
                return e.replace(/\/$/, "") || "/"
            }
            var w = function() {
                function e(t, n, r, i) {
                    var o = this,
                        a = i.initialProps,
                        s = i.pageLoader,
                        c = i.App,
                        u = i.wrapApp,
                        p = i.Component,
                        f = i.err,
                        d = i.subscription;
                    l(this, e), this.onPopState = function(e) {
                        if (e.state) {
                            if ((!e.state || !o.isSsr || e.state.url !== o.pathname || e.state.as !== o.asPath) && (!o._bps || o._bps(e.state))) {
                                var t = e.state,
                                    n = t.url,
                                    r = t.as,
                                    i = t.options;
                                0, o.replace(n, r, i)
                            }
                        } else {
                            var a = o.pathname,
                                s = o.query;
                            o.changeState("replaceState", h.formatWithValidation({
                                pathname: a,
                                query: s
                            }), h.getURL())
                        }
                    }, this.route = b(t), this.components = {}, "/_error" !== t && (this.components[this.route] = {
                        Component: p,
                        props: a,
                        err: f
                    }), this.components["/_app"] = {
                        Component: c
                    }, this.events = e.events, this.pageLoader = s, this.pathname = t, this.query = n, this.asPath = v.isDynamicRoute(t) && __NEXT_DATA__.autoExport ? t : r, this.sub = d, this.clc = null, this._wrapApp = u, this.isSsr = !0, this.changeState("replaceState", h.formatWithValidation({
                        pathname: t,
                        query: n
                    }), r), window.addEventListener("popstate", this.onPopState)
                }
                return c(e, [{
                    key: "update",
                    value: function(e, t) {
                        var n = t.default || t,
                            r = this.components[e];
                        if (!r) throw new Error("Cannot update unavailable route: ".concat(e));
                        var i = s({}, r, {
                            Component: n
                        });
                        this.components[e] = i, "/_app" !== e ? e === this.route && this.notify(i) : this.notify(this.components[this.route])
                    }
                }, {
                    key: "reload",
                    value: function() {
                        window.location.reload()
                    }
                }, {
                    key: "back",
                    value: function() {
                        window.history.back()
                    }
                }, {
                    key: "push",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.change("pushState", e, t, n)
                    }
                }, {
                    key: "replace",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.change("replaceState", e, t, n)
                    }
                }, {
                    key: "change",
                    value: function(t, n, r, i) {
                        var o = this;
                        return new a(function(a, l) {
                            i._h || (o.isSsr = !1), h.SUPPORTS_PERFORMANCE_USER_TIMING && performance.mark("routeChange");
                            var c = "object" === typeof n ? h.formatWithValidation(n) : n,
                                u = "object" === typeof r ? h.formatWithValidation(r) : r;
                            if (o.abortComponentLoad(u), !i._h && o.onlyAHashChange(u)) return o.asPath = u, e.events.emit("hashChangeStart", u), o.changeState(t, c, u), o.scrollToHash(u), e.events.emit("hashChangeComplete", u), a(!0);
                            var p = f.parse(c, !0),
                                d = p.pathname,
                                m = p.query,
                                w = p.protocol;
                            if (!d || w) return a(!1);
                            o.urlIsNew(u) || (t = "replaceState");
                            var k = b(d),
                                S = i.shallow,
                                O = void 0 !== S && S;
                            if (v.isDynamicRoute(k)) {
                                var x = f.parse(u).pathname,
                                    E = y.getRouteRegex(k),
                                    N = g.getRouteMatcher(E)(x);
                                if (!N) {
                                    return console.error("The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as"), a(!1)
                                }
                                s(m, N)
                            }
                            e.events.emit("routeChangeStart", u), o.getRouteInfo(k, d, m, u, O).then(function(n) {
                                var r = n.error;
                                if (r && r.cancelled) return a(!1);
                                e.events.emit("beforeHistoryChange", u), o.changeState(t, c, u, i);
                                var l = window.location.hash.substring(1);
                                if (o.set(k, d, m, u, s({}, n, {
                                        hash: l
                                    })), r) throw e.events.emit("routeChangeError", r, u), r;
                                return e.events.emit("routeChangeComplete", u), a(!0)
                            }, l)
                        })
                    }
                }, {
                    key: "changeState",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        "pushState" === e && h.getURL() === n || window.history[e]({
                            url: t,
                            as: n,
                            options: r
                        }, null, n)
                    }
                }, {
                    key: "getRouteInfo",
                    value: function(e, t, n, r) {
                        var i = this,
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            s = this.components[e];
                        return o && s && this.route === e ? a.resolve(s) : new a(function(t, n) {
                            if (s) return t(s);
                            i.fetchComponent(e).then(function(e) {
                                return t({
                                    Component: e
                                })
                            }, n)
                        }).then(function(o) {
                            var s = o.Component;
                            return new a(function(a, l) {
                                i.getInitialProps(s, {
                                    pathname: t,
                                    query: n,
                                    asPath: r
                                }).then(function(t) {
                                    o.props = t, i.components[e] = o, a(o)
                                }, l)
                            })
                        }).catch(function(e) {
                            return new a(function(o) {
                                return "PAGE_LOAD_ERROR" === e.code ? (window.location.href = r, e.cancelled = !0, o({
                                    error: e
                                })) : e.cancelled ? o({
                                    error: e
                                }) : void o(i.fetchComponent("/_error").then(function(r) {
                                    var o = {
                                        Component: r,
                                        err: e
                                    };
                                    return new a(function(a) {
                                        i.getInitialProps(r, {
                                            err: e,
                                            pathname: t,
                                            query: n
                                        }).then(function(t) {
                                            o.props = t, o.error = e, a(o)
                                        }, function(t) {
                                            console.error("Error in error page `getInitialProps`: ", t), o.error = e, o.props = {}, a(o)
                                        })
                                    })
                                }))
                            })
                        })
                    }
                }, {
                    key: "set",
                    value: function(e, t, n, r, i) {
                        this.route = e, this.pathname = t, this.query = n, this.asPath = r, this.notify(i)
                    }
                }, {
                    key: "beforePopState",
                    value: function(e) {
                        this._bps = e
                    }
                }, {
                    key: "onlyAHashChange",
                    value: function(e) {
                        if (!this.asPath) return !1;
                        var t = this.asPath.split("#"),
                            n = o(t, 2),
                            r = n[0],
                            i = n[1],
                            a = e.split("#"),
                            s = o(a, 2),
                            l = s[0],
                            c = s[1];
                        return !(!c || r !== l || i !== c) || r === l && i !== c
                    }
                }, {
                    key: "scrollToHash",
                    value: function(e) {
                        var t = e.split("#"),
                            n = o(t, 2)[1];
                        if ("" !== n) {
                            var r = document.getElementById(n);
                            if (r) r.scrollIntoView();
                            else {
                                var i = document.getElementsByName(n)[0];
                                i && i.scrollIntoView()
                            }
                        } else window.scrollTo(0, 0)
                    }
                }, {
                    key: "urlIsNew",
                    value: function(e) {
                        return this.asPath !== e
                    }
                }, {
                    key: "prefetch",
                    value: function(e) {
                        var t = this;
                        return new a(function(n, r) {
                            var i = f.parse(e),
                                o = i.pathname,
                                a = i.protocol;
                            if (o && !a) {
                                0;
                                var s = b(o);
                                t.pageLoader.prefetch(s).then(n, r)
                            }
                        })
                    }
                }, {
                    key: "fetchComponent",
                    value: function() {
                        var e = i(r.mark(function e(t) {
                            var n, i, o, a;
                            return r.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = !1, i = this.clc = function() {
                                            n = !0
                                        }, e.next = 4, this.pageLoader.loadPage(t);
                                    case 4:
                                        if (o = e.sent, !n) {
                                            e.next = 9;
                                            break
                                        }
                                        throw (a = new Error('Abort fetching component for route: "'.concat(t, '"'))).cancelled = !0, a;
                                    case 9:
                                        return i === this.clc && (this.clc = null), e.abrupt("return", o);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getInitialProps",
                    value: function() {
                        var e = i(r.mark(function e(t, n) {
                            var i, o, s, l, c, u, p, d, m;
                            return r.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = !1, o = function() {
                                                i = !0
                                            }, this.clc = o, s = this.components["/_app"].Component, !t.__NEXT_SPR) {
                                            e.next = 12;
                                            break
                                        }
                                        return u = f.parse(n.asPath || n.pathname), p = (p = u.pathname) && "/" !== p ? p : "/index", e.next = 9, fetch("/_next/data/".concat(__NEXT_DATA__.buildId).concat(p, ".json")).then(function(e) {
                                            if (!e.ok) throw c = e.status, new Error("failed to load prerender data");
                                            return e.json()
                                        }).catch(function(e) {
                                            return console.error("Failed to load data", c, e), window.location.href = p, new a(function() {})
                                        });
                                    case 9:
                                        l = e.sent, e.next = 17;
                                        break;
                                    case 12:
                                        return d = this._wrapApp(s), n.AppTree = d, e.next = 16, h.loadGetInitialProps(s, {
                                            AppTree: d,
                                            Component: t,
                                            router: this,
                                            ctx: n
                                        });
                                    case 16:
                                        l = e.sent;
                                    case 17:
                                        if (o === this.clc && (this.clc = null), !i) {
                                            e.next = 22;
                                            break
                                        }
                                        throw (m = new Error("Loading initial props cancelled")).cancelled = !0, m;
                                    case 22:
                                        return e.abrupt("return", l);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "abortComponentLoad",
                    value: function(t) {
                        if (this.clc) {
                            var n = new Error("Route Cancelled");
                            n.cancelled = !0, e.events.emit("routeChangeError", n, t), this.clc(), this.clc = null
                        }
                    }
                }, {
                    key: "notify",
                    value: function(e) {
                        this.sub(e, this.components["/_app"].Component)
                    }
                }], [{
                    key: "_rewriteUrlForNextExport",
                    value: function(e) {
                        return m.rewriteUrlForNextExport(e)
                    }
                }]), e
            }();
            w.events = d.default(), t.default = w
        },
        fGSI: function(e, t, n) {
            var r = n("p0XB");
            e.exports = function(e) {
                if (r(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }
        },
        fNZA: function(e, t, n) {
            var r = n("QMMT"),
                i = n("UWiX")("iterator"),
                o = n("SBuE");
            e.exports = n("WEpk").getIteratorMethod = function(e) {
                if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
            }
        },
        fXsU: function(e, t, n) {
            var r = n("5K7Z"),
                i = n("fNZA");
            e.exports = n("WEpk").getIterator = function(e) {
                var t = i(e);
                if ("function" != typeof t) throw TypeError(e + " is not iterable!");
                return r(t.call(e))
            }
        },
        fh0K: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n.n(r),
                o = n("61Hx"),
                a = n("YFqc"),
                s = n.n(a),
                l = n("1Yj4"),
                c = n("ok1R"),
                u = n("rhny"),
                p = i.a.createElement;
            t.a = function(e) {
                var t = Object(r.useState)(!1),
                    n = t[0],
                    i = t[1],
                    a = Object(r.useState)(!1),
                    f = a[0],
                    d = a[1],
                    h = Object(r.useState)(!1),
                    m = h[0],
                    v = h[1];
                return p("header", {
                    className: "".concat(e.className || "app2", " loding-header nav-abs custom-scroll  ")
                }, p(l.a, null, p(c.a, null, p(u.a, null, p("nav", null, p("a", {
                    className: "m-r-auto",
                    href: "/"
                }, "agency" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/9.png"
                }) : "dark" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/5.png"
                }) : "dark position-relative ecommerce" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/5.png"
                }) : "dark bg-white ecommerce" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/5.png"
                }) : "dark agency" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/5.png"
                }) : "saas1" == e.className ? p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/3.png"
                }) : p("img", {
                    alt: "",
                    className: "img-fluid",
                    src: "/assets/images/logo/1.png"
                })), p("div", {
                    className: "responsive-btn"
                }, p("a", {
                    className: "toggle-nav",
                    onClick: function() {
                        d(!f), document.querySelector(".navbar").classList.add("openSidebar")
                    }
                }, p("i", {
                    "aria-hidden": "true",
                    className: "fa fa-bars text-white"
                }))), p(o.a, null), e.shop && p("div", {
                    className: "top-header-right"
                }, p("ul", null, p("li", {
                    className: "search"
                }, p("a", {
                    href: "#",
                    onClick: function() {
                        return v(!m)
                    }
                }, p("i", {
                    className: "icon-search"
                })), p("div", {
                    "aria-labelledby": "dropdownMenuButton",
                    className: "dropdown-menu ".concat(m && "show", " dropdown-menu-right")
                }, p("form", {
                    className: "form-inline search-form"
                }, p("div", {
                    className: "form-group"
                }, p("label", {
                    className: "sr-only"
                }, "Email"), p("input", {
                    className: "form-control-plaintext",
                    placeholder: "Search....",
                    type: "search"
                }), p("span", {
                    className: "d-sm-none mobile-search"
                }))))), p("li", {
                    className: "account "
                }, p("a", {
                    href: "#",
                    onClick: function() {
                        return i(!n)
                    }
                }, p("i", {
                    className: "icon-user"
                })), p("div", {
                    className: "dropdown-menu ".concat(n && "show", " dropdown-menu-right")
                }, p(s.a, {
                    href: "/shop/auth/login"
                }, p("a", {
                    href: "#"
                }, "Login")), p("a", {
                    href: "#"
                }, "Account"), p(s.a, {
                    href: "/shop/wishlist"
                }, p("a", {
                    href: "#"
                }, "Wishlist")), p(s.a, {
                    href: "/shop/checkout"
                }, p("a", {
                    href: "#"
                }, "checkout")))))))))))
            }
        },
        fhE1: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("9n7U"),
                a = n("1Yj4"),
                s = n("ok1R"),
                l = n("rhny"),
                c = i.a.createElement;
            t.default = function() {
                return c("section", {
                    className: "saas1 service",
                    id: "feature"
                }, c("div", {
                    className: "about-chat"
                }, c(a.a, null, c(s.a, null, c(l.a, {
                    md: "12",
                    className: "text-center"
                }, c("div", {
                    className: "title"
                }, c("img", {
                    alt: "title-logo",
                    className: "img-fluid",
                    src: "/assets/images/saas1/title-logo.png"
                }), c("div", {
                    className: "main-title"
                }, c("h2", null, c("span", {
                    className: "theme-color"
                }, "A"), "wesome ", c("span", {
                    className: "theme-color"
                }, "F"), "eatures")), c("hr", null), c("div", {
                    className: "sub-title"
                }, c("p", {
                    className: "p-padding"
                }, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), o.FeatureData.map(function(e, t) {
                    return c(l.a, {
                        lg: "4",
                        md: "6",
                        className: "service-container",
                        key: t
                    }, c("div", {
                        className: "chat-box"
                    }, c("img", {
                        alt: "stay-connected",
                        src: e.img
                    }), c("div", {
                        className: "feature-content"
                    }, c("h4", {
                        className: "service-heading"
                    }, " ", e.heading, " ", c("span", {
                        className: "theme-color"
                    }, e.layout)), c("hr", null), c("p", null, e.desc))))
                })))))
            }
        },
        fpC5: function(e, t, n) {
            var r = n("2faE"),
                i = n("5K7Z"),
                o = n("w6GO");
            e.exports = n("jmDH") ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, a = o(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]);
                return e
            }
        },
        fprZ: function(e, t, n) {
            var r = n("XXOK"),
                i = n("yLu3");
            e.exports = function(e, t) {
                if (i(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var n = [],
                        o = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var l, c = r(e); !(o = (l = c.next()).done) && (n.push(l.value), !t || n.length !== t); o = !0);
                    } catch (u) {
                        a = !0, s = u
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return n
                }
            }
        },
        "g/15": function(e, t, n) {
            "use strict";
            var r = n("ln6h"),
                i = (n("pLtp"), n("+oT+"));
            n("hfKm")(t, "__esModule", {
                value: !0
            });
            var o = n("CxY0");

            function a() {
                var e = window.location,
                    t = e.protocol,
                    n = e.hostname,
                    r = e.port;
                return "".concat(t, "//").concat(n).concat(r ? ":" + r : "")
            }

            function s(e) {
                return "string" === typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function l(e) {
                return e.finished || e.headersSent
            }

            function c(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = i(r.mark(function e(t, n) {
                    var i, o, a;
                    return r.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.next = 4;
                                break;
                            case 4:
                                if (i = n.res || n.ctx && n.ctx.res, t.getInitialProps) {
                                    e.next = 12;
                                    break
                                }
                                if (!n.ctx || !n.Component) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9, c(n.Component, n.ctx);
                            case 9:
                                return e.t0 = e.sent, e.abrupt("return", {
                                    pageProps: e.t0
                                });
                            case 11:
                                return e.abrupt("return", {});
                            case 12:
                                return e.next = 14, t.getInitialProps(n);
                            case 14:
                                if (o = e.sent, !i || !l(i)) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 17:
                                if (o) {
                                    e.next = 20;
                                    break
                                }
                                throw a = '"'.concat(s(t), '.getInitialProps()" should resolve to an object. But found "').concat(o, '" instead.'), new Error(a);
                            case 20:
                                return e.abrupt("return", o);
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            t.execOnce = function(e) {
                var t = this,
                    n = !1,
                    r = null;
                return function() {
                    if (!n) {
                        n = !0;
                        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        r = e.apply(t, o)
                    }
                    return r
                }
            }, t.getLocationOrigin = a, t.getURL = function() {
                var e = window.location.href,
                    t = a();
                return e.substring(t.length)
            }, t.getDisplayName = s, t.isResSent = l, t.loadGetInitialProps = c, t.urlObjectKeys = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"], t.formatWithValidation = function(e, t) {
                return o.format(e, t)
            }, t.SUPPORTS_PERFORMANCE = "undefined" !== typeof performance, t.SUPPORTS_PERFORMANCE_USER_TIMING = t.SUPPORTS_PERFORMANCE && "function" === typeof performance.mark && "function" === typeof performance.measure
        },
        g33z: function(e, t, n) {
            "use strict";
            var r = n("Wu5q"),
                i = n("n3ko");
            e.exports = n("raTm")("Map", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                get: function(e) {
                    var t = r.getEntry(i(this, "Map"), e);
                    return t && t.v
                },
                set: function(e, t) {
                    return r.def(i(this, "Map"), 0 === e ? 0 : e, t)
                }
            }, r, !0)
        },
        gguc: function(e, t, n) {
            "use strict";
            var r = n("pLtp");
            n("hfKm")(t, "__esModule", {
                value: !0
            }), t.getRouteMatcher = function(e) {
                var t = e.re,
                    n = e.groups;
                return function(e) {
                    var i = t.exec(e);
                    if (!i) return !1;
                    var o = {};
                    return r(n).forEach(function(e) {
                        var t = i[n[e]];
                        void 0 !== t && (o[e] = -1 !== t.indexOf("/") ? t.split("/").map(function(e) {
                            return decodeURIComponent(e)
                        }) : decodeURIComponent(t))
                    }), o
                }
            }
        },
        hDam: function(e, t) {
            e.exports = function() {}
        },
        hfKm: function(e, t, n) {
            e.exports = n("RU/L")
        },
        htGi: function(e, t, n) {
            var r = n("UXZV");

            function i() {
                return e.exports = i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            e.exports = i
        },
        iZP3: function(e, t, n) {
            var r = n("XVgq"),
                i = n("Z7t5");

            function o(e) {
                return (o = "function" === typeof i && "symbol" === typeof r ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof i && e.constructor === i && e !== i.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(t) {
                return "function" === typeof i && "symbol" === o(r) ? e.exports = a = function(e) {
                    return o(e)
                } : e.exports = a = function(e) {
                    return e && "function" === typeof i && e.constructor === i && e !== i.prototype ? "symbol" : o(e)
                }, a(t)
            }
            e.exports = a
        },
        iq4v: function(e, t, n) {
            n("Mqbl"), e.exports = n("WEpk").Object.keys
        },
        j2DC: function(e, t, n) {
            "use strict";
            var r = n("oVml"),
                i = n("rr1i"),
                o = n("RfKB"),
                a = {};
            n("NegM")(a, n("UWiX")("iterator"), function() {
                return this
            }), e.exports = function(e, t, n) {
                e.prototype = r(a, {
                    next: i(1, n)
                }), o(e, t + " Iterator")
            }
        },
        jpXb: function(e, t, n) {
            var r = n("wZXL");
            e.exports = new r
        },
        kAMH: function(e, t, n) {
            var r = n("a0xu");
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        kB4c: function(e, t, n) {
            "use strict";
            var r = n("XJU/"),
                i = n("6/1s").getWeak,
                o = n("5K7Z"),
                a = n("93I4"),
                s = n("EXMj"),
                l = n("oioR"),
                c = n("V7Et"),
                u = n("B+OT"),
                p = n("n3ko"),
                f = c(5),
                d = c(6),
                h = 0,
                m = function(e) {
                    return e._l || (e._l = new v)
                },
                v = function() {
                    this.a = []
                },
                g = function(e, t) {
                    return f(e.a, function(e) {
                        return e[0] === t
                    })
                };
            v.prototype = {
                get: function(e) {
                    var t = g(this, e);
                    if (t) return t[1]
                },
                has: function(e) {
                    return !!g(this, e)
                },
                set: function(e, t) {
                    var n = g(this, e);
                    n ? n[1] = t : this.a.push([e, t])
                },
                delete: function(e) {
                    var t = d(this.a, function(t) {
                        return t[0] === e
                    });
                    return ~t && this.a.splice(t, 1), !!~t
                }
            }, e.exports = {
                getConstructor: function(e, t, n, o) {
                    var c = e(function(e, r) {
                        s(e, c, t, "_i"), e._t = t, e._i = h++, e._l = void 0, void 0 != r && l(r, n, e[o], e)
                    });
                    return r(c.prototype, {
                        delete: function(e) {
                            if (!a(e)) return !1;
                            var n = i(e);
                            return !0 === n ? m(p(this, t)).delete(e) : n && u(n, this._i) && delete n[this._i]
                        },
                        has: function(e) {
                            if (!a(e)) return !1;
                            var n = i(e);
                            return !0 === n ? m(p(this, t)).has(e) : n && u(n, this._i)
                        }
                    }), c
                },
                def: function(e, t, n) {
                    var r = i(o(t), !0);
                    return !0 === r ? m(e).set(t, n) : r[e._i] = n, e
                },
                ufstore: m
            }
        },
        kCCV: function(e, t) {
            function n(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            n.prototype = {
                constructor: n,
                setup: function() {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = n
        },
        kOwS: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("UXZV"),
                i = n.n(r);

            function o() {
                return (o = i.a || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
        },
        kTiW: function(e, t, n) {
            e.exports = n("NegM")
        },
        kd2E: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function(e, t, n, o) {
                t = t || "&", n = n || "=";
                var a = {};
                if ("string" !== typeof e || 0 === e.length) return a;
                var s = /\+/g;
                e = e.split(t);
                var l = 1e3;
                o && "number" === typeof o.maxKeys && (l = o.maxKeys);
                var c = e.length;
                l > 0 && c > l && (c = l);
                for (var u = 0; u < c; ++u) {
                    var p, f, d, h, m = e[u].replace(s, "%20"),
                        v = m.indexOf(n);
                    v >= 0 ? (p = m.substr(0, v), f = m.substr(v + 1)) : (p = m, f = ""), d = decodeURIComponent(p), h = decodeURIComponent(f), r(a, d) ? i(a[d]) ? a[d].push(h) : a[d] = [a[d], h] : a[d] = h
                }
                return a
            };
            var i = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        },
        lCc8: function(e, t, n) {
            var r = n("Y7ZC");
            r(r.S, "Object", {
                create: n("oVml")
            })
        },
        ldVq: function(e, t, n) {
            var r = n("QMMT"),
                i = n("UWiX")("iterator"),
                o = n("SBuE");
            e.exports = n("WEpk").isIterable = function(e) {
                var t = Object(e);
                return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t))
            }
        },
        ln6h: function(e, t, n) {
            e.exports = n("ls82")
        },
        ls82: function(e, t, n) {
            var r = function(e) {
                "use strict";
                var t, n = Object.prototype,
                    r = n.hasOwnProperty,
                    i = "function" === typeof Symbol ? Symbol : {},
                    o = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator",
                    s = i.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (P) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, r) {
                    var i = t && t.prototype instanceof v ? t : v,
                        o = Object.create(i.prototype),
                        a = new C(r || []);
                    return o._invoke = function(e, t, n) {
                        var r = p;
                        return function(i, o) {
                            if (r === d) throw new Error("Generator is already running");
                            if (r === h) {
                                if ("throw" === i) throw o;
                                return j()
                            }
                            for (n.method = i, n.arg = o;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = E(a, n);
                                    if (s) {
                                        if (s === m) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === p) throw r = h, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = d;
                                var l = u(e, t, n);
                                if ("normal" === l.type) {
                                    if (r = n.done ? h : f, l.arg === m) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === l.type && (r = h, n.method = "throw", n.arg = l.arg)
                            }
                        }
                    }(e, n, a), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                e.wrap = c;
                var p = "suspendedStart",
                    f = "suspendedYield",
                    d = "executing",
                    h = "completed",
                    m = {};

                function v() {}

                function g() {}

                function y() {}
                var b = {};
                b[o] = function() {
                    return this
                };
                var w = Object.getPrototypeOf,
                    k = w && w(w(T([])));
                k && k !== n && r.call(k, o) && (b = k);
                var S = y.prototype = v.prototype = Object.create(b);

                function O(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        l(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function x(e, t) {
                    var n;
                    this._invoke = function(i, o) {
                        function a() {
                            return new t(function(n, a) {
                                ! function n(i, o, a, s) {
                                    var l = u(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var c = l.arg,
                                            p = c.value;
                                        return p && "object" === typeof p && r.call(p, "__await") ? t.resolve(p.__await).then(function(e) {
                                            n("next", e, a, s)
                                        }, function(e) {
                                            n("throw", e, a, s)
                                        }) : t.resolve(p).then(function(e) {
                                            c.value = e, a(c)
                                        }, function(e) {
                                            return n("throw", e, a, s)
                                        })
                                    }
                                    s(l.arg)
                                }(i, o, n, a)
                            })
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function E(e, n) {
                    var r = e.iterator[n.method];
                    if (r === t) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (e.iterator.return && (n.method = "return", n.arg = t, E(e, n), "throw" === n.method)) return m;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var i = u(r, e.iterator, n.arg);
                    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, m;
                    var o = i.arg;
                    return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, m) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                }

                function N(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(N, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var n = e[o];
                        if (n) return n.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                a = function n() {
                                    for (; ++i < e.length;)
                                        if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: t,
                        done: !0
                    }
                }
                return g.prototype = S.constructor = y, y.constructor = g, g.displayName = l(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, s, "GeneratorFunction")), e.prototype = Object.create(S), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, O(x.prototype), x.prototype[a] = function() {
                    return this
                }, e.AsyncIterator = x, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(c(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then(function(e) {
                        return e.done ? e.value : a.next()
                    })
                }, O(S), l(S, s, "Generator"), S[o] = function() {
                    return this
                }, S.toString = function() {
                    return "[object Generator]"
                }, e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = T, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(_), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function i(r, i) {
                            return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), m
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    _(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), m
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = r
            } catch (i) {
                Function("r", "regeneratorRuntime = r")(r)
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r = n("hfKm"),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
            r(t, "__esModule", {
                value: !0
            });
            var o = i(n("q1tI"));
            t.AmpStateContext = o.createContext({})
        },
        m5qO: function(e, t, n) {
            n("wgeU"), n("bBy9"), n("Oc8Q"), n("BURE"), n("+jru"), e.exports = n("WEpk").WeakMap
        },
        n3ko: function(e, t, n) {
            var r = n("93I4");
            e.exports = function(e, t) {
                if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
                return e
            }
        },
        nOHt: function(e, t, n) {
            "use strict";
            var r = n("p0XB"),
                i = n("XVgq"),
                o = n("Z7t5"),
                a = n("d04V"),
                s = n("b3CU");

            function l(e, t) {
                var n = "undefined" !== typeof o && e[i] || e["@@iterator"];
                if (!n) {
                    if (r(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return a(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var s = 0,
                            l = function() {};
                        return {
                            s: l,
                            n: function() {
                                return s >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[s++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: l
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var u, p = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return p = e.done, e
                    },
                    e: function(e) {
                        f = !0, u = e
                    },
                    f: function() {
                        try {
                            p || null == n.return || n.return()
                        } finally {
                            if (f) throw u
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var u = n("5Uuq"),
                p = n("KI45");
            t.__esModule = !0, t.useRouter = function() {
                return h.default.useContext(v.RouterContext)
            }, t.makePublicRouterInstance = function(e) {
                var t, n = e,
                    r = {},
                    i = l(b);
                try {
                    for (i.s(); !(t = i.n()).done;) {
                        var o = t.value;
                        "object" !== typeof n[o] ? r[o] = n[o] : r[o] = (0, f.default)({}, n[o])
                    }
                } catch (a) {
                    i.e(a)
                } finally {
                    i.f()
                }
                return r.events = m.default.events, w.forEach(function(e) {
                    r[e] = function() {
                        return n[e].apply(n, arguments)
                    }
                }), r
            }, t.createRouter = t.withRouter = t.default = void 0;
            var f = p(n("htGi")),
                d = p(n("hfKm")),
                h = p(n("q1tI")),
                m = u(n("elyg"));
            t.Router = m.default, t.NextRouter = m.NextRouter;
            var v = n("qOIg"),
                g = p(n("0Bsm"));
            t.withRouter = g.default;
            var y = {
                    router: null,
                    readyCallbacks: [],
                    ready: function(e) {
                        if (this.router) return e();
                        this.readyCallbacks.push(e)
                    }
                },
                b = ["pathname", "route", "query", "asPath", "components"],
                w = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];

            function k() {
                if (!y.router) {
                    throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')
                }
                return y.router
            }(0, d.default)(y, "events", {
                get: function() {
                    return m.default.events
                }
            }), b.forEach(function(e) {
                (0, d.default)(y, e, {
                    get: function() {
                        return k()[e]
                    }
                })
            }), w.forEach(function(e) {
                y[e] = function() {
                    var t = k();
                    return t[e].apply(t, arguments)
                }
            }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(function(e) {
                y.ready(function() {
                    m.default.events.on(e, function() {
                        var t = "on" + e.charAt(0).toUpperCase() + e.substring(1),
                            n = y;
                        if (n[t]) try {
                            n[t].apply(n, arguments)
                        } catch (r) {
                            console.error("Error when running the Router event: " + t), console.error(r.message + "\n" + r.stack)
                        }
                    })
                })
            });
            var S = y;
            t.default = S;
            t.createRouter = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return y.router = s(m.default, t), y.readyCallbacks.forEach(function(e) {
                    return e()
                }), y.readyCallbacks = [], y.router
            }
        },
        oJNo: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("1Yj4"),
                a = n("ok1R"),
                s = n("rhny"),
                l = i.a.createElement;
            t.default = function() {
                return l("section", {
                    className: "saas1 subscribe",
                    id: "contact"
                }, l(o.a, null, l(a.a, null, l(s.a, {
                    lg: "7"
                }, l("div", {
                    className: "media"
                }, l("img", {
                    alt: "profile",
                    src: "/assets/images/saas1/subscribe-icon.png"
                }), l("div", {
                    className: "media-body"
                }, l("h3", {
                    className: "mt-0 text-white"
                }, "Start 30 days free trial"), l("h6", {
                    className: "text-white"
                }, "Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional.")))), l(s.a, {
                    lg: "5"
                }, l("div", {
                    className: "subscribe-input"
                }, l("form", null, l("input", {
                    id: "useremail",
                    placeholder: "This Field is Required",
                    required: !0,
                    type: "email"
                }), l("input", {
                    id: "submit",
                    type: "submit",
                    value: "Get Started"
                })), l("div", {
                    className: "text text-center d-flex"
                }, l("h6", {
                    className: "text-white"
                }, "Free 30-day trial"), l("h6", {
                    className: "text-white"
                }, "Easy setup"), l("h6", {
                    className: "text-white"
                }, "Cancel any time")))))))
            }
        },
        oVml: function(e, t, n) {
            var r = n("5K7Z"),
                i = n("fpC5"),
                o = n("FpHa"),
                a = n("VVlx")("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e, t = n("Hsns")("iframe"),
                        r = o.length;
                    for (t.style.display = "none", n("MvwC").appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[o[r]];
                    return l()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
            }
        },
        oioR: function(e, t, n) {
            var r = n("2GTP"),
                i = n("sNwI"),
                o = n("NwJ3"),
                a = n("5K7Z"),
                s = n("tEej"),
                l = n("fNZA"),
                c = {},
                u = {};
            (t = e.exports = function(e, t, n, p, f) {
                var d, h, m, v, g = f ? function() {
                        return e
                    } : l(e),
                    y = r(n, p, t ? 2 : 1),
                    b = 0;
                if ("function" != typeof g) throw TypeError(e + " is not iterable!");
                if (o(g)) {
                    for (d = s(e.length); d > b; b++)
                        if ((v = t ? y(a(h = e[b])[0], h[1]) : y(e[b])) === c || v === u) return v
                } else
                    for (m = g.call(e); !(h = m.next()).done;)
                        if ((v = i(m, y, h.value, t)) === c || v === u) return v
            }).BREAK = c, t.RETURN = u
        },
        p0XB: function(e, t, n) {
            e.exports = n("9BDd")
        },
        pIsd: function(e, t, n) {
            var r = n("BJfS"),
                i = function(e) {
                    var t = "",
                        n = Object.keys(e);
                    return n.forEach(function(i, o) {
                        var a = e[i];
                        (function(e) {
                            return /[height|width]$/.test(e)
                        })(i = r(i)) && "number" === typeof a && (a += "px"), t += !0 === a ? i : !1 === a ? "not " + i : "(" + i + ": " + a + ")", o < n.length - 1 && (t += " and ")
                    }), t
                };
            e.exports = function(e) {
                var t = "";
                return "string" === typeof e ? e : e instanceof Array ? (e.forEach(function(n, r) {
                    t += i(n), r < e.length - 1 && (t += ", ")
                }), t) : i(e)
            }
        },
        pLtp: function(e, t, n) {
            e.exports = n("iq4v")
        },
        pbKT: function(e, t, n) {
            e.exports = n("qijr")
        },
        q6LJ: function(e, t, n) {
            var r = n("5T2Y"),
                i = n("QXhf").set,
                o = r.MutationObserver || r.WebKitMutationObserver,
                a = r.process,
                s = r.Promise,
                l = "process" == n("a0xu")(a);
            e.exports = function() {
                var e, t, n, c = function() {
                    var r, i;
                    for (l && (r = a.domain) && r.exit(); e;) {
                        i = e.fn, e = e.next;
                        try {
                            i()
                        } catch (o) {
                            throw e ? n() : t = void 0, o
                        }
                    }
                    t = void 0, r && r.enter()
                };
                if (l) n = function() {
                    a.nextTick(c)
                };
                else if (!o || r.navigator && r.navigator.standalone)
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c)
                        }
                    } else n = function() {
                        i.call(r, c)
                    };
                else {
                    var p = !0,
                        f = document.createTextNode("");
                    new o(c).observe(f, {
                        characterData: !0
                    }), n = function() {
                        f.data = p = !p
                    }
                }
                return function(r) {
                    var i = {
                        fn: r,
                        next: void 0
                    };
                    t && (t.next = i), e || (e = i, n()), t = i
                }
            }
        },
        qOIg: function(e, t, n) {
            "use strict";
            var r = n("hfKm"),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
            r(t, "__esModule", {
                value: !0
            });
            var o = i(n("q1tI"));
            t.RouterContext = o.createContext(null)
        },
        qijr: function(e, t, n) {
            n("czwh"), e.exports = n("WEpk").Reflect.construct
        },
        qkC2: function(e, t, n) {
            var r, i;
            e.exports = (r = n("q1tI"), i = n("i8i4"), function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 1)
            }([function(e, t) {
                e.exports = r
            }, function(e, t, n) {
                e.exports = n(2)
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(3),
                    i = n(4);
                n.d(t, "Accordion", function() {
                    return r.a
                }), n.d(t, "AccordionItem", function() {
                    return i.a
                }), t.default = r.a
            }, function(e, t, n) {
                "use strict";
                var r = n(0),
                    i = n.n(r),
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.state = {}, n
                        }
                        return function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), o(t, [{
                            key: "renderChildren",
                            value: function() {
                                var e = this;
                                return i.a.Children.map(this.props.children, function(t) {
                                    return i.a.cloneElement(t, {
                                        atomic: e.props.atomic
                                    })
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return i.a.createElement("div", {
                                    className: "accordion"
                                }, this.renderChildren())
                            }
                        }]), t
                    }(r.Component);
                t.a = a
            }, function(e, t, n) {
                "use strict";
                var r = n(0),
                    i = n.n(r),
                    o = n(5),
                    a = n.n(o),
                    s = n(6),
                    l = n.n(s),
                    c = n(11),
                    u = n.n(c),
                    p = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    f = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.handleDocumentClick = function(e) {
                                n.mounted && !a.a.findDOMNode(n).contains(e.target) && n.state.isOpen && n.setState({
                                    isOpen: !1
                                })
                            }, n.onClick = function() {
                                n.setState({
                                    isOpen: !n.state.isOpen
                                })
                            }, n.state = {
                                isOpen: !1
                            }, n.mounted = !0, n
                        }
                        return function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), p(t, [{
                            key: "componentDidMount",
                            value: function() {
                                this.props.atomic && (document.addEventListener("click", this.handleDocumentClick, !1), document.addEventListener("touchend", this.handleDocumentClick, !1))
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.mounted = !1, document.removeEventListener("click", this.handleDocumentClick, !1), document.removeEventListener("touchend", this.handleDocumentClick, !1)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = u()(["accordion-item", {
                                    active: this.state.isOpen
                                }]);
                                return i.a.createElement("div", {
                                    className: e
                                }, i.a.createElement("button", {
                                    className: "title",
                                    onClick: this.onClick
                                }, this.props.title), i.a.createElement("div", {
                                    className: "panel"
                                }, this.props.children))
                            }
                        }]), t
                    }(r.Component);
                f.propTypes = {
                    title: l.a.string
                }, f.defaultProps = {
                    title: "TITLE"
                }, t.a = f
            }, function(e, t) {
                e.exports = i
            }, function(e, t, n) {
                e.exports = n(7)()
            }, function(e, t, n) {
                "use strict";
                var r = n(8),
                    i = n(9),
                    o = n(10);
                e.exports = function() {
                    function e(e, t, n, r, a, s) {
                        s !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t
                    };
                    return n.checkPropTypes = r, n.PropTypes = n, n
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return function() {
                        return e
                    }
                }
                var i = function() {};
                i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
                    return this
                }, i.thatReturnsArgument = function(e) {
                    return e
                }, e.exports = i
            }, function(e, t, n) {
                "use strict";
                var r = function(e) {};
                e.exports = function(e, t, n, i, o, a, s, l) {
                    if (r(t), !e) {
                        var c;
                        if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [n, i, o, a, s, l],
                                p = 0;
                            (c = new Error(t.replace(/%s/g, function() {
                                return u[p++]
                            }))).name = "Invariant Violation"
                        }
                        throw c.framesToPop = 1, c
                    }
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, function(e, t, n) {
                var r;
                ! function() {
                    "use strict";

                    function n() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var r = arguments[t];
                            if (r) {
                                var o = typeof r;
                                if ("string" === o || "number" === o) e.push(r);
                                else if (Array.isArray(r)) e.push(n.apply(null, r));
                                else if ("object" === o)
                                    for (var a in r) i.call(r, a) && r[a] && e.push(a)
                            }
                        }
                        return e.join(" ")
                    }
                    var i = {}.hasOwnProperty;
                    "undefined" !== typeof e && e.exports ? e.exports = n : void 0 !== (r = function() {
                        return n
                    }.apply(t, [])) && (e.exports = r)
                }()
            }]))
        },
        rZ1Z: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                i = n.n(r),
                o = n("9n7U"),
                a = n("1Yj4"),
                s = n("ok1R"),
                l = n("rhny"),
                c = i.a.createElement;
            t.default = function() {
                var e = Object(r.useState)("Initializing"),
                    t = e[0],
                    n = e[1];
                return c("section", {
                    className: "saas1 howitwork",
                    id: "how-work"
                }, c(a.a, null, c(s.a, null, c(l.a, {
                    md: "12",
                    className: "text-center"
                }, c("div", {
                    className: "title"
                }, c("img", {
                    alt: "title-logo",
                    className: "img-fluid",
                    src: "/assets/images/saas1/title-logo.png"
                }), c("div", {
                    className: "main-title"
                }, c("h2", null, c("span", {
                    className: "theme-color"
                }, "H"), "ow ", c("span", {
                    className: "theme-color"
                }, "I"), "t ", c("span", {
                    className: "theme-color"
                }, "W"), "ork")), c("hr", null), c("div", {
                    className: "sub-title"
                }, c("p", {
                    className: "p-padding"
                }, "Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens.")))), c(l.a, {
                    md: "12",
                    className: "work-tab"
                }, c("ul", {
                    className: "nav nav-pills justify-content-center ",
                    id: "pills-tab",
                    role: "tablist"
                }, o.NavData.map(function(e, r) {
                    return c("li", {
                        className: "nav-item  text-center ".concat(e.title === t ? "active" : "", " "),
                        key: r
                    }, c("a", {
                        "aria-selected": "true",
                        className: "nav-link ".concat("work" == e.title ? "active show" : ""),
                        "data-toggle": "pill",
                        onClick: function() {
                            return function(e) {
                                n(e)
                            }(e.title)
                        },
                        role: "tab"
                    }, c("img", {
                        alt: "tab-image-1",
                        src: e.img
                    }), c("h6", null, e.title), c("span", null)))
                }))))), c("div", {
                    className: "work-tab-bg work-content p-t-50"
                }, c("div", {
                    className: "tab-content text-center",
                    id: "pills-tabContent"
                }, o.ContentData.map(function(e, n) {
                    return c("div", {
                        className: "tab-pane fade ".concat(e.title === t ? "show active" : ""),
                        role: "tabpanel",
                        key: n
                    }, c("img", {
                        alt: "tab-image-1",
                        className: "img-fluid",
                        src: e.img
                    }))
                }))))
            }
        },
        raTm: function(e, t, n) {
            "use strict";
            var r = n("5T2Y"),
                i = n("Y7ZC"),
                o = n("6/1s"),
                a = n("KUxP"),
                s = n("NegM"),
                l = n("XJU/"),
                c = n("oioR"),
                u = n("EXMj"),
                p = n("93I4"),
                f = n("RfKB"),
                d = n("2faE").f,
                h = n("V7Et")(0),
                m = n("jmDH");
            e.exports = function(e, t, n, v, g, y) {
                var b = r[e],
                    w = b,
                    k = g ? "set" : "add",
                    S = w && w.prototype,
                    O = {};
                return m && "function" == typeof w && (y || S.forEach && !a(function() {
                    (new w).entries().next()
                })) ? (w = t(function(t, n) {
                    u(t, w, e, "_c"), t._c = new b, void 0 != n && c(n, g, t[k], t)
                }), h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                    var t = "add" == e || "set" == e;
                    e in S && (!y || "clear" != e) && s(w.prototype, e, function(n, r) {
                        if (u(this, w, e), !t && y && !p(n)) return "get" == e && void 0;
                        var i = this._c[e](0 === n ? 0 : n, r);
                        return t ? this : i
                    })
                }), y || d(w.prototype, "size", {
                    get: function() {
                        return this._c.size
                    }
                })) : (w = v.getConstructor(t, e, g, k), l(w.prototype, n), o.NEED = !0), f(w, e), O[e] = w, i(i.G + i.W + i.F, O), y || v.setStrong(w, e, g), w
            }
        },
        rxal: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0
            };
            t.default = r
        },
        s4NR: function(e, t, n) {
            "use strict";
            t.decode = t.parse = n("kd2E"), t.encode = t.stringify = n("4JlD")
        },
        sNwI: function(e, t, n) {
            var r = n("5K7Z");
            e.exports = function(e, t, n, i) {
                try {
                    return i ? t(r(n)[0], n[1]) : t(n)
                } catch (a) {
                    var o = e.return;
                    throw void 0 !== o && r(o.call(e)), a
                }
            }
        },
        ttDY: function(e, t, n) {
            e.exports = n("+iuc")
        },
        ueNE: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var r = d(n("q1tI")),
                i = d(n("i8i4")),
                o = d(n("rxal")),
                a = d(n("9/5/")),
                s = d(n("TSYQ")),
                l = n("x9Za"),
                c = n("UZv/"),
                u = n("aaW0"),
                p = n("KOnL"),
                f = d(n("bdgK"));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function v(e) {
                return (v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(n, !0).forEach(function(t) {
                        S(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = function(e) {
                function t(e) {
                    var n;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = function(e, t) {
                        return !t || "object" !== v(t) && "function" !== typeof t ? w(e) : t
                    }(this, b(t).call(this, e)), S(w(n), "listRefHandler", function(e) {
                        return n.list = e
                    }), S(w(n), "trackRefHandler", function(e) {
                        return n.track = e
                    }), S(w(n), "adaptHeight", function() {
                        if (n.props.adaptiveHeight && n.list) {
                            var e = n.list.querySelector('[data-index="'.concat(n.state.currentSlide, '"]'));
                            n.list.style.height = (0, l.getHeight)(e) + "px"
                        }
                    }), S(w(n), "UNSAFE_componentWillMount", function() {
                        if (n.ssrInit(), n.props.onInit && n.props.onInit(), n.props.lazyLoad) {
                            var e = (0, l.getOnDemandLazySlides)(y({}, n.props, {}, n.state));
                            e.length > 0 && (n.setState(function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            }), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                    }), S(w(n), "componentDidMount", function() {
                        var e = y({
                            listRef: n.list,
                            trackRef: n.track
                        }, n.props);
                        n.updateState(e, !0, function() {
                            n.adaptHeight(), n.props.autoplay && n.autoPlay("update")
                        }), "progressive" === n.props.lazyLoad && (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)), n.ro = new f.default(function() {
                            n.state.animating ? (n.onWindowResized(!1), n.callbackTimers.push(setTimeout(function() {
                                return n.onWindowResized()
                            }, n.props.speed))) : n.onWindowResized()
                        }), n.ro.observe(n.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                            e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null, e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null
                        }), window && (window.addEventListener ? window.addEventListener("resize", n.onWindowResized) : window.attachEvent("onresize", n.onWindowResized))
                    }), S(w(n), "componentWillUnmount", function() {
                        n.animationEndCallback && clearTimeout(n.animationEndCallback), n.lazyLoadTimer && clearInterval(n.lazyLoadTimer), n.callbackTimers.length && (n.callbackTimers.forEach(function(e) {
                            return clearTimeout(e)
                        }), n.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", n.onWindowResized) : window.detachEvent("onresize", n.onWindowResized), n.autoplayTimer && clearInterval(n.autoplayTimer)
                    }), S(w(n), "UNSAFE_componentWillReceiveProps", function(e) {
                        for (var t = y({
                                listRef: n.list,
                                trackRef: n.track
                            }, e, {}, n.state), i = !1, o = 0, a = Object.keys(n.props); o < a.length; o++) {
                            var s = a[o];
                            if (!e.hasOwnProperty(s)) {
                                i = !0;
                                break
                            }
                            if ("object" !== v(e[s]) && "function" !== typeof e[s] && e[s] !== n.props[s]) {
                                i = !0;
                                break
                            }
                        }
                        n.updateState(t, i, function() {
                            n.state.currentSlide >= r.default.Children.count(e.children) && n.changeSlide({
                                message: "index",
                                index: r.default.Children.count(e.children) - e.slidesToShow,
                                currentSlide: n.state.currentSlide
                            }), e.autoplay ? n.autoPlay("update") : n.pause("paused")
                        })
                    }), S(w(n), "componentDidUpdate", function() {
                        if (n.checkImagesLoad(), n.props.onReInit && n.props.onReInit(), n.props.lazyLoad) {
                            var e = (0, l.getOnDemandLazySlides)(y({}, n.props, {}, n.state));
                            e.length > 0 && (n.setState(function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            }), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                        n.adaptHeight()
                    }), S(w(n), "onWindowResized", function(e) {
                        n.debouncedResize && n.debouncedResize.cancel(), n.debouncedResize = (0, a.default)(function() {
                            return n.resizeWindow(e)
                        }, 50), n.debouncedResize()
                    }), S(w(n), "resizeWindow", function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (i.default.findDOMNode(n.track)) {
                            var t = y({
                                listRef: n.list,
                                trackRef: n.track
                            }, n.props, {}, n.state);
                            n.updateState(t, e, function() {
                                n.props.autoplay ? n.autoPlay("update") : n.pause("paused")
                            }), n.setState({
                                animating: !1
                            }), clearTimeout(n.animationEndCallback), delete n.animationEndCallback
                        }
                    }), S(w(n), "updateState", function(e, t, i) {
                        var o = (0, l.initializedState)(e);
                        e = y({}, e, {}, o, {
                            slideIndex: o.currentSlide
                        }), e = y({}, e, {
                            left: (0, l.getTrackLeft)(e)
                        });
                        var a = (0, l.getTrackCSS)(e);
                        (t || r.default.Children.count(n.props.children) !== r.default.Children.count(e.children)) && (o.trackStyle = a), n.setState(o, i)
                    }), S(w(n), "ssrInit", function() {
                        if (n.props.variableWidth) {
                            var e = 0,
                                t = 0,
                                i = [],
                                o = (0, l.getPreClones)(y({}, n.props, {}, n.state, {
                                    slideCount: n.props.children.length
                                })),
                                a = (0, l.getPostClones)(y({}, n.props, {}, n.state, {
                                    slideCount: n.props.children.length
                                }));
                            n.props.children.forEach(function(t) {
                                i.push(t.props.style.width), e += t.props.style.width
                            });
                            for (var s = 0; s < o; s++) t += i[i.length - 1 - s], e += i[i.length - 1 - s];
                            for (var c = 0; c < a; c++) e += i[c];
                            for (var u = 0; u < n.state.currentSlide; u++) t += i[u];
                            var p = {
                                width: e + "px",
                                left: -t + "px"
                            };
                            if (n.props.centerMode) {
                                var f = "".concat(i[n.state.currentSlide], "px");
                                p.left = "calc(".concat(p.left, " + (100% - ").concat(f, ") / 2 ) ")
                            }
                            n.setState({
                                trackStyle: p
                            })
                        } else {
                            var d = r.default.Children.count(n.props.children),
                                h = y({}, n.props, {}, n.state, {
                                    slideCount: d
                                }),
                                m = (0, l.getPreClones)(h) + (0, l.getPostClones)(h) + d,
                                v = 100 / n.props.slidesToShow * m,
                                g = 100 / m,
                                b = -g * ((0, l.getPreClones)(h) + n.state.currentSlide) * v / 100;
                            n.props.centerMode && (b += (100 - g * v / 100) / 2);
                            var w = {
                                width: v + "%",
                                left: b + "%"
                            };
                            n.setState({
                                slideWidth: g + "%",
                                trackStyle: w
                            })
                        }
                    }), S(w(n), "checkImagesLoad", function() {
                        var e = document.querySelectorAll(".slick-slide img"),
                            t = e.length,
                            r = 0;
                        Array.prototype.forEach.call(e, function(e) {
                            var i = function() {
                                return ++r && r >= t && n.onWindowResized()
                            };
                            if (e.onclick) {
                                var o = e.onclick;
                                e.onclick = function() {
                                    o(), e.parentNode.focus()
                                }
                            } else e.onclick = function() {
                                return e.parentNode.focus()
                            };
                            e.onload || (n.props.lazyLoad ? e.onload = function() {
                                n.adaptHeight(), n.callbackTimers.push(setTimeout(n.onWindowResized, n.props.speed))
                            } : (e.onload = i, e.onerror = function() {
                                i(), n.props.onLazyLoadError && n.props.onLazyLoadError()
                            }))
                        })
                    }), S(w(n), "progressiveLazyLoad", function() {
                        for (var e = [], t = y({}, n.props, {}, n.state), r = n.state.currentSlide; r < n.state.slideCount + (0, l.getPostClones)(t); r++)
                            if (n.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            }
                        for (var i = n.state.currentSlide - 1; i >= -(0, l.getPreClones)(t); i--)
                            if (n.state.lazyLoadedList.indexOf(i) < 0) {
                                e.push(i);
                                break
                            }
                        e.length > 0 ? (n.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), n.props.onLazyLoad && n.props.onLazyLoad(e)) : n.lazyLoadTimer && (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer)
                    }), S(w(n), "slideHandler", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = n.props,
                            i = r.asNavFor,
                            o = r.beforeChange,
                            a = r.onLazyLoad,
                            s = r.speed,
                            c = r.afterChange,
                            u = n.state.currentSlide,
                            p = (0, l.slideHandler)(y({
                                index: e
                            }, n.props, {}, n.state, {
                                trackRef: n.track,
                                useCSS: n.props.useCSS && !t
                            })),
                            f = p.state,
                            d = p.nextState;
                        if (f) {
                            o && o(u, f.currentSlide);
                            var h = f.lazyLoadedList.filter(function(e) {
                                return n.state.lazyLoadedList.indexOf(e) < 0
                            });
                            a && h.length > 0 && a(h), n.setState(f, function() {
                                i && i.innerSlider.slideHandler(e), d && (n.animationEndCallback = setTimeout(function() {
                                    var e = d.animating,
                                        t = m(d, ["animating"]);
                                    n.setState(t, function() {
                                        n.callbackTimers.push(setTimeout(function() {
                                            return n.setState({
                                                animating: e
                                            })
                                        }, 10)), c && c(f.currentSlide), delete n.animationEndCallback
                                    })
                                }, s))
                            })
                        }
                    }), S(w(n), "changeSlide", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = y({}, n.props, {}, n.state),
                            i = (0, l.changeSlide)(r, e);
                        (0 === i || i) && (!0 === t ? n.slideHandler(i, t) : n.slideHandler(i))
                    }), S(w(n), "clickHandler", function(e) {
                        !1 === n.clickable && (e.stopPropagation(), e.preventDefault()), n.clickable = !0
                    }), S(w(n), "keyHandler", function(e) {
                        var t = (0, l.keyHandler)(e, n.props.accessibility, n.props.rtl);
                        "" !== t && n.changeSlide({
                            message: t
                        })
                    }), S(w(n), "selectHandler", function(e) {
                        n.changeSlide(e)
                    }), S(w(n), "disableBodyScroll", function() {
                        window.ontouchmove = function(e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    }), S(w(n), "enableBodyScroll", function() {
                        window.ontouchmove = null
                    }), S(w(n), "swipeStart", function(e) {
                        n.props.verticalSwiping && n.disableBodyScroll();
                        var t = (0, l.swipeStart)(e, n.props.swipe, n.props.draggable);
                        "" !== t && n.setState(t)
                    }), S(w(n), "swipeMove", function(e) {
                        var t = (0, l.swipeMove)(e, y({}, n.props, {}, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        t && (t.swiping && (n.clickable = !1), n.setState(t))
                    }), S(w(n), "swipeEnd", function(e) {
                        var t = (0, l.swipeEnd)(e, y({}, n.props, {}, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        if (t) {
                            var r = t.triggerSlideHandler;
                            delete t.triggerSlideHandler, n.setState(t), void 0 !== r && (n.slideHandler(r), n.props.verticalSwiping && n.enableBodyScroll())
                        }
                    }), S(w(n), "slickPrev", function() {
                        n.callbackTimers.push(setTimeout(function() {
                            return n.changeSlide({
                                message: "previous"
                            })
                        }, 0))
                    }), S(w(n), "slickNext", function() {
                        n.callbackTimers.push(setTimeout(function() {
                            return n.changeSlide({
                                message: "next"
                            })
                        }, 0))
                    }), S(w(n), "slickGoTo", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        n.callbackTimers.push(setTimeout(function() {
                            return n.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: n.state.currentSlide
                            }, t)
                        }, 0))
                    }), S(w(n), "play", function() {
                        var e;
                        if (n.props.rtl) e = n.state.currentSlide - n.props.slidesToScroll;
                        else {
                            if (!(0, l.canGoNext)(y({}, n.props, {}, n.state))) return !1;
                            e = n.state.currentSlide + n.props.slidesToScroll
                        }
                        n.slideHandler(e)
                    }), S(w(n), "autoPlay", function(e) {
                        n.autoplayTimer && clearInterval(n.autoplayTimer);
                        var t = n.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === t || "focused" === t || "paused" === t) return
                        } else if ("leave" === e) {
                            if ("paused" === t || "focused" === t) return
                        } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                        n.autoplayTimer = setInterval(n.play, n.props.autoplaySpeed + 50), n.setState({
                            autoplaying: "playing"
                        })
                    }), S(w(n), "pause", function(e) {
                        n.autoplayTimer && (clearInterval(n.autoplayTimer), n.autoplayTimer = null);
                        var t = n.state.autoplaying;
                        "paused" === e ? n.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== t && "playing" !== t || n.setState({
                            autoplaying: "focused"
                        }) : "playing" === t && n.setState({
                            autoplaying: "hovered"
                        })
                    }), S(w(n), "onDotsOver", function() {
                        return n.props.autoplay && n.pause("hovered")
                    }), S(w(n), "onDotsLeave", function() {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    }), S(w(n), "onTrackOver", function() {
                        return n.props.autoplay && n.pause("hovered")
                    }), S(w(n), "onTrackLeave", function() {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    }), S(w(n), "onSlideFocus", function() {
                        return n.props.autoplay && n.pause("focused")
                    }), S(w(n), "onSlideBlur", function() {
                        return n.props.autoplay && "focused" === n.state.autoplaying && n.autoPlay("blur")
                    }), S(w(n), "render", function() {
                        var e, t, i, o = (0, s.default)("slick-slider", n.props.className, {
                                "slick-vertical": n.props.vertical,
                                "slick-initialized": !0
                            }),
                            a = y({}, n.props, {}, n.state),
                            f = (0, l.extractObject)(a, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]),
                            d = n.props.pauseOnHover;
                        if (f = y({}, f, {
                                onMouseEnter: d ? n.onTrackOver : null,
                                onMouseLeave: d ? n.onTrackLeave : null,
                                onMouseOver: d ? n.onTrackOver : null,
                                focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                            }), !0 === n.props.dots && n.state.slideCount >= n.props.slidesToShow) {
                            var m = (0, l.extractObject)(a, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                v = n.props.pauseOnDotsHover;
                            m = y({}, m, {
                                clickHandler: n.changeSlide,
                                onMouseEnter: v ? n.onDotsLeave : null,
                                onMouseOver: v ? n.onDotsOver : null,
                                onMouseLeave: v ? n.onDotsLeave : null
                            }), e = r.default.createElement(u.Dots, m)
                        }
                        var g = (0, l.extractObject)(a, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        g.clickHandler = n.changeSlide, n.props.arrows && (t = r.default.createElement(p.PrevArrow, g), i = r.default.createElement(p.NextArrow, g));
                        var b = null;
                        n.props.vertical && (b = {
                            height: n.state.listHeight
                        });
                        var w = null;
                        !1 === n.props.vertical ? !0 === n.props.centerMode && (w = {
                            padding: "0px " + n.props.centerPadding
                        }) : !0 === n.props.centerMode && (w = {
                            padding: n.props.centerPadding + " 0px"
                        });
                        var k = y({}, b, {}, w),
                            S = n.props.touchMove,
                            O = {
                                className: "slick-list",
                                style: k,
                                onClick: n.clickHandler,
                                onMouseDown: S ? n.swipeStart : null,
                                onMouseMove: n.state.dragging && S ? n.swipeMove : null,
                                onMouseUp: S ? n.swipeEnd : null,
                                onMouseLeave: n.state.dragging && S ? n.swipeEnd : null,
                                onTouchStart: S ? n.swipeStart : null,
                                onTouchMove: n.state.dragging && S ? n.swipeMove : null,
                                onTouchEnd: S ? n.swipeEnd : null,
                                onTouchCancel: n.state.dragging && S ? n.swipeEnd : null,
                                onKeyDown: n.props.accessibility ? n.keyHandler : null
                            },
                            x = {
                                className: o,
                                dir: "ltr",
                                style: n.props.style
                            };
                        return n.props.unslick && (O = {
                            className: "slick-list"
                        }, x = {
                            className: o
                        }), r.default.createElement("div", x, n.props.unslick ? "" : t, r.default.createElement("div", h({
                            ref: n.listRefHandler
                        }, O), r.default.createElement(c.Track, h({
                            ref: n.trackRefHandler
                        }, f), n.props.children)), n.props.unslick ? "" : i, n.props.unslick ? "" : e)
                    }), n.list = null, n.track = null, n.state = y({}, o.default, {
                        currentSlide: n.props.initialSlide,
                        slideCount: r.default.Children.count(n.props.children)
                    }), n.callbackTimers = [], n.clickable = !0, n.debouncedResize = null, n
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && k(e, t)
                }(t, r["default"].Component), t
            }();
            t.InnerSlider = O
        },
        v5Dd: function(e, t, n) {
            var r = n("NsO/"),
                i = n("vwuL").f;
            n("zn7N")("getOwnPropertyDescriptor", function() {
                return function(e, t) {
                    return i(r(e), t)
                }
            })
        },
        v6xn: function(e, t, n) {
            var r = n("C2SN");
            e.exports = function(e, t) {
                return new(r(e))(t)
            }
        },
        vBP9: function(e, t, n) {
            var r = n("5T2Y").navigator;
            e.exports = r && r.userAgent || ""
        },
        "vPd/": function(e, t, n) {
            var r = n("kCCV"),
                i = n("IX3V").each;

            function o(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var n = this;
                this.listener = function(e) {
                    n.mql = e.currentTarget || e, n.assess()
                }, this.mql.addListener(this.listener)
            }
            o.prototype = {
                constuctor: o,
                addHandler: function(e) {
                    var t = new r(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function(e) {
                    var t = this.handlers;
                    i(t, function(n, r) {
                        if (n.equals(e)) return n.destroy(), !t.splice(r, 1)
                    })
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    i(this.handlers, function(e) {
                        e.destroy()
                    }), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function() {
                    var e = this.matches() ? "on" : "off";
                    i(this.handlers, function(t) {
                        t[e]()
                    })
                }
            }, e.exports = o
        },
        vjea: function(e, t, n) {
            var r = n("TRZx");

            function i(t, n) {
                return e.exports = i = r || function(e, t) {
                    return e.__proto__ = t, e
                }, i(t, n)
            }
            e.exports = i
        },
        vkoW: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                i = n("zLVn"),
                o = n("q1tI"),
                a = n.n(o),
                s = n("17x9"),
                l = n.n(s),
                c = n("TSYQ"),
                u = n.n(c),
                p = n("33Jr"),
                f = {
                    tag: p.n,
                    wrapTag: p.n,
                    toggle: l.a.func,
                    className: l.a.string,
                    cssModule: l.a.object,
                    children: l.a.node,
                    closeAriaLabel: l.a.string,
                    charCode: l.a.oneOfType([l.a.string, l.a.number]),
                    close: l.a.object
                },
                d = function(e) {
                    var t, n = e.className,
                        o = e.cssModule,
                        s = e.children,
                        l = e.toggle,
                        c = e.tag,
                        f = e.wrapTag,
                        d = e.closeAriaLabel,
                        h = e.charCode,
                        m = e.close,
                        v = Object(i.a)(e, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]),
                        g = Object(p.j)(u()(n, "modal-header"), o);
                    if (!m && l) {
                        var y = "number" === typeof h ? String.fromCharCode(h) : h;
                        t = a.a.createElement("button", {
                            type: "button",
                            onClick: l,
                            className: Object(p.j)("close", o),
                            "aria-label": d
                        }, a.a.createElement("span", {
                            "aria-hidden": "true"
                        }, y))
                    }
                    return a.a.createElement(f, Object(r.a)({}, v, {
                        className: g
                    }), a.a.createElement(c, {
                        className: Object(p.j)("modal-title", o)
                    }, s), m || t)
                };
            d.propTypes = f, d.defaultProps = {
                tag: "h5",
                wrapTag: "div",
                closeAriaLabel: "Close",
                charCode: 215
            }, t.a = d
        },
        vwuL: function(e, t, n) {
            var r = n("NV0k"),
                i = n("rr1i"),
                o = n("NsO/"),
                a = n("G8Mo"),
                s = n("B+OT"),
                l = n("eUtF"),
                c = Object.getOwnPropertyDescriptor;
            t.f = n("jmDH") ? c : function(e, t) {
                if (e = o(e), t = a(t, !0), l) try {
                    return c(e, t)
                } catch (n) {}
                if (s(e, t)) return i(!r.f.call(e, t), e[t])
            }
        },
        "w2d+": function(e, t, n) {
            "use strict";
            var r = n("hDam"),
                i = n("UO39"),
                o = n("SBuE"),
                a = n("NsO/");
            e.exports = n("MPFp")(Array, "Array", function(e, t) {
                this._t = a(e), this._i = 0, this._k = t
            }, function() {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
        },
        wYmx: function(e, t, n) {
            "use strict";
            var r = n("eaoh"),
                i = n("93I4"),
                o = n("MCSJ"),
                a = [].slice,
                s = {};
            e.exports = Function.bind || function(e) {
                var t = r(this),
                    n = a.call(arguments, 1),
                    l = function() {
                        var r = n.concat(a.call(arguments));
                        return this instanceof l ? function(e, t, n) {
                            if (!(t in s)) {
                                for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                                s[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                            }
                            return s[t](e, n)
                        }(t, r.length, r) : o(t, r, e)
                    };
                return i(t.prototype) && (l.prototype = t.prototype), l
            }
        },
        wZXL: function(e, t, n) {
            var r = n("vPd/"),
                i = n("IX3V"),
                o = i.each,
                a = i.isFunction,
                s = i.isArray;

            function l() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            l.prototype = {
                constructor: l,
                register: function(e, t, n) {
                    var i = this.queries,
                        l = n && this.browserIsIncapable;
                    return i[e] || (i[e] = new r(e, l)), a(t) && (t = {
                        match: t
                    }), s(t) || (t = [t]), o(t, function(t) {
                        a(t) && (t = {
                            match: t
                        }), i[e].addHandler(t)
                    }), this
                },
                unregister: function(e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, e.exports = l
        },
        wgeU: function(e, t) {},
        x9Za: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
            var r = o(n("q1tI")),
                i = o(n("i8i4"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(n, !0).forEach(function(t) {
                        l(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var c = function(e) {
                for (var t = [], n = u(e), r = p(e), i = n; i < r; i++) e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
                return t
            };
            t.getOnDemandLazySlides = c;
            t.getRequiredLazySlides = function(e) {
                for (var t = [], n = u(e), r = p(e), i = n; i < r; i++) t.push(i);
                return t
            };
            var u = function(e) {
                return e.currentSlide - f(e)
            };
            t.lazyStartIndex = u;
            var p = function(e) {
                return e.currentSlide + d(e)
            };
            t.lazyEndIndex = p;
            var f = function(e) {
                return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
            };
            t.lazySlidesOnLeft = f;
            var d = function(e) {
                return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
            };
            t.lazySlidesOnRight = d;
            var h = function(e) {
                return e && e.offsetWidth || 0
            };
            t.getWidth = h;
            var m = function(e) {
                return e && e.offsetHeight || 0
            };
            t.getHeight = m;
            var v = function(e) {
                var t, n, r, i, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t = e.startX - e.curX, n = e.startY - e.curY, r = Math.atan2(n, t), (i = Math.round(180 * r / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? "left" : i >= 135 && i <= 225 ? "right" : !0 === o ? i >= 35 && i <= 135 ? "up" : "down" : "vertical"
            };
            t.getSwipeDirection = v;
            var g = function(e) {
                var t = !0;
                return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
            };
            t.canGoNext = g;
            t.extractObject = function(e, t) {
                var n = {};
                return t.forEach(function(t) {
                    return n[t] = e[t]
                }), n
            };
            t.initializedState = function(e) {
                var t, n = r.default.Children.count(e.children),
                    o = Math.ceil(h(i.default.findDOMNode(e.listRef))),
                    a = Math.ceil(h(i.default.findDOMNode(e.trackRef)));
                if (e.vertical) t = o;
                else {
                    var s = e.centerMode && 2 * parseInt(e.centerPadding);
                    "string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (s *= o / 100), t = Math.ceil((o - s) / e.slidesToShow)
                }
                var l = i.default.findDOMNode(e.listRef) && m(i.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),
                    u = l * e.slidesToShow,
                    p = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                e.rtl && void 0 === e.currentSlide && (p = n - 1 - e.initialSlide);
                var f = e.lazyLoadedList || [],
                    d = c({
                        currentSlide: p,
                        lazyLoadedList: f
                    });
                f.concat(d);
                var v = {
                    slideCount: n,
                    slideWidth: t,
                    listWidth: o,
                    trackWidth: a,
                    currentSlide: p,
                    slideHeight: l,
                    listHeight: u,
                    lazyLoadedList: f
                };
                return null === e.autoplaying && e.autoplay && (v.autoplaying = "playing"), v
            };
            t.slideHandler = function(e) {
                var t = e.waitForAnimate,
                    n = e.animating,
                    r = e.fade,
                    i = e.infinite,
                    o = e.index,
                    a = e.slideCount,
                    l = e.lazyLoadedList,
                    u = e.lazyLoad,
                    p = e.currentSlide,
                    f = e.centerMode,
                    d = e.slidesToScroll,
                    h = e.slidesToShow,
                    m = e.useCSS;
                if (t && n) return {};
                var v, y, b, w = o,
                    k = {},
                    E = {};
                if (r) {
                    if (!i && (o < 0 || o >= a)) return {};
                    o < 0 ? w = o + a : o >= a && (w = o - a), u && l.indexOf(w) < 0 && l.push(w), k = {
                        animating: !0,
                        currentSlide: w,
                        lazyLoadedList: l
                    }, E = {
                        animating: !1
                    }
                } else v = w, w < 0 ? (v = w + a, i ? a % d !== 0 && (v = a - a % d) : v = 0) : !g(e) && w > p ? w = v = p : f && w >= a ? (w = i ? a : a - 1, v = i ? 0 : a - 1) : w >= a && (v = w - a, i ? a % d !== 0 && (v = 0) : v = a - h), y = x(s({}, e, {
                    slideIndex: w
                })), b = x(s({}, e, {
                    slideIndex: v
                })), i || (y === b && (w = v), y = b), u && l.concat(c(s({}, e, {
                    currentSlide: w
                }))), m ? (k = {
                    animating: !0,
                    currentSlide: v,
                    trackStyle: O(s({}, e, {
                        left: y
                    })),
                    lazyLoadedList: l
                }, E = {
                    animating: !1,
                    currentSlide: v,
                    trackStyle: S(s({}, e, {
                        left: b
                    })),
                    swipeLeft: null
                }) : k = {
                    currentSlide: v,
                    trackStyle: S(s({}, e, {
                        left: b
                    })),
                    lazyLoadedList: l
                };
                return {
                    state: k,
                    nextState: E
                }
            };
            t.changeSlide = function(e, t) {
                var n, r, i, o, a = e.slidesToScroll,
                    l = e.slidesToShow,
                    c = e.slideCount,
                    u = e.currentSlide,
                    p = e.lazyLoad,
                    f = e.infinite;
                if (n = c % a !== 0 ? 0 : (c - u) % a, "previous" === t.message) o = u - (i = 0 === n ? a : l - n), p && !f && (o = -1 === (r = u - i) ? c - 1 : r);
                else if ("next" === t.message) o = u + (i = 0 === n ? a : n), p && !f && (o = (u + a) % c + n);
                else if ("dots" === t.message) {
                    if ((o = t.index * t.slidesToScroll) === t.currentSlide) return null
                } else if ("children" === t.message) {
                    if ((o = t.index) === t.currentSlide) return null;
                    if (f) {
                        var d = C(s({}, e, {
                            targetSlide: o
                        }));
                        o > t.currentSlide && "left" === d ? o -= c : o < t.currentSlide && "right" === d && (o += c)
                    }
                } else if ("index" === t.message && (o = Number(t.index)) === t.currentSlide) return null;
                return o
            };
            t.keyHandler = function(e, t, n) {
                return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
            };
            t.swipeStart = function(e, t, n) {
                return "IMG" === e.target.tagName && e.preventDefault(), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                    dragging: !0,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                }
            };
            t.swipeMove = function(e, t) {
                var n = t.scrolling,
                    r = t.animating,
                    i = t.vertical,
                    o = t.swipeToSlide,
                    a = t.verticalSwiping,
                    l = t.rtl,
                    c = t.currentSlide,
                    u = t.edgeFriction,
                    p = t.edgeDragged,
                    f = t.onEdge,
                    d = t.swiped,
                    h = t.swiping,
                    m = t.slideCount,
                    y = t.slidesToScroll,
                    b = t.infinite,
                    w = t.touchObject,
                    k = t.swipeEvent,
                    O = t.listHeight,
                    E = t.listWidth;
                if (!n) {
                    if (r) return e.preventDefault();
                    i && o && a && e.preventDefault();
                    var N, _ = {},
                        C = x(t);
                    w.curX = e.touches ? e.touches[0].pageX : e.clientX, w.curY = e.touches ? e.touches[0].pageY : e.clientY, w.swipeLength = Math.round(Math.sqrt(Math.pow(w.curX - w.startX, 2)));
                    var T = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
                    if (!a && !h && T > 10) return {
                        scrolling: !0
                    };
                    a && (w.swipeLength = T);
                    var j = (l ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
                    a && (j = w.curY > w.startY ? 1 : -1);
                    var P = Math.ceil(m / y),
                        M = v(t.touchObject, a),
                        L = w.swipeLength;
                    return b || (0 === c && "right" === M || c + 1 >= P && "left" === M || !g(t) && "left" === M) && (L = w.swipeLength * u, !1 === p && f && (f(M), _.edgeDragged = !0)), !d && k && (k(M), _.swiped = !0), N = i ? C + L * (O / E) * j : l ? C - L * j : C + L * j, a && (N = C + L * j), _ = s({}, _, {
                        touchObject: w,
                        swipeLeft: N,
                        trackStyle: S(s({}, t, {
                            left: N
                        }))
                    }), Math.abs(w.curX - w.startX) < .8 * Math.abs(w.curY - w.startY) ? _ : (w.swipeLength > 10 && (_.swiping = !0, e.preventDefault()), _)
                }
            };
            t.swipeEnd = function(e, t) {
                var n = t.dragging,
                    r = t.swipe,
                    i = t.touchObject,
                    o = t.listWidth,
                    a = t.touchThreshold,
                    l = t.verticalSwiping,
                    c = t.listHeight,
                    u = t.currentSlide,
                    p = t.swipeToSlide,
                    f = t.scrolling,
                    d = t.onSwipe;
                if (!n) return r && e.preventDefault(), {};
                var h = l ? c / a : o / a,
                    m = v(i, l),
                    g = {
                        dragging: !1,
                        edgeDragged: !1,
                        scrolling: !1,
                        swiping: !1,
                        swiped: !1,
                        swipeLeft: null,
                        touchObject: {}
                    };
                if (f) return g;
                if (!i.swipeLength) return g;
                if (i.swipeLength > h) {
                    var y, k;
                    switch (e.preventDefault(), d && d(m), m) {
                        case "left":
                        case "up":
                            k = u + w(t), y = p ? b(t, k) : k, g.currentDirection = 0;
                            break;
                        case "right":
                        case "down":
                            k = u - w(t), y = p ? b(t, k) : k, g.currentDirection = 1;
                            break;
                        default:
                            y = u
                    }
                    g.triggerSlideHandler = y
                } else {
                    var S = x(t);
                    g.trackStyle = O(s({}, t, {
                        left: S
                    }))
                }
                return g
            };
            var y = function(e) {
                for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, r = e.infinite ? -1 * e.slidesToShow : 0, i = []; n < t;) i.push(n), n = r + e.slidesToScroll, r += Math.min(e.slidesToScroll, e.slidesToShow);
                return i
            };
            t.getNavigableIndexes = y;
            var b = function(e, t) {
                var n = y(e),
                    r = 0;
                if (t > n[n.length - 1]) t = n[n.length - 1];
                else
                    for (var i in n) {
                        if (t < n[i]) {
                            t = r;
                            break
                        }
                        r = n[i]
                    }
                return t
            };
            t.checkNavigable = b;
            var w = function(e) {
                var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                if (e.swipeToSlide) {
                    var n, r = i.default.findDOMNode(e.listRef).querySelectorAll(".slick-slide");
                    if (Array.from(r).every(function(r) {
                            if (e.vertical) {
                                if (r.offsetTop + m(r) / 2 > -1 * e.swipeLeft) return n = r, !1
                            } else if (r.offsetLeft - t + h(r) / 2 > -1 * e.swipeLeft) return n = r, !1;
                            return !0
                        }), !n) return 0;
                    var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                    return Math.abs(n.dataset.index - o) || 1
                }
                return e.slidesToScroll
            };
            t.getSlideCount = w;
            var k = function(e, t) {
                return t.reduce(function(t, n) {
                    return t && e.hasOwnProperty(n)
                }, !0) ? null : console.error("Keys Missing:", e)
            };
            t.checkSpecKeys = k;
            var S = function(e) {
                var t, n;
                k(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var r = e.slideCount + 2 * e.slidesToShow;
                e.vertical ? n = r * e.slideHeight : t = _(e) * e.slideWidth;
                var i = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                e.useTransform ? i = s({}, i, {
                    WebkitTransform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    transform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    msTransform: e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)"
                }) : e.vertical ? i.top = e.left : i.left = e.left;
                return e.fade && (i = {
                    opacity: 1
                }), t && (i.width = t), n && (i.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? i.marginTop = e.left + "px" : i.marginLeft = e.left + "px"), i
            };
            t.getTrackCSS = S;
            var O = function(e) {
                k(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var t = S(e);
                return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
            };
            t.getTrackAnimateCSS = O;
            var x = function(e) {
                if (e.unslick) return 0;
                k(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var t, n, r = e.slideIndex,
                    o = e.trackRef,
                    a = e.infinite,
                    s = e.centerMode,
                    l = e.slideCount,
                    c = e.slidesToShow,
                    u = e.slidesToScroll,
                    p = e.slideWidth,
                    f = e.listWidth,
                    d = e.variableWidth,
                    h = e.slideHeight,
                    m = e.fade,
                    v = e.vertical;
                if (m || 1 === e.slideCount) return 0;
                var g = 0;
                if (a ? (g = -E(e), l % u !== 0 && r + u > l && (g = -(r > l ? c - (r - l) : l % u)), s && (g += parseInt(c / 2))) : (l % u !== 0 && r + u > l && (g = c - l % u), s && (g = parseInt(c / 2))), t = v ? r * h * -1 + g * h : r * p * -1 + g * p, !0 === d) {
                    var y, b = i.default.findDOMNode(o);
                    if (y = r + E(e), t = (n = b && b.childNodes[y]) ? -1 * n.offsetLeft : 0, !0 === s) {
                        y = a ? r + E(e) : r, n = b && b.children[y], t = 0;
                        for (var w = 0; w < y; w++) t -= b && b.children[w] && b.children[w].offsetWidth;
                        t -= parseInt(e.centerPadding), t += n && (f - n.offsetWidth) / 2
                    }
                }
                return t
            };
            t.getTrackLeft = x;
            var E = function(e) {
                return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
            };
            t.getPreClones = E;
            var N = function(e) {
                return e.unslick || !e.infinite ? 0 : e.slideCount
            };
            t.getPostClones = N;
            var _ = function(e) {
                return 1 === e.slideCount ? 1 : E(e) + e.slideCount + N(e)
            };
            t.getTotalSlides = _;
            var C = function(e) {
                return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + T(e) ? "left" : "right" : e.targetSlide < e.currentSlide - j(e) ? "right" : "left"
            };
            t.siblingDirection = C;
            var T = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    r = e.rtl,
                    i = e.centerPadding;
                if (n) {
                    var o = (t - 1) / 2 + 1;
                    return parseInt(i) > 0 && (o += 1), r && t % 2 === 0 && (o += 1), o
                }
                return r ? 0 : t - 1
            };
            t.slidesOnRight = T;
            var j = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    r = e.rtl,
                    i = e.centerPadding;
                if (n) {
                    var o = (t - 1) / 2 + 1;
                    return parseInt(i) > 0 && (o += 1), r || t % 2 !== 0 || (o += 1), o
                }
                return r ? t - 1 : 0
            };
            t.slidesOnLeft = j;
            t.canUseDOM = function() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }
        },
        xfxO: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0;
            var r;
            (r = n("17x9")) && r.__esModule;
            t.timeoutsShape = null;
            t.classNamesShape = null
        },
        xvv9: function(e, t, n) {
            n("cHUd")("Set")
        },
        yD6e: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }, e.exports = t.default
        },
        yLu3: function(e, t, n) {
            e.exports = n("VKFn")
        },
        ycFn: function(e, t, n) {
            "use strict";
            var r = n("TqRt");
            t.__esModule = !0, t.default = function(e, t) {
                e.classList ? e.classList.add(t) : (0, i.default)(e, t) || ("string" === typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
            };
            var i = r(n("yD6e"));
            e.exports = t.default
        },
        zLkG: function(e, t, n) {
            t.f = n("UWiX")
        },
        zXhZ: function(e, t, n) {
            var r = n("5K7Z"),
                i = n("93I4"),
                o = n("ZW5q");
            e.exports = function(e, t) {
                if (r(e), i(t) && t.constructor === e) return t;
                var n = o.f(e);
                return (0, n.resolve)(t), n.promise
            }
        },
        zn7N: function(e, t, n) {
            var r = n("Y7ZC"),
                i = n("WEpk"),
                o = n("KUxP");
            e.exports = function(e, t) {
                var n = (i.Object || {})[e] || Object[e],
                    a = {};
                a[e] = t(n), r(r.S + r.F * o(function() {
                    n(1)
                }), "Object", a)
            }
        }
    },
    [
        ["DKLB", 0, 1, 2]
    ]
]);