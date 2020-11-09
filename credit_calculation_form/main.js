function countLoan(){
    var amount = document.getElementById("txtLoanAmount").value;
    var maturity;
    //var vade = document.querySelectorAll("#listeVade").children.value;
    var list = document.querySelector("#listMaturity");
    maturity = list.options[list.selectedIndex].value;
    var repayment, monthlyInstallment;

    
    if(maturity==12){
        repayment=amount*1.1;
    }else if(maturity==24){
        repayment=amount*1.2;
    }else if(maturity==36){
        repayment=amount*1.3;
    }else{
        repayment=amount*1.4
    };
    
    monthlyInstallment=repayment/maturity;

    document.querySelector("#result").innerHTML="Repayment Amount: "+repayment+"<br>"+"Monthly Installment Amount :"+monthlyInstallment.toFixed(2);

}