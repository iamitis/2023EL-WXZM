const appid = '20230524001687475';
const key = 'MyXHUTWbm3EsnrPqP3Wn';
const salt = (new Date).getTime();
const from = 'auto';
const toLanguageSelect = document.getElementById('toLanguageSelect');
let to = 'zh';
const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate';

// 获取目标语言。
// 通过'onchange'获取当前选项的值。
toLanguageSelect.onchange = getToLangValue;
function getToLangValue() {
    var index = toLanguageSelect.selectedIndex;
    to = toLanguageSelect.options[index].value;
}

const translation = document.getElementById('translation');

$("#starTranslate").click(function (){
    let contents = $("#transcription").val();
    let str1 = appid + contents + salt +key;
    let sign = MD5(str1);

    $.ajax({
        type: "get",
        async: false,
        url: "https://api.fanyi.baidu.com/api/trans/vip/translate",
        dataType: "jsonp",
        data: {
            q: contents,
            from: from,
            to: to,
            appid: appid,
            salt: salt,
            sign: sign
        },
        success: function (data) {
            console.log(data);
            $("#translation").empty();
            for (var i = 0; i < data.trans_result.length; i++) {
                $("#translation").append(data.trans_result[i].dst + " <br />");
            }
        },
        error: function () {
            alert('Fail to translate with baidu API!');
        }
    })
});