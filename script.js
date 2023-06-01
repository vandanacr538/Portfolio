window.onload=function(){
    let myul=document.getElementById("headerul");
    let items=myul.getElementsByClassName("items");
    for(let i=0;i<items.length;i++){
        items[i].addEventListener("click", function(){
            for(let j=0;j<items.length;j++){
                if(items[j].className.includes("active")){
                    items[j].className="items";
                }
            }
            items[i].className="items active";
            if(items[i].id==2){
                document.getElementById("edu").scrollIntoView({
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                });
            }
            if(items[i].id==3){
                document.getElementById("wrk").scrollIntoView({
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                });
            }
            if(items[i].id==4){
                document.getElementById("prtfol").scrollIntoView({
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                });
            }
            if(items[i].id==5){
                document.getElementById("rcm").scrollIntoView({
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                });
            }
            if(items[i].id==6){
                document.getElementById("cont").scrollIntoView({
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                });
            }
            if(items[i].id==1){
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            }   
        });
    }
}
function navigateLeft(){
    let scrollVlaue=document.getElementById("cards").offsetWidth;
    document.getElementById("cards").scrollBy({
        top: 0,
        left: -scrollVlaue,
        behavior: "smooth", 
    })
}
function navigateRight(){
    let scrollVlaue=document.getElementById("cards").offsetWidth;
    document.getElementById("cards").scrollBy({
        top: 0,
        left: scrollVlaue,
        behavior: "smooth", 
    })
}