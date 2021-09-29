$(document).ready(function () {

    const ifr = $('iframe')[0];
    ifr.onload = function () {
        ifr.contentWindow.postMessage('11111', window.location.origin)
    }
});