window.onload = function () {
  let prevs = this.document.querySelectorAll(".prev");
  let nexts = this.document.querySelectorAll(".next");
  let set_plaks = new Array(
    new Array(
      "./pictures/Plakat1.jpg",
      "./pictures/s11.jpg",
      "./pictures/s12.jpg",
      "./pictures/s13.jpg",
      "./pictures/s14.jpg",
      "./pictures/s15.jpg",
      "./pictures/s16.jpg"
    ),
    new Array(
      "./pictures/Plakat2.jpg",
      "./pictures/s21.jpg",
      "./pictures/s22.jpg"
    ),
    new Array("./pictures/Plakat3.jpg", "./pictures/s31.jpg"),
    new Array(
      "./pictures/Plakat4.jpg",
      "./pictures/s41.jpg",
      "./pictures/s42.jpg"
    ),
    new Array(
      "./pictures/Plakat5.jpg",
      "./pictures/s51.jpg",
      "./pictures/s52.jpg"
    ),
    new Array(
      "./pictures/Plakat6.jpg",
      "./pictures/s61.jpg",
      "./pictures/s62.jpg"
    )
  );

  let i = 0;

  for (let prev of prevs) {
    prev.addEventListener("click", function () {
      let plaks_numb =
        parseInt(prev.parentElement.parentElement.classList[1][1]) - 1;
      console.log(plaks_numb);
      i == 0 ? (i = set_plaks[plaks_numb].length - 1) : i--;
      console.log(set_plaks[plaks_numb].length);
      prev.parentElement.parentElement.querySelector(".plak_img").src =
        set_plaks[plaks_numb][i];
    });
  }

  for (let next of nexts) {
    next.addEventListener("click", function () {
      let plaks_numb =
        parseInt(next.parentElement.parentElement.classList[1][1]) - 1;
      console.log(plaks_numb);
      i == set_plaks[plaks_numb].length - 1 ? (i = 0) : i++;
      console.log(set_plaks[plaks_numb].length);
      next.parentElement.parentElement.querySelector(".plak_img").src =
        set_plaks[plaks_numb][i];
    });
  }
};