/////////////////////////// Functions to change password////////////////////////
function togglePassword1(){
let passwordInput=document.getElementById('password1');
if(passwordInput.type === "password"){
    passwordInput.type="text";
}
else{
    passwordInput.type="password";
}
}

function togglePassword2(){
let passwordInput=document.getElementById('password2');
if(passwordInput.type === "password"){
    passwordInput.type="text";
}
else{
    passwordInput.type="password";
}
}

function togglePassword3(){
let passwordInput=document.getElementById('password');
if(passwordInput.type === "password"){
    passwordInput.type="text";
}
else{
    passwordInput.type="password";
}
}
////////////////////Function to activate button in createAccount page///////////////
$("#policy").click(function(){
    var checked_status =this.checked;
    if(checked_status == true){
      $("#apply").removeClass("disabled");
    }
    else{
        $("#apply").addClass("disabled");
    }
})
//////////////////////////////change saved icon//////////////////////////
$(".bookmark1").click(function(){
        $(".bookmark1").toggleClass("fa-regular");
        $(".bookmark1").toggleClass("fa-solid");
})

$(".bookmark2").click(function(){
        $(".bookmark2").toggleClass("fa-regular");
        $(".bookmark2").toggleClass("fa-solid");
})
$(".bookmark3").click(function(){
        $(".bookmark3").toggleClass("fa-regular");
        $(".bookmark3").toggleClass("fa-solid");
})
$(".bookmark4").click(function(){
        $(".bookmark4").toggleClass("fa-regular");
        $(".bookmark4").toggleClass("fa-solid");
})
$(".bookmark5").click(function(){
        $(".bookmark5").toggleClass("fa-regular");
        $(".bookmark5").toggleClass("fa-solid");
})

//////////////////Function to make checkBox can choose one choice only///////////////
$(".radio").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = ".radio[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

/////////////////////Function to make user available for employment////////////////////
function changePosition(){
    var elementPosition=document.getElementById("activeButton1");
    document.getElementById("activeButton1").style.color="#E4E4E4";
    if(elementPosition.offsetLeft == -1)
    {
        document.getElementById("activeButton1").style.left="37px";
        document.getElementById("userImageBorder").classList.remove("d-none");
        document.getElementById("availableSpan").style.color="#149FBD";
        document.getElementById("activeButton1").style.backgroundColor="#149FBD";
        document.getElementById("activeButton1").style.borderColor="#149FBD";
        document.getElementById("availableSpan").innerHTML="متاح للتوظيف";
        document.getElementById("selectdivHome").classList.remove("d-none");
    }
    else if(elementPosition.offsetLeft == 37)
    {
        document.getElementById("activeButton1").style.left="-1px";
        document.getElementById("userImageBorder").classList.add("d-none");
        document.getElementById("availableSpan").style.color="#707070";
        document.getElementById("activeButton1").style.backgroundColor="white";
        document.getElementById("activeButton1").style.borderColor="#E4E4E4";
        document.getElementById("availableSpan").innerHTML="متاح للتوظيف؟";
        document.getElementById("selectdivHome").classList.add("d-none");
    }   
}
/////////////Function to display share options////////////////////

function openShareIcon(id){
   var x= document.getElementById(`${id}10`);
   x.classList.toggle("d-none")
}


/////////////////////////////////////////New Addition////////////////////////////////////
      ///////////////////////Select an image//////////////////

// $("#files").change(function() {
//     filename = this.files[0].name;
//     console.log(filename);
//     var newImageSrc = document.getElementById("userImage");
//     var newImageSrc2= document.getElementById("newImageSrc2");
//     newImageSrc.src=`images/${filename}`;
//     newImageSrc2.src=`images/${filename}`;
//   });

        ///////////////////////Add New Section//////////////////
function addExperinceSection(){
    var newSection=``;
    var x=Math.random();
    newSection += `<div id="dina" class="row pt-4">
    <div class="d-flex justify-content-end">
            <div onclick="deleteSection('dina')" class="closeIcon d-flex justify-content-center align-items-center">
                 <i class="fa-solid fa-minus"></i>
            </div>
    </div>
    <div class="col-lg-6 py-2">
        <label for="companyName" class="py-2 fw-bold d-flex">اسم الشركه
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit">
            <div class="inputs py-2 px-2">
                <input id="companyName" name="companyName" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 selectEdit2 py-2">
        <label for="positionName" class="py-2 fw-bold d-flex">المسمى الوظيفى
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit3">
            <div class="inputs py-2 px-2">
                <input id="positionName" name="positionName" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div>
    <div class="col-lg-12 py-2">
        <label for="description" class="py-2 fw-bold d-flex">الوصف
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit3">
            <div class="inputs  py-2 px-2">
                <textarea class="bg-transparent ahmedAhmed border-0 w-100" name="" placeholder="" id=""  rows="3"></textarea>
                </div>
        </div>
    </div>  
    <div class="row">
        <label for="" class="py-2 fw-bold d-flex">تاريخ البدء
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>الشهر</option>
                    <option value="يناير">يناير</option>
                    <option value="فبراير">فبراير</option>
                    <option value="مارس">مارس</option>
                    <option value="ابريل">ابريل</option>
                    <option value="مايو">مايو</option>
                    <option value="يونيو">يونيو</option>
                    <option value="يوليو">يوليو</option>
                    <option value="اغسطس">اغسطس</option>
                    <option value="سبتمبر">سبتمبر</option>
                    <option value="اكتوبر">اكتوبر</option>
                    <option value="نوفمبر">نوفمبر</option>
                    <option value="ديسمبر">ديسمبر</option>
                </select>   
            </div>                                     
        </div>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>السنه</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2019">2020</option>
                    <option value="2019">2021</option>
                    <option value="2019">2022</option>
                </select> 
            </div>                                       
        </div>
    </div>
    <div class="row">
        <label for="" class="py-2 fw-bold d-flex">تاريخ النهاية
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>الشهر</option>
                    <option value="يناير">يناير</option>
                    <option value="فبراير">فبراير</option>
                    <option value="مارس">مارس</option>
                    <option value="ابريل">ابريل</option>
                    <option value="مايو">مايو</option>
                    <option value="يونيو">يونيو</option>
                    <option value="يوليو">يوليو</option>
                    <option value="اغسطس">اغسطس</option>
                    <option value="سبتمبر">سبتمبر</option>
                    <option value="اكتوبر">اكتوبر</option>
                    <option value="نوفمبر">نوفمبر</option>
                    <option value="ديسمبر">ديسمبر</option>
                </select> 
            </div>                                       
        </div>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>السنه</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2019">2020</option>
                    <option value="2019">2021</option>
                    <option value="2019">2022</option>
                </select>  
            </div>                                      
        </div>
    </div>
    <div class="col-lg-6 py-2">
        <input id="status1" name="userStatus1" class="border-0 radio" type="checkbox" value="userStatus1">
        <label for="status1">أعمل حاليا في هذه الوظيفة</label>
    </div>
</div>`;
$("#addSection").append(newSection);
}

function addCertificateSection(){
    var newSection=``;
    newSection +=`<div id="dina1" class="row pt-4">
    <div class="d-flex justify-content-end">
    <div onclick="deleteSection('dina1')" class="closeIcon d-flex justify-content-center align-items-center">
         <i class="fa-solid fa-minus"></i>
    </div>
</div>
    <div class="col-lg-6 py-2">
        <label for="educationalEntity2" class="py-2 fw-bold d-flex">اسم الجهه التعليمية
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit">
            <div class="inputs py-2 px-2">
                <input id="educationalEntity2" name="educationalEntity2" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 selectEdit2 py-2">
        <label for="companyName" class="py-2 fw-bold d-flex">اسم الشهادة
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit3">
            <div class="inputs py-2 px-2">
                <input id="companyName" name="companyName" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div> 
    <div class="row">
        <label for="" class="py-2 fw-bold d-flex">تاريخ الشهادة
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>الشهر</option>
                    <option value="يناير">يناير</option>
                    <option value="فبراير">فبراير</option>
                    <option value="مارس">مارس</option>
                    <option value="ابريل">ابريل</option>
                    <option value="مايو">مايو</option>
                    <option value="يونيو">يونيو</option>
                    <option value="يوليو">يوليو</option>
                    <option value="اغسطس">اغسطس</option>
                    <option value="سبتمبر">سبتمبر</option>
                    <option value="اكتوبر">اكتوبر</option>
                    <option value="نوفمبر">نوفمبر</option>
                    <option value="ديسمبر">ديسمبر</option>
                </select>
            </div>                                        
        </div>
        <div class="col-lg-6 py-2 mb-3">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>السنه</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2019">2020</option>
                    <option value="2019">2021</option>
                    <option value="2019">2022</option>
                </select>  
            </div>                                      
        </div>
    </div>
</div>`;
$("#addSection3").append(newSection);
}

function addCourseSection(){
    var newSection=``;
    var x=Math.random();
    newSection += `<div id="dina2" class="row pt-4">
    <div class="d-flex justify-content-end">
    <div onclick="deleteSection('dina2')" class="closeIcon d-flex justify-content-center align-items-center">
         <i class="fa-solid fa-minus"></i>
    </div>
</div>
    <div class="col-lg-6 py-2">
        <label for="educationalEntity" class="py-2 fw-bold d-flex">اسم الجهه التعليمية
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit">
            <div class="inputs py-2 px-2">
                <input id="educationalEntity" name="educationalEntity" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div>
    <div class="col-lg-6 selectEdit2 py-2">
        <label for="courseName" class="py-2 fw-bold d-flex">اسم الكورس
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectEdit3">
            <div class="inputs py-2 px-2">
                <input id="courseName" name="courseName" class="border-0" type="text" placeholder="" value="">
            </div>
        </div>
    </div> 
    <div class="row">
        <label for="" class="py-2 fw-bold d-flex">تاريخ الكورس
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="col-lg-6 py-2">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>الشهر</option>
                    <option value="يناير">يناير</option>
                    <option value="فبراير">فبراير</option>
                    <option value="مارس">مارس</option>
                    <option value="ابريل">ابريل</option>
                    <option value="مايو">مايو</option>
                    <option value="يونيو">يونيو</option>
                    <option value="يوليو">يوليو</option>
                    <option value="اغسطس">اغسطس</option>
                    <option value="سبتمبر">سبتمبر</option>
                    <option value="اكتوبر">اكتوبر</option>
                    <option value="نوفمبر">نوفمبر</option>
                    <option value="ديسمبر">ديسمبر</option>
                </select> 
            </div>                                       
        </div>
        <div class="col-lg-6 py-2 mb-3">
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option>السنه</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2019">2020</option>
                    <option value="2019">2021</option>
                    <option value="2019">2022</option>
                </select>    
            </div>                                    
        </div>
    </div>
</div>`;
$("#addSection2").append(newSection);
}

 //////////////////////////Function to delete Section////////////////////////////////////
function deleteSection(id){
    var deleteSec=document.getElementById(id);
        deleteSec.remove();
}

////////////////////////New Addition////////////////////////////////
function addLangSection(){
    var newSection=``;
    var x=Math.random();
newSection +=`
<div id="dina4" class="row pt-4">
        <div class="d-flex justify-content-end">
                <div onclick="deleteSection('dina4')" class="closeIcon d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-minus"></i>
                </div>
        </div>
    <div class="col-lg-6 py-2">
        <label for="educationalEntity" class="py-2 fw-bold d-flex"> اسم اللغة
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
        <div class="selectdiv">
            <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                <option disabled selected hidden>اسم اللغه</option>
                <option value="انجليزى">انجليزى</option>
                <option value="عربى">عربى</option>
            </select> 
        </div> 
    </div>
    <div class="col-lg-6 py-2">
        <label for="educationalEntity" class="py-2 fw-bold d-flex"> المستوي
            <div class="requiredAsterisk">
                <i class="fa-solid fa-asterisk"></i>
            </div>
        </label>
            <div class="selectdiv">
                <select name="" id="" class="inputs w-100 py-2 px-2 border-0">
                    <option disabled selected hidden>المستوى</option>
                    <option value="ممتاز">ممتاز</option>
                    <option value="جيد جدا">جيد جدا</option>
                    <option value="جيد">جيد</option>
                    <option value="اساسى">اساسى</option>
                </select> 
            </div>                                       
    </div>
</div>
`
$("#addSection4").append(newSection);
}
