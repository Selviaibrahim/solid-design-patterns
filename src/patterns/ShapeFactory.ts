
export interface Shape {
  draw(): void;
}

export class Circle implements Shape {
  draw() {
    console.log(" Drawing a circle");
  }
}

export class Square implements Shape {
  draw() {
    console.log(" Drawing a square");
  }
}

export class ShapeFactory {
  static createShape(type: string): Shape {
    if (type === "circle") return new Circle();
    if (type === "square") return new Square();
    throw new Error("Unknown shape type: " + type);
  }
}
