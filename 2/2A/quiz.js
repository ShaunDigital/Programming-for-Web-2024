
const questions = [
 { question: "What is the only platinum selling jazz record?" , answer: " Miles Davis' Kind of Blue" },
 { question: "Who is the most well known trumpet player in the jazz swing era?", answer: " Louis Armstrong" },
 { question: "What style of jazz did Sax player Charlie Parker invent?", answer: " Bebop" },
 { question: "How old was drummer Tony Williams when he joined Miles Davis' band?", answer: " 17" },
 { question: "What bass player changed the world of jazz with his debut album in 1976?", answer: " Jaco Pastorius" },
 { question: "Who wrote the song, Take the A train", answer: "Duke Ellington" },
 { question: "What is widely considered the first electric jazz album", answer: " Bitches Brew by MIles Davis" },
 { question: "What jazz band scored a chart topping hit with the song Birdland?", answer: " Weather Report" },
 { question: "Portland native Esperanza Spalding is a jazz virtuoso of the upright and electric versions of what stringed instrument also played by Flea and Stanley Clarke?", answer: "Bass" },
 { question: "What city is considered the birthplace of jazz?", answer: "New Orleans" },
 { question: "Who is sometimes referred to as the Queen of Jazz?", answer: "Ella Fitzgerald" },
 { question: "According to scientists, what part of the brain do jazz musicians turn on when they improvise?", answer: "Prefrontal Cortex" },
];


console.log(questions);
const randomQuestion = Math.round(Math.random() * questions.length - 1);
const promptResponse = window.prompt("Welcome to my Jazz Quiz. \n Lets see if you are a Jazz fan. "  + questions[randomQuestion].question);
window.alert("You answered " + promptResponse + " the correct answer is " + questions[randomQuestion].answer );
