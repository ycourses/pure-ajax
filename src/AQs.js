// JavaScript Document
/* eslint-env browser*/
/* global document */
/*global
alert, confirm, console, Debug, opera, prompt */
/*jslint evil: true, plusplus: true */
//document.addEventListener('DOMContentLoaded', function () {
/*
Developer by ADham allam
cood_ip@hotmail.com
V0.1 2018
*/
var   req, xmlHttp = null, output, AttributeObject;

var $ = {
    Request_processing: function (usr) {
        "use strict";//request processing
        var v1;
        switch (usr) {
            case 0:
                v1 = true;
                break;
            case 1:
                v1 = false;//Asynchronous
                break;
            default:
                v1 = true;
        }
        $.sc("send req=" + v1);
        return v1;
    },
    msg_status: function (m) {
        "use strict";
        var msg;
        if (m.imsg === 0) {
            msg = ".load...";
            $.sc("Msg status=" + msg);
            return msg;
        }
        //cmsg = 1;
        if (m.imsg === 1) {

            msg = xmlHttp.readyState;
            if (msg === 0) {msg = "uninitialized"; $.sc("Msg status=" + msg); }
            if (msg === 1) {msg = "loading"; $.sc("Msg status=" + msg); }
            if (msg === 2) {msg = "loaded"; $.sc("Msg status=" + msg);  }
            if (msg === 3) {msg = "interactive"; $.sc("Msg status=" + msg); }
            if (msg === 4) {msg = "completed"; $.sc("Msg status=" + msg); xmlHttp.abort(); }

            return msg;
        }
        if (m.imsg === 2) {msg = "Plese wait ..";  }
        if (m.imsg === 3) {msg = "by  adham ..";  } else {msg = m.imsg; }
        document.getElementById(m.pagElemnt).innerHTML = msg;
        return msg;
    },
    resType_output: function (resType) {
        "use strict";

        switch (resType) {
            case 'txt':
                req = xmlHttp.responseText;
                break;
            case 'Xml':
                req = xmlHttp.responseXml;
                break;
            default:
                req = xmlHttp.responseText;
        }
        //$.sc("resType output=" + req);
        return req;
    },
    ref_cashe: function (cashe) {
        "use strict";
        var nt = new Date().getTime(), ncsh, ResultCash;
        ncsh = parseInt(Math.random() * nt, 10);
        switch (cashe) {
            case 0:
                ResultCash =  "&c=" + ncsh;
                break;
            case 1:
                ResultCash = "";
                break;
            default:
                ResultCash =  "&c=" + ncsh;
        }
        // $.sc("REcashe=" + ResultCash);
        return ResultCash;

    },
    response_engen: function (sucs, resType) {
        "use strict";
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                output = this.resType_output(resType);
                sucs(output);
            }
        }
        //        $.sc("resType output=" + output);
    },
    AQs: function (OBJ) {
        "use strict";
        if (!OBJ.type || !OBJ.type.length) {OBJ.type = 'GET'; }
        if (!OBJ.url || !OBJ.url.length) {OBJ.url = document.URL; }
        if (!OBJ.data || !OBJ.data.length) {OBJ.data = ''; }
        if (!OBJ.reqType || !OBJ.reqType.length) {OBJ.reqType = 'txt'; }
        if (!OBJ.imsg || !OBJ.imsg.length) {OBJ.imsg = 1; }
        if (!OBJ.vCash || !OBJ.vCash.length) {OBJ.vCash = 1; }

        var  rm, RP = this.Request_processing(0), Cash = $.ref_cashe(OBJ.vCash);
        switch (OBJ.type) {
            case "GET":
                rm = "GET";
                break;
            case "POST":
                rm = "POST";
                break;
            default:
                rm = "POST";
        }
        //        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        /*    if (xmlHttp.xmlHttpRequest) {
        // If IE7, Mozilla, Safari, and so on: Use native object.
            xmlHttp = new window.xmlHttpRequest();
        } else {
            if (window.ActiveXObject) {
         // ...otherwise, use the ActiveX control for IE5.x and IE6.
                xmlHttp = new window.ActiveXObject('MSXML2.xmlHttp.3.0');
            } else {
                xmlHttp = new window.ActiveXObject("Microsoft.xmlHttp");
            }
        }*/
        xmlHttp.onreadystatechange = function () {$.response_engen(OBJ.sucs, OBJ.reqType);   $.msg_status(OBJ);         };
        xmlHttp.open(rm, OBJ.url + OBJ.data + Cash, RP);
        if(OBJ.reqType === "POST"){
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }

        xmlHttp.send(null);
        // OBJ.sucs();
    },
    _val: function (e) {
        "use strict";
        var v = document.querySelector(e).value;
        return v;

    },
    gTr: function (selector, a) {
        "use strict";
      var  eL=$.$(selector).getAttribute(a);
       // var atr = document.getElementById(id).getAttribute(a);
        return eL;
    },
    cTxt:function (selector) {
        "use strict";
        return $.$(selector).textContent;
    },
    $: function (selector) {
        'use strict';
        AttributeObject = document.querySelector(selector);
        return AttributeObject;
    },
    sTr: function (selector, Attribute) {
        'use strict';
        $.$(selector).setAttribute(Attribute[0], Attribute[1]);
    },
    sc: function (e) {
        "use strict";
        /* eslint-disable no-console */
        console.log(e);
        /* eslint-enable no-console */
    },
    typing: function (Taray, Repeat, SpedTipe, selector) {
        'use strict';
        var MainArayLength = Taray.length,
            v = 0,//عداد البداء من اول صف فى المصفوفة
            shid = document.querySelector(selector),
            Yin = setInterval(function () { // دالة طباعة اسطر المصفوفة حسب طول المصفوفة
                var ic = 0, clerline, myTr =  Taray[v],
                    styping = setInterval(function () {shid.textContent += myTr[ic];
                        ic++;
                        if (ic >= myTr.length) {clearInterval(styping);
                            clerline = setInterval(function () {shid.innerHTML = myTr.substring(0, ic);
                                ic--;
                                if (ic <= -1) {clearInterval(clerline); }
                                return clerline;
                            }, SpedTipe);
                        }
                        return styping;
                    }, SpedTipe);
                v++;// زيادة العداد بواحد
                if (v >= MainArayLength) { // التوقف فى حالة اﻹنتهاء من جميع السطور
                    if (Repeat === true) {v = 0; } else {clearInterval(Yin); }
                }
                ic = 0;
                return Yin;
            }, Taray[v].length * 2 * SpedTipe);// الوقت فى كتابة كل سطر حسب الكتابة والمسح
    }

};

