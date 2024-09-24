console.log("hello world!");
///////////////Data Base////////////////

const c_array=(row,col)=>{
let array = new Array(row);
for (let i = 0; i < row; i++) {
    array[i] = new Array(col);  
}
return array;
}
const num_restaurants=2; 
const r=new Array(num_restaurants);  
const m=new Array(num_restaurants);
let r_db;
let m_db;

function database(){
for (let i = 0; i < num_restaurants; i++)
{
  m[i] = new Array(8);  
  for (let j= 0; j < 8; j++) {
    m[i][j] = new Array(8);  
  }
}
/*
m[0][0]=["Biryani",//name
4.5,//rating_value
"Sri Renuka Yellama",//s_name
"koyyalagudem, Hyderabad",//place_name
 "Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad",//place_name_info
 "₹120 for one",//price_value
 "Open now",//Open now
 "5:00pm - 10:00pm"//timing
  ];
*/
// ONE RESTAURANT 
/***Sri Renuka Yellamma Biryani & Fast Food Center**

### Biryani Section

| Items                 | Single | Full  |
|-----------------------|--------|-------|
| Special Biryani        | 160/-  | 230/- |
| Boneless Biryani       | 150/-  | 220/- |
| Chicken Dum Biryani    | 120/-  | 200/- |
| Mutton Dum Biryani     | 90/-   | 150/- |

### Chinese Section

| Items                        | Single | Full  |
|------------------------------|--------|-------|
| Veg Fried Rice               | 50/-   | 80/-  |
| Veg Manchuria Fried Rice      | 60/-   | 90/-  |
| Egg Fried Rice               | 50/-   | 80/-  |
| Double Egg Fried Rice        | 60/-   | 90/-  |
| Chicken Fried Rice           | 60/-   | 100/- |
| Double Egg Chicken Fried Rice| 70/-   | 110/- |
| Special Chicken Fried Rice   | 80/-   | 120/- |
| Egg Noodles                  | 50/-   | 80/-  |
| Double Egg Noodles           | 60/-   | 90/-  |
| Chicken Noodles              | 60/-   | 100/- |
| Double Egg Chicken Noodles   | 70/-   | 110/- |
| Special Chicken Noodles      | 80/-   | 120/- |
| Veg Manchuria                | 50/-   | 80/-  |
| Egg Manchuria                | 60/-   | 90/-  |
| Chicken Manchuria            | 100/-  | 150/- |
| Double Chicken Manchuria     | 110/-  | 160/- |
| Chicken 65                   | 110/-  | 160/- |
| Chilli Chicken               | 110/-  | 160/- |
| Double Omelette              | 30/-   | ---   |
*/

m[0][0] = [
  "Chicken Dum Biryani (single)",
  "Chicken Dum Biryani (full)",
  "Veg Fried Rice (single)",
  "Veg Fried Rice (full)",
  "Veg Manchuria Fried Rice (single)",
  "Veg Manchuria Fried Rice (full)",
  "Egg Fried Rice (single)",
  "Egg Fried Rice (full)",
  "Double Egg Fried Rice (single)",
  "Double Egg Fried Rice (full)",
  "Chicken Fried Rice (single)",
  "Chicken Fried Rice (full)",
  "Double Egg Chicken Fried Rice (single)",
  "Double Egg Chicken Fried Rice (full)",
  "Special Chicken Fried Rice (single)",
  "Special Chicken Fried Rice (full)",
  "Egg Noodles (single)",
  "Egg Noodles (full)",
  "Double Egg Noodles (single)",
  "Double Egg Noodles (full)",
  "Chicken Noodles (single)",
  "Chicken Noodles (full)",
  "Double Egg Chicken Noodles (single)",
  "Double Egg Chicken Noodles (full)",
  "Special Chicken Noodles (single)",
  "Special Chicken Noodles (full)",
  "Veg Manchuria (single)",
  "Veg Manchuria (full)",
  "Egg Manchuria (single)",
  "Egg Manchuria (full)",
  "Chicken Manchuria (single)",
  "Chicken Manchuria (full)",
  "Double Chicken Manchuria (single)",
  "Double Chicken Manchuria (full)",
  "Chicken 65 (single)",
  "Chicken 65 (full)",
  "Chilli Chicken (single)",
  "Chilli Chicken (full)",
  "Double Omelette"
];



/*m[0][0]=["Chicken Biryani (single)","Veg Manchuria","Noodles","Leg piece","Egg Fried rice","Chicken Manchuria"];*/
console.log(m[0][0].length)
/*
m[0][1]=[4.5,4.2,4.2,4.1,4.2,4.3,4.5,4.2,4.2,4.1,4.2,4.3,4.5,4.2,4.2,4.1,4.2,4.3,4.5,4.2,4.2,4.1,4.2,4.3,4.5,4.2,4.2,4.1,4.2];
*/
m[0][1] = Array.from({length: m[0][0].length}, () => (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));

m[0][5] = [
  "₹120 for one",   // Chicken Dum Biryani (single)
  "₹200 for one",   // Chicken Dum Biryani (full)
  "₹50 for one",    // Veg Fried Rice (single)
  "₹80 for one",    // Veg Fried Rice (full)
  "₹60 for one",    // Veg Manchuria Fried Rice (single)
  "₹90 for one",    // Veg Manchuria Fried Rice (full)
  "₹50 for one",    // Egg Fried Rice (single)
  "₹80 for one",    // Egg Fried Rice (full)
  "₹60 for one",    // Double Egg Fried Rice (single)
  "₹90 for one",    // Double Egg Fried Rice (full)
  "₹60 for one",    // Chicken Fried Rice (single)
  "₹100 for one",   // Chicken Fried Rice (full)
  "₹70 for one",    // Double Egg Chicken Fried Rice (single)
  "₹110 for one",   // Double Egg Chicken Fried Rice (full)
  "₹80 for one",    // Special Chicken Fried Rice (single)
  "₹120 for one",   // Special Chicken Fried Rice (full)
  "₹50 for one",    // Egg Noodles (single)
  "₹80 for one",    // Egg Noodles (full)
  "₹60 for one",    // Double Egg Noodles (single)
  "₹90 for one",    // Double Egg Noodles (full)
  "₹60 for one",    // Chicken Noodles (single)
  "₹100 for one",   // Chicken Noodles (full)
  "₹70 for one",    // Double Egg Chicken Noodles (single)
  "₹110 for one",   // Double Egg Chicken Noodles (full)
  "₹80 for one",    // Special Chicken Noodles (single)
  "₹120 for one",   // Special Chicken Noodles (full)
  "₹50 for one",    // Veg Manchuria (single)
  "₹80 for one",    // Veg Manchuria (full)
  "₹60 for one",    // Egg Manchuria (single)
  "₹90 for one",    // Egg Manchuria (full)
  "₹100 for one",   // Chicken Manchuria (single)
  "₹150 for one",   // Chicken Manchuria (full)
  "₹110 for one",   // Double Chicken Manchuria (single)
  "₹160 for one",   // Double Chicken Manchuria (full)
  "₹110 for one",   // Chicken 65 (single)
  "₹160 for one",   // Chicken 65 (full)
  "₹110 for one",   // Chilli Chicken (single)
  "₹160 for one",   // Chilli Chicken (full)
  "₹30 for one"     // Double Omelette
];

r[0]=["Spicy venue",//name 0
"Sri Renuka Yellamma Biryani & Fast Food Center, koyyalagudem, Hyderabad"   ,//name_info 1
4.5,//rating_value 2
"Sri Renuka Yellamma ",//s_name 3
"koyyalagudem, Hyderabad",//place_name 4
"Open now",//o_c 5
"near sv water",//near 6
m[0][0].length,//menu_row 7
"5:00pm - 10:00pm"//timing 8
];

const relat=(y)=>{
  //console.log("hi" ,m[y][0].length );
for(let i=0;i<m[y][0].length;i++){
  m[y][2][i]=r[y][3];
  m[y][3][i]=r[y][4];
  m[y][4][i]=r[y][1];
  m[y][6][i]=r[y][5];
  m[y][7][i]=r[y][6];
}
}

relat(0);

m[1][0]=["Idli","Dosa","Bonda"];
m[1][1]=[4.5,4.2,4.2];
m[1][5]=["₹30 for one plate","₹30 for one","₹30 for one plate"];
r[1]=["Tiffin venue",//name
"Sri sai Tiffin Center, koyyalagudem , Hyderabad",//name_info
4.5,//rating_value
"Sri sai ",//s_name
"koyyalagudem, Hyderabad",//place_name
"Open now",//o_c
"near madhyalamma temple",//near
r[0][7]+m[1][0].length,//menu_row
"7:00am - 11:00am"//timing
];
relat(1);


r_db=c_array(9,num_restaurants);
/*
//r_db[0]=>name
//r_db[1]=>name_info
//r_db[2]=>rating_value
//r_db[3]=>s_name
//r_db[4]=>place_name
//r_db[5]=>o_c
//r_db[6]=>near
//r_db[7]=>menu_row
//r_db[8]=>timing
*/
for(let j=0;j<num_restaurants;j++){
for(let i=0;i<9;i++){
  r_db[i][j]=r[j][i];
}
}
/*
r_db[0]=["Spicy venue","hoo"];
r_db[1]=["Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","dggshdhdhh"]
r_db[2]=[4.5,4.9];
r_db[3]=["Sri Renuka Yellama","like"];
r_db[4]=["koyyalagudem, Hyderabad","sky"];
r_db[5]=["Open now","all ways"];
r_db[6]=["near sv water","near sun"];
r_db[7]=[6,7];
r_db[8]=["5:00pm - 10:0pm","9:00am - 6:00pm"];
console.log(r_db);

*/
m_db=c_array(9,m[0][1].length+1);
//console.log(m_db)
/*
//m_db[0]=>name
//m_db[1]=>rating_value
//m_db[2]=>s_name
//m_db[3]=>place_name
//m_db[4]=>place_name_info
//m_db[5]=>price_value
//m_db[6]=>Open now
//m_db[7]=>timing
*/
/*
m_db[0]=["Biryani","Veg Manchuria","Noodles","Leg piece","Egg Fried rice","Chicken Manchuria","shashank"];
m_db[1]=[4.5,4.2,4.2,4.1,4.2,4.3,4.8];
m_db[2]=["Sri Renuka Yellama","Sri Renuka Yellama","Sri Renuka Yellama","Sri Renuka Yellama","Sri Renuka Yellama","Sri Renuka Yellama","Logla"];
m_db[3]=["koyyalagudem, Hyderabad","koyyalagudem, Hyderabad","koyyalagudem, Hyderabad","koyyalagudem, Hyderabad","koyyalagudem, Hyderabad","koyyalagudem, Hyderabad","india"];
m_db[4]=["Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","Sri Renuka Yellama Fastfood Center, koyyalagudem, Hyderabad","india"];
m_db[5]=["₹120 for one","₹50 for one","₹50 for one","₹50 for two pieces","₹50 for one","₹100 for one","infinite"];
m_db[6]=["Open now","Open now","Open now","Open now","Open now","Open now","Open now"];
m_db[7]=["5:00pm - 10:00pm","5:00pm - 10:00pm","5:00pm - 10:00pm","5:00pm - 10:00pm","5:00pm - 10:00pm","5:00pm - 10:00pm","9:00am - 6:00pm"];
*/
let zx=0;
for(let z=0;z<m.length;z++){
//  console.log(zx,m_db[8]);
for(let i=0;i<m[z].length;i++){
for(let j=0;j<m[z][0].length;j++){
  m_db[i][j+zx]=m[z][i][j];
  m_db[8][j+zx]=z;
}
}
zx+=m[z][0].length;
}
//console.log(m,m_db)
}
database();


function search(){


const search=document.querySelector(".search");
const search_space=document.querySelector(".search_space");
const search_bar=document.querySelector(".search_bar");
  const search_text=document.querySelector(".search_text");
  const suggestion=document.querySelector(".suggestion");
  
  
let u=0;
search.addEventListener("click",()=>{
 
  if(search_text.value==""){
  if(u%2==0){
  search_bar.style.width="90vw";
  search_text.style.display="flex";
  search_text.style.fontSize="2.5vh";
  setTimeout(()=>{
  suggestion.style.display="flex";
  suggestion.style.opacity="0";
  },800);
  setTimeout(()=>{
      suggestion.style.top="110%";
      suggestion.style.opacity="1";
      search_text.focus();
    },1000)
  }
  else{
    search_bar.style.width="6vh";
    search_text.style.fontSize="2.5vh";
    suggestion.style.display="none";  
    suggestion.style.top="0";
    setTimeout(()=>{
      search_text.style.display="none";
    },800)
  }
  u++;
  }
})
const s_s_r  =[
  "Restorent",
  "Shops",
  "Biryani",
  "Noodles",
  "Manchurian",
  "Egg Rice",
  "Leg Piece",
  "Sandwiches",
  "Pakoras",
  "Samosas",
  "Fries",
  "Chicken",
  "Vada Pav",
  "Puri",
  "Chaat",
  "Wraps",
  "Donuts",
  "Jalebi",
  "Ice Cream",
  "Tea",
  "Coffee",
  "Lassi",
  "Parathas",
  "Corn",
  "Momos",
  "Pizza",
  "Buns",
  "Bhutta",
  "Dabeli",
  "Idli",
  "Dosa",
  "Poha",
  "Upma",
  "Falafel",
  "Omelette",
  "Tikki",
  "Bhaji",
  "Kachori",
  "Kebab",
  "Bread Pakora",
  "Misal",
  "Paneer",
  "Chow Mein",
  "Rolls"
];
const s_s=[];
let len=[];
let v="";
const search_text_fun=()=>{
  v=search_text.value.toLowerCase();
  suggestion.innerHTML="";
  let y=0;
  s_s.length=0;
  
  for(let i=0;i<s_s_r.length;i++){
    if(v.length){
  for(let j=0;j<=s_s_r[i].length-v.length;j++){
      if(s_s_r[i].slice(j,j+v.length).toLowerCase()==v){
   s_s[y]=s_s_r[i];
   len[y]=j;
   // console.log(y)
    y++;
      }
    }
    }
  }
  if(s_s.length)
  {
    let tep=[];
    let tep_len=[];
    let u=0;
    for(let i=0;i<y;i++)
    {
      if(v[0]==s_s[i][0].toLowerCase()){
      tep[u]=s_s[i];
      tep_len[u]=len[i];
      u++;
      }
    }
    for(let i=0;i<y;i++){
      if(v[0]!=s_s[i][0].toLowerCase()){
      tep[u]=s_s[i];
      tep_len[u]=len[i];
      u++;
      }
    }
    //console.log(tep,tep_len);
    for(let i=0;i<y;i++){
    s_s[i]=tep[i];
    len[i]=tep_len[i];
    }
  }
  sugg();
}
const sugg=()=>{
for(let i=0;i<s_s.length;i++){
const sugg_slide=document.createElement("div");
sugg_slide.classList.add("sugg_slide");
sugg_slide.innerHTML=`<i class="fa-solid fa-search"></i> `;
const sugg_text=document.createElement("div");
sugg_text.classList.add("sugg_text");
sugg_text.innerHTML=`${s_s[i].slice(0,len[i])}<span>${s_s[i].slice(len[i],len[i]+v.length)}</span>${s_s[i].slice(len[i]+v.length,)}`;
sugg_slide.append(sugg_text);
sugg_slide.addEventListener("click",()=>{
  search_text.value=s_s[i];
  search_text_fun();
})
suggestion.append(sugg_slide);
}

}

search_text.addEventListener("input",()=>{
  search_text_fun();
}
)
 
}
search();
function info_bar(){
 let e=0;
 const info=document.querySelector(".info");
 const info_bar=document.querySelector(".info_bar");
 const i_b=document.querySelector(".i_b");
 const Contact_us=document.querySelector(".Contact_us");
  const Contact_us_i=document.querySelector(".Contact_us i");
  const email=document.querySelector(".email");
  const close=document.querySelector(".close");
  info.addEventListener("click",()=>{
    i_b.style.display="flex";
    info_bar.style.display="flex";
    setTimeout(()=>{
    info_bar.style.width="30vh";
    close.style.rotate="0deg";
    },10);
  })
  
  close.addEventListener("click",()=>{
    
    info_bar.style.width="0vh";
    email.style.display="none";
      email.style.height="0vh";
      Contact_us_i.style.rotate="0deg";
      close.style.rotate="0deg";
    setTimeout(()=>{
    info_bar.style.display="none";
    i_b.style.display="none";
    },500);
  })
  
  Contact_us.addEventListener("click",()=>{
    if(e%2==0){
    email.style.display="flex";
    Contact_us_i.style.rotate="180deg";
    setTimeout(()=>{
      email.style.height="6vh";
    },10);
    
    }
    else{
      
      email.style.height="0vh";
      Contact_us_i.style.rotate="0deg";
   setTimeout(()=>{
      email.style.display="none";
    },200);
    }
    e++;
  })
}
info_bar();

function menu_bar(){
const list_menu=["hotels","shops","biryani","munchurya","noodles","fried rice","leg piece"]
const villageFastFoods = [
  "All",
  "Restorent",
  "Shops",
  "Biryani",
  "Noodles",
  "Manchurian",
  "Egg Rice",
  "Leg Piece",
  "Sandwiches",
  "Pakoras",
  "Samosas",
  "Fries",
  "Chicken",
  "Vada Pav",
  "Puri",
  "Chaat",
  "Wraps",
  "Donuts",
  "Jalebi",
  "Ice Cream",
  "Tea",
  "Coffee",
  "Lassi",
  "Parathas",
  "Corn",
  "Momos",
  "Pizza",
  "Buns",
  "Bhutta",
  "Dabeli",
  "Idli",
  "Dosa",
  "Poha",
  "Upma",
  "Falafel",
  "Omelette",
  "Tikki",
  "Bhaji",
  "Kachori",
  "Kebab",
  "Bread Pakora",
  "Misal",
  "Paneer",
  "Chow Mein",
  "Rolls"
];
const arrayLength = villageFastFoods.length;
console.log(arrayLength); 

const menu_bar=document.querySelector(".menu_bar");
for(let i=0;i<arrayLength;i++){
const bar=document.createElement("div");
bar.classList.add("bar");
bar.innerText=villageFastFoods[i];
menu_bar.append(bar);
}
}

function slide_bar(){
const slide_bar=document.querySelector(".slide_bar");
const s_bar=document.querySelector(".s_bar");
let s=1;
const slide=()=>{
  slide_bar.style.backgroundImage=`url(/s/s${s}.jpg)`;
  s_bar.style.backgroundImage=`url(/s/s${s}.jpg)`;
}
const backword=document.querySelector(".backword");
const forword=document.querySelector(".forword");
backword.addEventListener("click",()=>{
  if(s>1){
  s--;
  
  }
  else{
    s=4;
  }
  slide();
});
forword.addEventListener("click",()=>{
  if(s<4){
  s++;
  }
  else{
    s=1;
  }
  slide();
});
setInterval(()=>{
  s++;
  if(s>4){
    s=1;
  }
  slide();
  
},5000);
}
function to_top() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
        }
//options creation
function options_fun( options,name, rating_value, s_name,place_name,place_name_info,price_value,r_s,menu_row_s,menu_row){
  const r_options=document.querySelector(".r_options");
  let past=0;
  
  let m_p=0;
    let past_v=0;
  const c_o=(i)=>{
    
if(past!=m_db[8][i]){
   //m_p=1;
   let x=0;
   let v=0;
  for(let u=menu_row_s;u<menu_row;u++){
       if(x!=m_db[8][u]){
         v=u;
         break;
       }
       x=m_db[8][u];
     }
      past_v=v;
    }
  past=m_db[8][i];
  m_p=i+1-past_v;
    console.log(m_p,i)
  const option=document.createElement("div");
  option.classList.add("option");
  const bg=document.createElement("div");
  bg.classList.add("bg");
  bg.style.backgroundImage=`url('/food/r${m_db[8][i]}/m${m_p}.jpg') `;
  
  option.append(bg);
  
  const option_main_info=document.createElement("div");
  option_main_info.classList.add("option_main_info");
  const m_name=document.createElement("div");
  m_name.classList.add("m_name");
  m_name.innerText=`${name[i]}`;
  option_main_info.append(m_name);
  
  const rating=document.createElement("div");
  rating.classList.add("rating");
  const r_star=document.createElement("div");
  r_star.classList.add("r_star");
  r_star.innerHTML=` <i class="fa-solid fa-star"></i> `;
  rating.append(r_star);
  
  const r_value=document.createElement("div");
  r_value.classList.add("r_value");
  r_value.innerText=`${rating_value[i]}`;
  rating.append(r_value);
  
  option_main_info.append(rating);
  
  option.append(option_main_info);
  
  const information=document.createElement("div");
  information.classList.add("information");
  const o_info=document.createElement("div");
  o_info.classList.add("o_info");
  const store_name=document.createElement("div");
  store_name.classList.add("store_name");
  store_name.innerText=`${s_name[i]}`;
  if(!r_s){
    store_name.style.color="black"
  }
  else{
    store_name.style.color="white"
  }
  o_info.append(store_name);
  
  const price=document.createElement("div");
  price.classList.add("price");
  price.innerText=`${price_value[i]}`;
  o_info.append(price);
  
  information.append(o_info);
  
  const o_info_place=document.createElement("div");
  o_info_place.classList.add("o_info");
  o_info_place.classList.add("o_info_place");
  const o_place=document.createElement("div");
  o_place.classList.add("o_place");
  o_place.innerText=`${place_name[i]}`;
  o_info_place.append(o_place);
  information.append(o_info_place);
  
    const state=document.createElement("div");
  state.classList.add("o_info");
  state.classList.add("state");
  const o_statement=document.createElement("div");
  o_statement.classList.add("o_statement");
  o_statement.innerText=`At Efferedble Prices.`;
  state.append(o_statement);
  information.append(state);
  
  option.append(information);
  
   option.addEventListener("click",()=>{
     console.log(r_s)
     to_top();
     const r_display=document.querySelector(".r_display");
     const item_display=document.querySelector(".item_display");
     const item_bg=document.querySelector(".item_bg");
     item_bg.style.backgroundImage=bg.style.backgroundImage;
     //console.log("m_p",m_db[8][i],m_p);
     const item_name=document.querySelector(".item_name");
     item_name.innerText=`${name[i]}`;
     const item_info=document.querySelector(".item_info");
     item_info.innerText=`${place_name_info[i]}`;
     
     const item_price=document.querySelector(".item_price");
     item_price.innerText=`0.5 km way • ${price_value[i]}`;
     const m_open_now=document.querySelector(".m_open_now");
     m_open_now.innerText=`${m_db[6][i]}`;
     const s_time=document.querySelector(".s_time");
     s_time.innerText=`${r_db[8][m_db[8][i]]} `;
     const item_rating_value=document.querySelector(".item_rating_value");
     item_rating_value.innerText=`${rating_value[i]}`;
     const menu_photo=document.querySelector(".menu_photo");
     menu_photo.style.backgroundImage=`url(m_c/m_c${m_db[8][i]}.jpg)`;
     const back_btn=document.querySelector(".back_btn");
     back_btn.addEventListener("click",()=>{
       to_top();
  if(r_s ){
    if( options.style.display=="none"){
    r_options.style.display="flex";
    r_display.style.display="flex";
    }
  }
  else{
      options.style.display="flex";
    }
    item_display.style.display="none";
     })
     
   // console.log(item_display.innerHTML);
    
    if(r_s){
    r_options.style.display="none";
    r_display.style.display="none";
    item_display.style.display="flex";
    options.style.display="none";
    }
    else{
    options.style.display="none";
    item_display.style.display="flex";
    }
  //  console.log("hi");
  })
  options.append(option);
 // r_options.append(option);
  }
  for(let i=menu_row_s;i<menu_row;i++)
  {
    if(i%3==0){
    c_o(i);
    }
  }
  
  past=0;
  m_p=0;
  past_v=0;
  for(let i=menu_row_s;i<menu_row;i++)
  {
    if(i%3!=0){
    c_o(i);
    }
  }
  
}

function o(option,r_s,menu_row){
  options_fun(option,m_db[0],m_db[1],m_db[2],m_db[3],m_db[4],m_db[5],r_s,0,menu_row);
}

function r_options(){
 
  const name=r_db[0];
  const name_info=r_db[1]
  const rating_value=r_db[2];
  const s_name=r_db[3];
  const place_name=r_db[4];
  const o_c=r_db[5];
  const near=r_db[6];
  const menu_row=r_db[7];
  
const options=document.querySelector(".options");
  const r_options=document.querySelector(".r_options");
  for(let i=0;i<name.length;i++){
  const option=document.createElement("div");
  option.classList.add("option");
  const bg=document.createElement("div");
  bg.classList.add("bg");
  bg.style.backgroundImage=`url('/sr/sr${i+1}.jpg') `;
  option.append(bg);
  
  const option_main_info=document.createElement("div");
  option_main_info.classList.add("option_main_info");
  const m_name=document.createElement("div");
  m_name.classList.add("m_name");
  m_name.innerText=`${name[i]}`;
  option_main_info.append(m_name);
  
  const rating=document.createElement("div");
  rating.classList.add("rating");
  const r_star=document.createElement("div");
  r_star.classList.add("r_star");
  r_star.innerHTML=` <i class="fa-solid fa-star"></i> `;
  rating.append(r_star);
  
  const r_value=document.createElement("div");
  r_value.classList.add("r_value");
  r_value.innerText=`${rating_value[i]}`;
  rating.append(r_value);
  
  option_main_info.append(rating);
  
  option.append(option_main_info);
  
  const information=document.createElement("div");
  information.classList.add("information");
  const o_info=document.createElement("div");
  o_info.classList.add("o_info");
  const store_name=document.createElement("div");
  store_name.classList.add("store_name");
  store_name.innerText=`${s_name[i]}`;
  o_info.append(store_name);
  
  const open_now=document.createElement("div");
  open_now.classList.add("open_now");
  open_now.innerHTML=`<i class="fa-solid fa-check"> </i>${o_c[i]}`;
  o_info.append(open_now);
  
  information.append(o_info);
  
  const o_info_place=document.createElement("div");
  o_info_place.classList.add("o_info");
  o_info_place.classList.add("o_info_place");
  const o_place=document.createElement("div");
  o_place.classList.add("o_place");
  o_place.innerText=`${place_name[i]}`;
  o_info_place.append(o_place);
  information.append(o_info_place);
  
    const state=document.createElement("div");
  state.classList.add("o_info");
  state.classList.add("state");
  const o_statement=document.createElement("div");
  o_statement.classList.add("o_statement");
  o_statement.innerText=`At Efferedble Prices.`;
  state.append(o_statement);
  information.append(state);
  
  option.append(information);
  
   option.addEventListener("click",()=>{
     to_top();
     const item_display=document.querySelector(".r_display");
     const item_bg=document.querySelector(".r_bg");
     item_bg.style.backgroundImage=`url('/sr/sr${i+1}.jpg') `
     const item_name=document.querySelector(".r_item_name");
     item_name.innerText=`${name[i]}`;
     const item_info=document.querySelector(".r_item_info");
     item_info.innerText=`${name_info[i]}`;
     const item_price=document.querySelector(".r_place");
     item_price.innerText=`0.5 km way • ${near[i]}`;
     const r_open_now=document.querySelector(".r_open_now");
     r_open_now.innerText=`${r_db[5][i]}`;
     const r_s_time=document.querySelector(".r_s_time");
     r_s_time.innerText=`${r_db[8][i]}`;
     const item_rating_value=document.querySelector(".r_item_rating_value");
     item_rating_value.innerText=`${rating_value[i]}`;
    // console.log(rating_value[i]);
    
     const r_menu_photo=document.querySelector(".r_menu_photo");
     r_menu_photo.style.backgroundImage=`url(m_c/m_c${i}.jpg)`;
     const back_btn=document.querySelector(".r_back_btn");
     
     back_btn.addEventListener("click",()=>{
       to_top();
       options.style.display="flex";
    item_display.style.display="none";
     })
    const r_opti=document.querySelector(".r_options");
    r_opti.innerHTML="";
    ///////jjjjjjj
    if(i>0){
    options_fun(r_opti,m_db[0],m_db[1],m_db[2],m_db[3],m_db[4],m_db[5],1,menu_row[i-1],menu_row[i]);
    //console.log("hoo",menu_row[i-1]);
    }
    else{
      options_fun(r_opti,m_db[0],m_db[1],m_db[2],m_db[3],m_db[4],m_db[5],1,0,menu_row[i]);
    }
    
    options.style.display="none";
    item_display.style.display="flex";
   // console.log("hi");
  })
  options.append(option);
 // r_options.append(option);
  }
}

menu_bar();
slide_bar();
r_options();
const opti=document.querySelector(".options");
o(opti,0,m_db[0].length);
