var object_nature = [{
  src: "nature-1.jpeg"
}, { src: "nature-2.jpeg" }, { src: "nature-3.jpeg" }]

let object_city = [{ src: "city-1.jpeg" },
                   { src: "city-2.jpeg" }, 
                   { src: "city-3.jpeg" }, 
                   { src: "city-4.jpeg" }, 
                   { src: "city-5.jpeg" }];
let count=0;
let get_img_type=false;
let category ;
let firstdiv = document.querySelector(".firstdiv");

let nature = document.querySelectorAll(".nature");
let city = document.querySelectorAll(".city");

let second_img = document.querySelector(".mainDisplay");
let img_div = document.querySelector(".main-img");
let nature_imges = document.querySelector(".nature-images_1");
let city_imges = document.querySelector(".city_imges");




nature.forEach((nature_img, index) => {
  console.log(index);
  nature_img.addEventListener("click", () => {
  
    count=index;
    city_imges.classList.add("none");

    firstdiv.classList.add("none");
    second_img.classList.remove("none");
    nature_imges.classList.remove("none");
get_img_type=true;
category = "nature";
  img_div.src = object_nature[index].src;
  opacity_add_Fun(count);


  })
});


city.forEach((city_img, index) => {
  city_img.addEventListener("click", () => {
 
    count=index;
    nature_imges.classList.add("none");

    firstdiv.classList.add("none");
    second_img.classList.remove("none");
    city_imges.classList.remove("none");
    console.log(count);
get_img_type=false;
category = "city";
    img_div.src = object_city[index].src;
  // left_right_Fun(object_city,count);
  opacity_add_Fun(count);

  })
});
console.log(count);

let btn1 = document.querySelector(".btn1").addEventListener("click", () => {
  firstdiv.classList.remove("none");
  second_img.classList.add("none");
  city_imges.classList.add("none");
  nature_imges.classList.add("none");
});

// function left_right_Fun(x,y){
//   console.log(x);
//   console.log(y);



// }
document.querySelector("#previsebutton").addEventListener("click",()=>{

  let value=get_img_type?object_nature.length:object_city.length;

  if((count==0)){
  count=value;
  }
count--;
  img_div.src=get_img_type? object_nature[count].src:object_city[count].src;
  opacity_add_Fun(count);

});

document.querySelector("#nextbutton").addEventListener("click",()=>{

  let value=get_img_type?object_nature.length:object_city.length;
console.log("value= "+value);
  if((count==value-1)){
  count=-1;

  }
count++;
  img_div.src=get_img_type? object_nature[count].src:object_city[count].src;
  opacity_add_Fun(count);
});


  let opacity_add_img=0;

function opacity_add_Fun(x){


  if(opacity_add_img!=0){
    opacity_add_img.classList.remove("opacity_remove");

  }

  opacity_add_img=get_img_type? document.querySelectorAll(".modal-img_city")[x]:document.querySelectorAll(".modal-img")[x];
  
  opacity_add_img.classList.add("opacity_remove");

}


// if(category == "nature")
// {

// }
let nature_img=document.querySelectorAll(".modal-img_city");

nature_img.forEach((natureLi,currentIndex)=>{
  natureLi.addEventListener("click",()=>{
    // console.log(currentIndex);
  count=currentIndex;

  opacity_add_Fun(count)
    img_div.src =natureLi.src;


   

  })


  
})




let city_img=document.querySelectorAll(".modal-img");

city_img.forEach((natureLi,currentIndex)=>{
// console.log(na);

  natureLi.addEventListener("click",()=>{
    // console.log(natureLi);
    console.log(currentIndex);
  count=currentIndex;
  // console.log(count);
  opacity_add_Fun(count)
    img_div.src =natureLi.src;


   

  })

//  }
  
})








