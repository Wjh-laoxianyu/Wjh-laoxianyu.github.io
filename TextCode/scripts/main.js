// let myHeading = document.querySelector('h1');//类似获取控件ID
// myHeading.textContent = 'This is my'+' first page';//为ID赋值

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate'){
//     alert('我最喜欢巧克力冰激凌了');
// }else{
//     alert('但是巧克力才是我的最爱');//警告窗
// }


// function multiply(num1,num2){
//     let result = num1*num2;
//     return result;
// }//函数



// document.querySelector("html").addEventListener("click",function(){
//     alert("触发点击事件1");
// })

// document.querySelector("html").addEventListener("click",()=>{
//     alert("触发点击事件2");
// });



let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/OET.jpg'){
        myImage.setAttribute('src','images/OIP-C.jpg');
    }else{
        myImage.setAttribute('src','images/OET.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
    let myName = prompt('请输入你的名字。');//与alert类似
    localStorage.setItem('name',myName);//调用 localStorage API，它可以将数据存储在浏览器中供后续获取
    myHeading.textContent = 'Mozilla 牛皮,' + myName;
    if(!localStorage.getItem('name')){
        setUsername();
    }else{
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 牛皮,' + storedName;
    }
}

myButton.onclick = ()=>{
    setUsername();
}