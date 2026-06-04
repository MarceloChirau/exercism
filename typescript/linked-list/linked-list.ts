class Node<T>{
  public data: T;
  public next:Node<T> | null=null;
  public prev: Node<T> | null=null;

  constructor(value:T){
    this.data=value;

  }
}


export class LinkedList<TElement> {
  public head: Node<TElement> | null=null;


  public push(element: TElement):void {
const newNode=new Node(element);

//if the list is completely empty
if(this.head===null){
  this.head=newNode;
  return;
}
// if the list has items,, we must go to th end:
let current=this.head;
while(current.next!==null){
  current=current.next;// move to next link
}
//here at this point current.next reached the end, exited the loop,
//  so we will put there the new node:
current.next=newNode;
newNode.prev=current //and newNode points left to  old last node

  }

  public pop(): TElement | undefined {
// in case list is empty:
if(this.head===null){
  return undefined;
}
//in case there is only one item in the list:
if(this.head.next===null){
  const value=this.head.data;
  this.head=null;
  return value;
}
// we walk to the last node:
let current=this.head;
while(current.next!==null){
  current=current.next;// we go through the list till the end
}
// here we reached the end and exited the loop:
const value=current.data // we store the data in value variable
//go to the second-to-last node and disconnect it right hand
if(current.prev){
  current.prev.next=null;
}
return value;

  }

  public shift(): TElement |undefined {
// in case list is empty:
if(this.head===null){
  return undefined;
}
//in case there is only one item in the list:
if(this.head.next===null){
  const value=this.head.data;
  this.head=null;
  return value
}

// we will store temp the head into a temp variable so we can grab its data later:
let temp=this.head;

//move head to the next node
this.head=this.head.next
//set prev of the new head to null,, it should point to null because it is head now:
if(this.head!==null){
this.head.prev=null;
}
return temp.data;

  }

  public unshift(element: TElement):void {
const newNode=new Node(element);
//if list is empty,new node just becomes the head
if(this.head===null){
  this.head=newNode;
  return;
}
// we add the new node up in the front of the current head:
newNode.next=this.head;// New node points right to old head;
this.head.prev=newNode // old head points left to new node
this.head=newNode;// make the new node the official head;

  }

  public delete(element: TElement):void {
    if(this.head===null){return }

// let temp=this.head;
if(this.head.data===element){
  this.head=this.head.next;//we move forward

if(this.head!==null){
  this.head.prev=null;//clear the backward link of the new head
}
return;
}
//in case the element is somwhere in the middle or at the end:
let current: Node<TElement> | null=this.head;
while(current!==null && current.data!==element){
  current=current.next;
}

if(current===null){
  return;
}

if(current.prev!==null){
  current.prev.next=current.next;
}
if(current.next!==null){
  current.next.prev=current.prev;
}

  }

  public count(): number {
    let size:number=0;
    let current=this.head;


while(current!==null){
  size++;
  current=current.next;// we go to next link..
  
}
//at this point we reached this.head.next == null so we will show the counter
return size;
  }
}
