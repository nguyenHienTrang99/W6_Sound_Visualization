function keyTyped() {
    if (key == '1') {
        sample[0].play();
        animation.push(new Anim_1());
    } else if (key == '2') {
        sample[1].play();
        animation.push(new Anim_2());
    } else if (key == '3') {
        sample[2].play();
        animation.push(new Anim_3());
    } else if (key == '4') {
        sample[3].play();
        animation.push(new Anim_4());
    } else if (key == '5') {
        sample[4].play();
        animation.push(new Anim_5());
    } else if (key == '6') {
        sample[5].play();
        animation.push(new Anim_6());
    } else if (key == '7') {
        sample[6].play();
        animation.push(new Anim_7());
    } else if (key == '8') {
        sample[7].play();
        animation.push(new Anim_8());
    } else if (key == '9') {
        sample[8].play();
    } else if (key == 'q') {
        sample[9].play();
        animation.push(new Anim_q());
    } else if (key == 'w') {
        sample[10].play();
        animation.push(new Anim_w());
    } else if (key == 'e') {
        sample[11].play();
        animation.push(new Anim_e());
    } else if (key == 'r') {
        sample[12].play();
        animation.push(new Anim_r());
    } else if (key == 't') {
        sample[13].play();
        animation.push(new Anim_t());
    } else if (key == 'y') {
        sample[14].play();
        animation.push(new Anim_y());
    } else if (key == 'u') {
        sample[15].play();
        animation.push(new Anim_u());
    } else if (key == 'i') {
        sample[16].play();
        animation.push(new Anim_paw());
    }

    if (animation.length > maxAnim) {
        animation.splice(1, 1);
    }
}