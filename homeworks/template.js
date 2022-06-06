//kullanıcıdan aralık için bir değer alıyoruz
let input = prompt("hangi aralıkta olsun");
// alınan değeri int e çeviriyoruz
var input2 =parseInt(input);
var arr5 = [20];
console.log(input2);
var arr = [20];
// toplamlar için değişkenleri tanımladım.
var sum=0;
var sumOdd=0;
var sumEven=0;
//dizinin elemanlarının tamamına rastgele değer atamak için döngü oluşturdum
for(var i = 0 ; i < 20;i++)
{
    //kullanıcının belirttiği aralıkta değer üretilmesi için Math.random() * input2 kullandım.
    var temp = Math.random() * input2;
    // round ile tam sayı yaptım üretilen değerleri daha düzgün bir görünüm için
    arr5[i]=Math.round(temp);
    //array e atanan değerleri toplam değişkenine döngü içinde ekledim.
    sum += arr5[i];
    //çiftse if e girip çift sayıların toplamı değişkenine eklenecek 
    //eğer değilse else e girip teksayı toplamına eklenecek
    if(arr5[i]%2===0)
    {
        sumEven += arr5[i];
    }
    else{sumOdd += arr5[i];}
    //arrayin oluşan her indexine 1 ekleyip başka bir array'e aktardım.
    arr[i] = arr5[i]+1;
}
console.log(arr5);
// sort metodu sadece soldaki ilk sayıya bakarak sıralıyor hatalı bir sıralama oluşturuyor
//ancak sort kullanılması istendiği için sort kullandım.
console.log(arr5.sort());
// tekrar sıralama yapılan değerleri tersten konsola yazdırdım.
console.log(arr5.sort().reverse());
console.log("sayıların toplamı: "+ sum);
console.log("çift sayıların toplamı: "+ sumEven);
console.log("tek sayıların toplamı: "+ sumOdd);
console.log(arr);