// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size
{

    constructor(width=80,height=60)
    {
     this.width = width;
     this.height = height;

    }

    resize(newWidth,newHeight)
    {
        this.width = newWidth;
        this.height = newHeight;
    }
}

export function Position(x=0,y=0)
{
    this.x = x;
    this.y = y;

}
Position.prototype.move= function(x,y) {this.x=x; this.y=y}



export class ProgramWindow
{
    constructor()
    {
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position()
    }

    resize(newSize)
    {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
        const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));
        this.size.resize(newWidth, newHeight);
        
    }


    move(newPosition)
    {
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;
        const newX = Math.max(0, Math.min(newPosition.x, maxX));
        const newY = Math.max(0, Math.min(newPosition.y, maxY));
        this.position.move(newX, newY);
        
    }

    
}



export function changeWindow(programWindow )
{
    programWindow.screenSize = new Size(400,300);
    programWindow.size = new Size(400,300);
    programWindow.position = new Position(100,150);
    return programWindow;
}
