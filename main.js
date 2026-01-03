// --- data of the game ---
let gameState = {
    version:"0.0.1",
    playerName:"Player1",
    gold:1,
    level:0,
};

// --- UI ---
function updateUI() {
    document.getElementById("gold").innerText = gameState.gold;
};

// --- task ---
function timeLoop() {
    // gameState.gold += 1;   //每0.1秒增加1金幣
    updateUI();
};

// --- save/load ---
function loadGame() {};     //讀取遊戲資料
function saveGame() {};     //儲存遊戲資料
function resetGame() {};    //重置遊戲資料

// --- main update ---
function main() {
    loadGame();     //進入遊戲讀取檔案
    setInterval(timeLoop,100);  //每0.1秒執行一次遊戲邏輯
}

main();