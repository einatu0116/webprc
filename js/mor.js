
layui.use(['layer','jquery'], function(){
    var layer = layui.layer
    var $ = layui.jquery

    //基础变量
    var star1=new Array({ "name" : "日和" , "id" : 1001,"star":1,"zm":false,"lvl":1,"pos":120,"hp":60,"atk":80,"def":40,"spe":40,"stk":0,"sef":25 }, { "name" : "春田" , "id" : 1002,"star":1,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "怜" , "id" : 1003,"star":1,"zm":false,"lvl":1,"pos":120,"hp":60,"atk":70,"def":50,"spe":45,"stk":0,"sef":25 }, { "name" : "佩可莉姆" , "id" : 1058,"star":1,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "可可萝" , "id" : 1059,"star":1,"zm":false,"lvl":1,"pos":120,"hp":75,"atk":65,"def":40,"spe":55,"stk":5,"sef":40}, { "name" : "凯留" , "id" : 1060,"star":1,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 })
    var star2=new Array(
        { "name" : "禊" , "id" : 1004,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "茜里" , "id" : 1006 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "布丁" , "id" : 1007 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "雪" , "id" : 1008 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "胡桃" , "id" : 1021,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "绫音" , "id" : 1023,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "铃莓" , "id" : 1025,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "惠理子" , "id" : 1027,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "真阳" , "id" : 1033,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "珠希" , "id" : 1046,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "纺希" , "id" : 1054,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "步未" , "id" : 1055,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "可可萝" , "id" : 1076,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "美冬" , "id" : 1080,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "布丁" , "id" : 1082 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "千歌" , "id" : 1084,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "胡桃" , "id" : 1085 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "绫音" , "id" : 1086 ,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "美冬" , "id" : 1089,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "惠理子" , "id" : 1090,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "露" , "id" : 1093,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "拉姆" , "id" : 1098,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "伊绪" , "id" : 1101,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "香织" , "id" : 1105,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "望" , "id" : 1116,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "铃莓" , "id" : 1121,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "栞" , "id" : 1123,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "未央" , "id" : 1126,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "步未" , "id" : 1130,"star":2,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }
    )
    var star3=new Array({ "name" : "杏柰" , "id" : 1009,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "真步" , "id" : 1010,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "璃乃" , "id" : 1011,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "初音" , "id" : 1012,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "霞" , "id" : 1014,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "伊绪" , "id" : 1018,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "咲恋" , "id" : 1028,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "望" , "id" : 1029 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "妮侬" , "id" : 1030 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "秋乃" , "id" : 1032,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "镜华" , "id" : 1036,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "智" , "id" : 1037 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "真琴" , "id" : 1043,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "伊利亚" , "id" : 1044,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "纯" , "id" : 1047 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "静流" , "id" : 1049,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "莫妮卡" , "id" : 1053,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "流夏" , "id" : 1056,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "姬塔" , "id" : 1057,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "矛依未" , "id" : 1061 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "亚里莎" , "id" : 1063 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "嘉夜" , "id" : 1065,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "祈梨" , "id" : 1066,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "似似花" , "id" : 1070 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "克里斯蒂娜" , "id" : 1071,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "佩可莉姆" , "id" : 1075 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "铃莓" , "id" : 1077,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "凯留" , "id" : 1078 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "珠希" , "id" : 1079,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "忍" , "id" : 1081,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "美咲" , "id" : 1083 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "日和" , "id" : 1087 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "优衣" , "id" : 1088,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "静流" , "id" : 1091,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "安" , "id" : 1092 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "古蕾雅" , "id" : 1094,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "空花" , "id" : 1095,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "妮侬" , "id" : 1096 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "蕾姆" , "id" : 1097,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "艾米利亚" , "id" : 1099,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "克罗依" , "id" : 1108,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "铃奈" , "id" : 1100 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "咲恋" , "id" : 1103,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "真琴" , "id" : 1104 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "真步" , "id" : 1106,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "碧" , "id" : 1107,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "琪爱儿" , "id" : 1109 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "优妮" , "id" : 1110,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "镜华" , "id" : 1111,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "美美" , "id" : 1113,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "露娜" , "id" : 1114,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "克里斯蒂娜" , "id" : 1115,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "伊利亚" , "id" : 1117,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "可可萝" , "id" : 1119 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "凯留" , "id" : 1120 ,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "霞" , "id" : 1122,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "卯月" , "id" : 1124,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "凛" , "id" : 1125,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "铃" , "id" : 1127,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 },
        { "name" : "真阳" , "id" : 1128,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "璃乃" , "id" : 1129,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20 }, { "name" : "优衣" , "id" : 1802,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20},
        { "name" : "佩可莉姆" , "id" : 1804,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20}, { "name" : "可可萝" , "id" : 1805,"star":3,"zm":false,"lvl":1,"pos":120,"hp":20,"atk":10,"def":20,"spe":20,"stk":20,"sef":20})
    var bgm=  document.getElementById("bgm")
    var back=0
    var data=new Array({"hero": null,"item": null})
    var t1,t2,t3,t4,t5
    bgm.volume = 0.34;
    // $(document).bind("contextmenu",function(e){
    //     return false;
    // });



    //加载


    //初始设置
    qhback(back)
    qhbgm("responses/bgm_main.m4a")
    // 调试
    // $('#rw').click(function () {
    //     ckaime($('#rw').val())
    // })
    // $('#hb').click(function (e) {
    //     var x = e.pageX - this.offsetLeft-((6-$('#level').val().length)*25);
    //     var y = e.pageY - this.offsetTop;
    //     addnum(parseInt($('#ch').val()),$('#level').val(),x,y)
    // })

    $('#m_house').click(function () {
        box()
    })

    $('#m_bull').click(function () {
        bull(10)
    })

    //---------------------------------------------------------------------------------------------
    //队伍盒子
    function box() {
        $("#shade").css("visibility",'inherit');

        scro=1
        var schight=0
        if($("#teambox").height()<$("#teamboxsc").height()) schight=$("#teambox").height()/$("#teamboxsc").height()*0.95*316
        else {schight=316}
        $("#scroll_a").css("height",schight+"px")
        schight=null
        if (data.hero==null)return;
        t1=''
        for(var i=0;i<data.hero.length;i++)
        {t2="url(img/pt/"+data.hero[i].id+"11.webp)";
            t3="<table class='teamboxsr'><tr>"
            t4="等级"+data.hero[i].lvl
            data.hero[i].pos>720?t5="url(img/ico/posin_3.png)":data.hero[i].pos>360?t5="url(img/ico/posin_2.png)":t5="url(img/ico/posin_1.png)"
         for(var j=0;j<5;j++)
         {
            j<data.hero[i].star?t3+="<td class='bsar1'></td>":t3+="<td class='bsar'></td>"
         }
         t3+="</tr></table><div class='blvl txt' data-text="+t4+">"+t4+"</div></div>"
        t1+="<div class='layui-col-xs2 borgold'><div class='pt1' style='background-image:"+t2+"'></div>"+"<div class='bpos' style='background-image:"+t5+"'></div>"+t3}
        $("#teamboxsc").append(t1)
        t1=null;t2=null;t3=null;t4=null
    }
    //滚轮
    var scro=0;
    window.onmousewheel=document.onmousewheel=function(e){
        var tb=e.deltaY>0?1:-1;
        switch (scro) {
            case 1:
                var num=$("#teamboxsc").css("top").substr(0,$("#teamboxsc").css("top").length-2)
                num=num-22*tb;
                var fz=num/($("#teamboxsc").height()-$("#teambox").height())*-1
                if(fz>=0&&fz<=1)
                { $("#teamboxsc").css("top",num+"px");
                    $("#scroll_a").css("top",(($("#scroll").height()-$("#scroll_a").height())*fz/0.95)+"px");
                    num=null;fz=null;
                }break;
        }

    }
    var ptdata,menunum=1,ptnum=-1
    //查看资料
    $(document).on('click','#teamboxsc .pt1',function () {
        if(ptnum==$(".pt1").index(this)) return
        ptnum=$(".pt1").index(this)
        ptdata=data.hero[ptnum]
        $("#datamenu").css("visibility",'inherit');
        $('#datapt').css("background-image",'url(img/bat/'+ptdata.id+'11.webp)')
        $(".csar").removeClass("csar");
        $("#cardlvl").html('等级'+ptdata.lvl)

        $("#cardlvl").attr('data-text','等级'+ptdata.lvl)
        $("#cardstar td").addClass("csar")
        for (var i=0;i<5;i++)
        {
            i<ptdata.star?$("#cardstar td").eq(i).css("background-image",'url(img/ico/boxstar.png'):$("#cardstar td").eq(i).css("background-image",'url(img/ico/boxstar0.png')

        }

    })
    //BOX隐藏
    $(document).on('click','#boxbutt',function () {
        menunum=1
        $("#teamboxsc").html("")
        $(".csar").removeClass("csar");
        $("#cardlvl").html("")
        $("#cardlvl").attr('data-text',"")
        $("#datamenu").css("visibility",'hidden');
        $('#datapt').css("background-image",'')
        $("#shade").css("visibility",'hidden')})
    //---------------------------------------------------------------------------------------------
    //扭蛋
    var boolzmb
    function bull(x) {
        //随机卡的星数
        randomstar(x)
        //播放女仆动画
        qhbgm("responses/bgm_new.m4a");
        if(rstar.includes(3)) saime='mv/view_gacha_animation_sp.mp4';
        else saime='mv/view_gacha_animation.mp4';
        $('#zm').attr("src",saime)
        carcon[0]=true
        //显示女仆动画面板，显示招募板，隐藏菜单
        $("#zm").css("visibility",'inherit')
        $("#bulletin").css("visibility",'inherit');
        boolzmb=true
        $("#ui").css("visibility",'hidden');
        //女仆动画播放完毕后 开始播放招募卡片动画
        document.getElementById("zm").onended = function () {
            $("#bulletin").addClass("bulletinaime");zmb(0);
            $("#zm").css("visibility",'hidden');bgm.currentTime=6.52}
        //减少DOM操作 全部在这里添加。
        t1="";
        for(var i=0;i<x;i++)
        {t1+= "<div class='layui-col-xs2 cardbt'><div class='card img'></div></div>"}
        $("#bulletin").append(t1);t1=null;

    }
    //招募版
    function zmb(x) {
        if(x==0)
        //carddata内已经获取到本次扭蛋的结果 rcard用于过滤重复的卡
        {$("#qua").css("visibility",'inherit');
        carddata=JSON.parse(JSON.stringify(randomcard(rstar)));
        cardsum=-1;
        rcard=null}
        //循环回调直到全部播放完毕
        if(x<rstar.length)
        {
            if(!boolzmb) return
            $(".card").eq(x).addClass("card"+rstar[x])
            setTimeout(function () {zmb(x+1);}, 355+-18*x);}
        else {gash()}
    }
    //抽取扭蛋
    function gash() {

        setTimeout(function () {carcon[1]=true}, 2350);
    }


    var carddata,saime,sauto;
    var cardsum=0
    //抽卡执行动画
    function ckaime(data) {
        saime='mv/' + data.id + '31_000001.mp4'
        sauto='responses/vo_cmn_' + data.id + '31_gacha_001.m4a'
        carcon[2]=false;
        //预加载背景图并暂停
        qhback(data.id)
        document.getElementById("vid").pause();
        $(".name td").eq(0).find("span").html(data.name); $(".name td").eq(0).attr('data-text',data.name)
        $(".mzs").css("visibility",'hidden')

        if(data.star==3&&data.zm==false) {
            if(back==0)back=data.id
            $("#curta").css("visibility",'inherit')
            $("#curta").addClass("sback")
            $("#curta div").eq(0).addClass("curtacard"+data.star)
            $("#curta div").eq(1).addClass("starki1")
            $("#curta div").eq(2).addClass("starki4")
            $('#ckaime').attr("src",saime)
            $("#ckaime").css("visibility",'inherit')
            setTimeout(function () {
                //加入视频
                $("#curta").css("visibility",'hidden')
                $("#curta").removeClass("sback")
                $(".starki1").removeClass("starki1")
                $(".starki4").removeClass("starki4")
                $(".curtacard" +data.star).removeClass("curtacard"+data.star)
                //加入声音 并暂停
                $('#cardauto').attr("src",sauto)
                $("#cardauto").css("visibility",'inherit')
                document.getElementById("cardauto").pause()
                document.getElementById("cardauto").volume = 0.6;
                //语音文本延时
                setTimeout(function () {
                    document.getElementById("cardauto").play()
                    $(".name").css("visibility",'inherit')
                    $(".nametext").addClass("nametextaime")
                    staraime(3, 0,600)}, 4200);}, 1500);

        }
        else {
            $("#curta").css("visibility",'inherit')
            $("#curta").addClass("curtaaime")
            $("#curta div").eq(0).addClass("curtacard"+data.star)
            if(data.star>1)$("#curta div").eq(1).addClass("shraaaime")
            document.getElementById("vid").play();

            setTimeout(function () {
                $(".name").css("visibility",'inherit');staraime(data.star, 0,0);
                if(data.zm){
                    t1=(-25*(data.star-1)*(data.star-2)+Math.pow(10,data.star-1));
                    saime=$(".mzstxt:first")
                    saime.attr('data-text','女神的秘石 × '+t1);saime.html('女神的秘石 × '+t1)
                    $(".mzs").css("visibility",'inherit')}
                $("#curta").removeClass("curtaaime")
                $(".curtacard" +data.star).removeClass("curtacard"+data.star)
                $(".shraaaime").removeClass("shraaaime")
                setTimeout(function () {carcon[2]=true;$("#curta").css("visibility",'hidden')},500);}, 550)
            // $(".nametext").css("background-image","url(img/name1.png)");
        }
        //console.log(data.star+"//"+(-25*(data.star-1)*(data.star-2)+Math.pow(10,data.star-1)))

    }
    //星星动画
    function staraime(num,x,spd) {
        num==x?
            num=0:setTimeout(function () {
                num==3?$("#star").find("td").eq(x).addClass("staraime"):$("#star").find("td").eq(x).addClass("staraime2");staraime(num,x+1,spd)},spd)
    }
    var rstar
    //随机星星
    function randomstar(x) {
        rstar=new Array()
        for(var i=0;i<x;i++)
        {var star= Math.random()
            //
            star=star==0?1:Math.floor((Math.log10(star*Math.pow(3.5,3))/Math.log10(3.5)))+1
            i==9?star=star>=3?2:star<=0?1:star:star=star<=0?1:star;
            rstar.push(4-star)
            star=null
        }
    }
    //抽卡
    var rcard=new Array();
    function randomcard(x) {
        rcard=new Array();
        t1=new Date().getTime()
        for(var i=0;i<x.length;i++)
        {
            var gas=new Array();
            switch (x[i]) {
                case 1:  gas= star1;break;
                case 2:  gas= star2;break;
                case 3:  gas= star3;break;
            }
            var s1=(Math.sqrt(t1)*Math.sin(t1))/Math.log(t1);
            s1=s1-5+i
            var sw=Math.pow(8,Math.round(s1).toString().length)
            rcard.push(JSON.parse(JSON.stringify(gas[Math.round(Math.abs(s1+s1*(sw%10*i)%sw))%gas.length])))
            gas=null;s1=null;sw=null
        }
        rcard=mzs(rcard)
        return rcard;
    }
    //抽卡 去重添加
    function mzs(r) {
        for(var i=0;i<r.length;i++)
        {if(data.hero!=null)
        {for(var j=0;j<data.hero.length;j++) {if(r[i].id==data.hero[j].id) {j=data.hero.length;r[i].zm=true;}}
            if(!r[i].zm) data.hero.push(JSON.parse(JSON.stringify(r[i])))}
        else {data.hero=new Array();data.hero.push(JSON.parse(JSON.stringify(r[i])))}}
        return r;
    }

    //招募板关闭
    function zmboff() {
        if(bgm.currentTime<13) {bgm.currentTime = 13}
        $("#bulletin").css("visibility",'hidden');
        $("#qua").css("visibility",'hidden')
        boolzmb=false
        $("#bulletin").html("")
        carcon[1]=false;nextcard(carddata[cardsum]);

    }
    //下一张
    function nextcard()
    {
        $(".name").css("visibility",'hidden')
        $(".staraime2").removeClass("staraime2");
        $(".staraime").removeClass("staraime");
        carcon[2]=false
        cardsum++;
        if(cardsum==carddata.length){
            qhback(back);document.getElementById("vid").pause();
            qhbgm("responses/bgm_zm.m4a")
            $("#ui").css("visibility",'inherit');carcon[2]=false;
            $("#zmnew").css("visibility",'inherit');
            qua=false
            t1=""
            for(var i=0;i<carddata.length;i++)
            {   carddata[i].zm?ptbool=2:ptbool=1
                t2="url(img/pt/"+carddata[i].id+"11.webp)";t1+="<div class='layui-col-xs2 borsiv'><div class='pt"+ptbool+"' style='background-image:"+t2+"'></div></div>"}
                $("#zmnewbox").append(t1) ;t1=""
                carddata=null
            }
            else {
                if(!qua||(carddata[cardsum].star>2&&carddata[cardsum].zm==false)) ckaime(carddata[cardsum])
                else {carcon[2]=true;nextcard();}
            }

        }

    //视频点击
    var carcon=[false,false,false];
    var ptbool;
    $(document).on('click','#section-second',function () {
        if(carcon[2]){nextcard()}
        // $("#section-second").remove();
        // $("#back").css("background-image",'url(img/card/'+cardid+'31.webp)')

    })

    var qua=false
    //快进
    $(document).on('click','#qua',function () {qua=true;zmboff();})

    //招募点击快进
    $(document).on('click','#zm',function () {
        if(carcon[0])
        {carcon[0]=false;document.getElementById("zm").currentTime=0.95*document.getElementById("zm").duration}
    })
    //招募板点击
    $(document).on('click','#bulletin',function () {

        if(carcon[1])
        {zmboff();}
    })
    //播放完毕
    document.getElementById("ckaime").onended = function () {$("#ckaime").css("visibility",'hidden');document.getElementById("vid").play()}
    document.getElementById("cardauto").onended = function () {carcon[2] = true;$("#cardauto").css("visibility",'hidden')}
    //招募完毕
    $(document).on('click','#zmbutt',function () {
        $("#zmnewbox").html("")
        qhbgm("responses/bgm_main.m4a")
        document.getElementById("vid").play();
        $("#zmnew").css("visibility",'hidden');})
    //-----------------------------------------------------------通用方法

    //切换背景
    function qhback(id) {
        if (id==0)
        {
            $('#section-second').vidbg({'mp4': 'mv/200000280.mp4'}, {loop: false,});
            document.getElementById("vid").currentTime = 13;return}
        $('#section-second').vidbg({'mp4': 'mv/' + id + '31_000002.mp4', 'poster': 'img/card/' + id + '31.webp'}, {loop: true,});

    }
    //切换BGM
    function qhbgm(str) {
        $('#bgm').attr("src",str)
    }
    //产生数字 样式 数字 位置x y
    function addnum(style,num,x,y) {
        if(num.length==0||num==null){return}
        t1=new Date().getTime()
        $("#hb").append('<table class="img num num'+style+'" id="t'+t1+'"><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>')
        $("#t"+t1).css("top",y+"px")
        $("#t"+t1).css("left",x+"px")
        numshow(num,$("#t"+t1+" td"),numsize(style))
        numanime($("#t"+t1));
        t1=null
    }
    //数字像素
    function numsize(style) {
        switch (style) {
            case 1:return 37;
            case 2:return 74;
            case 3:return 37;
            case 4:return 37;
            case 5:return 37;
            case 6:return 37;

        }
    }
    //数字淡出动画
    function numanime(ny) {
        ny.css('opacity',(ny.css('opacity')-0.04)*ny.css('opacity')+0.03)
        ny.css('top',(ny.css('top').substr(0,ny.css('top').length-2)-10)+"px")
        ny.css('opacity')<0.03?ny.remove():setTimeout(function(){numanime(ny)},120)
    }
    //数字显示
    function numshow(num,ny,size) {

        for(var i=0;i<6;i++)
        {
            var n=0
            if(num.length>5-i){n= parseInt((num/Math.pow(10,5-i))%10)+1}
            ny.eq(i).css("background-position","0px "+n*size*-1+"px")
        }
    }

})