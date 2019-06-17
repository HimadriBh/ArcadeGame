// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.posx = -20;
    this.posy = enemyoffset();
    this.speed =  Math.random()*300 + 200;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.posx > 500){
        this.posx = -20;
        this.posy = enemyoffset();
    }
    this.posx += this.speed*dt;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.posx, this.posy);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = 380;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
var player = new Player();
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(player.sprite), player.x, player.y);
};

var allEnemies = [];
for(var i = 0; i < 3; i++){
    allEnemies.push(new Enemy());
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


function enemyoffset(){
    var posValues = [60, 140, 220];
    var posIdx =  Math.floor(Math.random()*posValues.length);
    return posValues[posIdx];
}

player.handleInput = function(inputKey){
    if(inputKey === 'up'){
        var moveUp = 80;
        if(this.y > 0){
            this.y -= moveUp;
        }
    }
    else if(inputKey === 'left'){
        var moveLeft = 100;
        if(this.x > 0){
            this.x -= moveLeft;
        }
    }
    else if(inputKey === 'right'){
        var moveRight = 100;
        if(this.x < 400){
            this.x += moveRight;
        }
    }
    else if(inputKey === 'down'){
        var moveDown = 80;
        if(this.y < 380){
            this.y += moveDown;
        }
    }
    checkWin();
}

function checkCollisions(){
    allEnemies.forEach((enemy)=>{
        var proximity = getDistance(enemy.posx, enemy.posy, player.x, player.y)
        if(proximity < 60){
            player.x = 0;
            player.y = 380;
        }
    })
}

function getDistance(x1, y1, x2, y2){
    let disx = x2 -x1;
    let disy = y2 -y1;
    return Math.sqrt(Math.pow(disx, 2) + Math.pow(disy, 2));

}

function checkWin(){
    if(player.y === -20){
    }
}