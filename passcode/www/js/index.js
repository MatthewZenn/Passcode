document.addEventListener('deviceready', onDeviceReady, false);

var key = 2

function onDeviceReady() {
    document.getElementById('deviceready').classList.add('ready');
    set();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("one").addEventListener("click", code);
document.getElementById("two").addEventListener("click", code);
document.getElementById("three").addEventListener("click", code);
document.getElementById("four").addEventListener("click", code);
document.getElementById("five").addEventListener("click", code);
document.getElementById("six").addEventListener("click", code);
document.getElementById("seven").addEventListener("click", code);
document.getElementById("eight").addEventListener("click", code);
document.getElementById("nine").addEventListener("click", code);
document.getElementById("zero").addEventListener("click", code);
document.getElementById("exbtn").addEventListener("click", clear);
document.getElementById("submit").addEventListener("click", check);

function code() {
        document.getElementById("timber").innerHTML += (Number(this.value) + key) % 10;
}

function check() {
    if (document.getElementById("timber").innerHTML.length == 4) {
        if (document.getElementById("timber").innerHTML == document.getElementById("code").innerHTML){
            document.getElementById("timber").style.color = 'black';
            setTimeout( () => {
                set();
            }, 1000);
        }
        else return;
    }
    else return;
}

function set() {
    key = Math.floor(Math.random() * (9 - 0) + 0)
    document.getElementById("timber").innerHTML = "";
    document.getElementById("timber").style.color = 'white';
    document.getElementById('code').innerHTML = Math.floor(1000 + Math.random() * 9000)
}

function clear() {
    document.getElementById("timber").innerHTML = "";
    document.getElementById("timber").style.color = 'white';
}
