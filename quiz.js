const questions = [
    {
        question: "Arek ma 25 lat, brak występujących schorzeń, które eliminują z bycia dawcą, jest uzależniony od alkoholu.",
        answers: { a: "Arek MOŻE zostać dawcą", b: "Arek NIE MOŻE zostać dawcą" },
        correct: "b",
        explanation: "Arek nie może zostać dawcą z powodu uzależnienia od alkoholu."
    },
    {
        question: "Ania ma 35 lat, jest w ciąży, nie choruje na żadne choroby.",
        answers: { a: "Ania MOŻE zostać dawcą", b: "Ania NIE MOŻE zostać dawcą" },
        correct: "b",
        explanation: "Ciąża bezwzględnie dyskwalifikuje dawcę na ok. 1,5 roku."
    },
    {
        question: "Dawid jest zdrowym, 25 letnim mężczyzną, 3 tygodnie temu zrobił sobie tatuaż.",
        answers: { a: "Dawid MOŻE zostać dawcą", b: "Dawid NIE MOŻE zostać dawcą" },
        correct: "b",
        explanation: "Tatuaże, zabiegi operacyjne, piercingi dyskwalifikują z zostania dawcą czasowo na okres 6 miesięcy."
    },
    {
        question: "Marta ma 27 lat, brak problemów zdrowotnych, jest wegetarianką.",
        answers: { a: "Marta MOŻE zostać dawcą", b: "Marta NIE MOŻE zostać dawcą" },
        correct: "a",
        explanation: "Wegetarianizm nie dyskwalifikuje z bycia dawcą."
    },
    {
        question: "Piotr ma 40 lat, jest zdrowy, ale ma nadwagę (BMI powyżej 40).",
        answers: { a: "Piotr MOŻE zostać dawcą", b: "Piotr NIE MOŻE zostać dawcą" },
        correct: "b",
        explanation: "Nadwaga (BMI powyżej 40) może być przeszkodą w zostaniu dawcą."
    },
    {
        question: "Julia ma 19 lat, jest zdrowa i regularnie oddaje krew.",
        answers: { a: "Julia MOŻE zostać dawcą", b: "Julia NIE MOŻE zostać dawcą" },
        correct: "a",
        explanation: "Julia może zostać dawcą, oddawanie krwi nie dyskwalifikuje z bycia dawcą szpiku."
    }
];

let currentQuestion = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerAElement = document.getElementById('answerA');
    const answerBElement = document.getElementById('answerB');
    const explanationElement = document.getElementById('explanation');

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    answerAElement.textContent = question.answers.a;
    answerBElement.textContent = question.answers.b;
    explanationElement.style.display = 'none';
}

function answer(selectedAnswer) {
    const question = questions[currentQuestion];
    const explanationElement = document.getElementById('explanation');

    if (selectedAnswer === question.correct) {
        explanationElement.textContent = "Poprawna odpowiedź!";
    } else {
        explanationElement.textContent = question.explanation;
    }

    explanationElement.style.display = 'block';

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 3000); // Wyświetl następne pytanie po 3 sekundach
    } else {
        setTimeout(() => {
            explanationElement.textContent = "Quiz zakończony!";
        }, 3000);
    }
}

// Pokaż pierwsze pytanie
showQuestion();
