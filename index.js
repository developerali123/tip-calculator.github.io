document.getElementById("cal").addEventListener("click",function(){
    var amount=document.getElementById("amount").value;
var percentage=document.getElementById("percentage").value;
if(amount==""||percentage==""){
    alert("please fill these input boxes");
    return false;
}
var tip=amount*(percentage/100);
var total=Number(amount)+tip;
    document.getElementById("tip").value=tip;
    document.getElementById("total").value=total;
})