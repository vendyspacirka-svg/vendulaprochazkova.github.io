const quizData = [
  {
    question: "Vyber zvíře!",
    answers: ["Pes", "Kočka", "Vydra", "TULEN!!"]
  },
  {
    question: "Co rád děláš?",
    answers: ["Film", "Procházka", "Hraní her", "Jídlo"]
  },
  {
    question: "Vyber barvu!",
    answers: ["Červená", "Růžová", "Černá", "Modrá"]
  },
  {
    question: "Tvůj oblibený žánr?",
    answers: ["sci-fi", "horror", "comedy", "romantika"]
  },
  {
    question: "Tvoje love language?",
    answers: ["physical touch", "gift giving", "quality time", "násilí"]
  }
];

let currentQuestion = 0;

const quiz =document.getElementById("quiz");
constnextBtn = document.getElementById("nextBtn");
const final = document.getElementById("final");

function loadQuestion() {
    const q = quizData [currentQuestion]
    quiz.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = q.question;
    quiz.appendChild(h2);

    q.answers.forEach(answer =>{
        const div = document.createElement("div");
        div.className = "answer";
    div.textContent = answer;

    div.addEventListener("click", () => {
      nextBtn.disabled = false;
    });
    quiz.appendChild(div);
  });
  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinal();
  }
});

function showFinal() {
  quiz.classList.add("hidden");
  nextBtn.classList.add("hidden");

  final.innerHTML = `
    <h2>Haha!! tvůj výsledek je....</h2>
    <p>
      že můžeš dnešní Valentýn strávíš se mnou<br>
      <small>(jen pokud chceš hehe)</small>
    </p>

    <button class="choice-btn yes" onclick="yes()">JOO!!</button>
    <button class="choice-btn no" onclick="no()">Nope</button>
  `;

  final.classList.remove("hidden");
}

function yes() {
  final.innerHTML = "<h2>JOOO! lets go</h2>";
}

function no() {
  final.innerHTML = "<h2>au</h2>";
}

loadQuestion();