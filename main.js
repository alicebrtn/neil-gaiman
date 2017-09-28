
		 $(function(){

		 	// BOUTON OUVERTURE NAV
				 $('.button').on('click', function(){
				 	$('nav').addClass('nav-open');
				 	$('nav').removeClass('button');
				 	$('#nav-text').removeClass('hidden');
				 	$('#nav-text').addClass('visible');
				 });	

		 	// BOUTON FERMETURE NAV
				 $('#nav-text-close').on('click', function(){
				 	$('nav').removeClass('nav-open');
				 	$('nav').addClass('button');
				 	$('#nav-text').addClass('hidden');
				 	$('#nav-text').removeClass('visible');
				 });	

		 	// BOUTON CHOIX SEQUENCE
		 	$('.sequence').on('click', function(){

		 		$('.sequence-text').addClass('hidden-text');

		 		sequence = $(this).attr('id');
		 		sequence_split = sequence.split('-');
		 		super_sequence = sequence_split[2];

		 		
		 		$('#nav-sequence-'+super_sequence).addClass('visible-text');

		 		$('#sequence-'+super_sequence).removeClass('hidden-text');
		 		$('.sequence').removeClass('focus-text');
		 		$('#nav-sequence-'+super_sequence).addClass('focus-text');


		 	});


		 	// FONCTION PRECEDENT SUIVANT SEQUENCES
		 	function change_text(change){



		 		sequence = $('.focus-text').attr('id');
		 		sequence_split = sequence.split('-');
		 		super_sequence = sequence_split[2];

		 		if(change == 'right'){
		 			super_sequence = parseInt(super_sequence) + 1;
		 		}else{
		 			super_sequence = parseInt(super_sequence) - 1;
		 		}
		 		

		 		 if ($('#nav-sequence-'+super_sequence).length > 0 ) {
		 		$('.sequence-text').addClass('hidden-text');
				 		$('#nav-sequence-'+super_sequence).addClass('visible-text');

				 		$('#sequence-'+super_sequence).removeClass('hidden-text');
				 		$('.sequence').removeClass('focus-text');
				 		$('#nav-sequence-'+super_sequence).addClass('focus-text');
				    }
				 else{
				    }



		 	}


		 	// CLIQUE PRECEDENT SUIVANT SEQUENCES
		 	$('#nav-text-right').on('click', function(){
		 		change_text('right');
		 	});

		 	$('#nav-text-left').on('click', function(){
		 		change_text('left');
		 	});

		 });