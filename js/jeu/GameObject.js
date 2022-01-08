let lionType = "lion";
let objType = "object";

class GameObject
{
    constructor(img, type, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.type = type;
        this.moving = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    recenter(mWidth, mHeight) {
        var x = (mWidth - this.w) / 2;
        var y = (mHeight - this.h) / 2;
        this.setPosition(x, y);
    }

    isInside(x, y) {
        return (this.x < x) && (x < this.x + this.w) && (this.y < y) && (y < this.y + this.h);
    }

    update() {
        if(mouseIsPressed && this.isInside(mouseX, mouseY))
        {
            if(this.type == "lion") {
                this.type = "suppress";
                return;
            }
            if(!this.moving)
            {
                this.offsetX = mouseX - this.x;
                this.offsetY = mouseY - this.y;
                this.moving = true;
            }
            this.setPosition(mouseX - this.offsetX, mouseY - this.offsetY);
        }
        else {
            this.moving = false;
        }
    }

    show()
    {
        image(this.img, this.x, this.y, this.w, this.h);
    }
}