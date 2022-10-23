//Animation Do
class Anim_1 {
    constructor() {
        this.xpos = 100;
        this.ypos = 100;
        this.xdest = 400;
        this.ydest = 400;
        this.speed = 0.1;
        this.huev = 10;
        this.x1 = random(width / 2);
        this.y1 = random(height / 2);
    }
    draw() {
        fill(0, 5);
        rect(0, 0, width, height);
        stroke(this.huev, 100, 100);
        strokeWeight(20);
        point(this.xpos, this.ypos);

        this.pxpos = this.xpos;
        this.pypos = this.ypos;
        this.xpos = lerp(this.xpos, this.xdest, this.speed);
        this.ypos = lerp(this.ypos, this.ydest, this.speed);
        line(this.xpos, this.ypos, this.pxpos, this.pypos);
        if (dist(this.xpos, this.ypos, this.xdest, this.ydest) < 5) {

            this.xdest = random(width);
            this.ydest = random(height);
            //  huev += 10;
            //	huev = huev %= 100;
        }
        this.huev += 1;
        this.huev = this.huev %= 100;
    }
}

// Animation Re
class Anim_2 {
    constructor() {
        this.xpos = 100;
        this.ypos = 100;
        this.xdest = 400;
        this.ydest = 400;
        this.speed = 0.1;
        this.huev = 10;
        this.x1 = random(width / 2);
        this.y1 = random(height / 2);
    }
    draw() {
        fill(0, 5);
        rect(0, 0, width, height);
        stroke(this.huev, 100, 100);
        strokeWeight(20);
        point(this.xpos, this.ypos);

        this.pxpos = this.xpos;
        this.pypos = this.ypos;
        this.xpos = lerp(this.xpos, this.xdest, this.speed);
        this.ypos = lerp(this.ypos, this.ydest, this.speed);
        line(this.xpos, this.ypos, this.pxpos, this.pypos);
        if (dist(this.xpos, this.ypos, this.xdest, this.ydest) < 5) {

            this.xdest = random(width);
            this.ydest = random(height);
            //  huev += 10;
            //	huev = huev %= 100;
        }
        this.huev += 1;
        this.huev = this.huev %= 100;
    }
}

// Animation Mi
class Anim_3 {
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
            fill(255, 127, random(255), this.alpha)
            ellipse(this.x, this.y, 15, 15);
            pop();
            this.angle += 14;
            this.r += 0.5;
        }
    }
}

// Animation Fa
class Anim_4 {
    constructor() {
        this.angle = 0;
        this.r = 150;
        this.drawPoints = []
    }
    draw() {
        if (this.angle <= 360) {
            stroke(255, 255, 102, 127);
            strokeWeight(5);
            fill(255, 255, 0);
            translate(width / 2, height / 2);
            let x = cos(radians(this.angle)) * this.r;
            let y = sin(radians(this.angle)) * this.r;
            this.drawPoints.push([x, y])
            for (let i = 0; i < this.drawPoints.length; i++) {
                let thisPoint = this.drawPoints[i];
                let size = (20 / this.drawPoints.length * (i + 1));
                ellipse(thisPoint[0], thisPoint[1], size, size);
            }
            this.angle += 8;
        }
    }
}

// Animation Son
class Anim_5 {
    constructor() {
        this.alpha = 255;
    }
    draw() {
        noStroke();
        fill(0, 255, 255, this.alpha);
        rect(0, 0, width, height);
        this.alpha -= 5;
    }
}

// Animation La
class Anim_6 {
    constructor() {
        this.alpha = 255;
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
    }
    draw() {
        noStroke();
        fill(this.r, this.g, this.b, this.alpha);
        circle(0, 0, width, height);
        this.alpha -= 5;
    }
}

//Animation Si
class Anim_7 {
    constructor() {
        this.active = true;
        this.alpha = 255;
        this.x = random(0.2, 0.8) * width;
        this.y = random(0.2, 0.8) * height;
        this.starSize = random(3, 15);
    }
    draw() {
        angleMode(DEGREES);
        push();
        if (this.active) {
            noFill();
            drawingContext.shadowBlur = 40;
            drawingContext.shadowColor = color(255, 255, 102);
            strokeWeight(10);
            stroke(255, 255, 0, this.alpha);
            this.drawStar(this.x, this.y, 150, 5);
            this.alpha -= 10;
            if (this.alpha < 0) {
                this.active = false;
            }
        }
        pop();
        angleMode(RADIANS);
    }
    drawStar(x, y, r, spineNum) {
        let vertexNum = spineNum * 2;
        let R;

        push();
        translate(x, y);
        rotate(-90);

        beginShape();
        for (let i = 0; i < vertexNum; i++) {
            R = i % 2 == 0 ? r : r / 2;

            vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
        }
        endShape(CLOSE);

        pop();
    }
}

//Animation Do+	
class Anim_8 {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.diameter = 200;
        this.speed = 10;
        this.rotate = 0;
        this.move = height / 2 + 200;

        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.color = color(this.r, this.b, this.g, 127);
    }
    draw() {
        push();
        fill(this.color);
        noStroke();
        translate(width / 2, this.move);
        rectMode(CENTER);
        rotate(this.rotate);
        ellipse(0, -this.y * 1.4, this.diameter, this.diameter);
        ellipse(0, this.y * 1.4, this.diameter, this.diameter);
        ellipse(this.x * 1.4, 0, this.diameter, this.diameter);
        ellipse(-this.x * 1.4, 0, this.diameter, this.diameter);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        ellipse(this.x, -this.y, this.diameter, this.diameter);
        ellipse(-this.x, -this.y, this.diameter, this.diameter);
        ellipse(-this.x, this.y, this.diameter, this.diameter);
        pop();
        this.x += this.speed;
        this.y += this.speed;
        this.rotate += 0.02;
        this.move -= 10;
        while (this.speed <= 0) {
            this.speed -= 0.1;
        }
        this.diameter -= 1.5;
        if (this.diameter < 0) {
            this.diameter = 0;
        }
        this.alpha *= 0.99;
    }
}