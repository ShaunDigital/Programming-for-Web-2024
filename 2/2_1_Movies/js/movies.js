const myMovieArray = ["Back to the Future" , " Ferris Bueller's Day Off" , " E.T." , " Dune" , " Labyrinth"];
myMovieArray.push(window.prompt("What is your favorite 80's movie?"));
console.log(myMovieArray);
document.getElementById("favmovies").innerHTML = myMovieArray.toString();