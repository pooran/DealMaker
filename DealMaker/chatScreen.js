/*
 * JS for chatScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '682d253c-04fc-41c1-8754-3d0454b87d54';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "profileScreen",
    "location": "profileScreen.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "chatScreen",
    "location": "chatScreen.html"
}];

chatScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_106': 'chatScreen_mobilelabel_106',
        'mobilelabel_109': 'chatScreen_mobilelabel_109',
        'mobilelabel_107': 'chatScreen_mobilelabel_107',
        'mobilelabel_110': 'chatScreen_mobilelabel_110',
        'mobilenavbar_2': 'chatScreen_mobilenavbar_2',
        'mobilenavbaritem_3': 'chatScreen_mobilenavbaritem_3',
        'mobilenavbaritem_4': 'chatScreen_mobilenavbaritem_4',
        'mobilenavbaritem_105': 'chatScreen_mobilenavbaritem_105'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'chatScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var chatScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "chatScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var chatScreen_onLoad = function() {
            chatScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            chatScreen_deviceEvents();
            chatScreen_windowEvents();
            chatScreen_elementsEvents();
        };

    // screen window events
    var chatScreen_windowEvents = function() {

            $('#chatScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var chatScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var chatScreen_elementsExtraJS = function() {
            // screen (chatScreen) extra code

        };

    // screen elements handler
    var chatScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#chatScreen_mobilefooter1 [name="mobilenavbaritem_3"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('startScreen', {
                            transition: 'slide',
                            reverse: true
                        });

                    }
                },
            }, '#chatScreen_mobilefooter1 [name="mobilenavbaritem_3"]');
            $(document).off("click", '#chatScreen_mobilefooter1 [name="mobilenavbaritem_4"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('profileScreen', {
                            transition: 'slide',
                            reverse: false
                        });
                        Apperyio.navigateTo('profileScreen', {
                            transition: 'slide',
                            reverse: true
                        });

                    }
                },
            }, '#chatScreen_mobilefooter1 [name="mobilenavbaritem_4"]');

        };

    $(document).off("pagebeforeshow", "#chatScreen").on("pagebeforeshow", "#chatScreen", function(event, ui) {
        chatScreen_beforeshow();
    });

    if (runBeforeShow) {
        chatScreen_beforeshow();
    } else {
        chatScreen_onLoad();
    }
};

$(document).off("pagecreate", "#chatScreen").on("pagecreate", "#chatScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    chatScreen_js();
});