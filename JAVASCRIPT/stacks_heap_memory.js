//memory: stacks , heaps
/*
stack(primitive ), heap(non primitive)
*/
let myname="ariyan"

let anoname=myname
anoname=("md")
console.log(anoname);
console.log(myname);//stacks->val diff

let user={
    email:"ar@sa.gmail",
    upi:" sa57"
}
let usertwo=user
usertwo.email="sa@57"
console.log(user.email);
console.log(usertwo.email);//heaps->val=same
