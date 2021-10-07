$(document).ready(function () {

    const ifr = $('iframe')[0];
    ifr.onload = function () {
        ifr.contentWindow.postMessage('111', 'http://localhost:8100')
    }
});