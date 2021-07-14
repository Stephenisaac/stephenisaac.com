$(document).ready(function(){
    let $btns=$('.project-area.button-group button');

    $btns.click(function(e){
        $('.project-area.button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector=$(e.target).attr('data-filter');
        $(.grid).isotope({
            filter:selector
        });
        return false;
    })

    $(".project-area.button-group #btn1").trigger('click');
    $('.project-area.grid.test-popup-link').magnificPopup({
        type: 'image'
        gallery:{enable:true}
      });
});