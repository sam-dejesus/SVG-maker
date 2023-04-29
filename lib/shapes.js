console.log('shapes.js file has been imported successfully!');


      
    class Shape {
        constructor(type, color) {
          this.type = type;
          this.color = color;
        }
      
        draw() {
          throw new Error('draw() method not implemented');
        }
      }
      
      class Square extends Shape {
        constructor(color) {
          super('Square', color);
        }
      
        draw() {
          return `<rect width="100" height="100" fill="${this.color}" />`;
        }
      }
      
      class Circle extends Shape {
        constructor(color){
            super('Circle', color);
        }
        draw(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
        }
      }


      class Triangle extends Shape {
        constructor(color){
            super('Triangle', color)
        }
        draw(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
        }
      }







module.exports = shapes;
