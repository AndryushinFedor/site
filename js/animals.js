window.onload = function () {
    let prevs = this.document.querySelectorAll(".prev");
    let nexts = this.document.querySelectorAll(".next");
    let set_plaks = new Array(
        new Array(
            "/pictures/1.png",
            "/pictures/m2.png",
            "/pictures/m3.png",
        ),
        new Array(
            "/pictures/2.png",
            "/pictures/t2.png",
            "/pictures/t3.png",
        ),
        new Array(
            "/pictures/3.png",
            "/pictures/d2.png",
            "/pictures/d3.png",
        ),
        new Array(
            "./pictures/4.png",
            "./pictures/r2.png",
            "./pictures/r3.png",
        ),
        new Array(
            "../pictures/5.png",
            "../pictures/k2.png",
            "../pictures/k3.png",
        ),
    );

    let i = 0;

    for (let prev of prevs) {
        prev.addEventListener("click", function () {
            let plaks_numb =
                parseInt(prev.parentElement.parentElement.classList[0][1]) - 1;
            console.log(plaks_numb);
            i == 0 ? (i = set_plaks[plaks_numb].length - 1) : i--;
            console.log(i);
            prev.parentElement.parentElement.querySelector(".an_pict").src =
                set_plaks[plaks_numb][i];
        });
    }

    for (let next of nexts) {
        next.addEventListener("click", function () {
            let plaks_numb =
                parseInt(next.parentElement.parentElement.classList[0][1]) - 1;
            console.log(plaks_numb);
            i == set_plaks[plaks_numb].length - 1 ? (i = 0) : i++;
            console.log(i);
            next.parentElement.parentElement.querySelector(".an_pict").src =
                set_plaks[plaks_numb][i];
        });
    }
};