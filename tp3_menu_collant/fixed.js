(function(){
    var a=function(){
        var a=void window.pageXOffset!==undefined;
        var b="CSS1Compat"===(document.compatMode||"");
        return a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop
    };
    window.makeSticky=function(b){
        var c,d,e,f,g=parseInt(b.getAttribute("data-offset")||0,10);
        var h=document.body;
        b.getAttribute("data-constraint")&&(h=document.querySelector(b.getAttribute("data-constraint")));
        var i=document.createElement("div");
        var j=function(){
            c=b.getBoundingClientRect(),
            e=h.getBoundingClientRect(),
            f=e.top+a()+e.height-g-c.height,
            d=c.top+a(),
            i.style.width=c.width+"px",
            i.style.height=c.height+"px"
        },
        k=function(){
            a()>f&&b.style.position!="absolute"?(b.style.position="absolute",b.style.bottom="0",b.style.top="auto"):a()>d-g&&a()<f&&b.style.position!="fixed"?(b.classList.add("fixed"),b.style.position="fixed",b.style.top=g+"px",b.style.bottom="auto",b.style.width=c.width+"px",b.parentNode.insertBefore(i,b)):a()<d-g&&"static"!=b.style.position&&(b.classList.remove("fixed"),b.style.position="static",b.parentNode.contains(i)&&b.parentNode.removeChild(i))
        },
        l=function(){
                b.style.width="auto",
                b.classList.remove("fixed"),
                b.style.position="static",
                i.style.display="none",
                j(),
                i.style.display="block",
                k()
         };
            window.addEventListener("scroll",k),
            window.addEventListener("resize",l),
            j()
        };
        for(var b=document.querySelectorAll("[data-sticky]"),c=0;c<b.length;c++)
        makeSticky(b[c])
    })();