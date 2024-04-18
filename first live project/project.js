
let play_edu = document.getElementById('edu-pop-up');
let play_hos = document.getElementById('hos-pop-up');
let play_health = document.getElementById('health-pop-up');
let play_med = document.getElementById('medical-pop-up');
let play_resident = document.getElementById('resident-pop-up');
let play_mall = document.getElementById('mall-pop-up');
let play_com = document.getElementById('com-project-up');
let projects_icon = document.getElementById("project_icon");
function edu_pop_up() {

    play_edu.style.display = "block";
    projects_icon.style.display="none";
   

}
function hos_pop_up() {

    play_hos.style.display = "block";
    projects_icon.style.display="none";

}
function health_pop_up() {

    play_health.style.display = "block";
    projects_icon.style.display="none";
}
function med_pop_up() {

    play_med.style.display = "block";
    projects_icon.style.display="none";
}
function resident_pop_up() {

    play_resident.style.display = "block";
    projects_icon.style.display="none";

   
}
function mall_pop_up() {

    play_mall.style.display = "block";
    projects_icon.style.display="none";


}
function com_pop_up(){
    play_com.style.display = "block";
    projects_icon.style.display="none";
    

} 


function exit() {
    play_edu.style.display = "none";
    play_hos.style.display = "none";
    play_com.style.display = "none";
    play_mall.style.display = "none";
    play_med.style.display = "none";
    play_health.style.display = "none";
    play_resident.style.display = "none";
    projects_icon.style.display="block";
    
}
