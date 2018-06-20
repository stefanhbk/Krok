
jQuery(document).ready(function(){
	var pozadina=$("#pozadina");
	var current=1;
$("h1").hover(function(){
	$(this).toggleClass("animated jello");           
})
	
});



$(function(){
	var sakrij=$("#sakrij");
	var menu=$("#menu");

sakrij.on("click",function(){
    menu.slideToggle(300);

})	

$(window).resize(function(){
		var sirina = $(window).width();
		if(sirina > 649 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}	
	});
})

