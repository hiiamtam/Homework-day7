var a,b,c,cvtg,dttg;
var x,y,cvhcn,dthcn;
var r,C,S;

a = window.prompt("Nhập vào chiều dài cạnh 1 của tam giác : ");
b = window.prompt("Nhập vào chiều dài cạnh 2 của tam giác : ");
c = window.prompt("Nhập vào chiều dài cạnh 3 của tam giác : ");
cvtg = a+b+c;
dttg = a*b*c;

x = window.prompt("Nhập vào chiều dài cạnh 1 của hình chữ nhật : ");
y = window.prompt("Nhập vào chiều dài cạnh 2 của hình chữ nhật : ");
cvhcn = (x+y)*2;
dthcn = x*y;

r = window.prompt("Nhập vào bán kính của hình tròn : ");
C = r*2*3.14;
S = (r**2)*3.14;

document.write(" Chu vi của hình tam giác là : ",cvtg);
document.write(" Diện tích của hình tam giác là : ",dttg);

document.write(" Chu vi của hình chữ nhật là : ",cvhcn);
document.write(" Diện tích của hình chữ nhật là : ",dthcn);

document.write(" Chu vi của hình tròn : ",C);
document.write(" Diện tích của hình tròn : ",S);


