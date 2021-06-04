document.getElementById('nen2').style.display = 'none';
      
function enter(){
    document.getElementById('nen1').style.display= 'none';
    document.getElementById('nen2').style.display= 'block';
    nam122 = +document.getElementById('yy1').value;
    nu12 = +document.getElementById('yy2').value;
      nu1 = nu12 % 10
      nu2 = nu12 % 12
      nam1 = nam122 % 10
      nam2 = nam122 % 12 
      switch (nam1){
        case 0: kq1 = "Canh";
                        break;
        case 1: kq1 = "Tân";
                        break;
        case 2: kq1 = "Nhâm";
                        break;
        case 3: kq1 = "Qúy";
                        break;
        case 4: kq1 = "Giáp";
                        break;
        case 5: kq1 = "Ất";
                        break;
        case 6: kq1 = "Bính";
                        break;
        case 7: kq1 = "Đinh";
                        break;
        case 8: kq1 = "Mậu";
                        break;
        case 9: kq1 = "Kỷ";
                        break;}
    switch(nam2){
        case 0: kq1 += " Thân";
                        break;
        case 1: kq1 += " Dậu";
                        break;
        case 2: kq1 += " Tuất";
                        break;
        case 3: kq1 += " Hợi";
                        break;
        case 4: kq1 += " Tý";
                        break;
        case 5: kq1 += " Sửu";
                        break;
        case 6: kq1 += " Dần";
                        break;
        case 7: kq1 += " Mẹo";
                        break;
        case 8: kq1 += " Thìn";
                        break;
        case 9: kq1 += " Tỵ";
                        break;
        case 10: kq1 += " Ngọ";
                        break;
        case 11: kq1 += "Mùi";
                        break;}  
    switch (nu1){
         case 0: kq2 = "Canh";
                         break;
         case 1: kq2 = "Tân";
                         break;
         case 2: kq2 = "Nhâm";
                         break;
         case 3: kq2 = "Qúy";
                         break;
         case 4: kq2 = "Giáp";
                         break;
         case 5: kq2 = "Ất";
                         break;
         case 6: kq2 = "Bính";
                         break;
         case 7: kq2 = "Đinh";
                         break;
         case 8: kq2 = "Mậu";
                         break;
         case 9: kq2 = "Kỷ";
                         break;}
    switch(nu2){
         case 0: kq2 += " Thân";
                         break;
         case 1: kq2 += " Dậu";
                         break;
         case 2: kq2 += " Tuất";
                         break;
         case 3: kq2 += " Hợi";
                         break;
         case 4: kq2 += " Tý";
                         break;
         case 5: kq2 += " Sửu";
                         break;
         case 6: kq2 += " Dần";
                         break;
         case 7: kq2 += " Mẹo";
                         break;
         case 8: kq2 += " Thìn";
                         break;
         case 9: kq2 += " Tỵ";
                         break;
         case 10: kq2 += " Ngọ";
                         break;
         case 11: kq2 += "Mùi";
                         break;}  
    document.getElementById('nu1').innerHTML = 'Nữ sinh năm:'+ kq2;
    document.getElementById('nam12').innerHTML = 'Nam sinh năm:'+ kq1;
    let dd1 = +document.getElementById('dd1').value;
let mm1 = +document.getElementById('mm1').value;
let yy1 = +document.getElementById('yy1').value;
let dd2 = +document.getElementById('dd2').value;
let mm2 = +document.getElementById('mm2').value;
let yy2 = +document.getElementById('yy2').value;
let tennam = document.getElementById('tennam').value;
let tennu = document.getElementById('tennu').value;
 namm = (dd1*mm1+yy1) % 400
 nuu = (dd2*mm1+yy1) % 400
 

    if (dd1==12 && mm1==10 && yy1==2002 && dd2==31 && mm2==3 && yy2==2006){
        document.getElementById('note').innerHTML = 'Cặp đôi này rất hợp!' +'Chỉ có thể nói rằng 2 bạn là thuộc về nhau'+'Nên hãy gữi mối quan hệ ấy đừng buông bỏ nhé!'+tennam+'&'+tennu+'Hãy bên nhau đến già nhé!'
    }
    if (dd2==12 && mm2==10 && yy2==2002 && dd1==31 && mm1==3 && yy1==2006){
       document.getElementById('note').innerHTML = 'Cặp đôi này rất hợp!' +'Chỉ có thể nói rằng 2 bạn là thuộc về nhau!!'+'Nên hãy gữi mối quan hệ ấy đừng buông bỏ nhé!'+tennam+'&'+tennu+'Hãy bên nhau đến già nhé!'
   }

}
function ve(){
    document.getElementById('nen2').style.display= 'none';
    document.getElementById('nen1').style.display= 'block';
}
    


    
