const ratio=.6,
spies=document.querySelectorAll("[data-spy]");
let observer=null;
const activate=function(e){
    const t=e.getAttribute("id"),
    n=document.querySelector(`a[href="#${t}"]`);
    if(null===n)return null;
    n.parentElement.querySelectorAll(".active").forEach(e=>e.classList.remove("active")),
    n.classList.add("active")
},

callback=function(e){
    e.forEach(function(e){
        e.isIntersecting&&activate(e.target)
    })},
    observe=function(e){
        null!==observer&&e.forEach(e=>observer.unobserve(e));
        const t=Math.round(.6*window.innerHeight);
        observer=new IntersectionObserver(callback,{rootMargin:`-${window.innerHeight-t-1}px 0px -${t}px 0px`}),
        spies.forEach(e=>observer.observe(e))},
        debounce=function(e,t){
            let n;
            return function(){
                let i=arguments,
                r=this;
                clearTimeout(n),
                n=setTimeout(function(){e.apply(r,i)},t)
            }};
            if(spies.length>0){
                observe(spies);
                let e=window.innerHeight;window.addEventListener("resize",debounce(function(){
                    window.innerHeight!==e&&(observe(spies),e=window.innerHeight)},500))
                }
