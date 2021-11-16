let userAgent = navigator.userAgent; // Navigator est un objet qui contient des informations à propos du navigateur
// console.log(userAgent);
let browser;

if(userAgent.match(/edg/i)){
    browser = 'edge';
    alert('edgeeeeeeeeeee !!!!!!');

}else if(userAgent.match(/firefox|fxios/i)){
    browser = 'firefox';

}else if(userAgent.match(/opr/i)){
    browser = 'opera';

}else if(userAgent.match(/chrome|chromium|vrios/i)){
    browser = 'chrome';
    alert('chromeeeee !!!!!!');
}else if(userAgent.match(/safari/i)){
    browser = 'safari';
    alert('safari !!!!!!');
    
}else{
    alert('la detection a échoué');
}

console.log(browser);

const BROWSER = document.querySelector(`.${browser}`);
    BROWSER.classList.add('isSelected');