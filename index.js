/*
const inpFile1 = document.getElementById("inpfile1");
const inpFile2 = document.getElementById("inpfile2")
const prevContainer1 = document.getElementById("imgprev1")
const prevContainer2 = document.getElementById("imgprev2")
const previewImage1 = prevContainer1.querySelector("imgprev_image1")
const previewImage2 = prevContainer2.querySelector("imgprev_image2")
const previewDefaultText1 = prevContainer1.querySelector("imgplace1")
const previewDefaultText2 = prevContainer2.querySelector("imgplace2")



inpFile1.addEventListener("change", function(){
const file = this.files[0];

if(file){
    const reader = new FileReader();

   //previewDefaultText1.style.display = "";
    previewImage1.style.display = "block";

    reader.addEventListener("load", function(){
        console.log(this);
previewImage1.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
}
});*/


function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}


function preview_image1(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output1 = document.getElementById('output_image1');
  output1.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}