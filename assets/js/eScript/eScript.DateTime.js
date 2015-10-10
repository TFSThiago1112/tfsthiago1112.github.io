$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = new Date();
        $('.clock').html(momentNow.toLocaleDateString() + ' ' + momentNow.toLocaleTimeString());
    }, 10);
    var momentGen = new Date();
    $('.gentime').html(momentGen.toLocaleDateString() + ' ' + momentGen.toLocaleTimeString() + ':' + momentGen.getMilliseconds());
});