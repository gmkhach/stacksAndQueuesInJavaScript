class Stack extends Array {
    constructor(...elems) {
        super(...elems);
    }

    isEmpty() {
        return (this.length === 0)
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        super.pop();
    }
   
    peak() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this[this.length - 1];
    }
}

const s = new Stack(1, 2, 3, 4, 5);
console.log(s);
console.log('last element:', s.peak());

s.push(6);
console.log(s);
console.log('last element:', s.peak());

s.pop();
s.pop();
console.log(s);
console.log('last element:', s.peak());

class Queue extends Array {
    constructor(...elems) {
        super(...elems);
    }
    
    isEmpty() {
        return (this.length === 0)
    }

    enqueue(value) {
        super.push(value);
    }
   
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return super.shift();
    }

    front() {
        if (this.isEmpty()) {
            throw new Error ('Queue is empty');
        }
        return this[0];
    }
}

const q = new Queue(1, 2, 3);
console.log(q)
    
q.enqueue(4);
console.log(q)
    
q.dequeue();
console.log(q)
console.log(q.front());