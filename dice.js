let p1 = "p1";
        let p2 = "p2";

        function edit() {
            p1 = prompt("Change Player1 name");
            p2 = prompt("Change Player2 name");

            if (!p1 || !p2) {
                alert("Please enter valid name");
                return;
            }
            p1 = p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase();
            p2 = p2.charAt(0).toUpperCase() + p2.slice(1).toLowerCase();
            document.querySelector("p.p1").textContent = p1;
            document.querySelector("p.p2").textContent = p2;
        }

        function roll() {
            let d1 = document.querySelector(".img1");
            let d2 = document.querySelector(".img2");

            d1.setAttribute("src", "diceroll.gif");
            d2.setAttribute("src", "diceroll.gif");

            let ans = document.querySelector("h1");
            setTimeout(() => {
                let r1 = Math.floor(Math.random() * 6) + 1;
                let r2 = Math.floor(Math.random() * 6) + 1;

                d1.setAttribute("src", "dice" + r1 + ".png");
                d2.setAttribute("src", "dice" + r2 + ".png");

                if (r1 === r2)
                    ans.innerHTML = "Draw!!";
                else if (r1 < r2)
                    ans.innerHTML = (p2 + " Wins!!");
                else
                    ans.innerHTML = (p1 + " Wins!!");
            }, 3000);
        }