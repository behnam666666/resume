
// --------------------







// const resizableBox = document.querySelector('.resizable-box');
// const resizeHandleLeft = document.querySelector('.resize-handle-left');


function iframeSrc(event){
    let iframe = document.querySelector('.iframeweb');
    iframe.src=event.getAttribute('data-value');;


}


let tf = true;


function animationIcone(){
    const icon = document.querySelectorAll('.webResponsive-icon');

    if(tf){
        console.log('dfsad');
        for(let i=0;i<icon.length-1;i++){
            icon[i].classList.add('iconanimation');
        }
        tf=false;
    }
    else{
        console.log('dfdsfsad');
        for(let i=0;i<icon.length-1;i++){
            icon[i].classList.remove('iconanimation');
        }
        tf=true;
    }
}




function responsiveFun(event){
    let resizableBox = document.querySelector('.resizable-box');
    let styleSheet = document.querySelector('.iframeBorder');


    if(event.id=="mobile"){
        resizableBox.style.width = "340px";
        resizableBox.style.height = "530px";


        styleSheet.style.background = `url('./mobile.png')`;
        styleSheet.style.position = 'absolute';
        styleSheet.style.top = '-15px';
        styleSheet.style.backgroundPosition = 'center';
        styleSheet.style.backgroundRepeat = 'no-repeat';
        styleSheet.style.backgroundSize = '360px 550px';
        styleSheet.style.width = '400px';
        styleSheet.style.height = '560px';
        styleSheet.style.pointerEvents = 'none';
        styleSheet.style.borderRadius = '60px';
        styleSheet.style.transition = '.5s';

    }
    else if(event.id=="mac"){
        resizableBox.style.width = "1200px";   
        resizableBox.style.height = "530px";

        styleSheet.style.background = `url('./mac.png')`;
        styleSheet.style.position = 'absolute';
        styleSheet.style.top = '-85px';
        styleSheet.style.backgroundPosition = 'center';
        styleSheet.style.backgroundRepeat = 'no-repeat';
        styleSheet.style.backgroundSize = '1450px 570px';
        styleSheet.style.width = '1450px';
        styleSheet.style.height = '700px';
        styleSheet.style.pointerEvents = 'none';
        styleSheet.style.transition = '.5s';
    }
    else{
        resizableBox.style.width = "800px";
        resizableBox.style.height = "530px";

        styleSheet.style.background = `url('./ipad.png')`;
        styleSheet.style.position = 'absolute';
        styleSheet.style.top = '-85px';
        styleSheet.style.backgroundPosition = 'center';
        styleSheet.style.backgroundRepeat = 'no-repeat';
        styleSheet.style.backgroundSize = '1010px 570px';
        styleSheet.style.width = '1000px';
        styleSheet.style.height = '700px';
        styleSheet.style.pointerEvents = 'none';
        styleSheet.style.transition = '.5s';



    }

    console.log(event);
}



function copyText(event) {
    // انتخاب متن از المان پاراگراف
    var past = document.querySelectorAll('.past');
    // استفاده از Clipboard API برای کپی کردن متن
    if(event.id==='gmail')
    {
        navigator.clipboard.writeText('behnammoafimadani80@gmail.com')
        past[0].style.opacity = '1';
    }
    else if(event.id==='phone'){
        navigator.clipboard.writeText('+989331746149');
        past[1].style.opacity = '1';


    }
    else{
        navigator.clipboard.writeText('https://github.com/behnam666666/');
        past[2].style.opacity = '1';

    }
    // navigator.clipboard.writeText(text).then(function() {
    //     alert("Text copied to clipboard: " + text);
    // }).catch(function(err) {
    //     console.error("Failed to copy text: ", err);
    // });
}

function mouseleave(){
    var past = document.querySelectorAll('.past');
    past[0].style.opacity = '0';
    past[1].style.opacity = '0';
    past[2].style.opacity = '0';

}











// resizeHandleLeft.addEventListener('mousedown', function (e) {
//   e.preventDefault();
  
//   document.addEventListener('mousemove', resize, false);
//   document.addEventListener('mouseup', stopResize, false);
  
//   function resize(e) {
//     // تغییر عرض المان با حرکت موس
//     const newWidth = resizableBox.getBoundingClientRect().right - e.clientX;
//     if (newWidth > 50) { // حداقل اندازه
//       resizableBox.style.width = newWidth + 'px';
//     }
//   }

//   function stopResize() {
//     document.removeEventListener('mousemove', resize, false);
//     document.removeEventListener('mouseup', stopResize, false);
//   }
// });