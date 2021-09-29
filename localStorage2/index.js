
$(document).ready(function () {

    const { localStorage, postMessage, addEventListener } = window;
    const { getItem, setItem } = localStorage;

    window.addEventListener("message", receiveMessage, false);


    function receiveMessage(event) {
        var origin = event.origin
        if (origin === 'http://localhost:8090') {
            console.log('event', event);
        }

    }
});