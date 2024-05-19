$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            AnimationEffect: "bounceIn"
        }
        out:{
            AnimationEffect: "bounceOut"
        }
    })
});