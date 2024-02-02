$(document).ready(function() {
    $("#menu").click(function(s) {
        $(this).toggleClass("on"),
        $(".list").toggleClass("closed")

    }),
    $("#content").click(function(s) {
        $(".on").removeClass("on"),
        $(".list").addClass("closed")

    }),
    $('#ai-icon').click(function(s){
        s.stopPropagation();
        $(".ai-content").toggle();
    }),
    $('.ai-content').click(function(event) {  
        event.stopPropagation(); // 阻止事件冒泡到body元素  
      });  
      $(document).click(function(event) {  
        var myDiv = $('.ai-content');  
        if (!myDiv.is(event.target) && myDiv.has(event.target).length === 0) { // 检查事件目标是否是div的子元素或div本身  
          myDiv.hide(); // 隐藏div  
        // myDiv.toggle()
        }  
      });  
});