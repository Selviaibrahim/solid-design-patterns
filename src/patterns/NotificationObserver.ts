
export interface Observer {
  update(message: string): void;
}

export class User implements Observer {
  constructor(private name: string) {}
  update(message: string) {
    console.log(`${this.name} received: ${message}`);
  }
}

export class NotificationService {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(message: string) {
    this.observers.forEach(o => o.update(message));
  }
}
