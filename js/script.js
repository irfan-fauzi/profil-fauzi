// event pada saat di klik
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);
	
	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();


});

// menyimpan paralax
$(window).scroll(function(){

	// membuat efek text h1 dengan kecepatan berbeda dengan jumbotron ketika di scroll
	// untuk membuat itu, kita harus tau posisi scroll berapa, jarak elemen dengan posisi paling atas browser 
	
	// paralax gambar profile
	const wScroll = $(this).scrollTop();
	$('.jumbotron img').css({

		'transform' : 'translate(0px, '+ wScroll/4 + '%)'

	});

	if($(this).scrollTop() > 300){

		$('.opaque-navbar').addClass('opaque');

	} else {
		$('.opaque-navbar').removeClass('opaque');
	}






	// paralax h1
	$('.jumbotron h1').css({

		'transform' : 'translate(0px, '+ wScroll/2 + '%)'

	});

	// portfolio
	if ( wScroll > $('.portfolio').offset().top - 250 ) {

			$('.portfolio .thumbnail').each(function(i) {
				setTimeout(function (){
					$('.portfolio .thumbnail').eq(i).addClass('show');
				}, 300 * (i+1));


			});

		// 
	}



});