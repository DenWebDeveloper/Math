
var a = document.querySelector("#js-input-a");
var b = document.querySelector("#js-input-b");
var c = document.querySelector("#js-input-c");
var x1 = document.querySelector("#js-input-answer-x1");
var x2 = document.querySelector("#js-input-answer-x2");


var Controller = {
    addEventIput: function(element,event,name) {
        element.addEventListener(event, (e)=>{
            var value = element.value;
            if(Controller.check(value)) {
                Value[name] = value;
                View.render(Solutions.X1(),Solutions.X2());
            } else {
                element.value = '';
            }
        });
    },
    
    check: function(value) {
        if(!isNaN(value) || value.charAt(0) == '-' && !isNaN(value) || value == '-') {
            return true
        } else {
            return false
        }
    }
};

var View = {
        render: function(params1,params2) {
            x1.value = params1 + '';
            x2.value = params2 + '';
        }
}

var Value = {
    'a': 1,
    'b': 1,
    'c': 0
}

var Solutions = {
     D: function(){
         return (Value.b*Value.b)-(4*Value.a*Value.c);
     },
    X1:function() {
        Solutions.D();
        return (-Value.b+Math.sqrt(Solutions.D()))/(2*Value.a);
     },

     X2:function() {
         Solutions.D;
        return (-Value.b-Math.sqrt(Solutions.D()))/(2*Value.a);
     }
    
}


Controller.addEventIput(a,'keyup','a');
Controller.addEventIput(b,'keyup','b');
Controller.addEventIput(c,'keyup','c');