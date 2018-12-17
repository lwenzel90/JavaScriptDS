class Stack {
    constructor(...items){
        this.stack = [...items];
    }

    top(){
        return this.stack[this.stack.length -1];
    }
    
    push(value){
        this.stack.push(value);
    }

    pop(){
        return this.stack.pop();
    }

    isEmpty(){
        return this.stack <= 0;
    }

    print(){
        console.log(this.stack);
    }
}

stack1 = new Stack(1, 4, 90, 10);
stack1.push(200);

console.log(stack1.stack);
console.log(stack1.pop());
console.log(stack1.isEmpty());
