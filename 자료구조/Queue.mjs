import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    return this.list.insertAt(0, data);
  }
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }
  front() {
    return this.list.tail.data;
  }
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Queue };
