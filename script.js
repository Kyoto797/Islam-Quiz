let questions = [
    { q: "Month of fasting?", options: ["A. Ramadan", "B. Hajj", "C. Eid", "D. Zakat"], answer: "A" },
    { q: "Holy book of Islam?", options: ["A. Bible", "B. Torah", "C. Quran", "D. Psalms"], answer: "C" },
    { q: "First pillar of Islam?", options: ["A. Salah", "B. Zakat", "C. Shahada", "D. Hajj"], answer: "C" },
    { q: "How many daily prayers?", options: ["A. 3", "B. 5", "C. 6", "D. 7"], answer: "B" },
    { q: "Direction of prayer (Qibla)?", options: ["A. North", "B. East", "C. Kaaba", "D. West"], answer: "C" },
    { q: "Angel of revelation?", options: ["A. Jibril", "B. Mika'il", "C. Israfil", "D. Azrael"], answer: "A" },
    { q: "What is Zakat?", options: ["A. Charity", "B. Prayer", "C. Fasting", "D. Pilgrimage"], answer: "A" },
    { q: "What is the Eid after Ramadan called?", options: ["A. Eid al-Fitr", "B. Eid al-Adha", "C. Mawlid", "D. Ramadan"], answer: "A" },
    { q: "Where was Prophet Muhammad born?", options: ["A. Medina", "B. Mecca", "C. Jerusalem", "D. Baghdad"], answer: "B" },
    { q: "How many pillars of Islam are there?", options: ["A. 3", "B. 5", "C. 6", "D. 4"], answer: "B" },
    { q: "What is the fasting month called?", options: ["A. Muharram", "B. Ramadan", "C. Shawwal", "D. Dhul-Hijjah"], answer: "B" },
    { q: "Which prophet built the Kaaba?", options: ["A. Ibrahim", "B. Musa", "C. Isa", "D. Nuh"], answer: "A" },
    { q: "Which day is weekly Jummah prayer?", options: ["A. Friday", "B. Sunday", "C. Saturday", "D. Thursday"], answer: "A" },
    { q: "What is Hajj?", options: ["A. Pilgrimage", "B. Prayer", "C. Charity", "D. Fasting"], answer: "A" },
    { q: "Which is the first month in Islamic calendar?", options: ["A. Muharram", "B. Safar", "C. Ramadan", "D. Shawwal"], answer: "A" },
    { q: "What is the meaning of 'Islam'?", options: ["A. Peace", "B. Submission to God", "C. Charity", "D. Prayer"], answer: "B" },
    { q: "Who is the last prophet in Islam?", options: ["A. Musa", "B. Isa", "C. Muhammad", "D. Ibrahim"], answer: "C" },
    { q: "What is Salah?", options: ["A. Fasting", "B. Prayer", "C. Charity", "D. Pilgrimage"], answer: "B" },
    { q: "What is the capital of Saudi Arabia?", options: ["A. Mecca", "B. Medina", "C. Riyadh", "D. Jeddah"], answer: "C" },
    { q: "What is the pilgrimage to Mecca called?", options: ["A. Umrah", "B. Hajj", "C. Ramadan", "D. Eid"], answer: "B" },
];

// Shuffle questions function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

questions = shuffle(questions); // Shuffle questions at start

let current = 0;
let score = 0;
let timeLeft = 10;
let timer;

function loadQuestion() {
    if(current >= questions.length) {
        document.getElementById("question").innerText = "🏁 Quiz Finished! Your score: " + score;
        document.getElementById("btnA").style.display = "none";
        document.getElementById("btnB").style.display = "none";
        document.getElementById("btnC").style.display = "none";
        document.getElementById("btnD").style.display = "none";
        document.getElementById("timer").style.display = "none";
        return;
    }

    const q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.getElementById("btnA").innerText = q.options[0];
    document.getElementById("btnB").innerText = q.options[1];
    document.getElementById("btnC").innerText = q.options[2];
    document.getElementById("btnD").innerText = q.options[3];
    document.getElementById("result").innerText = "";

    // Set timer per question
    if(current < 5) timeLeft = 10;       
    else if(current < 10) timeLeft = 15;  
    else timeLeft = 20;                  

    document.getElementById("timer").innerText = "Time: " + timeLeft;
    clearInterval(timer);
    timer = setInterval(countdown, 1000);
}

function countdown() {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft;
    if(timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("result").innerText = "⏰ Time's up! Correct: " + questions[current].answer;
        current++;
        setTimeout(loadQuestion, 1500);
    }
}

function checkAnswer(choice) {
    clearInterval(timer);
    const correct = questions[current].answer === choice;
    if(correct) {
        document.getElementById("result").innerText = "✅ Correct!";
        score++;
    } else {
        document.getElementById("result").innerText = "❌ Wrong! Correct: " + questions[current].answer;
    }
    current++;
    setTimeout(loadQuestion, 1000);
}

loadQuestion();