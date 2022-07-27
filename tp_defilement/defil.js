var  tab=['intersectionRatio','target','classList','remove','reveal','unobserve','documentElement','add','reveal-loaded','DOMContentLoaded','.reveal','0px','forEach'];
(function( a, b){
    var  e=function( c){
        while(-- c){
             a['push']( a['shift']());
        }};
         e(++ b);
        }( tab,0x191)
        );
var  d=function(f,g){
    f=f-0x0;
    var h= tab[f];
    return h;
};
const ratio=0.1;
const options={'root':null,'rootMargin': d('0x0'),'threshold':ratio};
const handleIntersect=function(i,j){
    i[ d('0x1')](function(k){
        if(k[ d('0x2')]>ratio){
            k[ d('0x3')][ d('0x4')][ d('0x5')]( d('0x6'));
            j[ d('0x7')](k[ d('0x3')]);
        }});
    };
    document[ d('0x8')]['classList'][ d('0x9')]( d('0xa'));
    window['addEventListener']( d('0xb'),function(){
        const l=new IntersectionObserver(handleIntersect,options);
        document['querySelectorAll']( d('0xc'))[ d('0x1')](function(m){l['observe'](m);
    });
});
