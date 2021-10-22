let items = document.querySelectorAll(".tabs .tab-navigation .tab-nav-titel");

items.forEach((item)=>{
    item.addEventListener("click" , function(){
        document.querySelector(".tabs .tab-navigation div[class=selected]")
                .classList.remove("selected");
        item.parentNode.classList.add("selected");

        let dataBox = item.getAttribute("data-content");
        
        document.querySelector(".tabs .tab-content .tab-content-text.selected")
                .classList.remove("selected");
        document.querySelector(`.tabs .tab-content .tab-content-text[data-content=${dataBox}]`)
                .classList.add("selected");

    })
})