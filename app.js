function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which cricketer had scored highest individual score in first-class cricket?", ["Don Bradman", "Brian Lara","Lane Hutton", "Gary Sobers"], "Brian Lara"),

    new Question("Which cricketer has taken most catches in ODI cricket", ["Yuvraj Singh", "Ricky Pointing","Mahela Jayawardene", "Jacques Kallis"], "Mahela Jayawardene"),
    

    new Question("Which cricketer had scored fastest century in Test cricket?", ["Vivian Richards", "Misbah-ul-Haq","Adam Gilchrist", "Brendon McCullum"], "Brendon McCullum"),
    

    new Question("Which cricketer had scored most test runs in a calendar year?", ["Mohamed Yusuf", "Rahul Dravid","V. V. S. Laxman", "Steve Waugh"], "Mohamed Yusuf"),

    new Question("First Indian cricketer who had taken hat-trick wicket in Test cricket?", ["Irfan Pathan", "Harbhajan Singh","Kapil Dev", "Anil Kumble"], "Harbhajan Singh"),
    
    new Question("Which team has never won the IPL tournament?", ["Chennai Super Kings", "Sunrisers Hyderabad","Rajasthan Royals", "Royal Challengers Bangalore"], "Royal Challengers Bangalore"),

];
var quiz = new Quiz(questions);
populate();