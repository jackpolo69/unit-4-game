$(document).ready(function () {
    var currentTotal = 0;
    var wins = 0;
    var loses = 0;
    var randomNumber = randomNumberGenerator();

    crystalGenerator()
    updateScreen()
    // functions go here
    function randomNumberGenerator() {
        return Math.floor(Math.random() * 120) + 19
    }

    function crystalGenerator() {
        var buttons = $(".crystal-btn")
        for (var i = 0; i < buttons.length; i++) {
            $(buttons[i]).attr("data-value", Math.floor(Math.random() * 12) + 1)
        }
    }

    function buttonTest() {
        currentTotal += parseInt($(this).attr("data-value"))

        updateScreen()
        if (randomNumber === currentTotal) {
            alert("you win! click OK to play again")
            wins++
            // updateScreen()
            restartGame()
        } else if (currentTotal > randomNumber) {
            alert("it's a bust! click OK to play again")
            loses++
            // updateScreen()
            restartGame()
        }
    }

    function updateScreen() {
        $(".score").html(currentTotal)
        $(".random-number").html(randomNumber)

        $(".wins").html(wins)
        $(".loses").html(loses)

    }

    function restartGame() {
        randomNumber = randomNumberGenerator()
        currentTotal =0
        crystalGenerator()
        updateScreen()
    }

    $(".crystal-btn").on("click", buttonTest)
})
