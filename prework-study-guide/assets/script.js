var topic = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topic[Math.floor(Math.random()*topic.length)];
function listTopic() {
    for (var x=0; x < topic.length; x++) {
        console.log(topic[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (randomTopic=== 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}

console.log("Here are the topics we learned through Prework")
listTopic();
console.log("Which topic should we study first?")
selectTopic();

/*for (var x = 0; x < topic.length; x++) {
    if (topic[x] === "HTML" || topic[x]  === "CSS" || topic[x] === "Git" || topic[x] === "JavaScript") {
        console.log(topic[x]);
    } else {
        console.log('Please try again!');
    }
}
*/

/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/