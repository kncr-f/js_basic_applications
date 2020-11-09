function yillar(){
   
    var tarih = new Date();
    var yil=tarih.getFullYear();
    
    for(var i=yil;i>=1950;i--){
        var option=document.createElement("option");
        document.getElementById("aracYili").appendChild(option);
        option.value=i;
        option.text=i;

    }
}

function vergiHesapla(){
    var aracTipi, motorGucu, aracYili, vergi, i;

    //1. döngu blogu arac tipi secimini alma
    for(i=0;i<document.getElementById("aracTipi").length;i++){
    

        if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi=document.getElementById("aracTipi").options[i].value;
           
        }
       
    }

    //2. döngü blogu motor gücü secimi

    for(i=0;i<document.getElementsByName("motorGuc").length;i++){
        if(document.getElementsByName("motorGuc")[i].checked){
            motorGucu=document.getElementsByName("motorGuc")[i].value;
            console.log(motorGucu);
        }
     
    }

    //3. döngü blogu arac yili secimi

    for(i=0;i<document.getElementById("aracYili").length;i++)
        {
            if(document.getElementById("aracYili").options[i].selected)
            {
            aracYili = document.getElementById("aracYili").options[i].value;
            console.log(aracYili);
            }
            
    }

    


    //1. kontrol blogu arac tipi
    if(aracTipi=="otomobil"){
        vergi=200;
    }else if(aracTipi=="motorsiklet"){
        vergi=100;
    }

    
    //2. kontrol blogu motor gücü
    if(motorGucu=="1000cc-1600cc"){
        vergi= vergi + 50;
    } else if(motorGucu=="1600cc-2000cc"){
        vergi= vergi + 100;
    }else if(motorGucu=="2001cc"){
        vergi= vergi + 150;
    }

 
//3. kontrol blogu model yili
if(aracYili<=2005){
    vergi = vergi-25;
}


document.getElementById("sonuc").innerHTML="Ödemeniz gereken vergi :"+vergi+" TL";

}