var a = null, b = null, o = null;

function lam_lai() {
    a = b = o = null;
}

function toan_tu(x) {
    o = x;
}

function toan_hang(x) {
    x = parseInt(x);
    if (a == null) a = x;
    else b = x;
}

function thuc_hien() {
    switch(o) {
        case '+':
            var kq = a + b;
            alert("Tổng: " + kq);
            break;
        case '-':
            var kq = a - b;
            alert("Hiệu: " + kq);
            break;
        case 'x':
            var kq = a * b;
            alert("Tích: " + kq);
            break;
        case ':':
            var kq = a / b;
            alert("Thương: " + kq);
            break;
        default:
            alert(o + ' không phải là toán tử');
            break;
        
    }
}