clock();


function clock() {
    //現在の日時を取得
    var nowTime = new Date();

    //デジタル時計を更新
    updateDigitalClock(nowTime);

    //次の「0ミリ秒」に実行されるよう、次の描画処理を予約
    var delay = 1000 - new Date().getMilliseconds();
    setTimeout(clock, delay);
}

function updateDigitalClock(nowTime) {
    var AA_str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
    var YY = nowTime.getFullYear().toString().slice(-2);
    var MM = nowTime.getMonth() + 1;
    var DD = nowTime.getDate();
    var AA = nowTime.getDay();
    var hh = nowTime.getHours();
    var mm = nowTime.getMinutes();
    var ss = nowTime.getSeconds();

    //桁を合わせる

    if (MM < 10) { MM = "0" + MM; }
    if (DD < 10) { DD = "0" + DD; }
    if (hh < 10) { hh = "0" + hh; }
    if (mm < 10) { mm = "0" + mm; }
    if (ss < 10) { ss = "0" + ss; }

    var text = YY + '/' + MM + '/' + DD + ' (' + AA_str[AA] + ')<br>' + hh + ':' + mm + ':' + ss
    document.getElementById("digital_clock").innerHTML = text;
}