

console.log(355);



$(function () {
    $(".btn1").on("click",function(){
        console.log("clicked");
        $({deg:0}).animate({deg:90},{
            duration:1000,

            progress:function(){
                $(".container").css({
                    transform:'rotate(' + this.deg + 'deg)'
                });
            },
            // complete:function(){
            //     alert("一回転しました");
            // }
        })
    })


    $(".btn2").on("click",function(){
        console.log("clicked");
        $({deg:90}).animate({deg:210},{
            duration:1000,

            progress:function(){
                $(".container").css({
                    transform:'rotate(' + this.deg + 'deg)'
                });
            },
            // complete:function(){
            //     alert("一回転しました");
            // }
        })
    })




    let pos =$(".box3");

    $(".btn3").on("click",function(){
        console.log("clicked");
        $({deg:200}).animate({deg:330},{
            duration:1000,

            progress:function(){
                $(".container").css({
                    transform:'rotate(' + this.deg + 'deg)'
                });
            },
            // complete:function(){
            //     alert("一回転しました");
            // }
        })
    })
})


