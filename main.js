var sword = function(x, y, swordsize, blade) {
    noStroke();
    
    var block = function(xblock, yblock) {
        rect(x + xblock * swordsize, y + yblock * swordsize, swordsize, swordsize);
    };
    
    var colorblock = function(xblock, yblock, r, g, b) {
        fill(r, g, b);
        block(xblock, yblock);
    };
    
    var double = function(xblock, yblock) {
        block(xblock, yblock);
        block(xblock + 1, yblock + 1);
    };
    
    var bladeline = function(xblock, yblock, end, r, g, b) {
        for(var xblock, yblock; xblock <= blade + end; xblock++, yblock--) {
            colorblock(xblock, yblock, r, g, b);
        }
    };
    
    for(var xblock = 0; xblock <= 2; xblock++) {
        for(var yblock = 13; yblock <= 15; yblock++) {
            colorblock(xblock, yblock, 0, 68, 97);
        }
    }
    
    colorblock(1, 14, 7, 138, 168);
    colorblock(2, 13, 112, 76, 4);
    colorblock(4, 11, 112, 76, 4);
    colorblock(3, 12, 148, 88, 10);
    colorblock(3, 13, 69, 44, 8);
    colorblock(4, 12, 69, 44, 8);
    colorblock(2, 12, 105, 84, 51);
    colorblock(3, 11, 105, 84, 51);

    // blade holder
    fill(0, 68, 97);
    for(var xblock = 3, yblock = 9; xblock <= 6; xblock++, yblock++) {
        block(xblock, yblock);
    }
    double(2, 7);
    block(2, 6);
    block(3, 6);
    double(4, 7);
    double(5, 9);
    double(7, 10);
    double(7, 12);
    block(9, 12);
    block(9, 13);
    
    fill(24, 128, 130);
    block(4, 8);
    block(4, 9);
    double(5, 10);
    
    fill(3, 105, 105);
    block(3, 7);
    double(7, 11);
    
    // blade
    bladeline(6, 8, 0, 19, 209, 184);
    bladeline(7, 9, 1, 19, 209, 184);
    bladeline(6, 9, 1, 12, 168, 160);
    bladeline(6, 7, 0, 1, 76, 79);
    bladeline(8, 9, 2, 1, 76, 79);
    
    fill(1, 76, 79);
    double(blade + 1, 13 - blade);
    block(blade + 2, 13 - blade);
};

sword(0, 80, 20, 13);
