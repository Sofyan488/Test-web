const questions = [
  { question: "What is the main tag used to define the structure of an HTML document? (Note: HTML Level #1 for 1-5)", answers: ["<head>", "<html>", "<div>", "<body>"], correct: 1 },
  { question: "Which tag is used to create a hyperlink in HTML?", answers: ["<link>", "<url>", "<a>", "<href>"], correct: 2 },
  { question: "Which tag is used to display a heading in HTML?", answers: ["<p>", "<title>", "<header>", "<h1>"], correct: 3 },
  { question: "Which tag is used to create an ordered list?", answers: ["<ol>", "<list>", "<li>", "<ul>"], correct: 0 },
  { question: "How do you add an image in HTML?", answers: ["<photo>", "<image>", "<img>", "<picture>"], correct: 2 },
  { question: "What attribute specifies the destination URL of a hyperlink?(Note: HTML Level #2 for 6-10)", answers: ["src", "href", "url", "link"], correct: 1 },
  { question: "Which HTML element is used to define a table row?", answers: ["<row>", "<td>", "<table-row>", "<tr>"], correct: 3 },
  { question: "What does the &lt;title&gt; tag define in an HTML document?", answers: ["The footer", "The page title", "A heading", "A paragraph"], correct: 1 },
  { question: "What is the correct way to specify an email link?", answers: ["<mail:example@example.com>", "<a href='mailto:example@example.com'>", "<email>example@example.com</email>", "<a href='email:example@example.com'>"], correct: 1 },
  { question: "Which tag is used to embed a video in HTML5?", answers: ["<media>", "<video>", "<movie>", "<embed>"], correct: 1 },
  { question: "What does the <meta> tag do in an HTML document?(Note: HTML Level #3 for 11-15)", answers: ["Defines a navigation bar", "Defines an image", "Creates a table", "Provides metadata about the document"], correct: 3 },
  { question: "Which attribute is used to define a unique identifier for an HTML element?", answers: ["class", "key", "id", "name"], correct: 2 },
  { question: "What is the purpose of the &lt;figure&gt; and &lt;figcaption&gt; tags in HTML5?", answers: ["To define a header and footer", "To add metadata", "To group media content and provide a caption", "To create a table"], correct: 2 },
  { question: "Which attribute is used to specify inline CSS styles for an element?", answers: ["class", "style", "css", "inline"], correct: 1 },
  { question: "What is the difference between &lt;strong&gt; and &lt;b&gt; tags in HTML?", answers: [
    "<b> adds emphasis, while <strong> doesn't.",
    "<b> is for italic text, and <strong> is for bold text.",
    "They both make text bold, but <strong> also conveys importance.",
    "There is no difference."
  ], correct: 2 },
];

  

const quizCount = document.getElementById('quiz');
const resultCount = document.getElementById('result');
let score = 0;

function loadQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        
        const answersDiv = document.createElement('div');
        answersDiv.classList.add('answers');

        q.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(index, i, button));
            answersDiv.appendChild(button);
        });

        questionDiv.appendChild(answersDiv);
        quizCount.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, answerIndex, button) {
    const isCorrect = questions[questionIndex].correct === answerIndex;
    if (isCorrect) {
        button.style.backgroundColor = 'green';
        score++;
    } else {
        button.style.backgroundColor = 'red';
    }

    Array.from(button.parentNode.children).forEach(btn => btn.disabled = true);

    if (questionIndex === questions.length - 1) {
        showResult();
    }
}

function showResult() {
    resultCount.textContent = `لقد أجبت على ${score} من ${questions.length} إجابة صحيحة!`;
}

loadQuiz();
