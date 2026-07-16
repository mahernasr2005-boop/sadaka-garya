// مشاركة الموقع
const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {
    shareBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (navigator.share) {
            navigator.share({
                title: "صدقة جارية",
                text: "ادعُ بالرحمة للحاج مداح عطيه حسين",
                url: window.location.href
            });
        } else {
            alert("انسخ رابط الموقع وشاركه مع من تحب 🤍");
        }
    });
}

// رسالة ترحيب
window.onload = function () {
    console.log("رحم الله الحاج مداح عطيه حسين");
}
function count(id,max){

let number=document.getElementById(id);

let value=parseInt(number.innerHTML);


if(value < max){

value++;

number.innerHTML=value;

}

}


function resetCounter(id){

document.getElementById(id).innerHTML=0;

}
let tasbeehNumber = 0;

let currentZekr = "سبحان الله";


function tasbeeh(){

let target = document.getElementById("target").value;

if(target != 0 && tasbeehNumber >= target){
    return;
}

tasbeehNumber++;

document.getElementById("tasbeehCount").innerHTML = tasbeehNumber;

}




function resetTasbeeh(){

tasbeehNumber = 0;

document.getElementById("tasbeehCount").innerHTML = 0;

}




function selectZekr(name){

currentZekr = name;

document.getElementById("zekrName").innerHTML = name;

resetTasbeeh();

}




function changeZekr(){

let list=[
"سبحان الله",
"الحمد لله",
"الله أكبر",
"أستغفر الله",
"اللهم صل وسلم على نبينا محمد"
];


let random = Math.floor(Math.random()*list.length);


selectZekr(list[random]);

}
function shareSite(){

let shareData = {
    title: "صدقة جارية | الحاج مداح عطيه حسين",
    text: "نسألكم الدعاء للحاج مداح عطيه حسين بالمغفرة والرحمة 🤍",
    url: window.location.href
};


if(navigator.share){

    navigator.share(shareData);

}

else{

    navigator.clipboard.writeText(window.location.href);

    alert("تم نسخ رابط الموقع، يمكنك مشاركته الآن 🤍");

}

}