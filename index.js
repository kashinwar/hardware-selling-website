$(document).ready(function() {
    $('.filter-btn').click(function(e) {
        e.preventDefault();
        let filter = $(this).data('filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.product-card').each(function() {
            if (filter === 'all' || $(this).data('category') === filter) {
                $(this).removeClass('hidden').fadeIn(500);
            } else {
                $(this).addClass('hidden').fadeOut(500);
            }
        });
    });
});