let currentPlayer = "X";
let arr = Array(9).fill(null);

function currentWinner() {
    if (
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        displayWinner(currentPlayer);
        return;
    }

    if (!arr.some((e) => e === null)) {
        displayDraw();
        return;
    }
}

function displayWinner(player) {
    const winnerAnnouncement = document.getElementById('winnerAnnouncement');
    winnerAnnouncement.innerText = `Winner is ${player}!`;
    winnerAnnouncement.classList.remove('d-none');
}

function displayDraw() {
    const drawAnnouncement = document.getElementById('drawAnnouncement');
    drawAnnouncement.innerText = "It's a Draw!";
    drawAnnouncement.classList.remove('d-none');
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] != null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    currentWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}

function restartGame() {
    arr.fill(null);
    currentPlayer = "X";
    document.querySelectorAll('.col').forEach(col => {
        col.innerText = '';
    });
    document.getElementById('winnerAnnouncement').classList.add('d-none');
    document.getElementById('drawAnnouncement').classList.add('d-none');
}
