window.onload = function () {
    let prev = this.document.querySelector('.s1 .prev');
    let next = this.document.querySelector('.s1 .next');
    let img = this.document.querySelector('.s1 .plak_img');
    let set_plaks_1 = new Array('../pictures/Plakat1.jpg', '../pictures/s11.jpg', '../pictures/s12.jpg', '../pictures/s13.jpg', '../pictures/s14.jpg', '../pictures/s15.jpg', '../pictures/s16.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 6: i--;
        console.log(i);
        img.src = set_plaks_1[i];

    });
    next.addEventListener('click', function () {
        (i == 6) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_1[i];
    });

    let prev = this.document.querySelector('.s2 .prev');
    let next = this.document.querySelector('.s2 .next');
    let img = this.document.querySelector('.s2 .plak_img');
    let set_plaks_2 = new Array('../pictures/Plakat2.jpg', '../pictures/s21.jpg', '../pictures/s22.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 2: i--;
        console.log(i);
        img.src = set_plaks_2[i];

    });
    next.addEventListener('click', function () {
        (i == 2) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_2[i];
    });

    let prev = this.document.querySelector('.s3 .prev');
    let next = this.document.querySelector('.s3 .next');
    let img = this.document.querySelector('.s3 .plak_img');
    let set_plaks_3 = new Array('../pictures/Plakat3.jpg', '../pictures/s31.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 1: i--;
        console.log(i);
        img.src = set_plaks_3[i];

    });
    next.addEventListener('click', function () {
        (i == 1) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_3[i];
    });

    let prev = this.document.querySelector('.s4 .prev');
    let next = this.document.querySelector('.s4 .next');
    let img = this.document.querySelector('.s4 .plak_img');
    let set_plaks_4 = new Array('../pictures/Plakat4.jpg', '../pictures/s41.jpg', '../pictures/s42.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 2: i--;
        console.log(i);
        img.src = set_plaks_4[i];

    });
    next.addEventListener('click', function () {
        (i == 2) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_4[i];
    });

    let prev = this.document.querySelector('.s5 .prev');
    let next = this.document.querySelector('.s5 .next');
    let img = this.document.querySelector('.s5 .plak_img');
    let set_plaks_5 = new Array('../pictures/Plakat5.jpg', '../pictures/s51.jpg', '../pictures/s52.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 2: i--;
        console.log(i);
        img.src = set_plaks_5[i];

    });
    next.addEventListener('click', function () {
        (i == 2) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_5[i];
    });

    let prev = this.document.querySelector('.s6 .prev');
    let next = this.document.querySelector('.s6 .next');
    let img = this.document.querySelector('.s6 .plak_img');
    let set_plaks_6 = new Array('../pictures/Plakat6.jpg', '../pictures/s61.jpg', '../pictures/s62.jpg');
    let i = 0;
    console.log('ghghghgh' + next);
    prev.addEventListener('click', function () {
        (i == 0) ? i = 2: i--;
        console.log(i);
        img.src = set_plaks_6[i];

    });
    next.addEventListener('click', function () {
        (i == 2) ? i = 0: i++;
        console.log(i);
        img.src = set_plaks_6[i];
    });
}