    function Banner(){}
    $.extend(Banner.prototype,{
        //写法是兼容的；
        init:function(options){
            this.item_list=$(options.item_list);
            this.left_btn=$(options.left_btn);
            this.right_btn=$(options.right_btn); 
            this.btn_list=$(options.btn_list);
            this.nowIndex=0;
            this.item_num=this.item_list.length;
            this.ul=$("#show ul");
            this.item_width=this.item_list.width();                
            this.wrap = $("#wrap");
            if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                this.autoPlay();
                return 0;
            }
            this.bindEvent();
        },
        bindEvent : function(){
            this.left_btn.click($.proxy(this.prev,this));
            this.right_btn.click($.proxy(this.next,this));
            this.btn_list.mouseover($.proxy(this.toIndex,this));

            this.wrap.mouseenter($.proxy(this.stopPlay, this ));
            this.wrap.mouseleave($.proxy(this.autoPlay,this));
        },
        next:function(){
            if(this.nowIndex == this.item_num-1){
                this.nowIndex=1;
                this.ul.css({
                    left:0
                })
            }else{
                this.nowIndex++;
            }
            this.animate();
        },
        prev:function(){
            if(this.nowIndex == 0){
                this.nowIndex=this.item_num-2;
                this.ul.css({
                    left:-(this.item_num-1) * this.item_width
                })
            }else{
                this.nowIndex --;
            }
            this.animate();
        },
        toIndex:function(event){
            //要获取当前元素的下标么；
            var target = event.target || event.srcElement;
            this.nowIndex=$(target).index();
            this.animate();
        },
        animate:function(){
            this.ul.stop().animate({
                left:-this.item_width * this.nowIndex
            })
            var index=this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex;
            this.btn_list.eq(index).addClass("active").siblings("button").removeClass("active");
        },           
        autoPlay:function(){
            //自动执行;
            this.autoPlay_timer=setInterval(function(){
                //this.right_btn.trigger("click");
                this.right_btn.triggerHandler("click");
            }.bind(this),3000)
            console.log("自动播放");
        },
        stopPlay:function(){
            clearInterval(this.autoPlay_timer);
            console.log("停止播放");
            
        }
    })
    var banner=new Banner();
    banner.init({
        item_list:"#show li",
        left_btn:"#left",
        right_btn:"#right",
        btn_list:"#list button"
    })
    banner.autoPlay();
