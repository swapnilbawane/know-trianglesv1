
//-------------------START All query Selectors------------------------------- 

formData = document.querySelector(".form-data");

btnQuiz = document.querySelector("#btn-quiz"); 

outputMessage = document.querySelector("#output-message");

results = document.querySelector("#results"); 

quizLinkDeco = document.querySelector("#quizLink"); 

//-------------------OVER------------------------------- 





//----------------START All variable declaration-----------------------------------

let score = 0;
let answerTally = 0; 
const correctAnswers = ["90°","Right angled triangle" ]; 

//----------------OVER----------------------------------- 





//----------------START All function declaration-----------------------------------


// ***************FUNCTION #1: take note if all questions answered or some or none.
function checkEntries() { 
    let formResultsC = new FormData(formData);
    for (let value of formResultsC.values()) {
        
        answerTally++;
    }
   
    return answerTally; 
}

// if no questions are answered, answerTally will be incremented and its value will be equal to the answers.length 
// if some questions are answered answerTally will be incremented and its value will be greater than 0 and less than answers.length - then score should not be calculated. Show then to complete all questions 
// if all questions are answered, it will never enter the if loop and answerTally will be 0 as initialized. 


// ***************Function #2: checking if no answer then displaying message.
function noAnswerMessage() { 
    outputMessage.style.display = "block";
    outputMessage.innerText = "Hey you did not enter any answers? Please select option and complete quiz to find your score and see results."; 
}

// ***************Function #3: showing scores if all radio buttons clicked. 
function showOutput(scoreGiven) {
    outputMessage.style.display = "block";
    outputMessage.innerText = "Your score is "+ scoreGiven; 
}

// ***************Function #4: showing if all or some questions correct or incorrect and showing right answers if all radio buttons clicked. 
function displayResults(score) 
{
    results.style.display = "block"; 
    console.log(typeof(correctAnswers.length));
    if( score===0 ) 
    { 
        results.innerText = "Oops. Both the answers were incorrect. The correct answers are are Answer 1: 90 degrees. | Answer 2: Right Angled triangle.";
    }
    else if (score<correctAnswers.length )
    { 
        results.innerText = "Oops. One of the answer was incorrect. The correct answers are are Answer 1: 90 degrees. | Answer 2: Right Angled triangle.";  
    }
    else 
    { 
        results.innerText = " Yay. You answered all correctly.";
    }
}

function resetValues() {
    score=0;
    answerTally = 0; 
}

// Submit function calls this function 
function calcScore() { 

    let index = 0; // index allows to add index values to answers array. 

    // getting formData 
    const formResults = new FormData(formData);

    // calculating scores based on any or no questions answered by default runs. 
    // This is run by default even if no questions or some questions are answered. We can add a condition that if answer tally is less or zero then what to do? 


    // take note of if all questions answered or some or none.
    let questionNotAnsweredTally = checkEntries();  

    // SCORES IMPLEMENTATION:: 
    // Show scores should be based on if all questions are attempted or left out or no questions attempted. 
     // if no questions are answered, answerTally will be incremented and its value will be equal to the answers.length 
     // if some questions are answered, answerTally will be incremented but its value will be less than answers.length 
     // if all questions are answered, it will never enter the if loop and answerTally will be 0 as initialized. 

    if ( questionNotAnsweredTally === 0)
    { 
        noAnswerMessage(); 
    }

    else 
    if ( questionNotAnsweredTally < correctAnswers.length) 
    { // if some questions are answered noAnswerTally will be incremented and its value will be greater than 0 and less than answers.length - then score should not be calculated. Show then to complete all questions 
        answerTally = 0; 
        outputMessage.style.display = "block";   
        outputMessage.innerText = "Oops. You attempted only some questions. Please attempt all questions to see answers.";
        // Here noAnswerTally had to be reset to 0 because even after clicking submit button the value stayed as it is. It caused an error where if we click multiple times then the noAnswerTally count would be added to the next iteration. Resetting the value meant it is not carried forward from previous submit button submission. 
    } 
    else 
    {   // All questions answered. Show scores and display correct results. 
        // show score
        // show button
        // on click button show results in p
        for (let value of formResults.values())
        { 
           
            if(value===correctAnswers[index]) 
            {           
                score++; 
            } 
            
            index++; 
            
        }  
        showOutput(score);
        displayResults(score);
        resetValues(); // to avoid scores being incremented without refreshing the page. 

    }

    


} 



//----------------OVER-----------------------------------


// Actual clicking submit button 
quizLinkDeco.style.textDecoration = "underline";
quizLinkDeco.style.color = "white";
btnQuiz.addEventListener("click",calcScore); 