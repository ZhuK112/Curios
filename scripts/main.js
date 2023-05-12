let myImage = document.querySelector('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/goog.png'){
        myImage.setAttribute('src','images/chr.png');
    } else {
        myImage.setAttribute('src','images/goog.png');
    }

}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Vibirai ,' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Vibirai ,' + storedName;
}
myButton.onclick = function (){
    setUserName();
}