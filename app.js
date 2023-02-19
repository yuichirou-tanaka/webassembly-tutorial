'use strict';

function AsmModule() {
    "use asm";
    return {
        add: function (a, b) {
            a = a | 0;
            b = b | 0;
            return (a + b) | 0;
        }
    }
}


var asm = AsmModule();
var adb = asm.add(1, 1);
console.log(adb);

var i = 0;
console.log(i);
