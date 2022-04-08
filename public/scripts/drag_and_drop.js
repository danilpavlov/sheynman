var weight_touch;
const default_position = document.getElementById("def_pos"); // selectors - class of position
const weight_1 = document.getElementById("weight1");
const weight_2 = document.getElementById("weight2");
var position_st = document.getElementById("pos_ss");
const position_0 = document.getElementById("position0");

const position_1_R = document.getElementById("positionR1");
const position_1_L = document.getElementById("positionL1");

const position_2_R = document.getElementById("positionR2");
const position_2_L =document.getElementById("positionL2");

const position_3_R = document.getElementById("positionR3");
const position_3_L = document.getElementById("positionL3");

const position_4_R =document.getElementById("positionR4");
const position_4_L =document.getElementById("positionL4");
weight_1.addEventListener("pointerdown", drag1);
weight_2.addEventListener("pointerdown", drag2);
var itog;
var b=0;
function drag1(event){
    if (b===0)
    {event.preventDefault();
        console.log("start")
        itog=weight_1;
        body.style.cursor = "grab";
    }
}
function drag2(event){
    if (b===0)
    {itog=weight_2;
        console.log("start")
        event.preventDefault();
        body.style.cursor = "grab";
    }
}
let body=document.querySelector(".body")
// document.addEventListener("mousemove",(e)=>{
//     if (b===1)
//     {   var e1=e;
//         //body.style.cursor="none";
//    pos1 = pos3 - e1.clientX;
//     pos2 = pos4 - e1.clientY;
//         pos3 = e1.clientX;
//         pos4 = e1.clientY;
//     // set the element's new position:
//     console.log(weight_1.offsetLeft,weight_1.offsetTop,"offset")
//      console.log(e1.clientX,e1.clientY,"xy")
//         console.log(e1.clientX,"client")
//
//     weight_1.style.top = Math.round((weight_1.offsetTop - pos2)) + "px";
//     weight_1.style.left = Math.round((weight_1.offsetLeft - pos1)) + "px";}
//     })
document.addEventListener("click",(e)=>{
    console.log(e.clientX,e.clientY,"x y")//434 654 913 689
})
document.addEventListener("pointerup",(e)=>{
    if (b===1)
    {body.style.cursor = "default";
        let l=e.clientX+105;
        console.log(l,e.clientY,'l')
        let item="Oops"
        if (e.clientX>=434 && e.clientY>=654 && e.clientX<=913 && e.clientY<=689)
            item=default_position;
        else
        if (e.clientY>395 && e.clientY<445)
        {
            if (l>535 && l<580)
                item=position_4_L;
            else
            if (l>585 && l<620)
                item=position_3_L;
            else
            if (l>630 && l<670)
                item=position_2_L;
            else
            if (l>685 && l<720)
                item=position_1_L;
            else
            if (l>755 && l<795)
                item=position_0;
            else
            if (l>828 && l<861)
                item=position_1_R;
            else
            if (l>875 && l<915)
                item=position_2_R;
            else
            if (l>975 && l<1020)
                item=position_4_R;
            else
            if (l>920 && l<960)
                item=position_3_R;

        }
        else
        if (l>1200 && l<1230)
            item=position_st;
        console.log(itog,"item")
        if (item!=='Oops')
        {  if (item===default_position)
        {if (itog===weight_1)
            itog.style.left="250px";
        else
            itog.style.left="300px";
            itog.style.top="4px";}
        else
        {itog.style.top='0px';
            itog.style.left='0px';}
            let test1=document.getElementById('weight1');
            let test2=document.getElementById('weight2');
            let b1=0;
            if ((test1.childElementCount === 0) &&   (test2.childElementCount === 0))
                b1=1;
            let springpenis = document.getElementById("springwropeid");
            // ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)) ||  ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)){


            item.appendChild(itog);
            if (position_st.childElementCount!==0) {

                if (position_st.childElementCount===1) {
                    for (let i = 0; i < 305; i += 0.005) {
                        setTimeout(() => {
                            springpenis.style.height = String(110 + i + "px");
                        }, 200)
                        //position_st.style.top = String(445 + i + "px");
                        //console.log(springpenis.style.height);
                    }
                }
                if (position_st.childElementCount === 2){
                    for (let i = 0; i < 285; i += 0.005) {
                        setTimeout(() => {
                            springpenis.style.height = String(110+305 + i + "px");
                        }, 200)

                    }}
            }
            if  (position_st.childElementCount===2)
                springpenis.style.height = String(395 + "px");
            if (position_st.childElementCount === 1) {
                springpenis.style.height = String(110+ "px");
            }
            if (position_st.childElementCount===0)
                springpenis.style.height = String(110+ "px");
        }
        b=0;
    }
    else
        b=1;
    // body.style.cursor = "default";
})
// default_position.addEventListener("pointerdown",drop_touch);
// position_0.addEventListener("pointerdown",drop_touch);
// position_st.addEventListener("pointerdown",drop_touch);
// position_1_R.addEventListener("pointerdown",drop_touch);
// position_1_L.addEventListener("pointerdown",drop_touch);
// position_2_R.addEventListener("pointerdown",drop_touch);
// position_2_L.addEventListener("pointerdown",drop_touch);
// position_3_R.addEventListener("pointerdown",drop_touch);
// position_3_L.addEventListener("pointerdown",drop_touch);
// position_4_R.addEventListener("pointerdown",drop_touch);
// position_4_L.addEventListener("pointerdown",drop_touch);

// weight_1.addEventListener("touchstart", drag1);
// weight_2.addEventListener("touchstart", drag2);

// document.addEventListener("touchmove",(e)=>{
//     console.log("rojoirg");
//     if (b===1)
//     {   var e1=e;
//         body.style.cursor="none";
//         // pos1 = pos3 - e1.targetTouches[0].clientX;
//         // pos2 = pos4 - e1.targetTouches[0].clientY;
//         pos3 =e1.targetTouches[0].clientX;
//         pos4 = e1.targetTouches[0].clientY;
//         console.log(pos2)
//         // set the element's new position:
//         weight_1.style.top = (pos4-100) + "px";
//         weight_1.style.left = (pos3-400) + "px";}})
// document.addEventListener("touchend",(e)=>{
//     if (b===1) {
//         b = 0;
//         body.style.cursor = "grab";
//         position_4_L.style.backgroundColor = "red"
//     }
// })

function drop_touch(event){
    if (b===1)
    {let test1=document.getElementById('weight1');
        let test2=document.getElementById('weight2');
        console.log("abe")
        let itemId = weight_touch;
        console.log(itemId)
        let b1=0;
        if ((test1.childElementCount === 0) &&   (test2.childElementCount === 0))
            b1=1;
        //console.log((event.target.id.slice(-1)));
        // if (event.target === test1 && event.target === test2){
        //
        // }else{
        //     pos = event.target;}

        let springpenis = document.getElementById("springwropeid");
        if (test1.firstChild===test2) {
            event.target.appendChild(document.getElementById("weight2"));
            springpenis.style.height = String(110+ "px");
        }
        else if (test2.firstChild===test1){
            event.target.appendChild(document.getElementById("weight1"));
            springpenis.style.height = String(110+ "px");

        }
        else{
            // ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)) ||  ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)){


            event.target.append(document.getElementById(itemId));
        }
        console.log(position_st.childElementCount,"child")
        if (position_st.childElementCount !== 0) {

            if (position_st.childElementCount===1) {
                console.log(position_st.childElementCount);
                for (let i = 0; i < 305; i += 0.005) {
                    setTimeout(() => {
                        springpenis.style.height = String(110 + i + "px");
                    }, 200)
                    //position_st.style.top = String(445 + i + "px");
                    //console.log(springpenis.style.height);
                }
            }
            else if (position_st.childElementCount === 2 ){
                console.log(position_st.childElementCount);
                for (let i = 0; i < 285; i += 0.005) {
                    setTimeout(() => {
                        springpenis.style.height = String(110+305 + i + "px");
                    }, 200)

                }
            }}
        if (b1 === 0 && (test1.childElementCount === 0) && (test2.childElementCount === 0))
            springpenis.style.height = String(395 + "px");
        if (position_st.childElementCount === 0) {
            springpenis.style.height = String(110+ "px");
        }}
    b=0;
    // body.style.cursor = "default";
    //console.log(test1.firstChild);
}


function reset_all_weights(){
    first_one = document.getElementById("weight1");
    second_one = document.getElementById("weight2");
    first_one.style.left="250px";
    second_one.style.left="300px";
    // second_one.style.top="4px";

    let spring = document.getElementById("springwropeid");
    spring.style.height = String(110 + "px");
    // second_one.style.top="4px";


    default_position.appendChild(first_one);
    default_position.appendChild(second_one);
}


