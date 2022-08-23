var but = document.querySelector('#button');


but.addEventListener('mousemove', function(){
    var newTop = Math.random()*92;
    var newLeft = Math.random()*92;
    newLeft += "%";
    newTop += "%";
    but.style.top = newTop;
    but.style.left = newLeft;
});

but.addEventListener('click', function(){
    alert("Lo lograste")
    console.log("Lo lograste")
})
