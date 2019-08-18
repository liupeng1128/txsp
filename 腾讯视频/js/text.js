/*
function foo(a)
{
    console.log( a + b );
}

var b = 2;

foo( 2 );



var b;
function foo(a) {
    console.log(a+b);
}
b=2;
foo(2);*/
var  b=2;
function foo(a) {
    console.log( a + b );
    b = a;
}
foo( 2 );
