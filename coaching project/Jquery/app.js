// console.log($('h1'))


//  by using class .
// console.log($('.id1'))
// // by usng id 
// console.log($('#id1'))


// use css==========================
// $('h1').css('background-color','black')
// $('h1').css('color','white')


// for multiple it we use object

// $('h1').css({
//     color:'red',
//     backgroundColor:'black',
//     fontFamily:'arial'
// })  

// access text====================================================
// esme hidden property ni dikhegi 
// console.log($('p').text('divesh')) /* it work as a setter or textContent */


// it will display as it is the em tag will not print 
// console.log($('p').text('<em> divesh </em>')) /* it work as a setter or textContent */


// esme hidden property dikh jayegi it work like a inner.Html
// console.log($('p').html()) /* it work as a setter */


// esme em tag show ni hoga property apply ho jayegi
// console.log($('p').html('<em> divesh </em>')) /* it work as a setter */

// attribute manipulation========================================
// console.log($('a').attr('href','https://www.twitter.com'))

// input manipluation==========================================

// console.log($('input').val( )) 
// console.log($('input').val( 'my name is divesh')) 

// class list===================================================
// $('h1').addClass('firstlcass')

// $('h1').first().addClass('firstlcass')
// $('h1').last().addClass('secondclass thirdclass')

// event=========================================================
// $('button').click(function(){
//     console.log('my name is Divesh Kumar sachdeva')
// })


// ===================================================================
// $('input').keyup(function(){
//    console.log( $(this).val())
// })

// -====================addevent listener====================
$('button').on('click',function(){
    console.log("my name is papu pelu")
})