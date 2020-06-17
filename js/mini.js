window.onload = function () {
    let game = this.document.querySelector('.game');
    let level = this.document.querySelector('.levelNum');
    let look = this.document.querySelector('.lookNum');
    let start = this.document.querySelector('.start');
    let res = this.document.querySelector('.res');
    let score_res = this.document.querySelector('.score_res');

    let level_n = 3;
    let score_n = 0;
    let look_n = 0;
    const dodo_n = 30;
    let count_dodo = 0;
    let born_dodo = 0;

    level.innerHTML = level_n;

    start.onclick = function () {
        let olds = game.querySelectorAll('img');
        for (let old of olds) {
            old.parentElement.removeChild(old);
        }
        for (let i = 0; i < level_n; i++) {
            game.appendChild(new dodo_gen());
        }
        count_dodo = level_n;
        born_dodo = level_n;
        score = 0;
        look_n = 0;
        //res.innerHTML = born_dodo + '  ' + count_dodo + '  ' + dodo_n;
        score_res.innerHTML = score_n;
        look.innerHTML = look_n + '/' + dodo_n;
        game_go = window.setInterval(timer, 1000);
    }

    function getRandomInt(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }

    function timer() {
        console.log('timer');
        console.log(score_n);
        //res.innerHTML = born_dodo + '  ' + count_dodo + '  ' + dodo_n + '  ' + score_n;
        score_res.innerHTML = score_n;
        let dodos = document.querySelectorAll('.dodoSymb');
        let maxY = parseInt(window.getComputedStyle(game).height) - 100;
        let maxX = parseInt(window.getComputedStyle(game).width) - 100;
        for (let dodo of dodos) {
            deltaX = Math.random() * 10;
            deltaY = Math.random() * 10;
            getRandomInt(2) == 0 ? sign = -1 : sign = 1;
            /*if (get ==0) {sign=-1;}
            else {sign = 1;}*/
            dodo.style.top = parseInt(dodo.style.top) + sign * deltaY + "px";
            dodo.style.left = parseInt(dodo.style.left) + sign * deltaX + "px";
            if ((parseInt(dodo.style.top) > maxY) || (parseInt(dodo.style.left) > maxX) ||
                (parseInt(dodo.style.top) < 0) || (parseInt(dodo.style.left) < 0)) {
                dodo.parentElement.removeChild(dodo);
                for (let i = 0; i < level_n; i++) {
                    game.appendChild(new dodo_gen());
                }
                score_n--;
                born_dodo += level_n;
                count_dodo += level_n - 1;
                if ((count_dodo > dodo_n) || (born_dodo > dodo_n)) {
                    res.innerHTML = "fall...";
                    console.log('fall==========================');
                    clearInterval(game_go);
                }
            }
        }
    }

    function dodo_gen() {
        let newdodo = document.createElement('img');
        newdodo.src = '../pictures/dodo/d' + Math.round(Math.random() * 14 + 1) + '.png';
        newdodo.style.top = 100 + Math.random() * (document.documentElement.clientHeight - 470) + 'px';
        newdodo.style.left = 150 + Math.random() * (document.documentElement.clientWidth - 220) + 'px';
        newdodo.classList.add('dodoSymb');
        //let timer = setInterval(desapear(), 10);
        newdodo.addEventListener('click', function () {
            this.parentElement.removeChild(this);
            score_n++;
            look_n++;
            count_dodo--;
            if (born_dodo < dodo_n) {
                game.appendChild(new dodo_gen());
                born_dodo++;
                count_dodo++;
                //res.innerHTML = born_dodo + '  ' + count_dodo + '  ' + dodo_n;
            }
            if ((count_dodo == 0) && (born_dodo == dodo_n)) {
                clearInterval(game_go);
                console.log('stop=========================================');
                res.innerHTML = ' victory!!!!';
            }
            score_res.innerHTML = score_n;
            console.log(score_n);
            look.innerHTML = look_n + '/' + dodo_n;
        });

        //console.log(newdodo);
        return newdodo;
    }
}