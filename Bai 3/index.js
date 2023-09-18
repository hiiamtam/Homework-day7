var a;

a = window.prompt("Nhập vào 1 số : ");

if (Math.sqrt(a) % 1 == 0) {
    alert("Số " + a + " là số chính phương");
}
else {
    alert("Số " + a + " không phải là số chính phương");
}
