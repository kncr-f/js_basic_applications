// // Girdi Degiskenleri
// var urunTipi, urunCesidi, urunAdedi, taksitSayisi;

// //Cikti Degiskenleri
// var fiyat, araToplam, kargoUcreti;

// //Global Döngü Degiskenleri
// var i;

// //Global Nesne Degiskenleri
// var liste, secenek;

// //Dizi Tipindeki Degiskenler
// var erkekParfumleri=["Celvin Clein",100,"Lacoste",120,"Axe",30,"First Class",50];
// var kadinParfumleri=["Burbery",150,"Avon",80,"She",60,"Nina Ricci",130];


// function urunAdediDoldur(){
    
//     for(i=0;i<=10;i++){
//             secenek=document.createElement("option");
//             liste=document.getElementById("urunAdedi");
//             liste.options.add(secenek);
//             secenek.text=i;
//             secenek.value=i;
           

//     }
   
// }

// function urunTaksidiDoldur(){

//     for(i=0;i<=12;i=i+3){
//             secenek=document.createElement("option");
//             liste=document.getElementById("urunTaksidi");
//             liste.options.add(secenek);
//             secenek.text=i;
//             secenek.value=i;
        

//     }
    
// }




// function urunGetir()
// {
//     document.querySelectorAll("#urunListesi option").forEach(option => option.remove())

// liste=document.getElementsByName("urunTipi");
//     for(i=0;i<liste.length;i++){
//         if(liste[i].checked){
//             urunTipi=liste[i].value;
//         }
        
//     }
//     console.log(urunTipi);
//     if(urunTipi=="E"){
//         for(i=0;i<erkekParfumleri.length;i=i+2)
//         {
//             secenek=document.createElement("option");
//             liste=document.getElementById("urunListesi");
//             liste.options.add(secenek);
//             secenek.text=erkekParfumleri[i];
//             secenek.value=erkekParfumleri[i+1];




//         }

//     }else if(urunTipi=="K"){

//         for(i=0;i<kadinParfumleri.length;i=i+2)
//         {
//             secenek=document.createElement("option");
//             liste=document.getElementById("urunListesi");
//             liste.options.add(secenek);
//             secenek.text=kadinParfumleri[i];
//             secenek.value=kadinParfumleri[i+1];




//         }
//     }

// }

