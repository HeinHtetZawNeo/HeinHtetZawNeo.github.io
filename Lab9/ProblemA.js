class LinkedList {
    constructor(val) {
        this.next = null;
        this.value = val;
    }

    add(arg) {
        if (this.next == null) {
            this.next = new LinkedList(arg);
        }

        else
            this.next.add(arg);
    }

    print() {
        console.log(this.value);
        if (this.next)
            this.next.print();
    }

    remove(arg, prev) {
        if (this.value === arg) {
            if (prev)
                prev.next = this.next;
            else
                this.value = undefined;
        } else {
            if (this.next)
                this.next.remove(arg, this);
        }
    }
}

let linkedlist = new LinkedList(1);

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);


linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};
