
        function jatekInditas() {
            jatekCiklus();
        }

        var ciklusok = 0;
        var lathatoSzemelyek = false;
        var jatekPontszam = 0;
        function jatekCiklus() {
            lathatoSzemelyek = !lathatoSzemelyek;
            szereploLetrehozas();
             ciklusok++;
             if(ciklusok < 12){
                setTimeout(jatekCiklus, lathatoSzemelyek ? 1000 : 3000);
             }
             else{
                alert("Összpontszám: " + jatekPontszam);
             }
        }
        

        function szereploLetrehozas(){
            var tabla = document.getElementById("tabla");
            var osztalyBeallito = lathatoSzemelyek ? "szereplo lathato" : "szereplo rejtett";
            for(var index = 0; index < 6; index++){
                tabla.children[index].className = osztalyBeallito;
                tabla.children[index].onclick = function() {
                    jatekPontszam += -2;
                }
            }
            
            var veletlenSzam = Math.floor(Math.random()*6)+1;
            tabla.children[veletlenSzam-1].onclick = function() {
                jatekPontszam++;
            }
            tabla.children[veletlenSzam-1].className = osztalyBeallito + " tolvaj";
        }
 