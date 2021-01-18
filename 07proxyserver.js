let http = require("http");

http.createServer((req, res) => {
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.open("get", "https://suggest.taobao.com/sug?code=utf-8&q=%E7%A7%8B%E8%A3%85")
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send();
    res.end("ok")

}).listen(9999)