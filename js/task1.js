var x =25;
var r =0;
if(x<0 && (x%10 ==0 &&x!=0)){
    console.log("no");
}
    else if (x>1000){
        r=r*10 + x%10;
        x=x/10;
        console.log("yes");  
    }

//bu sekilde yaza bildim amma cavab cixmir sebebin anlamadim deye bele saxladim.