const exercises = [
    { name: "5 min Bicicleta estática", sets: 1, reps: 1, type: 'timer' },
    { name: "Pecho banco inclinado", sets: 3, reps: 15 },
    { name: "Bíceps", sets: 3, reps: 15 },
    { name: "Abdominales laterales (por lado)", sets: 3, reps: 15 },
    { name: "Hombros adelante", sets: 3, reps: 15 },
    { name: "Pecho acostado", sets: 3, reps: 15 },
    { name: "Piernas (extensión)", sets: 3, reps: 15 },
    { name: "Abdominales", sets: 4, reps: 25 },
    { name: "Remo", sets: 3, reps: 15 },
    { name: "Press de piernas", sets: 3, reps: 15 },
    { name: "Tríceps acostado", sets: 3, reps: 15 },
    { name: "Dorsales al pecho (polea)", sets: 3, reps: 15 }
];

let timer;
let timeLeft = 300; // 5 mins

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) clearInterval(timer);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 300;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer-display').innerText = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function renderExercises() {
    const container = document.getElementById('exercises-list');
    container.innerHTML = '';
    exercises.forEach((ex, exIndex) => {
        const exDiv = document.createElement('div');
        exDiv.className = 'bg-gray-800 p-3 rounded-lg';
        exDiv.innerHTML = `<h3 class="font-bold mb-2">${ex.name}</h3>`;

        if (ex.type !== 'timer') {
            const setsDiv = document.createElement('div');
            setsDiv.className = 'flex gap-2';
            for (let i = 0; i < ex.sets; i++) {
                const btn = document.createElement('button');
                btn.className = 'flex-1 bg-gray-700 py-1 rounded text-sm';
                btn.innerText = `Serie ${i+1}`;
                btn.onclick = (e) => e.target.classList.toggle('bg-green-600');
                setsDiv.appendChild(btn);
            }
            exDiv.appendChild(setsDiv);
        }
        container.appendChild(exDiv);
    });
}

function resetAll() {
    localStorage.clear();
    location.reload();
}

updateTimerDisplay();
renderExercises();
