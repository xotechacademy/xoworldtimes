function toggleMenu(event) {
        document.getElementById('menu').classList.toggle('open');
        event.stopPropagation(); 
    }

    
    document.addEventListener('click', function(event) {
        var menu = document.getElementById('menu');
        var burgerMenu = document.querySelector('.burger-menu');
        if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
            menu.classList.remove('open');
        }
    });

        const zodiacSigns = [
            { name: "Bélier", dates: "21 mars - 19 avril", symbol: "♈" },
            { name: "Taureau", dates: "20 avril - 20 mai", symbol: "♉" },
            { name: "Gémeaux", dates: "21 mai - 20 juin", symbol: "♊" },
            { name: "Cancer", dates: "21 juin - 22 juillet", symbol: "♋" },
            { name: "Lion", dates: "23 juillet - 22 août", symbol: "♌" },
            { name: "Vierge", dates: "23 août - 22 septembre", symbol: "♍" },
            { name: "Balance", dates: "23 septembre - 22 octobre", symbol: "♎" },
            { name: "Scorpion", dates: "23 octobre - 21 novembre", symbol: "♏" },
            { name: "Sagittaire", dates: "22 novembre - 21 décembre", symbol: "♐" },
            { name: "Capricorne", dates: "22 décembre - 19 janvier", symbol: "♑" },
            { name: "Verseau", dates: "20 janvier - 18 février", symbol: "♒" },
            { name: "Poissons", dates: "19 février - 20 mars", symbol: "♓" }
        ];
        
        document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("quizModal");
    let startBtn = document.getElementById("startQuizBtn");

    
    modal.style.display = "flex";

    
    startBtn.addEventListener("click", function () {
        modal.style.display = "none";
        startTimer();
        loadQuestion();
    });
});

        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        function shuffleArray(arr) {
            return arr.sort(() => Math.random() - 0.5);
        }

        const randomSign1 = getRandomElement(zodiacSigns);
        const randomSign2 = getRandomElement(zodiacSigns);
        const randomSign3 = getRandomElement(zodiacSigns);

        const questions = [
            { 
                type: "date", 
                text: `Quel est le signe du zodiaque pour cette date : ${randomSign1.dates.split(" - ")[0]} ?`, 
                choices: shuffleArray(zodiacSigns.map(z => z.name)), 
                answer: randomSign1.name
            },
            { 
                type: "sign", 
                text: `Quel est le symbole du signe ${randomSign2.name} ?`, 
                choices: shuffleArray(zodiacSigns.map(z => z.symbol)), 
                answer: randomSign2.symbol
            },
            { 
                type: "guess", 
                text: `Quel est le nom du signe suivant ? ${randomSign3.symbol}`, 
                choices: shuffleArray(zodiacSigns.map(z => z.name)), 
                answer: randomSign3.name
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let timer = 20;
        let timerInterval;
        
        function startTimer() {
            timerInterval = setInterval(() => {
                timer--;
                document.getElementById("timer").innerText = `Temps restant : ${timer}s`;
                if (timer <= 0) {
                    clearInterval(timerInterval);
                    displayResult();
                }
            }, 1000);
        }

        function loadQuestion() {
            if (currentQuestion < questions.length) {
                const questionData = questions[currentQuestion];
                document.getElementById("question").innerText = questionData.text;
                const buttonsContainer = document.getElementById("buttons-container");
                buttonsContainer.innerHTML = "";

                questionData.choices.forEach(choice => {
                    const button = document.createElement("button");
                    button.innerText = choice;
                    button.className = "btn btn-zodiac";
                    button.onclick = () => checkAnswer(choice);
                    buttonsContainer.appendChild(button);
                });
            } else {
                displayResult();
            }
        }

        function checkAnswer(answer) {
            if (answer === questions[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            loadQuestion();
        }

function displayResult() {
    clearInterval(timerInterval);
    document.getElementById("question").innerText = "";
    document.getElementById("buttons-container").innerHTML = "";
    document.getElementById("timer").style.display = "none";

    let resultContainer = document.getElementById("result");
let email = "xotechacademy@gmail.com";
let emailLink = `<a href="mailto:${email}">${email}</a>`;

let resultText = score === 3 ? 
    `Bravo ! Vous avez réussi les 3 questions. Votre calendrier personnalisé est prêt. Envoyez-nous cet interface en capture d'écran, une photo et votre nom (ou surnom) à ${emailLink}`
    : `Votre score final : ${score}/3.`;

resultContainer.innerHTML = resultText;

    if (score === 3) {
        let calendarImage = document.createElement("img");
        calendarImage.src = "media/calendar.jpg";
        calendarImage.alt = "Calendrier personnalisé";
        calendarImage.style.display = "block";
        calendarImage.style.marginTop = "15px";
        calendarImage.style.maxWidth = "100%";  

        resultContainer.appendChild(calendarImage);
    }
}

loadQuestion();
