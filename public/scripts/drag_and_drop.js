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


var spring_weight_count = 0;

default_position.ondragover = allowDrop;
position_0.ondragover=allowDrop;
position_st.ondragover = allowDrop;
position_1_R.ondragover = allowDrop;
position_1_L.ondragover=allowDrop;
position_2_R.ondragover=allowDrop;
position_2_L.ondragover=allowDrop;
position_3_R.ondragover=allowDrop;
position_3_L.ondragover=allowDrop;
position_4_R.ondragover=allowDrop;
position_4_L.ondragover=allowDrop;
function allowDrop(event){
    event.preventDefault();
}

weight_1.ondragstart = drag;
weight_2.ondragstart = drag;

function drag(event){
    event.dataTransfer.setData('id', event.target.id);
}

default_position.ondrop = drop;
position_0.ondrop=drop;
position_st.ondrop = drop;
position_1_R.ondrop=drop;
position_1_L.ondrop=drop;
position_2_R.ondrop=drop;
position_2_L.ondrop=drop;
position_3_R.ondrop=drop;
position_3_L.ondrop=drop;
position_4_R.ondrop=drop;
position_4_L.ondrop=drop;


function drop(event){
    let test1=document.getElementById('weight1');
    let test2=document.getElementById('weight2');
    //console.log(test1)
    let itemId = event.dataTransfer.getData('id');
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
        springpenis.style.height = String(110 + "px");
    }
    else if (test2.firstChild===test1){
        event.target.appendChild(document.getElementById("weight1"));
        springpenis.style.height = String(110 + "px");

    }
    else{
        // ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)) ||  ((test1.parentNode.id === position_st.id) && (test2.parentNode.id !== position_st.id)){


        event.target.append(document.getElementById(itemId));
    }
    if (position_st.childElementCount === 1 && !((test1.firstChild===test2 || test2.firstChild===test1))) {

        if (((position_st.id === test1.parentNode.id) || (position_st.id === test2.parentNode.id)) && (test1.childElementCount === 0) && (test2.childElementCount === 0) && b1 === 1) {
            console.log(position_st.childElementCount);
            for (let i = 0; i < 255; i += 0.005) {
                setTimeout(() => {
                    springpenis.style.height = String(110 + i + "px");
                }, 200)
                //position_st.style.top = String(445 + i + "px");
                //console.log(springpenis.style.height);
            }
        }
    }else if (position_st.childElementCount === 1 && (test1.firstChild===test2 || test2.firstChild===test1)){
        console.log(position_st.childElementCount);
        for (let i = 0; i < 235; i += 0.005) {
            setTimeout(() => {
                springpenis.style.height = String(110+235 + i + "px");
            }, 200)
            //position_st.style.top = String(445 + i + "px");
            //console.log(springpenis.style.height);
        }
    }
    if (b1 === 0 && (test1.childElementCount === 0) && (test2.childElementCount === 0))
        springpenis.style.height = String(345 + "px");
    if (position_st.childElementCount === 0) {
        springpenis.style.height = String(110 + "px");
    }

    //console.log(test1.firstChild);
}