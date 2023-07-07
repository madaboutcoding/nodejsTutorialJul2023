const calc=(function(){
    function add(n1,n2){ return n1+n2;}
    function sub(n1,n2){ return n1-n2;}
    function mul(n1,n2){ return n1*n2;}
    function div(n1,n2){ return n1/n2;}
    return ({
        addition:(n1,n2)=>add(n1,n2),
        subtraction:(n1,n2)=>sub(n1,n2),
        multiplication:(n1,n2)=>mul(n1,n2),
        division:(n1,n2)=>div(n1,n2)
    });
})();

export default calc;