var num = document.querySelectorAll(".button").length;

for (var j = 0; j < num; j++) {
    document.querySelectorAll(".button")[j]
        .addEventListener("click", function () {
            var b = this.innerHTML;
            sound(b);
        }
        );
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
}
);

function sound(key) {
    switch (key) {
        case "a":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;

        case "s":
            var sound2 = new Audio("sounds/kick-bass.mp3");
            sound2.play();
            break;

        case "d":
            var sound3 = new Audio('sounds/snare.mp3');
            sound3.play();
            break;

        case "f":
            var sound4 = new Audio('sounds/tom-1.mp3');
            sound4.play();
            break;

        case "g":
            var sound5 = new Audio('sounds/tom-2.mp3');
            sound5.play();
            break;

        case "h":
            var sound6 = new Audio('sounds/tom-3.mp3');
            sound6.play();
            break;


        default: console.log(key);
    }
}
