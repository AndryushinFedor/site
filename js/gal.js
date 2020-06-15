window.onload = function () {
    let prev = this.document.querySelector('.s1 .prev');
    let next = this.document.querySelector('.s1 .next');
    let img = this.document.querySelector('.s1 .plak_img');
    let set_plaks_1 = newArray('../pictures/s11.jpg','../pictures/s12.jpg','../pictures/s13.jpg');
    let i=0;
    prev.addEventListener('click', function (){
        i--;
        img.src=set_plaks[i];

    }
    next.addEventListener('click', function (){
        i++;
        img.src=set_plaks[i];
    }
}