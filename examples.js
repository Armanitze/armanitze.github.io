$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
    
    $(".video-icon").click(function() {
        
        var videoSource = $(this).data("video");
        console.log("hello");
        $(".video-container").fadeTo(1000, 0, function() {
            $(".video-source").attr("src", videoSource);
            $(".main-video")[0].load();
            $(".video-container").fadeTo(1000, 1.0, function() {
                $(".main-video")[0].play();
            });
        });
    });
    
    $("#play-audio").click(function(){
        var myAudio = document.getElementById("myAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    });
    
    
});