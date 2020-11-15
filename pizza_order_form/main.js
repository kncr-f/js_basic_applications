var urunListesi=["Small",20,"Middle",30,"Large",40,"X Large",50];

function urunGetir(){
    for(i=0;i<urunListesi.length;i=i+2){
        secenek=document.createElement("option");
        liste=document.getElementById("listePizza");
        liste.options.add(secenek);
        secenek.text=urunListesi[i];
        secenek.value=urunListesi[i+1];
    }
    
}
var secenek, liste,i;

document.addEventListener("change",pizzaHesapla);

function toogle(){
    liste=document.getElementsByName("grupIndirim");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            if(liste[i].value=="aktif"){
                document.getElementById("txtIndirimKodu").disabled=false;
            }else if(liste[i].value=="pasif"){
                document.getElementById("txtIndirimKodu").value="";
                document.getElementById("txtIndirimKodu").disabled=true;

            }

            }
            
    }
    
}
function pizzaHesapla(){
    var pizzaFiyati,girilenKod,odenecekTutar,malzeme;
    const indirimKodu = "PROMO";
    

    liste=document.getElementById("listePizza");
    secenek=liste[liste.selectedIndex].value;
    pizzaFiyati=parseInt(secenek);
    odenecekTutar=pizzaFiyati;
    console.log(pizzaFiyati);

    liste=document.getElementsByName("grupEkMalzeme");
    document.querySelectorAll('#listeEkSecimler option').forEach(option => option.remove());
     for(i=0;i<liste.length;i++)
     {
         if(liste[i].checked)
            {
                
             odenecekTutar=odenecekTutar+2;


             malzeme=liste[i].value;
             
             
             secenek=document.createElement("option");
             document.getElementById("listeEkSecimler").options.add(secenek);
             secenek.text=malzeme;

            }
     }

     if(document.getElementById("kodTrue").checked){


        girilenKod=document.getElementById("txtIndirimKodu").value;
        if(girilenKod==indirimKodu){
       
            odenecekTutar=odenecekTutar-5;
            document.getElementById("dogrulama").innerHTML="5 TL idirim kazandiniz";

           }
           else{
              document.getElementById("dogrulama").innerHTML="Lütfen gecerli bir kod giriniz";
              
           }




     }
     

        document.getElementById("sonuc").innerHTML="Ödenecek Tutar: "+odenecekTutar;

}