window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 200){
        document.getElementById('navbar').style.opacity = (document.documentElement.scrollTop - 100)/100;
    }else if(document.documentElement.scrollTop >= 200){
        document.getElementById('navbar').style.opacity = 1;
    }else{
        document.getElementById('navbar').style.opacity = 0;
    }
}
document.getElementById("humberger").addEventListener('click',()=>{
    if(document.getElementById('mobnavlist').style.display == 'flex'){
        document.getElementById('mobnavlist').style.display = 'none';
        document.getElementById('humberger').style.right = '10px';
    }else{
        document.getElementById('mobnavlist').style.display = 'flex';
        document.getElementById('humberger').style.right = '70vw';
    }
})