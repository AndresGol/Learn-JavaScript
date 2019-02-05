window.onload = function() {
    document.querySelector("#btn1").addEventListener("click",surface);
    document.querySelector("#btn2").addEventListener("click",perimetre);


    function surface(){
        long = parseInt(prompt("Veuillez entrer la longueur du rectange"));
        larg = parseInt(prompt("Veuillez entrer la largeur du rectange"));
        surf = (long*larg);
        alert("La surface du rectange est de "+ surf);
    }
    
    function perimetre(){
        long = parseInt(prompt("Veuillez entrer la longueur du rectange"));
        larg = parseInt(prompt("Veuillez entrer la largeur du rectange"));
        peri = ((long*2)+(larg*2));
        alert("Le perimetre du rectange est de "+ peri);
    }













}