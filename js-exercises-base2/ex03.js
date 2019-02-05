window.onload = function() {
   
    document.querySelector("#btn").addEventListener("click",showresult);    
     a = 3;
     b = 2;

    function triple(x){
        return (x*3);
    }

    function showresult(e){
        e.preventDefault;
        alert(triple(a))
        alert(triple(b))
    }    












}