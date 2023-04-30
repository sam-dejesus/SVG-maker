const { Circle, Square, Triangle } = require('./shapesClasses');

describe('Circle', () => {
  it('renders correctly', () => {
    const shape = new Circle();
    const color = 'yellow';
    expect(shape.draw(color)).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
  });
});

describe('Square', () => {
  it('renders correctly', () => {
    const shape = new Square();
    const color = 'blue';
    expect(shape.draw(color)).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
  });
});

describe('Triangle', () => {
  it('renders correctly', () => {
    const shape = new Triangle();
    const color = 'red';
    expect(shape.draw(color)).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
  });
});
