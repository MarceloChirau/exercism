class Node{
    constructor(value){
        this.data=value;
        this.prev=null;
        this.next=null;

    }
}

//create the first node (head of the list):
let head=new Node(10);

//create and link the second node:
head.next=new Node(20);
head.next.prev=head;

//create and link the third node:
head.next.next=new Node(30);
head.next.next.prev=head.next;

//create the fourth node:
head.next.next.next=new Node(40);
head.next.next.next.prev=head.next.next;

//a function to add some node at the end:
function add(value,node){
    //if list is empty, return
    if(node===null){
        console.log('the node is null!')
        return;
    }

    let current=node;
    while(current.next!==null){
        current=current.next;// we go to next link;

    }
    //here we reached the end;
// so we will create a brand new node for value:
let newNode=new Node(value);

    current.next=newNode;// so we add the value to the last

newNode.prev=current

let temp=node;

while(temp!==null){
   
console.log("temp.data:",temp.data)

    temp=temp.next
}


}
add(50,head);











// let temp=head;

// while(temp!==null){
   
// console.log("temp.data:",temp.data)

//     temp=temp.next
// }


