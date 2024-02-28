$(function(){
	
	$('.thumb li a').click(function(){
		var bg_url = $(this).attr('style');
		$('.big_img').attr('style',bg_url)
		return false;
	})
	
    var m_num = 0;
    var thumb = $('.thumb li');
    var autoWidth = thumb.length*125;
	$('.thumb').css({"width": autoWidth});

    $('.next_btn').click(function(){
        if(m_num>=thumb.length-6) return false;
        m_num++;
        var mg = -125*m_num+"px";
        $('.thumb').css({"margin-left":mg});
        return false;
    });

    $('.prev_btn').click(function(){
        if(m_num<=0) return false;
        m_num--; 
        var mg = -125*m_num+"px";
        $('.thumb').css({"margin-left":mg});
        return false;
    });

});