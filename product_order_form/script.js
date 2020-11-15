// Girdi Degiskenleri
var urunTipi, urunFiyati, urunAdedi, taksitSayisi;

//Cikti Degiskenleri
var toplamFiyat, araToplam, kargoUcreti=7;

//Global Döngü Degiskenleri
var i;

//Global Nesne Degiskenleri
var liste, secenek;

//Dizi Tipindeki Degiskenler
var erkekParfumleri=["Celvin Clein",100,"Lacoste",120,"Axe",30,"First Class",50];
var kadinParfumleri=["Burbery",150,"Avon",80,"She",60,"Nina Ricci",130];


function urunAdediDoldur(){
    
    for(i=0;i<=10;i++){
            secenek=document.createElement("option");
            liste=document.getElementById("urunAdedi");
            liste.options.add(secenek);
            secenek.text=i;
            secenek.value=i;
           

    }
   
}

function urunTaksidiDoldur(){

    for(i=0;i<=12;i=i+3){
            secenek=document.createElement("option");
            liste=document.getElementById("urunTaksidi");
            liste.options.add(secenek);
            secenek.text=i;
            secenek.value=i;
        

    }
    
}




function urunGetir()
{
    document.querySelectorAll("#urunListesi option").forEach(option => option.remove())

liste=document.getElementsByName("urunTipi");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            urunTipi=liste[i].value;
        }
        
    }
    console.log(urunTipi);
    if(urunTipi=="E"){
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];




        }

    }else if(urunTipi=="K"){

        for(i=0;i<kadinParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kadinParfumleri[i];
            secenek.value=kadinParfumleri[i+1];




        }
    }

}

function hesapla(){
    liste=document.getElementById("urunListesi");
    urunFiyati=liste[liste.selectedIndex].value;
    console.log(urunFiyati);

    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;
    console.log(urunAdedi);

    liste=document.getElementById("urunTaksidi");
    taksitSayisi=liste[liste.selectedIndex].value;
    console.log(taksitSayisi);

    araToplam=urunFiyati*urunAdedi;

    if(taksitSayisi==3)
    {
        araToplam=araToplam*1.1;
    }
    else if(taksitSayisi==6)
    {
        araToplam=araToplam*1.2;
    }
    else if(taksitSayisi==9)
    {
        araToplam=araToplam*1.3;
    }
    else if(taksitSayisi==12)
    {
        araToplam=araToplam*1.4;
    }

    console.log(araToplam.toFixed(2));
    document.getElementById("txtAraToplam").value=araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value=urunFiyati;

    if(araToplam<100){

        document.getElementById("txtKargo").value=kargoUcreti;
        toplamFiyat=araToplam+kargoUcreti;

    }else if(araToplam>=100){
        document.getElementById("txtKargo").value=0;
        toplamFiyat=araToplam;
    }


console.log(toplamFiyat);
document.getElementById("sonuc").innerHTML="Ödemeniz Gereken Tutar :"+toplamFiyat +"TL dir.";

}

