$('#btn2').click(function() {
    $.ajax({
        url: "https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh",
        dataType: "json",
        success: function(data) {
            let timestamp = data.unixtime * 1000;
            let date = new Date(timestamp).toLocaleString('vi', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            let getH = date.split(',')[0].split(':')[0];

            if (openTime(23,4).indexOf(getH) == -1) {
                console.log("暫時不開放連結")
            } else {
                console.log("連結已開放");
                window.open('https://www.awin77.com/')
            }
        },
    });
})

function openTime(start,end) {
    let opEnd = end;
    let opNum = start;
    let timeList = []

    timeList.push(opNum.toString())
    for (let i = 0; opNum != opEnd; i++) {
        opNum == 23 ? opNum = 0 : opNum++
            timeList.push(opNum.toString())
    }
    // console.log(`開放時間：${timeList} (時)`)
    return timeList;
}