let D = new Date()
let Month = D.getMonth()
let Day = D.getDate()
let year = D.getFullYear()
let fulDate = Day + "-" + Month+"-"+year
document.querySelector("#time").innerHTML = fulDate
function Quizz(){
    const QuestionAns = document.querySelector('input[name="Q1"]:checked')
    const QuestionAnsO = document.querySelector('input[name="Q2"]:checked').value
    const QuestionAnsT = document.querySelector('input[name="Q3"]:checked').value
    const QuestionAnsTh = document.querySelector('input[name="Q4"]:checked').value
    const QuestionAnsFo = document.querySelector('input[name="Q5"]:checked').value
    const QuestionAnsFi = document.querySelector('input[name="Q6"]:checked').value
    const QuestionAnsSi = document.querySelector('input[name="Q7"]:checked').value
    const QuestionAnsSe = document.querySelector('input[name="Q8"]:checked').value
    const QuestionAnsEi = document.querySelector('input[name="Q9"]:checked').value
    const QuestionAnsNi = document.querySelector('input[name="Q10"]:checked').value
    let c = 0
     if (QuestionAns == "Joshua" ) {c++}
     if (QuestionAnsO == "Amala " ) {c++ }
     if (QuestionAnsT == "1984" ) {c++}
     if (QuestionAnsTh == "Friends" ) {c++ }
     if (QuestionAnsFo == "blue" ) {c++}
     if (QuestionAnsFi == "Math" ) {c++ }
     if (QuestionAnsSi == "Rihanna" ) {c++}
     if (QuestionAnsSe == "Onepice" ) {c++ }
     if (QuestionAnsEi == "Canada" ) {c++}
     if (QuestionAnsNi == "Dog" ) {c++ }
     let G = c
     if (G < 5 ) {
         alert("do you even know me " + G);
     }
}



