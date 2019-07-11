function Tile (type) {
    this.type = type

    this.draw = function (x, y) {

        tile_x = x
        tile_y = y 
        width = 50
        height = 50

        if(this.type != 'empty') {
            if (this.type == 'regular_question') {
                fill('blue')
            }
            else if (this.type == 'score_question') {
                fill('red')
            }
            else if (this.type == 'teleport') {
                fill('yellow');
            }
            else if (this.type == 'center') {
                fill('green')
            }
            else {
                console.log('Error: Invalid tile type.')
            }

            rect(tile_x, tile_y, width, height)
        }
        
    }
}

function Board () {

    this.create = function () {

    }
    
    this.draw = function () {
        ellipse(50, 50, 100, 20);
    }
}