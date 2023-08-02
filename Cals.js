function Result() {
    var a = document.getElementById('res').value;
    var b = eval(a);
    document.getElementById('res').value = b;
 }
 function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }