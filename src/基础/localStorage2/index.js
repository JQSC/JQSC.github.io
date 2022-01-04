
$(document).ready(function () {

    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        const { data, origin } = event;
        console.log('event', event);

        if (origin === 'http://localhost:8090') {

            window.localStorage.setItem(new Date().getTime(), data)
        }

    }
});