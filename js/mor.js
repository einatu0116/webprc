
layui.use(['layer','jquery'], function(){
    var layer = layui.layer
    var $ = layui.jquery

    //基础变量
    var star1=new Array(
        {"name":"日和","id":"1001","star":"1","zm":false,"lvl":"1","pos":200,"hp":65,"mp":40,"mph":5,"atk":88,"def":54,"spe":56,"stk":0,"sef":38},
        {"name":"优衣","id":"1002","star":"1","zm":false,"lvl":"1","pos":800,"hp":51,"mp":40,"mph":5,"atk":0,"def":75,"spe":30,"stk":58,"sef":90},
        {"name":"怜","id":"1003","star":"1","zm":false,"lvl":"1","pos":250,"hp":75,"mp":40,"mph":5,"atk":83,"def":58,"spe":43,"stk":0,"sef":45},
        {"name":"佩可莉姆","id":"1058","star":"1","zm":false,"lvl":"1","pos":155,"hp":95,"mp":40,"mph":5,"atk":44,"def":93,"spe":17,"stk":4,"sef":65},
        {"name":"可可萝","id":"1059","star":"1","zm":false,"lvl":"1","pos":500,"hp":63,"mp":40,"mph":5,"atk":44,"def":88,"spe":47,"stk":4,"sef":80},
        {"name":"凯留","id":"1060","star":"1","zm":false,"lvl":"1","pos":750,"hp":48,"mp":40,"mph":5,"atk":0,"def":37,"spe":46,"stk":94,"sef":42})
    var star2=new Array(
        {"name":"未奏希","id":"1004","star":"2","zm":false,"lvl":"1","pos":205,"hp":71,"mp":40,"mph":5,"atk":70,"def":75,"spe":29,"stk":0,"sef":62},
        {"name":"茉莉","id":"1005","star":"2","zm":false,"lvl":"1","pos":185,"hp":86,"mp":40,"mph":5,"atk":44,"def":87,"spe":17,"stk":4,"sef":84},
        {"name":"茜里","id":"1006","star":"2","zm":false,"lvl":"1","pos":570,"hp":62,"mp":40,"mph":5,"atk":6,"def":64,"spe":31,"stk":55,"sef":86},
        {"name":"宫子","id":"1007","star":"2","zm":false,"lvl":"1","pos":125,"hp":86,"mp":40,"mph":5,"atk":39,"def":91,"spe":47,"stk":4,"sef":60},
        {"name":"雪","id":"1008","star":"2","zm":false,"lvl":"1","pos":805,"hp":58,"mp":40,"mph":5,"atk":9,"def":52,"spe":40,"stk":69,"sef":58},
        {"name":"七七香","id":"1013","star":"2","zm":false,"lvl":"1","pos":740,"hp":47,"mp":40,"mph":5,"atk":0,"def":42,"spe":43,"stk":81,"sef":61},
        {"name":"美里","id":"1015","star":"2","zm":false,"lvl":"1","pos":735,"hp":50,"mp":40,"mph":5,"atk":0,"def":59,"spe":44,"stk":61,"sef":82},
        {"name":"铃奈","id":"1016","star":"2","zm":false,"lvl":"1","pos":705,"hp":44,"mp":40,"mph":5,"atk":83,"def":41,"spe":90,"stk":0,"sef":46},
        {"name":"香织","id":"1017","star":"2","zm":false,"lvl":"1","pos":145,"hp":48,"mp":40,"mph":5,"atk":89,"def":48,"spe":87,"stk":0,"sef":32},
        {"name":"美美","id":"1020","star":"2","zm":false,"lvl":"1","pos":360,"hp":69,"mp":40,"mph":5,"atk":78,"def":58,"spe":58,"stk":0,"sef":37},
        {"name":"胡桃","id":"1021","star":"2","zm":false,"lvl":"1","pos":240,"hp":88,"mp":40,"mph":5,"atk":44,"def":88,"spe":20,"stk":0,"sef":80},
        {"name":"依里","id":"1022","star":"2","zm":false,"lvl":"1","pos":575,"hp":66,"mp":40,"mph":5,"atk":0,"def":41,"spe":36,"stk":86,"sef":43},
        {"name":"绫音","id":"1023","star":"2","zm":false,"lvl":"1","pos":210,"hp":72,"mp":40,"mph":5,"atk":81,"def":60,"spe":44,"stk":0,"sef":46},
        {"name":"铃莓","id":"1025","star":"2","zm":false,"lvl":"1","pos":720,"hp":58,"mp":40,"mph":5,"atk":9,"def":56,"spe":37,"stk":67,"sef":64},
        {"name":"铃","id":"1026","star":"2","zm":false,"lvl":"1","pos":550,"hp":69,"mp":40,"mph":5,"atk":48,"def":92,"spe":22,"stk":0,"sef":84},
        {"name":"惠理子","id":"1027","star":"2","zm":false,"lvl":"1","pos":230,"hp":55,"mp":40,"mph":5,"atk":96,"def":37,"spe":83,"stk":2,"sef":32},
        {"name":"忍","id":"1031","star":"2","zm":false,"lvl":"1","pos":365,"hp":67,"mp":40,"mph":5,"atk":77,"def":58,"spe":59,"stk":0,"sef":39},
        {"name":"真阳","id":"1033","star":"2","zm":false,"lvl":"1","pos":395,"hp":68,"mp":40,"mph":5,"atk":73,"def":73,"spe":36,"stk":0,"sef":56},
        {"name":"优花梨","id":"1034","star":"2","zm":false,"lvl":"1","pos":405,"hp":83,"mp":40,"mph":5,"atk":47,"def":84,"spe":17,"stk":4,"sef":88},
        {"name":"栞","id":"1038","star":"2","zm":false,"lvl":"1","pos":710,"hp":39,"mp":40,"mph":5,"atk":83,"def":38,"spe":92,"stk":0,"sef":52},
        {"name":"碧","id":"1040","star":"2","zm":false,"lvl":"1","pos":785,"hp":53,"mp":40,"mph":5,"atk":75,"def":68,"spe":47,"stk":0,"sef":60},
        {"name":"千歌","id":"1042","star":"2","zm":false,"lvl":"1","pos":790,"hp":50,"mp":43,"mph":5,"atk":0,"def":63,"spe":43,"stk":60,"sef":84},
        {"name":"空花","id":"1045","star":"2","zm":false,"lvl":"1","pos":130,"hp":88,"mp":40,"mph":5,"atk":25,"def":87,"spe":14,"stk":16,"sef":92},
        {"name":"珠希","id":"1046","star":"2","zm":false,"lvl":"1","pos":215,"hp":57,"mp":40,"mph":5,"atk":79,"def":47,"spe":80,"stk":0,"sef":43},
        {"name":"美冬","id":"1048","star":"2","zm":false,"lvl":"1","pos":420,"hp":62,"mp":40,"mph":5,"atk":69,"def":88,"spe":32,"stk":2,"sef":61},
        {"name":"美咲","id":"1050","star":"2","zm":false,"lvl":"1","pos":760,"hp":48,"mp":40,"mph":5,"atk":0,"def":37,"spe":48,"stk":91,"sef":41},
        {"name":"深月","id":"1051","star":"2","zm":false,"lvl":"1","pos":565,"hp":68,"mp":40,"mph":5,"atk":59,"def":58,"spe":34,"stk":2,"sef":52},
        {"name":"莉玛","id":"1052","star":"2","zm":false,"lvl":"1","pos":105,"hp":89,"mp":40,"mph":5,"atk":36,"def":93,"spe":14,"stk":4,"sef":89},
        {"name":"纺希","id":"1054","star":"2","zm":false,"lvl":"1","pos":195,"hp":72,"mp":40,"mph":5,"atk":70,"def":75,"spe":31,"stk":2,"sef":58},
        {"name":"步未","id":"1055","star":"2","zm":false,"lvl":"1","pos":510,"hp":78,"mp":40,"mph":5,"atk":42,"def":85,"spe":41,"stk":4,"sef":78},
        {"name":"可可萝","id":"1076","star":"2","zm":false,"lvl":"1","pos":535,"hp":65,"mp":40,"mph":5,"atk":47,"def":88,"spe":51,"stk":8,"sef":62},
        {"name":"美冬","id":"1080","star":"2","zm":false,"lvl":"1","pos":495,"hp":60,"mp":40,"mph":5,"atk":89,"def":67,"spe":46,"stk":2,"sef":39},
        {"name":"宫子","id":"1082","star":"2","zm":false,"lvl":"1","pos":590,"hp":56,"mp":40,"mph":5,"atk":81,"def":60,"spe":63,"stk":0,"sef":38},
        {"name":"千歌","id":"1084","star":"2","zm":false,"lvl":"1","pos":770,"hp":47,"mp":40,"mph":5,"atk":0,"def":68,"spe":40,"stk":58,"sef":85},
        {"name":"胡桃","id":"1085","star":"2","zm":false,"lvl":"1","pos":295,"hp":88,"mp":40,"mph":5,"atk":40,"def":92,"spe":16,"stk":4,"sef":82},
        {"name":"绫音","id":"1086","star":"2","zm":false,"lvl":"1","pos":190,"hp":60,"mp":40,"mph":5,"atk":97,"def":55,"spe":58,"stk":0,"sef":34},
        {"name":"怜","id":"1089","star":"2","zm":false,"lvl":"1","pos":153,"hp":90,"mp":40,"mph":5,"atk":40,"def":84,"spe":14,"stk":4,"sef":91},
        {"name":"惠理子","id":"1090","star":"2","zm":false,"lvl":"1","pos":187,"hp":62,"mp":40,"mph":5,"atk":97,"def":30,"spe":83,"stk":2,"sef":30},
        {"name":"露","id":"1093","star":"2","zm":false,"lvl":"1","pos":640,"hp":47,"mp":40,"mph":5,"atk":0,"def":36,"spe":38,"stk":99,"sef":39},
        {"name":"拉姆","id":"1098","star":"2","zm":false,"lvl":"1","pos":545,"hp":45,"mp":40,"mph":5,"atk":0,"def":43,"spe":36,"stk":95,"sef":42},
        {"name":"伊绪","id":"1101","star":"2","zm":false,"lvl":"1","pos":715,"hp":50,"mp":40,"mph":5,"atk":0,"def":69,"spe":35,"stk":60,"sef":87},
        {"name":"香织","id":"1105","star":"2","zm":false,"lvl":"1","pos":425,"hp":47,"mp":40,"mph":5,"atk":89,"def":48,"spe":88,"stk":0,"sef":31},
        {"name":"未奏希","id":"1112","star":"2","zm":false,"lvl":"1","pos":212,"hp":84,"mp":41,"mph":5,"atk":84,"def":45,"spe":71,"stk":4,"sef":32},
        {"name":"望","id":"1116","star":"2","zm":false,"lvl":"1","pos":418,"hp":85,"mp":40,"mph":5,"atk":41,"def":88,"spe":19,"stk":4,"sef":86},
        {"name":"铃莓","id":"1121","star":"2","zm":false,"lvl":"1","pos":722,"hp":52,"mp":40,"mph":5,"atk":0,"def":61,"spe":40,"stk":58,"sef":86},
        {"name":"栞","id":"1123","star":"2","zm":false,"lvl":"1","pos":712,"hp":39,"mp":40,"mph":5,"atk":85,"def":31,"spe":97,"stk":0,"sef":48},
        {"name":"未央","id":"1126","star":"2","zm":false,"lvl":"1","pos":695,"hp":50,"mp":40,"mph":5,"atk":0,"def":47,"spe":35,"stk":81,"sef":62},
        {"name":"步未","id":"1130","star":"2","zm":false,"lvl":"1","pos":508,"hp":78,"mp":40,"mph":5,"atk":42,"def":87,"spe":41,"stk":4,"sef":76},
        {"name":"杏柰","id":"1132","star":"2","zm":false,"lvl":"1","pos":440,"hp":56,"mp":40,"mph":5,"atk":0,"def":40,"spe":38,"stk":96,"sef":42}
    )
    var star3=new Array(
        {"name":"杏柰","id":"1009","star":"3","zm":false,"lvl":"1","pos":440,"hp":56,"mp":40,"mph":5,"atk":0,"def":44,"spe":30,"stk":92,"sef":48},
        {"name":"真步","id":"1010","star":"3","zm":false,"lvl":"1","pos":795,"hp":52,"mp":40,"mph":5,"atk":9,"def":70,"spe":39,"stk":52,"sef":87},
        {"name":"璃乃","id":"1011","star":"3","zm":false,"lvl":"1","pos":700,"hp":39,"mp":40,"mph":5,"atk":87,"def":40,"spe":95,"stk":0,"sef":41},
        {"name":"初音","id":"1012","star":"3","zm":false,"lvl":"1","pos":755,"hp":48,"mp":40,"mph":5,"atk":0,"def":45,"spe":45,"stk":82,"sef":53},
        {"name":"霞","id":"1014","star":"3","zm":false,"lvl":"1","pos":730,"hp":54,"mp":40,"mph":5,"atk":6,"def":67,"spe":38,"stk":54,"sef":87},
        {"name":"伊绪","id":"1018","star":"3","zm":false,"lvl":"1","pos":715,"hp":53,"mp":40,"mph":5,"atk":0,"def":65,"spe":39,"stk":67,"sef":66},
        {"name":"咲恋","id":"1028","star":"3","zm":false,"lvl":"1","pos":430,"hp":90,"mp":40,"mph":5,"atk":73,"def":50,"spe":43,"stk":0,"sef":51},
        {"name":"望","id":"1029","star":"3","zm":false,"lvl":"1","pos":160,"hp":87,"mp":40,"mph":5,"atk":40,"def":90,"spe":14,"stk":4,"sef":89},
        {"name":"妮侬","id":"1030","star":"3","zm":false,"lvl":"1","pos":415,"hp":61,"mp":40,"mph":5,"atk":84,"def":49,"spe":79,"stk":0,"sef":33},
        {"name":"秋乃","id":"1032","star":"3","zm":false,"lvl":"1","pos":180,"hp":75,"mp":40,"mph":5,"atk":75,"def":64,"spe":40,"stk":0,"sef":50},
        {"name":"镜华","id":"1036","star":"3","zm":false,"lvl":"1","pos":810,"hp":51,"mp":40,"mph":5,"atk":0,"def":36,"spe":51,"stk":86,"sef":48},
        {"name":"智","id":"1037","star":"3","zm":false,"lvl":"1","pos":220,"hp":61,"mp":40,"mph":5,"atk":91,"def":41,"spe":81,"stk":0,"sef":31},
        {"name":"真琴","id":"1043","star":"3","zm":false,"lvl":"1","pos":165,"hp":65,"mp":40,"mph":5,"atk":95,"def":45,"spe":66,"stk":0,"sef":30},
        {"name":"伊莉亚","id":"1044","star":"3","zm":false,"lvl":"1","pos":425,"hp":49,"mp":40,"mph":5,"atk":0,"def":33,"spe":66,"stk":89,"sef":40},
        {"name":"纯","id":"1047","star":"3","zm":false,"lvl":"1","pos":135,"hp":96,"mp":40,"mph":5,"atk":40,"def":94,"spe":20,"stk":4,"sef":83},
        {"name":"静流","id":"1049","star":"3","zm":false,"lvl":"1","pos":285,"hp":87,"mp":40,"mph":5,"atk":54,"def":82,"spe":23,"stk":0,"sef":54},
        {"name":"莫妮卡","id":"1053","star":"3","zm":false,"lvl":"1","pos":410,"hp":66,"mp":40,"mph":5,"atk":66,"def":54,"spe":59,"stk":0,"sef":60},
        {"name":"流夏","id":"1056","star":"3","zm":false,"lvl":"1","pos":158,"hp":91,"mp":40,"mph":5,"atk":40,"def":88,"spe":18,"stk":4,"sef":81},
        {"name":"姬塔","id":"1057","star":"3","zm":false,"lvl":"1","pos":245,"hp":69,"mp":40,"mph":5,"atk":85,"def":39,"spe":81,"stk":0,"sef":31},
        {"name":"矛依未","id":"1061","star":"3","zm":false,"lvl":"1","pos":162,"hp":67,"mp":40,"mph":5,"atk":90,"def":44,"spe":66,"stk":0,"sef":34},
        {"name":"亚里莎","id":"1063","star":"3","zm":false,"lvl":"1","pos":625,"hp":35,"mp":40,"mph":5,"atk":84,"def":36,"spe":100,"stk":0,"sef":50},
        {"name":"嘉夜","id":"1065","star":"3","zm":false,"lvl":"1","pos":168,"hp":51,"mp":40,"mph":5,"atk":89,"def":47,"spe":84,"stk":0,"sef":35},
        {"name":"祈梨","id":"1066","star":"3","zm":false,"lvl":"1","pos":197,"hp":68,"mp":40,"mph":5,"atk":77,"def":72,"spe":40,"stk":0,"sef":48},
        {"name":"似似花","id":"1070","star":"3","zm":false,"lvl":"1","pos":660,"hp":54,"mp":40,"mph":5,"atk":0,"def":38,"spe":36,"stk":97,"sef":43},
        {"name":"克里丝缇娜","id":"1071","star":"3","zm":false,"lvl":"1","pos":290,"hp":71,"mp":40,"mph":5,"atk":95,"def":45,"spe":59,"stk":0,"sef":30},
        {"name":"佩可莉姆","id":"1075","star":"3","zm":false,"lvl":"1","pos":235,"hp":90,"mp":40,"mph":5,"atk":80,"def":41,"spe":44,"stk":0,"sef":35},
        {"name":"铃莓","id":"1077","star":"3","zm":false,"lvl":"1","pos":775,"hp":52,"mp":40,"mph":5,"atk":8,"def":68,"spe":40,"stk":54,"sef":84},
        {"name":"凯留","id":"1078","star":"3","zm":false,"lvl":"1","pos":780,"hp":41,"mp":40,"mph":5,"atk":0,"def":37,"spe":50,"stk":99,"sef":38},
        {"name":"珠希","id":"1079","star":"3","zm":false,"lvl":"1","pos":225,"hp":64,"mp":40,"mph":5,"atk":85,"def":48,"spe":60,"stk":0,"sef":43},
        {"name":"忍","id":"1081","star":"3","zm":false,"lvl":"1","pos":440,"hp":51,"mp":40,"mph":5,"atk":84,"def":54,"spe":84,"stk":0,"sef":32},
        {"name":"美咲","id":"1083","star":"3","zm":false,"lvl":"1","pos":815,"hp":52,"mp":40,"mph":5,"atk":0,"def":62,"spe":46,"stk":66,"sef":65},
        {"name":"日和","id":"1087","star":"3","zm":false,"lvl":"1","pos":170,"hp":55,"mp":40,"mph":5,"atk":100,"def":47,"spe":64,"stk":0,"sef":35},
        {"name":"优衣","id":"1088","star":"3","zm":false,"lvl":"1","pos":745,"hp":52,"mp":40,"mph":5,"atk":0,"def":65,"spe":39,"stk":62,"sef":81},
        {"name":"静流","id":"1091","star":"3","zm":false,"lvl":"1","pos":385,"hp":86,"mp":40,"mph":5,"atk":68,"def":72,"spe":25,"stk":0,"sef":53},
        {"name":"安","id":"1092","star":"3","zm":false,"lvl":"1","pos":630,"hp":55,"mp":40,"mph":5,"atk":0,"def":43,"spe":39,"stk":92,"sef":41},
        {"name":"古蕾娅","id":"1094","star":"3","zm":false,"lvl":"1","pos":525,"hp":49,"mp":40,"mph":5,"atk":0,"def":40,"spe":45,"stk":94,"sef":46},
        {"name":"空花","id":"1095","star":"3","zm":false,"lvl":"1","pos":140,"hp":87,"mp":40,"mph":5,"atk":16,"def":92,"spe":13,"stk":32,"sef":92},
        {"name":"妮侬","id":"1096","star":"3","zm":false,"lvl":"1","pos":175,"hp":59,"mp":40,"mph":5,"atk":89,"def":39,"spe":86,"stk":0,"sef":31},
        {"name":"蕾姆","id":"1097","star":"3","zm":false,"lvl":"1","pos":540,"hp":48,"mp":40,"mph":5,"atk":97,"def":37,"spe":91,"stk":0,"sef":30},
        {"name":"爱蜜莉雅","id":"1099","star":"3","zm":false,"lvl":"1","pos":725,"hp":63,"mp":40,"mph":5,"atk":0,"def":48,"spe":43,"stk":71,"sef":62},
        {"name":"铃奈","id":"1100","star":"3","zm":false,"lvl":"1","pos":705,"hp":39,"mp":40,"mph":5,"atk":83,"def":41,"spe":93,"stk":0,"sef":47},
        {"name":"咲恋","id":"1103","star":"3","zm":false,"lvl":"1","pos":585,"hp":88,"mp":40,"mph":5,"atk":49,"def":88,"spe":24,"stk":4,"sef":62},
        {"name":"真琴","id":"1104","star":"3","zm":false,"lvl":"1","pos":180,"hp":65,"mp":40,"mph":5,"atk":97,"def":43,"spe":66,"stk":0,"sef":30},
        {"name":"真步","id":"1106","star":"3","zm":false,"lvl":"1","pos":792,"hp":42,"mp":40,"mph":5,"atk":0,"def":38,"spe":48,"stk":90,"sef":57},
        {"name":"碧","id":"1107","star":"3","zm":false,"lvl":"1","pos":680,"hp":41,"mp":40,"mph":5,"atk":79,"def":47,"spe":86,"stk":0,"sef":53},
        {"name":"克罗衣","id":"1108","star":"3","zm":false,"lvl":"1","pos":185,"hp":53,"mp":40,"mph":5,"atk":78,"def":54,"spe":86,"stk":0,"sef":34},
        {"name":"琪爱儿","id":"1109","star":"3","zm":false,"lvl":"1","pos":222,"hp":56,"mp":40,"mph":5,"atk":85,"def":62,"spe":62,"stk":0,"sef":36},
        {"name":"优妮","id":"1110","star":"3","zm":false,"lvl":"1","pos":807,"hp":65,"mp":40,"mph":5,"atk":0,"def":72,"spe":20,"stk":55,"sef":92},
        {"name":"镜华","id":"1111","star":"3","zm":false,"lvl":"1","pos":820,"hp":38,"mp":40,"mph":5,"atk":0,"def":42,"spe":47,"stk":82,"sef":66},
        {"name":"美美","id":"1113","star":"3","zm":false,"lvl":"1","pos":365,"hp":68,"mp":40,"mph":5,"atk":84,"def":51,"spe":63,"stk":0,"sef":34},
        {"name":"露娜","id":"1114","star":"3","zm":false,"lvl":"1","pos":765,"hp":44,"mp":40,"mph":5,"atk":0,"def":37,"spe":46,"stk":94,"sef":41},
        {"name":"克里丝缇娜","id":"1115","star":"3","zm":false,"lvl":"1","pos":290,"hp":68,"mp":40,"mph":5,"atk":98,"def":39,"spe":61,"stk":0,"sef":33},
        {"name":"伊莉亚","id":"1117","star":"3","zm":false,"lvl":"1","pos":255,"hp":51,"mp":0,"mph":5,"atk":0,"def":37,"spe":63,"stk":88,"sef":41},
        {"name":"可可萝","id":"1119","star":"3","zm":false,"lvl":"1","pos":159,"hp":64,"mp":40,"mph":5,"atk":41,"def":91,"spe":44,"stk":4,"sef":82},
        {"name":"凯留","id":"1120","star":"3","zm":false,"lvl":"1","pos":690,"hp":44,"mp":40,"mph":5,"atk":0,"def":40,"spe":41,"stk":95,"sef":39},
        {"name":"霞","id":"1122","star":"3","zm":false,"lvl":"1","pos":730,"hp":54,"mp":40,"mph":5,"atk":6,"def":68,"spe":37,"stk":54,"sef":87},
        {"name":"卯月","id":"1124","star":"3","zm":false,"lvl":"1","pos":370,"hp":58,"mp":40,"mph":5,"atk":83,"def":37,"spe":93,"stk":0,"sef":30},
        {"name":"凛","id":"1125","star":"3","zm":false,"lvl":"1","pos":153,"hp":91,"mp":40,"mph":5,"atk":59,"def":76,"spe":45,"stk":13,"sef":86},
        {"name":"铃","id":"1127","star":"3","zm":false,"lvl":"1","pos":422,"hp":57,"mp":40,"mph":5,"atk":79,"def":73,"spe":41,"stk":0,"sef":55},
        {"name":"真阳","id":"1128","star":"3","zm":false,"lvl":"1","pos":390,"hp":62,"mp":40,"mph":5,"atk":83,"def":70,"spe":49,"stk":0,"sef":38},
        {"name":"璃乃","id":"1129","star":"3","zm":false,"lvl":"1","pos":730,"hp":35,"mp":40,"mph":5,"atk":87,"def":39,"spe":91,"stk":0,"sef":51},
        {"name":"优衣","id":"1802","star":"3","zm":false,"lvl":"1","pos":767,"hp":49,"mp":40,"mph":5,"atk":0,"def":36,"spe":47,"stk":90,"sef":48},
        {"name":"佩可莉姆","id":"1804","star":"3","zm":false,"lvl":"1","pos":155,"hp":96,"mp":40,"mph":5,"atk":41,"def":91,"spe":20,"stk":4,"sef":64},
        {"name":"可可萝","id":"1805","star":"3","zm":false,"lvl":"1","pos":555,"hp":83,"mp":40,"mph":5,"atk":53,"def":56,"spe":29,"stk":10,"sef":50})
    var bgm=  document.getElementById("bgm")
    var back=0,mue=0;
    var data=new Array({"hero": null,"item": null})
    var t1,t2,t3,t4,t5
    bgm.volume = 0.34;
    // $(document).bind("contextmenu",function(e){
    //     return false;
    // });



    //加载
    for (var i=0;i<4;i++)
    {$('.mapimg').eq(i).css("background-image",'url(img/map/mapai/map'+(i+1)+'.png)')}

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

    $('#m_new').click(function () {
        pmap()
    })

    $('#m_house').click(function () {
        phome()
    })

    $('#m_bull').click(function () {
        bull(10)
        qhmue(0)
    })

    $('#homecd1').click(function () {
        box()
    })

    //---------------------------------------------------------------------------------------------
    //冒险地图
    var mapnum=-1,mapbool=true,mapnum1=0
    function pmap() {
        if(mue==2)return
        mapnum=-1
        mapnum1=0
        qhback(-2)
        qhmue(2)
        $("#mapload").addClass("maploadaime")
        $("#mapload").css("visibility",'inherit');
        $("#mapli img").eq(0).css("visibility",'hidden');
        $("#mapli img").eq(1).css("visibility",'inherit');
        $("#maplist").css('margin-left',"-2%")
        maptran(0)
        setTimeout(function () {
            qhbgm("responses/bgm_map.m4a")
            $("#mapload").css("visibility",'hidden');
            $("#mapload").removeClass("maploadaime")

            bgm.currentTime=5.5


        }, 1000)

    }
    //点击
    $(document).on('click','.mapbox',function (e) {maptran($(".mapbox").index(this))})
    $("#mapli img").click(function () {
            if(!mapbool) return
            t1=$("#mapli img").index(this)*2-1
            mapchange(t1)

        })
    //地图切换
    function maptran(num) {
        if(mapnum==num)return
        mapnum=num
        switch (mapnum) {
            case 0: $("#wmapsea").css({"left":"-2285px","top":"-2185px"}); break;
            case 1: $("#wmapsea").css({"left":"-2125px","top":"-1375px"}); break;
            case 2: $("#wmapsea").css({"left":"-2125px","top":"-2450px"}); break;
            case 3: $("#wmapsea").css({"left":"-1775px","top":"-2750px"}); break;
        }
    }
    function mapchange(t1) {
        mapnum1+=t1
        mapbool=false
        mapmove(0,t1)
        mapnum1<0?mapnum1=0:mapnum1>1?mapnum1=1:true
        if(t1==1)
        {
            if(mapnum<mapnum1)maptran(mapnum1)
            if(mapnum1<2)   $("#mapli img").eq(0).css("visibility",'inherit');
            //最大个数-4
            if(mapnum1>0)   $("#mapli img").eq(1).css("visibility",'hidden');
        }
        if(t1==-1)
        {
            if(mapnum>mapnum1)maptran(mapnum1)
            //最大个数-5
            if(mapnum1>-1) $("#mapli img").eq(1).css("visibility",'inherit');
            if(mapnum1<1) $("#mapli img").eq(0).css("visibility",'hidden');

        }

    }
    //地图过渡
    function mapmove(num,x) {
        var ml=$("#maplist").css('margin-left')
        $("#maplist").css('margin-left',( ml.substr(0,  ml.length-2)-32.09*x)+"px")
        if(num>10) mapbool=true
        else setTimeout(function () {mapmove(num+1,x)}, 30)}

    //---------------------------------------------------------------------------------------------
    //工会之家
    function phome() {
        if(mue==1)return
        qhback(-1)
        qhmue(1)
        qhbgm("responses/bgm_home.m4a")
    }
    //---------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------
    //队伍盒子
    function box() {
        $("#shade").css("visibility",'inherit');

        scro=1
        var schight=0
        if(data.hero.length>16) {schight=$("#teambox").height()/(162*parseInt(data.hero.length/8+0.5))*0.95*316}
        else {schight=316}
        $("#scroll_a").css("height",schight+"px")
        $("#teamboxsc").css("top","0px");
        $("#scroll_a").css("top","0px");
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
        $("#attr").css("visibility",'inherit');
        $("#attr span").html(ptdata.name)
        $("#attr span").attr('data-text',ptdata.name)
        for(var i=0;i<11;i++)
        {
            switch (i) {
                case 0: $("#attr div").eq(1).html(hp(ptdata.hp,ptdata.lvl,ptdata.star));break;
                case 1:$("#attr div").eq(3).html(ptdata.mp);break;
                case 2:$("#attr div").eq(5).html(attk(ptdata.atk,ptdata.lvl,ptdata.star));break;
                case 3:$("#attr div").eq(7).html(def(ptdata.def,ptdata.lvl,ptdata.star));break;
                case 4:$("#attr div").eq(9).html(ptdata.mph);break;
                case 5:$("#attr div").eq(11).html(attk(ptdata.stk,ptdata.lvl,ptdata.star));break;
                case 6:$("#attr div").eq(13).html(def(ptdata.sef,ptdata.lvl,ptdata.star));break;
                case 7:$("#attr div").eq(15).html(spe(ptdata.spe,ptdata.lvl,ptdata.star,true));break;
                case 8:$("#attr div").eq(17).html(spe(ptdata.spe,ptdata.lvl,ptdata.star,false));break;
                case 9:$("#attr div").eq(19).html(0);break;
                case 10:$("#attr div").eq(21).html(0);break;
            }
        }
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
        $("#attr").css("visibility",'hidden');
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
        //显示女仆动画面板，显示招募板，隐藏菜单
        $("#zm").css("visibility",'inherit')
        $("#bulletin").css("visibility",'inherit');
        $("#ui").css("visibility",'hidden');
        carcon[0]=true
        boolzmb=true
        //女仆动画播放完毕后 开始播放招募卡片动画
        document.getElementById("zm").onended = function () {
            $("#bulletin").addClass("bulletinaime");zmb(0); carcon[1]=false
            $("#zm").css("visibility",'hidden');bgm.currentTime=6.52}
        //减少DOM操作 全部在这里添加。
        t1="";
        for(var i=0;i<x;i++)
        {t1+= "<div class='layui-col-xs2 cardbt'><div class='card img'><div class='abs'></div></div></div>"}
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
            $(".card .abs").eq(x).addClass("stbink"+rstar[x])
            setTimeout(function () {zmb(x+1);}, 355+-18*x);}
        else {setTimeout(function () {carcon[1]=true}, 2350);}
    }
    //抽取扭蛋
    function gash() {

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
            $("#curta").addClass("curtaaime").css("visibility",'inherit')
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
                setTimeout(function () {carcon[2]=true;$("#curta").css("visibility",'hidden')},500);}, 850)
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

    //返回主界面
    $(document).on('click','#back',function () {
        qhback(back)
        qhbgm("responses/bgm_main.m4a")
        qhmue(0)})

    //切换背景
    function qhback(id) {
        if (id==0)
        {
            $('#section-second').vidbg({'mp4': 'mv/200000280.mp4'}, {loop: false,});
            document.getElementById("vid").currentTime = 13;return}
        else if(id==-1){
            $('#section-second').vidbg({'poster': 'img/bg/bg_500360.png'})
        }
        else if(id==-2){
            $('#section-second').vidbg({'poster': 'img/bg/bg_530011.png'})}
        else {
            $('#section-second').vidbg({'mp4': 'mv/' + id + '31_000002.mp4', 'poster': 'img/card/' + id + '31.webp'}, {loop: true,});
        }

    }
    //切换BGM
    function qhbgm(str) {
        $('#bgm').attr("src",str)
    }

    //切换主界面
    function  qhmue(num) {
        switch (mue) {
            case 1: $("#homeback").css("visibility",'hidden') ;break;
            case 2: $("#mapback").css("visibility",'hidden') ;break;
        }
        switch (num) {
            case 0:  $("#back").css("visibility",'hidden') ;break;
            case 1:  $("#homeback").css("visibility",'inherit') ;$("#back").css("visibility",'inherit');break;
            case 2:  $("#mapback").css("visibility",'inherit') ;$("#back").css("visibility",'inherit');break;
        }

        mue=num
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

    //能力
    function attk(n,l,s) {
        var lvl=(n*3500)
        var l100= Math.pow(lvl*(8000)*50*Math.E,0.52)
        var l1= Math.pow(lvl*(101)*50*Math.E,0.52)
        return Math.round(Math.pow((((l100-l1)/100*(l-1))+l1)/1000*Math.E,0.95+0.02*s))

    }
    function hp(n,l,s) {
        var lvl=(n*n*700)
        var h100= Math.pow(lvl*(28658)*80*Math.E,Math.PI/10)
        var h1= Math.pow(lvl*(101)*80*Math.E,Math.PI/10)
        return Math.round(Math.pow(((h100-h1)/100*(l-1))+(h1*Math.PI)/Math.E,0.95+0.02*s))}



    function def(n,l,s) {
        var lvl=(Math.pow((n*n)+n,1.05))
        var j100= Math.pow(lvl*(6235),0.3)*4
        var j1= Math.pow(lvl*(5),0.3)*4
        var v=Math.round(Math.pow((j1+((j100-j1)/100*(l-1)))/Math.E,0.95+0.02*s));
        return  v
    }

    function spe(n,l,s,bool) {
        var sp=Math.pow((n*2*(parseInt(l)+10)/210)+20,0.95+0.02*s)
        if(bool) return Math.round(sp)
        //var sp=((n*2*(parseInt(l)+10)/210)+20)*(25+s*(1+s*1.05))/36
        var hb=Math.log(((l*30)/125*Math.pow(n*Math.pow(n,0.3),7)))/Math.E-Math.PI
        hb=hb>10?(hb*100%1000)/Math.PI:0
        hb=Math.round(Math.pow(hb,0.95+0.02*s));
        return hb
    }
})
