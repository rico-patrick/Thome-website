
const Promise = require('promise');
var firebaseConfig = {
    apiKey: "AIzaSyBEcbgLF4-dHa-IjGI7_agf8tZMTuL8kSU",
    authDomain: "thome-d4776.firebaseapp.com",
    databaseURL: "https://thome-d4776-default-rtdb.firebaseio.com",
    projectId: "thome-d4776",
    storageBucket: "thome-d4776.appspot.com",
    messagingSenderId: "1053400070048",
    appId: "1:1053400070048:web:6fbe500a6276b6842c56c5",
    measurementId: "G-6MTSGT94M3"
};
firebase.initializeApp(firebaseConfig);
let firebaseRef1 = firebase.database().ref("LIGHT1_STATUS");
let firebaseRef2 = firebase.database().ref("LIGHT2_STATUS");
let firebaseRef3 = firebase.database().ref("LIGHT3_STATUS");
let firebaseRef4 = firebase.database().ref("LIGHT4_STATUS");


var light1on = document.getElementById('light1on');
var light2on = document.getElementById('light2on');
var light3on = document.getElementById('light3on');
var light4on = document.getElementById('light4on');

var light1off = document.getElementById('light1off');
var light2off = document.getElementById('light2off');
var light3off = document.getElementById('light3off');
var light4off = document.getElementById('light4off');

firebaseRef1.on('value', function (snap) {
    promise= new Promise((resolve, reject) => {
        var data1 = snap.val();
        console.log(data1 + "1");
        resolve (data1);
    });
});

firebaseRef2.on('value', function (snap) {
    var data2 = snap.val();
    console.log(data2 + "2");
});

firebaseRef3.on('value', function (snap) {
    var data3 = snap.val();
    console.log(data3 + "3");
});

firebaseRef4.on('value', function (snap) {
    return new Promise((resolve, reject) => {
        var data4 = snap.val();
        console.log(data4 + "4");
        resolve (data4);
    });

});

function color(data) {
    console.log(data + "hlw");    
    /*if(data1 === "ON"){
        console.log(data1 + "Heyy")
        light1on.style.backgroundColor = "green";
    } else {
        light1on.style.backgroundColor = "";
    }
    if (data2 === "ON") {
        light2on.style.backgroundColor = "green";
    } else {
        light2on.style.backgroundColor = "";
    }
    if (data3 === "ON") {
        light3on.style.backgroundColor = "green";
    } else {
        light3on.style.backgroundColor = "";
    }
    if (data4 === "ON") {
        light4on.style.backgroundColor = "green";
    } else {
        light4on.style.backgroundColor = "";
    }
    return light1on, light2on, light3on, light4on;*/
}

promise.then(
    color(data1));
//On Button Actions

light1on.onclick = function () {
    firebaseRef1.set("ON");
};

light2on.onclick = function () {
    firebaseRef2.set("ON");
};

light3on.onclick = function () {
    firebaseRef3.set("ON");
};

light4on.onclick = function () {
    firebaseRef4.set("ON")
};
//Off button Actions
light1off.onclick = function () {
    firebaseRef1.set("OFF");
};

light2off.onclick = function () {
    firebaseRef2.set("OFF");
};

light3off.onclick = function () {
    firebaseRef3.set("OFF");
};

light4off.onclick = function () {
    firebaseRef4.set("OFF");
};
