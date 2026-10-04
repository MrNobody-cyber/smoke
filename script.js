/* =====================================================
   KENENI SURPRISE WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       LOADER
    ================================================= */

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 1300);


    /* =================================================
       PAGE SYSTEM
    ================================================= */

    const pages = document.querySelectorAll(".page");


    window.showPage = function (pageId) {

        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        const page =
            document.getElementById(pageId);

        if (page) {

            page.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };


    /* =================================================
       START
    ================================================= */

    window.startGame = function () {

        const music =
            document.getElementById("music");

        if (music) {

            music.volume = 0.3;

            music.play().catch(function () {
                console.log("Music waiting for permission.");
            });
        }

        showPage("puzzle1");

        createHeartBurst();
    };


    /* =================================================
       PUZZLE 1
    ================================================= */

    window.answer1 = function (answer) {

        const result =
            document.getElementById("answer1-result");

        if (answer === "D") {

            result.innerHTML =
                "✅ ACCESS GRANTED.<br><br>" +
                "Unfortunately, you know yourself too well. 😂❤️";

            setTimeout(function () {
                showPage("puzzle2");
            }, 2200);

        } else if (answer === "B") {

            result.innerHTML =
                "⚠️ Correct... but incomplete. 😂<br>" +
                "There is more to this woman.";

        } else if (answer === "C") {

            result.innerHTML =
                "🥹 Correct... but don't let her hear this too often.";

        } else {

            result.innerHTML =
                "❌ WRONG.<br>" +
                "Keneni has never been a normal human. 😂";

        }
    };


    /* =================================================
       PUZZLE 2
    ================================================= */

    window.answer2 = function (answer) {

        const result =
            document.getElementById("answer2-result");

        if (answer === "B") {

            result.innerHTML =
                "✅ EXACTLY.<br><br>" +
                "Caring on the outside... chaos somewhere inside. 😂";

            setTimeout(function () {
                showPage("photoPuzzle");
            }, 2300);

        } else if (answer === "D") {

            result.innerHTML =
                "Honestly... I can't prove you're wrong. 👽😂";

        } else if (answer === "A") {

            result.innerHTML =
                "😂 Nice try, Keneni.";

        } else {

            result.innerHTML =
                "❌ Completely harmless?<br>" +
                "That's the biggest lie on this website. 💀";

        }
    };


    /* =================================================
       PHOTO PUZZLE
       
       CHANGE THIS NUMBER IF YOUR FAVORITE
       PHOTO IS DIFFERENT.
       
       Currently photo 3 is the correct answer.
    ================================================= */

    const favoritePhoto = 3;


    window.guessPhoto = function (number) {

        const result =
            document.getElementById("photo-result");

        if (number === favoritePhoto) {

            result.innerHTML =
                "❤️ YOU GOT IT!<br><br>" +
                "Okay... maybe you know me better than I thought. 😭";

            createHeartBurst();

            setTimeout(function () {
                showPage("puzzle4");
            }, 2500);

        } else {

            result.innerHTML =
                "❌ Nope 😂<br>" +
                "Nice try... but that's not the one.";

        }
    };


    /* =================================================
       PERSONALITY PUZZLE
    ================================================= */

    window.personality = function (type) {

        const result =
            document.getElementById("personality-result");

        if (type === "care") {

            result.innerHTML =
                "❤️ Yep. This is the 'another mother' setting.<br>" +
                "Always checking if everyone is okay.";

        } else if (type === "chaos") {

            result.innerHTML =
                "😂 Finally, some honesty.";

        } else if (type === "funny") {

            result.innerHTML =
                "💀 Confirmed: professional comedian.";

        } else {

            result.innerHTML =
                "😭 EXACTLY.<br><br>" +
                "Caring + chaotic + funny = Keneni.";

            setTimeout(function () {
                showPage("puzzle5");
            }, 2300);
        }
    };


    /* =================================================
       FINAL PUZZLE
    ================================================= */

    window.finalAnswer = function (answer) {

        const result =
            document.getElementById("final-result");

        if (answer === "C") {

            result.innerHTML =
                "🔓 FINAL ANSWER ACCEPTED.<br><br>" +
                "Yes. Impossible to replace AND more annoying. 😂❤️";

            createHeartBurst();

            setTimeout(function () {
                showPage("reveal");
            }, 2500);

        } else if (answer === "A") {

            result.innerHTML =
                "❤️ Correct... but you forgot the annoying part.";

        } else {

            result.innerHTML =
                "😂 Sadly, being annoying is only part of the package.";

        }
    };


    /* =================================================
       FLOATING HEARTS
    ================================================= */

    function createFloatingHeart() {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const symbols = [
            "♡",
            "♥",
            "✦",
            "⋆"
        ];

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document
            .getElementById("heart-container")
            .appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 10000);
    }


    setInterval(function () {

        createFloatingHeart();

    }, 1200);


    /* =================================================
       HEART BURST
    ================================================= */

    window.createHeartBurst = function () {

        for (
            let i = 0;
            i < 30;
            i++
        ) {

            const heart =
                document.createElement("div");

            heart.innerHTML = "♥";

            heart.style.position = "fixed";

            heart.style.left = "50%";
            heart.style.top = "50%";

            heart.style.zIndex = "99999";

            heart.style.pointerEvents =
                "none";

            heart.style.color =
                "#efb6d4";

            heart.style.fontSize =
                (12 + Math.random() * 20) + "px";

            const x =
                (Math.random() - 0.5) * 600;

            const y =
                (Math.random() - 0.5) * 600;

            heart.style.transform =
                "translate(-50%, -50%)";

            heart.style.transition =
                "all 1.2s ease-out";

            document.body.appendChild(
                heart
            );

            requestAnimationFrame(function () {

                heart.style.transform =
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )`;

                heart.style.opacity = "0";

            });

            setTimeout(function () {

                heart.remove();

            }, 1300);
        }
    };

});