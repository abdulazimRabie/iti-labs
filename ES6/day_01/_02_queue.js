function Queue(maxSize) {
    let elements = [];
    let top = elements.length == 0 ? null : elements[0];
    const self = this;
    this.counter = 0;



    this.inQueue = function(val) {
        if (elements.length == maxSize) {
            console.log(`Cannot Insert Value more than the max size ${maxSize}`);
            return;
        }
        elements.push(val);
        console.log(`${val} : pushed to the queue`);
    }

    this.deQueue = function(val) {
        if (elements.length == 0) {
            console.log("Queue is empty");
            return;
        }
        console.log(`${elements[0]} poped`);
        elements.shift();
        top = elements.length == 0 ? null : elements[0];
    }

    this.getCurrSize = function() {
        return elements.length;
    }

    function getQueueElements() {
        self.counter++;
        for(let ele of elements) {
            console.log("elemnt : ", ele);
        }

        return elements.length;
    }

    this.viewQueue = function() {
        getQueueElements();
    }

    this.returnQueue = function() {
        return getQueueElements
    }
}

Queue.prototype.isEmpty = function() {
    return this.getCurrSize() == 0 ? true : false;
}


let q = new Queue(5);
q.inQueue(1);
q.inQueue(2);
q.inQueue(3);
q.inQueue(4);
q.inQueue(5);
q.inQueue(6);

q.deQueue()

console.log("Size of queu : ", q.getCurrSize());
console.log("Is queue empty : ", q.isEmpty());

q.viewQueue();

let private_fun = q.returnQueue();

console.log("===== Private Fun is called =======");
private_fun();
console.log("Counter: ", q.counter);

console.log("===== Private Fun is called =======");
private_fun();
console.log("Counter: ", q.counter);
