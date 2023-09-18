var x,y;

x = window.prompt("Nhập vào chiều cao của bạn (cm) : ");
y = window.prompt("Nhập vào cân nặng của bạn (kg) : ");
document.write("Chỉ số BMI của bạn là : ",y/((x/100)**2));