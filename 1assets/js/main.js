/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();
	
	// Sidebar.
	var $sidebar = $('#sidebar'),
	$sidebar_inner = $sidebar.children('.inner');

// Inactive by default on <= large.
	breakpoints.on('<=large', function() {
		$sidebar.addClass('inactive');
	});

	breakpoints.on('>large', function() {
		$sidebar.removeClass('inactive');
	});

// Hack: Workaround for Chrome/Android scrollbar position bug.
	if (browser.os == 'android'
	&&	browser.name == 'chrome')
		$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
			.appendTo($head);

// Toggle.
	$('<a href="#sidebar" class="toggle">Toggle</a>')
		.appendTo($sidebar)
		.on('click', function(event) {

			// Prevent default.
				event.preventDefault();
				event.stopPropagation();

			// Toggle.
				$sidebar.toggleClass('inactive');

		});


})(jQuery);