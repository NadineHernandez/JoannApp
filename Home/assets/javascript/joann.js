var machinecontentarr = ["start1304content", "tradition2277content", "simple3223content", "simple3232content", "fashionmate3342content", "confidence7363content", "heavyduty4452content", "profinish14cg754content", "patchwork7285qcontent", "featherweightc240content", "superbem200content", 
"sm1738content", "xs2080content", "cs7205content", "pq1500slcontent", 
"arcticcrystalcontent", "hd1000content", "mod100qcontent", 
"dx7content", "g220content", "mcs1500content", "mo1000content", 
"emerald116content", "jade20content", "opal650content", "opal690qcontent", "sapphire930content", "saphhire965qcontent", "jade35content", "topaz50content", "rubycontent", "epiccontent", "huskylocks25content",]
//var machinenamearr = ["start1304", "tradition2277", "simple3232", "simple3223", "fashionmate3342", "confidence7363", "heavyduty4452", "profinish14cg754", "patchwork7285q", "featherweightc240", "superbem200", 
//"sm1738", "xs2080", "cs7205", "pq1500sl", 
//"arcticcrystal", "hd1000", "mod100q", 
//"dx7", "g220", "mcs1500", "mo1000", 
//"emerald116", "jade20", "opal650", "opal690q", "sapphire930", "saphhire965q", "jade35", "topaz50", "ruby", "epic", "huskylocks25",]

var brandidarr = ["singerbrand", "brotherbrand", "janomebrand", "jukibrand", "vikingbrand"];
//var plusarr = ["+ Singer Products (11)", "+ Brother Products (4)", "+ Janome Products (3)", "+ Juki Products (4)", "+ Viking Products (11)"];
//var minusarr = ["- Singer Products (11)", "- Brother Products (4)", "- Janome Products (3)", "- Juki Products (4)", "- Viking Products (11)"];


var machinebyid;
var starthider;
var startcontent;

var tempnumberbp;
var brandlistbyid;
var startidcontent;
var startidhider;

 var machineaction = {
     //need to make a loop to apply this to each machine
    start: function () {
        for (var i=0; i < machinecontentarr.length; i++) {
        //for (var i=0; i < 33; i++) {
            startcontent = machinecontentarr[i];
            starthider = document.getElementById(startcontent);
            starthider.style.display = "none";
        }
    },

    startbrand: function() {
        for (var i=0; i < 5; i++) {
            startidcontent = brandidarr[i];
            startidhider = document.getElementById(startidcontent);
            startidhider.style.display = "none";
        }
    }
};

machineaction.start();
machineaction.startbrand();

$(".machinenamebox").on("touchstart", function() {
    
    var tempnumber = $(this).val();
    var machineinfo = machinecontentarr[tempnumber];
    var machinebyid = document.getElementById(machineinfo);
    
    if (machinebyid.style.display === "none") {
        machinebyid.style.display = "block";
    } else {
        machinebyid.style.display = "none";
    }

});

$(".brandproductstoggle").on("touchstart", function() {


    var tempnumberbp = $(this).val();
    var brandid = brandidarr[tempnumberbp];
    var brandlistbyid = document.getElementById(brandid);

    if (brandlistbyid.style.display === "none") {
        brandlistbyid.style.display = "block";
    } else{
        brandlistbyid.style.display = "none";
    }
})