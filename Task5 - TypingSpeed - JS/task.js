$(function () {
    $('textarea')
        .keyup(checkSpeed);
});

var initialTime = null;

function checkSpeed() {
    if (initialTime === null) {
        initialTime = new Date().getTime();
    }

    const currentTime = new Date().getTime();
    const totalTimeInMin = (currentTime - initialTime) / 60000;
    const numberOfKeysPressed = $('textarea').val().length;
    const numberOfWords = $('textarea').val().trim().split(/\s/).length;
    const characterPerMinutes = Math.round(numberOfKeysPressed / totalTimeInMin, 2);
    $('#speed').html(characterPerMinutes);
    $('#speed1').html(Math.round(numberOfWords / totalTimeInMin, 2));
}

/*
    Prevent the form from submitting
*/
document.getElementById('fake-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Yes you clicked');
})