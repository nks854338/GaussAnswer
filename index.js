let score = document.querySelector(".score");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let digit_1 = document.querySelector(".digit_1");
let digit_2 = document.querySelector(".digit_2");
let operator = document.querySelector(".operator");
let operators = Math.floor(Math.random() * 4);
digit_1.innerText = Math.floor(Math.random() * 10);
digit_2.innerText = Math.floor(Math.random() * 10);

function getOperator() {
    if (operators == 0) {
        operator.innerText = "+";
    } else if (operators == 1) {
        operator.innerText = "-";
    } else if (operators == 2) {
        operator.innerText = "*";
    } else if (operators == 3) {
        operator.innerText = "/";
    }
}

getOperator()

submit.addEventListener('click', () => {
    function getAnswer() {
        let answer;
        const num1 = parseInt(digit_1.innerText);
        const num2 = parseInt(digit_2.innerText);

        if (operators == 0) {
            answer = num1 + num2;
        } else if (operators == 1) {
            answer = num1 - num2;
        } else if (operators == 2) {
            answer = num1 * num2;
        } else if (operators == 3) {
            answer = num1 / num2;
        }
        return answer;
    }

    const correctAnswer = getAnswer();

    let scoreBox = parseInt(score.innerText); // Parse score to integer
    if (parseInt(input.value) === correctAnswer) { // Parse input value to integer
        scoreBox++;
        input.value = "";
    } else {
        scoreBox--;
        input.value = "";
    }
    score.innerText = scoreBox;
    digit_1.innerText = Math.floor(Math.random() * 10);
    digit_2.innerText = Math.floor(Math.random() * 10);
    operators = Math.floor(Math.random() * 4);
    getOperator(); // Call to update operator after resetting
})
