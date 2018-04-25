// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
var czas = 30;
var myVar = setInterval(function() {
    myTimer()
}, 1000);

function myTimer() {
    czas -= 1;
}
var myVar2 = setInterval(function() {
    resecik()
}, 30000);

function resecik() {
    reset();
    czas = 31;
    grzybCaught = 0;
    grzybCaught2 = 0;
}
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "images/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "images/hero.png";


var heroReady2 = false;
var heroImage2 = new Image();
heroImage2.onload = function() {
    heroReady2 = true;
};

heroImage2.src = "images/hero2.png";


var grzybReady = false;
var grzybImage = new Image();
grzybImage.onload = function() {
    grzybReady = true;
};

grzybImage.src = "images/grzybek.png";

var hero = {
    predkosc: 350
};

var hero2 = {
    predkosc: 350
};
var grzyb = {};
var grzybCaught = 0;
var grzybCaught2 = 0;


var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);


var reset = function() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    hero2.x = canvas.width / 3;
    hero2.y = canvas.height / 3;



    grzyb.x = 32 + (Math.random() * (canvas.width - 64));
    grzyb.y = 32 + (Math.random() * (canvas.height - 64));
};


var update = function(modifier) {
    if (38 in keysDown) {
        hero.y -= hero.predkosc * modifier;
        if (hero.y <= 20) {
            hero.y = 20;
        }
    }
    if (40 in keysDown) {
        hero.y += hero.predkosc * modifier;
        if (hero.y >= 420) {
            hero.y = 420;
        }
    }
    if (37 in keysDown) {
        hero.x -= hero.predkosc * modifier;
        if (hero.x <= 20) {
            hero.x = 20;
        }
    }
    if (39 in keysDown) {
        hero.x += hero.predkosc * modifier;
        if (hero.x >= 460) {
            hero.x = 460;
        }
    }


    if (87 in keysDown) {
        hero2.y -= hero2.predkosc * modifier;
        if (hero2.y <= 20) {
            hero2.y = 20;
        }
    }
    if (83 in keysDown) {
        hero2.y += hero2.predkosc * modifier;
        if (hero2.y >= 420) {
            hero2.y = 420;
        }
    }
    if (65 in keysDown) {
        hero2.x -= hero2.predkosc * modifier;
        if (hero2.x <= 20) {
            hero2.x = 20;
        }
    }
    if (68 in keysDown) {
        hero2.x += hero2.predkosc * modifier;
        if (hero2.x >= 460) {
            hero2.x = 460;
        }
    }




    if (
        hero.x <= (grzyb.x + 32) &&
        grzyb.x <= (hero.x + 32) &&
        hero.y <= (grzyb.y + 32) &&
        grzyb.y <= (hero.y + 32)
    ) {
        ++grzybCaught;
        reset();
    }

    if (
        hero2.x <= (grzyb.x + 32) &&
        grzyb.x <= (hero2.x + 32) &&
        hero2.y <= (grzyb.y + 32) &&
        grzyb.y <= (hero2.y + 32)
    ) {
        ++grzybCaught2;
        reset();
    }
};






var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (heroReady2) {
        ctx.drawImage(heroImage2, hero2.x, hero2.y);
    }


    if (grzybReady) {
        ctx.drawImage(grzybImage, grzyb.x, grzyb.y);
    }


    ctx.fillStyle = "red";
    ctx.font = "25px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("GRZYBY : " + grzybCaught, 32, 32);
    ctx.fillStyle = "black";
    ctx.font = "25px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("GRZYBY : " + grzybCaught2, 340, 32);
    ctx.fillStyle = "black";
    ctx.font = "25px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("czas : " + czas, 200, 420);
    if (czas <= 1) {
        if (grzybCaught > grzybCaught2)
        {
        ctx.fillStyle = "gold";
        ctx.font = "50px Helvetica";
        ctx.FontWeight = "1200"
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText("WYGRAŁ GRACZ 1", 260, 210);
}
        if (grzybCaught < grzybCaught2) {
            ctx.fillStyle = "gold";
            ctx.font = "50px Helvetica";
            ctx.FontWeight = "1200"
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("WYGRAŁ GRACZ 2", 260, 210);
        }

        if (grzybCaught == grzybCaught2) {
            ctx.fillStyle = "silver";
            ctx.font = "50px Helvetica";
            ctx.FontWeight = "1200"
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("REMIS :'( ", 260, 210);
        }

    }
        if(czas <=30)

        {
            if (grzybCaught > grzybCaught2) {
            ctx.fillStyle = "red";
            ctx.font = "25px Helvetica";
            ctx.FontWeight = "1200"
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("Wygrywa Gracz 1", 260, 400);
        }

          if (grzybCaught < grzybCaught2) {
            ctx.fillStyle = "black";
                ctx.font = "25px Helvetica";
                ctx.FontWeight = "1200"
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("Wygrywa gracz 2", 260, 400);
        }
        
        if (grzybCaught == grzybCaught2) {
         ctx.fillStyle = "silver";
         ctx.font = "25px Helvetica";
         ctx.FontWeight = "1200"
            ctx.textAlign = "left";
            ctx.textBaseline = "center";
            ctx.fillText("REMIS", 210, 400);  
        }
}



};




var main = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;


    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


var then = Date.now();
reset();
main();


function zmienpostac() {
    heroImage2.src = "images/hero.png";
}

function zmienpostac2() {
    heroImage2.src = "images/hero2.png";
}

function zmienpostac3() {
    heroImage.src = "images/hero.png";
}

function zmienpostac4() {
    heroImage.src = "images/hero2.png";
}