class Circle {
  draw(color) {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`;
  }
}

class Square {
  draw(color) {
    return `<rect x="50" height="200" width="200" fill="${color}">`;
  }
}

class Triangle {
  draw(color) {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`;
  }
}

module.exports = { Circle, Square, Triangle };


