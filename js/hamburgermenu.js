function navAnimation() {

    const links = document.querySelectorAll(".nav-links li");

    const list = document.querySelector(".nav-links");

    const menu = document.querySelector(".menuicon");

    menu.addEventListener("click", function() {

        list.classList.toggle("navtransform");

        links.forEach((item, number) => {
            if (item.style.animation) {
                item.style.animation = ""
                document.body.style.overflow = "initial";
            } else {
                item.style.animation = `fadingIn 0.6s ease forwards ${number / 6 + 0.4}s`;
                document.body.style.overflow = "hidden";
            }
        });

        menu.classList.toggle("menuiconchange");
    })
}

navAnimation();