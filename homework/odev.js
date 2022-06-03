//while a girmesi için 2 den küçük bir değer tanımladım.
var inputInt=1;
// 2 den küçükken döngü çalışıcak her seferinde yeni sayı isteyecek kural bozulana kadar.
while(inputInt<2)
{
    let input = prompt("enter a number","");
    //string değişkeni integer formatında depoladım.
    inputInt=parseInt(input);
    if(input>1){break;}//input 1 den büyük gelirse döngü kırılır bu noktada gereksiz yere alert çıkmaması için koydum.
    alert("you have to give input that need to be more than 1")
}
//44 de eşit değilken kod normal çalışıcak eşitse else bloğuna girip sonlanacak.
if(inputInt!=44)
{
    var i = 0;
   // console.log(inputInt+" kadar sayı vardır.");
    //1 den x e kadar olan sayıların formülü (aslında tek sayı + çift sayı toplamıda olabilirdi :D )
    //console.log("sayıların toplamı: "+ ((inputInt)*(inputInt+1))/2);
    var countForOdd = 0;
    var countForEven = 0;
    let textForOdd ="tek sayılar: ";
    let textForEven = "çift sayılar: ";
    var totalForOdd = 0 ;
    var totalForEven = 0 ;
    //input değişkenine kadar çalışıcak 0 dahil olmadığı için döngüyü 1 den başlattım.
    for( i=1; i < inputInt ; i++ )
    {
        //break yerine 7 ye eşitken ve 101 den küçükken çalışmasını sağladım.
        if(i!=7&& i<101)
        {
            // 2 ye bölündüğünde kalan 1 se tek sayıdır tek sayı counter'ını her seferinde artırarak sayabilirim
             if(i%2===1){
            countForOdd++;
            //text e her gelen yeni sayıyı ekleyerek string'in içinde tuttum.
            textForOdd=textForOdd + i + ", ";
            totalForOdd += i;
             }
        // 2 ye bölündüğünde kalan 1 se tek sayıdır geriye kalanları sayarsam onlarda çift sayı sayısını verir.
        else{
            countForEven++;
            textForEven = textForEven+ i+", ";
            totalForEven += i;}
        }
    } 
    console.log("sayıların toplamı: "+(totalForEven+textForOdd));
    console.log((countForEven+countForOdd)+" kadar sayı vardır.");
    
    console.log(countForOdd+ " tane tek sayı vardır");
    console.log(countForEven+ " tane çift sayı vardır.");

    console.log(textForOdd);
    console.log(textForEven);

    console.log("Tek sayılar toplamı: " + totalForOdd);
    console.log("Çift sayılar toplamı: " + totalForEven);
}
    else
    {
        var j=0;
        var node = 10;    
        let text="!";
        //gereksiz kısım sadece görsellik katmak amaçlı
        for(node;0<node;node--)
        {   
            console.log(text); 
            text="!"+text+"!";
        }
        //program sonlanıyor hata mesajını verip bu noktada.
        throw new Error("you have given the secret number as an input the program terminated!!!!!!!!!!! ");
    }
