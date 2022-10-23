//Animation Bling
class Anim_q {
    constructor() {
        this.num = 100;
        this.x = [this.num];
        this.y = [this.num];
        frameRate(24);
        for (this.i = 0; this.i < this.num; this.i++) {
            this.x[this.i] = random(width);
            this.y[this.i] = random(height);
        }
    }
    draw() {
        noStroke();
        for (this.i = 0; this.i < this.num; this.i++) {
            fill(this.x[this.i], 255, this.y[this.i]);
            ellipse(this.x[this.i], this.y[this.i], random(5, 30), random(5, 30));
        }
    }
}

//Animation w
class Anim_w {
    constructor() {
        this.x1 = random(width);
        this.y1 = height / 1.5 + random(height / 2);
        this.x2 = random(width);
        this.y2 = height / 2.5 + random(height / 2);
        this.diameter1 = 0;
        this.diameter2 = 0;
        this.alpha = 255;
    }
    draw() {
        stroke(0, 0, 255, this.alpha);
        noFill();
        ellipse(this.x1, this.y1, this.diameter1, this.diameter1);
        ellipse(this.x1 - 20, this.y1 - 20, this.diameter1 - 5, this.diameter1 - 5);
        ellipse(this.x2, this.y2, this.diameter2, this.diameter2);
        ellipse(this.x2 - 20, this.y2 - 20, this.diameter2 - 5, this.diameter2 - 5);
        this.diameter1 += 8;
        this.diameter2 += 10;
        this.alpha *= 0.99;
    }
}

//Animation e
class Anim_e {
    constructor() {
        this.width = 0;
        this.speed = 80;
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(204, 255, 153, this.alpha);
        rectMode(CORNER);
        rect(0, 0, this.width, height);
        this.width += this.speed;
        this.alpha *= 0.99;
    }
}

//Animation r
class Anim_r {
    constructor() {
        this.rotate = 0;
        this.size = width;
        this.speed = 1000;
    }
    draw() {
        push();
        fill(255, 228, 225);
        noStroke();
        translate(width / 2, height / 2);
        rotate(radians(this.rotate));
        rectMode(CENTER);
        rect(0, 0, this.size, this.size);
        pop();
        this.rotate += this.speed;
        this.size *= 0.95;
    }
}

//Animation t
class Anim_t {
    constructor() {
        this.posy = height + 50;
    }
    draw() {
        noStroke();
        fill(0, 191, 255, 127);
        rect(0, this.posy - 50, width, 50);
        rect(0, height - this.posy, width, 50);
        this.posy *= 0.9;
    }
}

//Animation y
class Anim_y {
    constructor() {
        this.width = width;
        this.height = height;
    }
    draw() {
        stroke(219, 112, 147, 127);
        strokeWeight(20);
        noFill();
        rectMode(CENTER);
        rect(width / 2, height / 2, this.width, this.height);
        this.width *= 0.7;
        this.height *= 0.7;
        rectMode(CORNER);
        strokeWeight(1);
    }
}

//Animation u 
class Anim_u {
    constructor() {
        this.alpha = 255;
        this.angle = 0;
        this.r = 0
    }
    draw() {
        noStroke()
        for (i = 0; i < 20; i++) {
            push();
            translate(width / 2, height / 2);
            this.x = cos(radians(this.angle)) * this.r;
            this.y = sin(radians(this.angle)) * this.r;
            fill(0, 200, random(255), this.alpha)
            ellipse(this.x, this.y, 15, 15);
            pop();
            this.angle += 14;
            this.r += 0.5;
        }
    }
}

class Anim_paw {
    constructor() {
        this.alpha = 255;
        this.x1 = random(width / 2);
        this.y1 = random(height / 2);
    }
    draw() {
        tint(255, this.alpha)
        image(img, this.x1, this.y1, 100, 100);
        this.alpha -= 2;
    }
}