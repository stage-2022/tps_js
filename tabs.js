(function(){
    
    var afficheOnglet =function(a,animations){
        if(animations===undefined){
            animations=true
        }
        var li=a.parentNode
        var div=a.parentNode.parentNode.parentNode
        var activeTab=div.querySelector(".tab-content.active")
        var aafficher=div.querySelector(a.getAttribute("href"))

        if(li.classList.contains("active")){
            return false
        }

        div.querySelector(".tabs .active").classList.remove("active")
        li.classList.add("active")

        if(animations){
            activeTab.classList.add("fade")
            activeTab.classList.remove("in")
            var g=function(){
                this.classList.remove("fade")
                this.classList.remove("active")
                aafficher.classList.add("active")
                aafficher.classList.add("fade")
                aafficher.offsetWidth
                aafficher.classList.add("in")
                activeTab.removeEventListener("transitionend",g)
                
            }
                activeTab.addEventListener("transitionend",g)
                activeTab.addEventListener("webkitTransitionEnd",g)
                activeTab.addEventListener("oTransitionEnd",g)
                activeTab.addEventListener("mozTransitionEnd",g)
            }
                else
            { 
                aafficher.classList.add("active")
                activeTab.classList.remove("active")
            }

        }

        var tabs=document.querySelectorAll(".tabs a")
        debugger
        for(var i=0;i<tabs.length;i++){
            tabs[i].addEventListener("click",function(e){
                afficheOnglet(this)
            })
        }

        var hashChange=function(e){
            var hash=window.location.hash
            var a =document.querySelector('a[href="'+ hash +'"]')
            
            if(a!==null && !a.parentNode.classList.contains("active")){
                afficheOnglet(a,e!==undefined)
            }
        }

        window.addEventListener("hashchange",hashChange)
        hashChange()


    })()