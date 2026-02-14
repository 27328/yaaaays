let clickCount = 0;

function startExperience() {
    const btn = document.querySelector('#entrance button');
    const title = document.querySelector('#entrance h1');
    const player = document.getElementById('youtube-player');
    
    clickCount++;

    // 1. MUSIC UNLOCK: Every click tells the YouTube iframe to play.
    // This is the best way to bypass browser "Autoplay" blocks.
    if (player) {
        player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    // 2. THE TEASING LOGIC
    if (clickCount < 4) {
        if (clickCount === 1) {
            title.innerText = "Patience is a virtue, Terry... 😉";
            btn.style.transform = "translate(120px, -80px)";
        } 
        else if (clickCount === 2) {
            title.innerText = "Are you even trying? 🔥";
            btn.style.transform = "translate(-180px, 60px)";
        } 
        else if (clickCount === 3) {
            title.innerText = "One more... because you're cute. 😏";
            btn.style.transform = "translate(0px, -200px)";
        }
    } 
    else {
        // 3. SUCCESS: Transitions to Level 1
        document.getElementById('entrance').style.display = 'none';
        const lvl1 = document.getElementById('level1');
        lvl1.style.display = 'flex';
        lvl1.classList.add('active');
        
        // Start the heart animation
        setInterval(createHeart, 400);
    }
}

// 4. NAVIGATION FOR REMAINING LEVELS
function nextLevel(num) {
    // Hide all sections first to prevent overlap
    document.querySelectorAll('.level').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Show the specific level requested
    const target = document.getElementById('level' + num);
    if (target) {
        target.style.display = 'flex';
        target.classList.add('active');
    }
}

// 5. VISUAL EFFECTS
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