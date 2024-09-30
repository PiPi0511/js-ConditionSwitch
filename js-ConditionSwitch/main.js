// Nhập a từ người dùng
var a = parseInt(prompt("Nhập a:"));
switch (true) {
    case (a > 0):
        document.write(a + " là số nguyên dương.");
        break;
    case (a < 0):
        document.write(a + " là số nguyên âm.");
        break;
    default:
        document.write(a + " là số 0.");
}
document.write("<br>" + "************<br>");

// Kiểm tra n chia hết cho 3 và 5
var n = parseInt(prompt("Nhập n:"));
switch (true) {
    case (n % 3 === 0 && n % 5 === 0):
        document.write(n + " chia hết cho cả 3 và 5");
        break;
    case (n % 3 === 0):
        document.write(n + " chia hết cho 3");
        break;
    case (n % 5 === 0):
        document.write(n + " chia hết cho 5");
        break;
    default:
        document.write(n + " không chia hết cho 3 và 5");
}
document.write("<br>" + "************<br>");

// Kiểm tra số ngày của tháng bằng switch
var month = parseInt(prompt("Nhập vào tháng (1-12):"));
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        document.write("Tháng " + month + " có 31 ngày.");
        break;
    case 4: case 6: case 9: case 11:
        document.write("Tháng " + month + " có 30 ngày.");
        break;
    case 2:
        var year = parseInt(prompt("Nhập vào năm:"));
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            document.write("Tháng 2 của năm " + year + " có 29 ngày (năm nhuận).");
        } else {
            document.write("Tháng 2 của năm " + year + " có 28 ngày.");
        }
        break;
    default:
        document.write("Tháng không hợp lệ! Vui lòng nhập số từ 1 đến 12.");
}
document.write("<br>" + "************<br>");

// Giải phương trình bậc 2 bằng switch
var a = parseFloat(prompt("Nhập hệ số a:"));
var b = parseFloat(prompt("Nhập hệ số b:"));
var c = parseFloat(prompt("Nhập hệ số c:"));

switch (true) {
    case (a === 0):
        if (b === 0) {
            if (c === 0) {
                document.write("Phương trình có vô số nghiệm.");
            } else {
                document.write("Phương trình vô nghiệm.");
            }
        } else {
            var x = -c / b;
            document.write("Phương trình có nghiệm x = " + x.toFixed(2));
        }
        break;
    default:
        var delta = b * b - 4 * a * c;
        switch (true) {
            case (delta < 0):
                document.write("Phương trình vô nghiệm.");
                break;
            case (delta === 0):
                var x = -b / (2 * a);
                document.write("Phương trình có nghiệm kép x = " + x.toFixed(2));
                break;
            default:
                var x1 = (-b + Math.sqrt(delta)) / (2 * a);
                var x2 = (-b - Math.sqrt(delta)) / (2 * a);
                document.write("Phương trình có 2 nghiệm phân biệt:<br>");
                document.write("x1 = " + x1.toFixed(2) + "<br>");
                document.write("x2 = " + x2.toFixed(2));
        }
}
document.write("<br>" + "************<br>");

// Kiểm tra 3 cạnh của tam giác bằng switch
var a = parseFloat(prompt("Nhập cạnh a:"));
var b = parseFloat(prompt("Nhập cạnh b:"));
var c = parseFloat(prompt("Nhập cạnh c:"));

switch (true) {
    case (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a):
        document.write(a + ", " + b + ", " + c + " là ba cạnh của một tam giác.");
        break;
    default:
        document.write(a + ", " + b + ", " + c + " không phải là ba cạnh của một tam giác.");
}
