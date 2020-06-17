window.onload = function () {
    let div_alert = document.querySelector('.alert');
    let but_buy = document.querySelectorAll('.but2');
    let but_clicked;

    for (let but of but_buy) {
        but.onclick = function () {
            this.style.bacgroundColor = "#FFCC48";
            div_alert.style.display = "block";
            console.log(event);
            but_clicked = event.target;
            if (event.clientY < parseInt(window.getComputedStyle(div_alert).height)) {
                div_alert.style.top = event.pageY + 'px';
            } else {
                div_alert.style.top = event.pageY - parseInt(window.getComputedStyle(div_alert).height) + 'px';
            }

        }
    }

    div_alert.onclick = function () {
        this.style.display = "none";
        but_clicked.style.bacgroundColor = "white";
    }
}