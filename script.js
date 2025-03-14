let board = ["", "", "", "", "", "", "", "", ""];
        let currentPlayer = "X";
        let gameActive = true;
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
        ];

        document.querySelectorAll(".cell").forEach(cell => {
            cell.addEventListener("click", () => {
                const index = cell.dataset.index;
                if (board[index] === "" && gameActive) {
                    board[index] = currentPlayer;
                    cell.textContent = currentPlayer;
                    if (checkWin(currentPlayer)) {
                        document.getElementById("status").textContent = `${currentPlayer} Wins!`;
                        gameActive = false;
                    } else if (board.every(cell => cell !== "")) {
                        document.getElementById("status").textContent = "It's a Draw!";
                        gameActive = false;
                    } else {
                        currentPlayer = currentPlayer === "X" ? "O" : "X";
                    }
                }
            });
        });

        function checkWin(player) {
            return winPatterns.some(pattern => pattern.every(index => board[index] === player));
        }

        document.getElementById("reset").addEventListener("click", () => {
            board.fill("");
            document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
            document.getElementById("status").textContent = "";
            gameActive = true;
            currentPlayer = "X";
        });