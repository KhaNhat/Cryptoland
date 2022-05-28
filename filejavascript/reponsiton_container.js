let container = document.querySelectorAll('.container');
window.addEventListener('resize',function(){

    if(this.screen.width < 480){
        for(let item of container){
            item.style.width = '98%';
        }
    } else{
        if(this.screen.width >= 480 && this.screen.width < 768){
            for(let item of container){
                item.style.width = '450px';
            }
        }
        else if(this.screen.width >= 768 && this.screen.width < 992){
            for(let item of container){
                item.style.width = '720px';
            }
        }
        else {
            for(let item of container){
                item.style.width = '83.34%';
            }
        }
    }
})
if(window.screen.availWidth < 480){
    for(let item of container){
        item.style.width = '98%';
    }
} else if(window.screen.availWidth >= 480 && window.screen.availWidth <768){
    for(let item of container){
        item.style.width = '450px';
    }
} else if(window.screen.availWidth >= 768 && window.screen.availWidth <992){
    for(let item of container){
        item.style.width = '720px';
    }
} else {
    for(let item of container){
        item.style.width = '83.34%';
    }
}