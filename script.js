const signDictionary = {
    "สวัสดี": "images/hello.gif",
    "ขอบคุณ": "images/thankyou.gif",
    "ใช่": "images/yes.gif",
    "ไม่ใช่": "images/no.gif",
    "กิน": "images/eat.gif",
    "ดื่ม": "images/drink.gif",
    "รัก": "images/love.gif",
    "ช่วยด้วย": "images/help.gif"
};

function convertToSign() {
    let input = document.getElementById("inputText").value.trim();
    let signDisplay = document.getElementById("signDisplay");

    if (signDictionary[input]) {
        signDisplay.innerHTML = `<img src="${signDictionary[input]}" alt="${input}" width="200">`;
    } else {
        signDisplay.innerHTML = `<p>ไม่มีภาษามือสำหรับ "${input}"</p>`;
    }
}
