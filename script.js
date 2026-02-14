let clickCount = 0;

function startExperience() {
    const btn = document.querySelector('#entrance button');
    const title = document.querySelector('#entrance h1');
    const player = document.getElementById('youtube-player');
    
    clickCount++;

    // Wake up music
    if (player) {
        player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    if (clickCount < 4) {
        if (clickCount === 1) {
            title.innerText = "Patience is a virtue, Terry... 😉";
            btn.style.transform = "translate(60px, -80px)";
        } 
        else if (clickCount === 2) {
            title.innerText = "Are you even trying? 🔥";
            btn.style.transform = "translate(-60px, -150px)";
        } 
        else if (clickCount === 3) {
            title.innerText = "One more... because you're cute. 😏";
            btn.style.transform = "translate(0px, -220px)";
        }
    } 
    else {
        document.getElementById('entrance').style.display = 'none';
        nextLevel(1);
        setInterval(createHeart, 400);
    }
}

function nextLevel(num) {
    document.querySelectorAll('.level').forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('active');
    });
    const target = document.getElementById('level' + num);
    if (target) {
        target.style.display = 'flex';
        target.classList.add('active');
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

function createKiss(e) {
    const kiss = document.createElement('div');
    kiss.className = 'kiss';
    kiss.innerHTML = '💋';
    kiss.style.left = e.clientX + 'px';
    kiss.style.top = e.clientY + 'px';
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 2000);
}
