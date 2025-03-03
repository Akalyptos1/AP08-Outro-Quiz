const quizData = [
    { question: "What is the primary function of the structure shown?", image: "https://i.imgur.com/SHPhuF1.png", options: ["Primarily supports the Earth", "Primarily supports flexion of the thoracic spine", "Primarily supports the skull", "Primarily allows for rotational movement of the head"], answer: "Primarily supports the skull" },
    { question: "Identify the structure shown:", image: "https://i.imgur.com/gFonko5.png", options: ["Atypical Lumbar vertebrae", "Atypical thoracic vertebrae", "Typical thoracic vertebrae", "Typical cervical vertebrae"], answer: "Typical thoracic vertebrae" },
    { question: "Which sentence correctly describes the indicated passage and what anatomical structure passes through it?", image: "https://i.imgur.com/EJX5GaL.png", options: ["Intervertebral foramen allowing the cranial nerve IV to pass", "Intervertebral foramen allowing the spinal cord to pass", "Transverse foramen allowing the spinal cord to pass", "Transverse foramen allowing the cranial nerve IV to pass"], answer: "Intervertebral foramen allowing the spinal cord to pass" },
    { question: "Identify the indicated structure:", image: "https://i.imgur.com/vf5ClmN.png", options: ["Sacral promontory", "Sacral hiatus", "Anterior sacral foramina", "Superior articular process"], answer: "Sacral hiatus" },
    { question: "Identify the anatomical name for the indicated structures:", image: "https://i.imgur.com/JKPGnmw.png", options: ["Posterior sacral foramina", "Articular surface for lumbosacral joint", "Anterior sacral foramina", "Superior articular process"], answer: "Anterior sacral foramina" },
    { question: "Identify the indicated structure:", image: "https://i.imgur.com/0UCkUmP.png", options: ["Sacroiliac joint", "Intervertebral disc", "Zygapophyseal joint", "Anulus fibrosus"], answer: "Intervertebral disc" },
    { question: "Identify the indicated structure:", image: "https://i.imgur.com/AFK4sOr.png", options: ["Intervertebral disc", "Sacroiliac joint", "Anulus fibrosus", "Zygapophyseal joint"], answer: "Zygapophyseal joint" },
    { question: "Identify the ligament indicated by the arrow:", image: "https://i.imgur.com/Ab82OzS.png", options: ["Supraspinous ligament", "Ligament flavum", "Intervertebral disc", "Interspinous ligament"], answer: "Interspinous ligament" },
    { question: "Identify the muscle indicated by the arrow:", image: "https://i.imgur.com/ql4OHz4.png", options: ["Rhomboid major", "Rhomboid minor", "Laminous ligament", "Iliocostalis"], answer: "Rhomboid major" },
    { question: "Identify the muscle indicated by the arrow:", image: "https://i.imgur.com/6UD8k2m.png", options: ["Interspinous ligament", "Latissimus dorsi", "Trapezius", "Longissimus"], answer: "Trapezius" },
    { question: "Identify the muscle indicated below:", image: "https://i.imgur.com/LxdEi3j.jpg", options: ["Suspenders", "Laminous ligament", "Iliocostalis", "Longissimus"], answer: "Iliocostalis" },
    { question: "Identify the muscle indicated below:", image: "https://i.imgur.com/9vGkEcZ.jpg", options: ["Iliocostalis", "Ligament flavum", "Latissimus dorsi", "Longissimus"], answer: "Longissimus" },
    { question: "Identify the indicated structure:", image: "https://i.imgur.com/EoX9Qlw.png", options: ["Anterior sacral foramina", "Sacral Hiatus", "Posterior sacral foramina", "Superior articular process"], answer: "Superior articular process" }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const optionsList = document.getElementById("options-list");
const finalScoreElement = document.getElementById("final-score");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(quizData);

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        questionElement.textContent = "Well done! You have completed the quiz.";
        optionsList.innerHTML = "";
        questionImage.style.display = "none";
        finalScoreElement.textContent = `Your final score is ${score}/${quizData.length}.`;
        finalScoreElement.style.display = "block";
        return;
    }
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image;
    optionsList.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(li, currentQuestion.answer);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption.textContent === correctAnswer) {
        selectedOption.classList.add("correct");
        score++;
    } else {
        selectedOption.classList.add("incorrect");
    }
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

loadQuestion();
