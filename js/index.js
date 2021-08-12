const selected = document.querySelectorAll(".icn");
const number = document.querySelector(".number");
const arr = ["scissors", "paper", "rock", "lizard", "spock"];
const score = 3;
localStorage.score;
if (localStorage.score === undefined || Number(localStorage.score) <= 0) {
    localStorage.score = score;
}

document.getElementById("Restart").addEventListener("click", function () {
    document.getElementById("spanClone").classList.add("clone");

    setTimeout(() => {
        document.getElementById("spanClone").classList.remove("clone");

        document.querySelector(".sec-2").style.display = "block";

        document.querySelector(".sec-4").style.display = "none";

        localStorage.score = score;

        number.innerText = localStorage.score;

    }, 1000);
})

number.innerText = localStorage.score;
document.getElementById("rBtn").addEventListener("click", function () {
    if (!document.querySelector("aside").classList.contains("show")) {
        document.querySelector("aside").classList.add("show");
        document.querySelector("main").classList.add("opacity");
    } else {
        document.querySelector("aside").classList.remove("show");
        document.querySelector("main").classList.remove("opacity");
    };
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector("aside").classList.remove("show");
    document.querySelector("main").classList.remove("opacity");
});

function runCheck() {
    if (localStorage.score == 0) {
        document.querySelector(".third").innerHTML = "<p>YOU LOSE</p>";

        setTimeout(() => {
            document.querySelector(".sec-3").style.display = "none";

            document.querySelector(".sec-4").style.display = "block";
        }, 4000);
    } else {
        document.querySelector(".third").innerHTML = "<p>YOU LOSE</p><button type='button' class='replay'>Play Again</button>";
    }
}

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", function () {
        if (!document.querySelector("aside").classList.contains("show")) {
            let selection = selected[i].getAttribute("data-selected");

            let icon1 = document.createElement("div");
            icon1.classList.add("icon");
            icon1.classList.add(`icon-${selection}`);
            icon1.innerHTML = `<div class="bg-inner"><img src="images/icon-${selection}.svg" class="icon-img" alt="Icon"></div>`;

            document.querySelector(".sec-2").style.display = "none";
            document.querySelector(".sec-3").style.display = "block";
            document.querySelector(".a").appendChild(icon1);

            let random = Math.floor((Math.random() * 5));
            
            var text = arr[random];

            let icon2 = document.createElement("div");
            icon2.classList.add("icon");
            icon2.classList.add(`icon-${text}`);
            icon2.innerHTML = `<div class="bg-inner"><img src="images/icon-${text}.svg" class="icon-img" alt="Icon"></div>`;
        
            document.querySelector(".b").appendChild(icon2);

            switch (selection) {

                case "scissors":
                    if ((text === "paper") || (text === "lizard")) {
                        document.querySelector(".a").classList.add("gradient");

                        document.querySelector(".third").innerHTML = "<p>YOU WIN</p><button type='button' class='replay'>Play Again</button>";
                        localStorage.score = Number(localStorage.score) + 1;
                        } else if ((text === "rock") || (text === "spock")) {
                        document.querySelector(".b").classList.add("gradient");
                        localStorage.score = Number(localStorage.score) - 1;
                        runCheck();
                        } else {
                        document.querySelector(".third").innerHTML = "<p>IT'S A TIE</p><button type='button' class='replay'>Play Again</button>";
                        };
                    break;

                case "paper":
                    if ((text === "rock") || (text === "spock")) {
                        document.querySelector(".a").classList.add("gradient");
                        document.querySelector(".third").innerHTML = "<p>YOU WIN</p><button type='button' class='replay'>Play Again</button>";
                        localStorage.score = Number(localStorage.score) + 1;
                        } else if ((text === "scissors") || (text === "lizard")) {
                        document.querySelector(".b").classList.add("gradient");
                        localStorage.score = Number(localStorage.score) - 1;
                        runCheck();
                        } else {
                        document.querySelector(".third").innerHTML = "<p>IT'S A TIE</p><button type='button' class='replay'>Play Again</button>";
                        };
                    break;
                
                case "rock":
                    if ((text === "lizard") || (text === "scissors")) {
                        document.querySelector(".a").classList.add("gradient");
                        document.querySelector(".third").innerHTML = "<p>YOU WIN</p><button type='button' class='replay'>Play Again</button>";
                        localStorage.score = Number(localStorage.score) + 1;
                        } else if ((text === "paper") || (text === "spock")) {
                        document.querySelector(".b").classList.add("gradient");
                        localStorage.score = Number(localStorage.score) - 1;
                        runCheck();
                        } else {
                        document.querySelector(".third").innerHTML = "<p>IT'S A TIE</p><button type='button' class='replay'>Play Again</button>";
                        };
                    break;

                case "lizard":
                    if ((text === "spock") || (text === "paper")) {
                        document.querySelector(".a").classList.add("gradient");
                        document.querySelector(".third").innerHTML = "<p>YOU WIN</p><button type='button' class='replay'>Play Again</button>";
                        localStorage.score = Number(localStorage.score) + 1;
                        } else if ((text === "rock") || (text === "scissors")) {
                        document.querySelector(".b").classList.add("gradient");
                        localStorage.score = Number(localStorage.score) - 1;
                        runCheck();
                        } else {
                        document.querySelector(".third").innerHTML = "<p>IT'S A TIE</p><button type='button' class='replay'>Play Again</button>";
                        };
                    break;

                case "spock":
                    if ((text === "scissors") || (text === "rock")) {
                        document.querySelector(".a").classList.add("gradient");
                        document.querySelector(".third").innerHTML = "<p>YOU WIN</p><button type='button' class='replay'>Play Again</button>";
                        localStorage.score = Number(localStorage.score) + 1;
                        } else if ((text === "lizard") || (text === "paper")) {
                        document.querySelector(".b").classList.add("gradient");
                        localStorage.score = Number(localStorage.score) - 1;
                        runCheck();
                        } else {
                        document.querySelector(".third").innerHTML = "<p>IT'S A TIE</p><button type='button' class='replay'>Play Again</button>";
                        };
                    break;

                default:
                
                    break;
            }
        
            number.innerText = localStorage.score;

            if (document.querySelector(".replay")) {
                document.querySelector(".replay").addEventListener("click", function () {
                    document.querySelector(".a").removeChild(icon1);
                    document.querySelector(".b").removeChild(icon2);
                    document.querySelector(".sec-2").style.display = "block";
                    document.querySelector(".sec-3").style.display = "none";
                    if (document.querySelector(".a").classList.contains("gradient")) {
                        document.querySelector(".a").classList.remove("gradient");
                    }
                    if (document.querySelector(".b").classList.contains("gradient")) {
                        document.querySelector(".b").classList.remove("gradient");
                    }
                });
            }
        } else {
            return false;
        }
    })
};
