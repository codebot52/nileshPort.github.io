var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
    opentab.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classlist.add("active-tab");

}