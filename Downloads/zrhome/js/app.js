$(document).ready(function () {
    $("#far-clouds").clouds({
		fps: 30,
        speed: 0.7,
        dir: "left"
    });
    
	$("#near-clouds").clouds({
		fps: 30,
        speed: 1,
        dir: "left"
    });
	
	$('.work-item img').on('click touchend', showPreview);

  $('body').on('click touchstart', hidePreview);

  function showPreview(e) {
    e.stopPropagation();

    $('.work-preview').fadeIn(300);
//    document.body.style.overflow = 'auto';
    $('.preview-img').attr('src', e.target.dataset.src);
  }
  function hidePreview() {
    $('.work-preview').fadeOut(300);
//    document.body.style.overflow = 'auto';
  }
});