
    $(document).ready(function() {
      $('.title').on('click',function(){
        var id = event.target.dataset.type;
        if (id === 'titlebox1') { $('#textbox1').toggle(700)}
        else if (id === 'titlebox2') { $('#textbox2').toggle(700)}
        else if (id === 'titlebox3') { $('#textbox3').toggle(700)}
        else console.log("well")

      });
    });
