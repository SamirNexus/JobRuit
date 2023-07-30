
//////////////////////////////function to display notifications
function getMoreNotifications(){
    var moreNotification =document.getElementById("moreNotification");
    var seeMore=document.getElementById("seeMore");
    if(moreNotification.style.display === "none"){
        moreNotification.style.display="block";
        seeMore.innerHTML="مشاهدة اشعارات اقل"
    }
    else{
        moreNotification.style.display="none";
        seeMore.innerHTML="مشاهدة جميع الاشعارات"
    }
}
function showMoreDropdown(){
    $("#notificationMenu").toggleClass("d-none");
}

//////////////////////////////Function to close Edit Resume Name///////////////////
function closeEditName(){
  $("#editName").addClass("d-none");
}

//////////////////////////////Function to open Edit Resume Name///////////////////
function showEditName(){
    $("#editName").removeClass("d-none");
}
////////////////////Function to show More Options in resume Template///////////////
function toggleMoreOptons(){
    $("#moreOptions").toggleClass("d-none");
}

//////////////////////////////Change Favorite icon ///////////////////////////
function changeFavorite(id){
  var fav=  document.getElementById(id);
  fav.classList.toggle("fa-regular");
  fav.classList.toggle("fa-solid");
}

function changeFavorite1(id){
    var fav=  document.getElementById(id);
    if( document.getElementById(id).innerHTML==" أضف الي المفضلة"){
        document.getElementById(id).innerHTML=" تمت الإضافة إلي المفضلة";
        fav.classList.remove("fa-regular");
        fav.classList.add("fa-solid");
    }
    else if(document.getElementById(id).innerHTML==" تمت الإضافة إلي المفضلة"){
        document.getElementById(id).innerHTML=" أضف الي المفضلة";
        fav.classList.remove("fa-solid");
        fav.classList.add("fa-regular");
    }
  }

///////////////////////////Change saved icon///////////////////////////////
function changeSaveIcon(id){
    var share=document.getElementById(id);
    share.classList.toggle("fa-regular");
    share.classList.toggle("fa-solid"); 
}

function checkItem(id){
    var check=document.getElementById(id);
    check.classList.toggle("fa-square");
    check.classList.toggle("fa-square-check");
}


function closeSocialIcon(id){
    var x=document.getElementById(`${id}0`);
    x.classList.add("d-none")
}

function showResumeEdit(id){
    var x=document.getElementById(`${id}-section`);
    x.classList.remove("d-none");
}
function removeResumeEdit(id){
   var x= document.getElementById(`${id}section`);
   x.classList.add("d-none")
}

function toggleNav(id){
    document.getElementById(`${id}1`).classList.toggle("d-none");
    document.getElementById(`${id}icon1`).classList.toggle("fa-caret-up");
    document.getElementById(`${id}icon1`).classList.toggle("fa-caret-down");
}  
function toggleIcone(id){
    document.getElementById(id).classList.toggle("fa-square");
    document.getElementById(id).classList.toggle("fa-square-check");
}
////////////////////////////Function to change lock icon///////////////////////////////
function changeLock1(id){
    var fav=  document.getElementById(id);
    fav.classList.toggle("fa-lock");
    fav.classList.toggle("fa-lock-open");
    if( document.getElementById(id).innerHTML==" فتح الملف "){
        document.getElementById(id).innerHTML=" تم فتح الملف ";
        fav.classList.remove("fa-lock");
        fav.classList.add("fa-lock-open");
    }
    else if(document.getElementById(id).innerHTML==" تم فتح الملف "){
        document.getElementById(id).innerHTML=" فتح الملف ";
        fav.classList.remove("fa-lock-open");
        fav.classList.add("fa-lock");
    }
}
//////////////////////////////////show payment popup///////////////////////////////
function showPayment(){
   var x= document.getElementById("paymentNone");
   x.classList.remove("d-none");
}

/////////////////////////New Addition/////////////////////////////////

function showPayment1(id){
    var y=document.getElementById(`${id}ne`)
    var x = document.getElementById(`${id}ne1`);
    x.classList.remove("d-none");
    y.classList.add("d-none")
}
//////////////////////////////Function to display Apply Job Form////////////////////
function showApplyJob(id){
    var x = document.getElementById(`${id}1`);
    x.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.height='100%';
    document.body.style.overflow='hidden';

}
////////////////////////////Function to close Add member section///////////////////////
function showTeaaam(id){
    document.getElementById(`${id}1`).classList.add("d-none");
    document.body.style.height='auto';
    document.body.style.overflowY='scroll';
}
function closePayment(id){
    document.getElementById(`${id}e`).classList.add("d-none");
}
///////////////////////////Function to change Star Rate//////////////////////////////
function changeRate1(){
    document.getElementById("star1").classList.add("yellow");
    document.getElementById("star2").classList.remove("yellow");
    document.getElementById("star3").classList.remove("yellow");
    document.getElementById("star4").classList.remove("yellow");
    document.getElementById("star5").classList.remove("yellow");
}
function changeRate2(){
    document.getElementById("star1").classList.add("yellow");
    document.getElementById("star2").classList.add("yellow");
    document.getElementById("star3").classList.remove("yellow");
    document.getElementById("star4").classList.remove("yellow");
    document.getElementById("star5").classList.remove("yellow");
}
function changeRate3(){
    document.getElementById("star1").classList.add("yellow");
    document.getElementById("star2").classList.add("yellow");
    document.getElementById("star3").classList.add("yellow");
    document.getElementById("star4").classList.remove("yellow");
    document.getElementById("star5").classList.remove("yellow");
}
function changeRate4(){
    document.getElementById("star1").classList.add("yellow");
    document.getElementById("star2").classList.add("yellow");
    document.getElementById("star3").classList.add("yellow");
    document.getElementById("star4").classList.add("yellow");
    document.getElementById("star5").classList.remove("yellow");
}
function changeRate5(){
    document.getElementById("star1").classList.add("yellow");
    document.getElementById("star2").classList.add("yellow");
    document.getElementById("star3").classList.add("yellow");
    document.getElementById("star4").classList.add("yellow");
    document.getElementById("star5").classList.add("yellow");
}

/////////////////////////////////////////New Addition////////////////////////////////////
      ///////////////////////Select an image from any path//////////////////

var fileInput = document.getElementById("files");
var path = document.getElementById("path");
var obPath = document.getElementById("obPath");
var newImageSrc = document.getElementById("userImage");
var newImageSrc2= document.getElementById("newImageSrc2");
var DinaAhmed=document.getElementById("DinaAhmed");
    
function changeImage(fileInput) {
  var reader;

  if (fileInput.files && fileInput.files[0]) {
    reader = new FileReader();
    reader.onload = function(e) {
      path.innerHTML = fileInput.value;
      obPath.innerHTML = e.target.result;
      newImageSrc.src=e.target.result;
      newImageSrc2.src=e.target.result;
      DinaAhmed.src=e.target.result;

    }
    reader.readAsDataURL(fileInput.files[0]);
  }
}

function showOkessage(id)
{
    var y=document.getElementById(`${id}b1`)
    var x = document.getElementById(`${id}b11`);
    y.classList.add("d-none");
    x.classList.remove("d-none");
  
}
/////////////////////////////////////Addition//////////////////////////////////
var fileInput1 = document.getElementById("files1");
var path1 = document.getElementById("path1");
var obPath1 = document.getElementById("obPath1");
var newImageSrc1 = document.getElementById("userImage1");
    
function changeImage1(fileInput1) {
  var reader1;

  if (fileInput1.files && fileInput1.files[0]) {
    reader1 = new FileReader();
    reader1.onload = function(e) {
        path1.innerHTML = fileInput1.value;
        obPath1.innerHTML = e.target.result;
        newImageSrc1.src=e.target.result;

    }
    reader1.readAsDataURL(fileInput1.files[0]);
  }
}

/////////////////////////////// New Addition////////////////////////////
function get_action(form) {
    form.action = document.querySelector('input[name = "x"]:checked').value;
}

function showpaymentManage(){
    var y=document.getElementById("paymentNone1");
    var x= document.getElementById("paymentManage");
   x.classList.remove("d-none");
   y.classList.add("d-none")
}
function showPaymentSpecial(){
   var x= document.getElementById("paymentManage");
   x.classList.remove("d-none");
}

///////////////////////////////////Make Text Bold////////////////////////////////
function makeBold(id) {
    var x=document.getElementById(`${id}T`);
    x.classList.toggle("fw-bold")
}

////////////////////////////////Make Text Italic////////////////////////////
function makeItalic(id) {
    var x=document.getElementById(`${id}1T`);
    x.classList.toggle("fst-italic")
}


function makeTextLeft(id) {
    var x=document.getElementById(`${id}1111T`); 
    x.classList.remove("text-end") 
    x.classList.add("text-start") 
}

function makeTextRight(id) {
    var x=document.getElementById(`${id}d1111T`); 
    x.classList.remove("text-start") 
    x.classList.add("text-end") 
}

// function makeDot(id){
//     var x=document.getElementById(`${id}111T`); 
//     x.classList.toggle("dot") 
// }

