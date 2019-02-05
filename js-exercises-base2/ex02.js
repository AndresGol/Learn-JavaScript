window.onload = function() {
   
    document.querySelector("#btn").addEventListener("click",surfdisk);

    function surfdisk(){
        rayon = parseFloat(prompt("Veuillez entrer le rayon du disque"));
        surf= Math.PI*(rayon**2);
        var conf = confirm("Voulez-vous la surface du disque?");
        if (conf = true) {
            alert("La surface du disque est de "+ surf);
        }
    
    }












}