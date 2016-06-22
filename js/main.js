
$( "text" ).click(function() {
  $( this ).slideUp();
});

// $('.text').on('click', function () {
//   // Statements go in here
//   // Refer to the element we are working with $(this)
// console.log("blah"); // this removes the class of `box` from the element
// });


// var clicked = function(){
//   $('.title').on('click',function(){
//     $('.text').hide("test");
// })
// };


 var hider = function(){
   if ($('textbox1').hasClass('test')) {hide('#textbox1')}
 }

    //
    // $(document).ready(function() {
    //   $('.title').on('click',function(){
    //     var id = event.target.dataset.type;
    //     if (id === 'titlebox1') { $('#textbox1').toggleClass('test') }
    //     else if (id === 'titlebox1') { $('#textbox1').toggleClass('test') }
    //     else if (id === 'titlebox2') { $('#textbox2').toggleClass('test') }
    //     else if (id === 'titlebox3') { $('#textbox3').toggleClass('test') }
    //     else console.log("well")
    //
    //   });
    // });


    $(document).ready(function() {
      $('.title').on('click',function(){
        var id = event.target.dataset.type;
        if (id === 'titlebox1') { $('#textbox1').toggle(700)}
        else if (id === 'titlebox2') { $('#textbox2').toggle(700)}
        else if (id === 'titlebox3') { $('#textbox3').toggle(700)}
        else console.log("well")

      });
    });
