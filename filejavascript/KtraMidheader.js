// let menu = document.querySelector('header .analog li:nth-child(2)');

// window.addEventListener('resize',function(){
//     if(this.screen.width < 768){
        
//     }
// });
let ai = document.querySelector('header .analog .two i');
let menu = document.querySelector('header .analog .two ul');
let logohosting = document.querySelector('.panner .right');
let slogan = document.querySelector('.panner .left');
let check = true;
if(window.screen.availWidth <=767){
    document.querySelector('header .analog .three').style.display = "none";
        menu.classList.add("add_pst");
        menu.classList.remove("no_pst");
        ai.style.display = "inline-block";
        menu.style.display = "none";
        ai.onclick = function(e){
            if(check)
            {
                menu.style.display = "block";
                check = false;
            }
            else{
                menu.style.display = "none";
                check = true;
            }
    }
    logohosting.style.display="none";
    slogan.style.textAlign = "center";
} else if(window.screen.availWidth >767 && window.screen.availWidth <992){
    document.querySelector('header .analog .three').style.display = "block";
    ai.style.display = "inline-block"; // khoảng cách TB cho hiện icon
    menu.classList.add("add_pst");
    menu.classList.remove("no_pst");
    menu.style.display = "none"
    ai.onclick = function(e){
        if(check)
        {
            menu.style.display = "block";
            check = false;
        }
        else{
            menu.style.display = "none";
            check = true;
        }
    }
    logohosting.style.display="none";
    slogan.style.textAlign = "center";
}else if(window.screen.availWidth >=992){
    document.querySelector('header .analog .three').style.display = "block";
        menu.classList.add("no_pst");
        menu.classList.remove("add_pst");
        if(menu.style.display = "block")
        menu.style.display = "flex";
        ai.style.display = "none";
        logohosting.style.display="block";
        slogan.style.textAlign = "left";
}

window.addEventListener('resize',function(){
    if(this.screen.width <= 767){
        document.querySelector('header .analog .three').style.display = "none";
        menu.classList.add("add_pst");
        menu.classList.remove("no_pst");
        ai.style.display = "inline-block";
        menu.style.display = "none";
        ai.onclick = function(e){
            if(check)
            {
                menu.style.display = "block";
                check = false;
            }
            else{
                menu.style.display = "none";
                check = true;
            }
        }
        logohosting.style.display="none";
        slogan.style.textAlign = "center";
    }
    else
    if(this.screen.width > 767  && this.screen.width <992){
        document.querySelector('header .analog .three').style.display = "block";
        ai.style.display = "inline-block"; // khoảng cách TB cho hiện icon
        menu.classList.add("add_pst");
        menu.classList.remove("no_pst");
        menu.style.display = "none"
        ai.onclick = function(e){
            if(check)
            {
                menu.style.display = "block";
                check = false;
            }
            else{
                menu.style.display = "none";
                check = true;
            }
        }
        logohosting.style.display="none";
        slogan.style.textAlign = "center";
    }
    else
    if(this.screen.width >= 992){
        document.querySelector('header .analog .three').style.display = "block";
        menu.classList.add("no_pst");
        menu.classList.remove("add_pst");
        if(menu.style.display = "block")
        menu.style.display = "flex";
        ai.style.display = "none";
        logohosting.style.display="block";
        slogan.style.textAlign = "left";
    }

}
)

let fix_header = document.querySelector('header');
window.addEventListener('scroll',function(){
    let oy = pageYOffset;
    if(oy > 0){
        fix_header.style.backgroundColor = '#4bc7f1';
        document.getElementById('img_one').style.display = 'none';
        document.getElementById('img_two').style.display = 'inline-block';
    }
    else 
    {
        fix_header.style.backgroundColor = '#19036c';
        document.getElementById('img_one').style.display = 'inline-block';
        document.getElementById('img_two').style.display = 'none';
    }
})
let botton_faq = document.querySelectorAll('main .row-10 .faq ul button');

for(let item of botton_faq){
    item.onclick = function(e){
        if(item.parentElement.querySelector('.accordion').style.display == 'none'){
            item.parentElement.querySelector('.accordion').style.display = 'block';
            item.style.backgroundColor = '#3E80FF';
            item.style.color = 'white';
        }
        else{
             item.parentElement.querySelector('.accordion').style.display = 'none';
             item.style.backgroundColor = 'white';
             item.style.color = '#000000e0';
        }
        
    }
}

let footer = document.querySelector('footer');
let snap = document.querySelector('footer .row .single ul');
let icon_snap = document.querySelectorAll('footer .row .single ul li i');
let uldeck = document.querySelector('footer .row-2 ul li:nth-child(2)');
window.addEventListener('resize',function(){
    if(this.screen.availWidth < 768){
        footer.style.textAlign = 'center';
        snap.style.justifyContent = 'center';
        for(let item of icon_snap){
            item.style.margin = '0 10px';
        }
        uldeck.style.textAlign = 'unset';
    }
    else{
     footer.style.textAlign = 'left';
     snap.style.justifyContent = 'flex-start';
     for(let item of icon_snap){
        item.style.margin = '0 20px 0 0';
        }
        uldeck.style.textAlign = 'right';
    }
})
if(window.screen.availWidth < 768){
    footer.style.textAlign = 'center';
        snap.style.justifyContent = 'center';
        for(let item of icon_snap){
            item.style.margin = '0 10px';
        }
        uldeck.style.textAlign = 'unset';
       
} else{
    footer.style.textAlign = 'left';
     snap.style.justifyContent = 'flex-start';
     for(let item of icon_snap){
        item.style.margin = '0 20px 0 0';
        }
        uldeck.style.textAlign = 'right';
}
