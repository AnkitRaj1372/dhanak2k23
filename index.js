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
    document.getElementById('menub').classList.toggle('open')
    if(document.getElementById('mobnavlist').style.left == '' || document.getElementById('mobnavlist').style.left == '100vw'){
        document.getElementById('mobnavlist').style.left = '30vw';
        // document.getElementById('humberger').style.right = '10px';
    }else{
        document.getElementById('mobnavlist').style.left = '100vw';
        // document.getElementById('humberger').style.right = '70vw';
    }
})