
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});

	document.querySelectorAll('.btn').forEach(btn => {
		btn.addEventListener('mouseenter', function() {
			btn.style.boxShadow = '0 0 24px #ff2d95cc';
		});
		btn.addEventListener('mouseleave', function() {
			btn.style.boxShadow = '0 0 8px #ff2d9588';
		});
	});
});
