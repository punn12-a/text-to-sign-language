function convertToSign() {
    let text = document.getElementById("text-input").value.trim();
    
    if (text === "") {
        alert("กรุณาป้อนข้อความ!");
        return;
    }

    // จำลองการแสดงภาษามือ (ในอนาคตเชื่อมกับโมเดล 3D)
    document.getElementById("sign-output").innerHTML = `<p>กำลังแสดงภาษามือสำหรับ: "${text}"</p>`;
}
