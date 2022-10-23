let sample = [];
let animation = []; //Create empty arrays for animated objects
let num; // Current animation number
let i;
const maxAnim = 6;

// CREATED BUTTON
var buttons = new Array(9); // Nine buttons
var buttname = ['1 = DO', '2 = RE', '3 = MI', '4 = FA', '5 = SOL', '6 = LA', '7 = SI', '8 = DO_2', 'Q - I : LET TRY']; // The names of your buttons
var lshift = 0;
var tshift = 0;
var colors = ["#ff0000", "#ff9900", "#00dd00", "#00cccc", "#8080ff", "#ff00ff", "#ff0000", "#ff9900", "#00cccc"]; // The foreground text colors
var bgcolors = ["#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee"]; // The background text colors
var hidden = 0;
var lpos = 20; // horizontal position of panel left top corner
var tpos = 20;

function preload() {
    sample[0] = loadSound('soundImage/do1.wav');
    sample[1] = loadSound('soundImage/re.wav');
    sample[2] = loadSound('soundImage/mi.wav');
    sample[3] = loadSound('soundImage/fa.wav');
    sample[4] = loadSound('soundImage/so.wav');
    sample[5] = loadSound('soundImage/la.wav');
    sample[6] = loadSound('soundImage/si.wav');
    sample[7] = loadSound('soundImage/do2.wav');
    sample[8] = loadSound('soundImage/Chill.mp3');
    sample[9] = loadSound('soundImage/bling.mp3');
    sample[10] = loadSound('soundImage/waterdrop.mp3');
    sample[11] = loadSound('soundImage/swipe.mp3');
    sample[12] = loadSound('soundImage/runaway.mp3');
    sample[13] = loadSound('soundImage/wood.mp3');
    sample[14] = loadSound('soundImage/shutter.mp3');
    sample[15] = loadSound('soundImage/trip.mp3');
    sample[16] = loadSound('soundImage/cutesound.mp3');
    img = loadImage('soundImage/paw.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    backbutt = createButton("")
    backbutt.position(lpos, tpos);
    backbutt.size(200, 420);
    backbutt.style("background-color", '#eeeeeeaa'); // optional
    backbutt.style('border-radius', '12px');
    backbutt.attribute('disabled', 'true');

    // These buttons hide and show the panel
    hidebutt = createButton("HIDE")
    hidebutt.position(lpos + 5, tpos + 5);
    hidebutt.style("font-size", 14 + "px");
    hidebutt.style("border-color", '#444444');
    hidebutt.style('border-radius', '12px');
    hidebutt.size(80, 30);
    hidebutt.mousePressed(hider);
    hidebutt2 = createButton("GUIDE")
    hidebutt2.position(lpos + 5, tpos + 5);
    hidebutt2.style("font-size", 14 + "px");
    hidebutt2.style("border-color", '#444444');
    hidebutt2.style('border-radius', '12px');
    hidebutt2.size(80, 30);
    hidebutt2.mousePressed(hider);
    hidebutt2.hide();


    // Loops to create and evenly space out the buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i] = createButton(buttname[i])
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].position(lpos + 1, 70 + 40 * i);
        buttons[i].style("color", colors[i]);
        buttons[i].size(200, 35);
        buttons[i].style("background-color", bgcolors[i]); // optional
        buttons[i].style("font-size", 20 + "px");
        buttons[i].style("border-color", '#444444');
        buttons[i].style('border-radius', '12px'); // rounded corners! 
    }
    textSize(20);
}

function hider() {
    hidden = 1 - hidden;
    if (hidden == 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].hide()
        }
        backbutt.hide()
        hidebutt.hide();
        hidebutt2.show();

    } else {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].show()
        }
        backbutt.show()
        hidebutt.show();
        hidebutt2.hide();
    }
}

function draw() { // Drawing background
    background(255);
    noStroke();
    //Check out 
    let step = 15;

    for (let y = 0; y <= height; y += step) {
        if (y % (step * 2) == 0) {
            for (let x = 0; x <= width; x += step) {
                if (x % (step * 2) == 0) {
                    fill(230, 230, 250);
                    ellipse(x, y, step, step);
                } else {
                    fill(230, 230, 250, 0.45);
                    ellipse(x, y, step, step);
                }
            }
        } else {
            for (let x = 0; x <= width; x += step * 2) {
                fill(230, 230, 250, 0.45);
                ellipse(x, y, step, step);
            }
        }
    }

    if (animation.length > 0) {
        for (let i = 0; i < animation.length; i++) {
            push();
            animation[i].draw();
            pop();
        }
    }
}