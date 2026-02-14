@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&family=Poppins:wght@300;600&display=swap');

body, html {
    margin: 0; padding: 0; height: 100%;
    background-color: #000; color: white;
    font-family: 'Poppins', sans-serif; overflow: hidden;
}

.level {
    height: 100vh; width: 100%;
    background-size: cover; background-position: center;
    background-repeat: no-repeat;
    display: none; flex-direction: column;
    align-items: center; justify-content: center; /* Centered for better visibility */
    position: fixed; top: 0; left: 0;
}

.level.active { display: flex; animation: fadeIn 1.2s ease-in-out; }

.content {
    background: rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    max-width: 80%;
}

.reveal-text {
    font-family: 'Playfair Display', serif;
    font-style: italic; font-size: 2rem;
    text-shadow: 2px 2px 10px rgba(0,0,0,1);
}

button {
    margin-top: 30px;
    padding: 15px 40px;
    border: none; border-radius: 50px;
    background: #ff4d6d; color: white;
    font-weight: bold; font-size: 1.1rem;
    cursor: pointer;
    /* This makes the jump look smooth */
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.heart, .kiss { position: fixed; pointer-events: none; z-index: 1000; }
.heart { top: -10%; animation: fall 4s linear forwards; font-size: 1.5rem; }
.kiss { animation: fly 2s forwards; font-size: 2.5rem; }

@keyframes fall { to { transform: translateY(110vh); } }
@keyframes fly { to { transform: translateY(-250px); opacity: 0; } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
