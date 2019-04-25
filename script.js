let arr = ["0984076492","0378744108","01325"];
for (let i = 0;i<arr.length;i++){
    let rep =/^([0-9])([0-9]{9}$)/;;
    let check = rep.test(arr[i]);
    if(check){
        alert(arr[i]);
    }
}