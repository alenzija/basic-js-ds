const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const element = new ListNode(value);
    if(this.length === 0) {
      this.tail = element;
      this.head = element;    
      this.length++;
    }else if(this.length ===1){
      this.head.next = element;
      this.tail = element;
      this.length++
    }else{ 
      this.tail.next = element;
      this.tail = element;
      this.length++;
    }
  }

  dequeue() {
    let value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }
}

// const queue = new Queue();
// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(3);
// queue.enqueue(2); 
// console.log(queue.dequeue())
// queue.enqueue(6);
// console.log(queue.dequeue())
// queue.enqueue(7); 
// queue.enqueue(5); // //  // adds the element to the queue
// console.log(queue.dequeue())
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }

module.exports = {
  Queue
};
