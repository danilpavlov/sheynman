var looper;
var degrees = 0;

var right_spring_height = 423;
var left_spring_height = 422;

var now;
var t2;
var flag1=0;

var bol = 1;

var psi1=0;
var A;
var psi2=0;
var elem1 = document.getElementById("right_spring");
var elem2 = document.getElementById("left_spring");

var Tau;
var q;
var weight_radius_1;
var weight_radius_2;

function rotateAnimation(el,speed){

    if (bol === 1) {

        let newdate = new Date();
        t2 = newdate.getTime() / 1000 - now;
        //console.log(A);

        psi2 = A * Math.exp(-1 * (t2) / Tau) * Math.cos(q * Math.sqrt(2 * 14.4107 * 256 * 0.000001 / (0.00375 + 0.2 * Math.pow(weight_radius_1, 2) + 0.2 * Math.pow(weight_radius_2, 2))) * t2);
        //console.log(degrees);

        let Delta_psi = psi1 - psi2;

        psi1 = psi2;


        left_spring_height = 422 * (1 - Math.sin(degrees * Math.PI / 180) / 5);
        right_spring_height = 423 * (1 + Math.sin(degrees * Math.PI / 180) / 5);


        if (Delta_psi > 0) {
            // left_spring_height =  Math.exp(-1 * (t2) / 8.66) * Math.cos(8 * 0.66 * (t2)) ;
            // right_spring_height = Math.exp(-1 * (t2) / 8.66) * Math.cos(8 * 0.66 * (t2));
            // left_spring_height += Math.abs(Delta_psi) * 1.5 ;
            // right_spring_height -= Math.abs(Delta_psi) * 1.5;

            elem2.style.height = (String(left_spring_height) + "px");
            elem1.style.height = (String(right_spring_height) + "px");
        } else if (Delta_psi < 0) {
            // left_spring_height = (421 * Math.cos(A) ) *Math.exp(-1 * (t2) / 8.66) * Math.cos(8 * 0.66 * (t2));
            // right_spring_height = (422 * Math) * Math.exp(-1 * (t2) / 8.66) * Math.cos(8 * 0.66 * (t2));
            // left_spring_height -= Math.abs(Delta_psi) * 1.5;
            // right_spring_height += Math.abs(Delta_psi) * 1.5;

            elem2.style.height = (String(left_spring_height) + "px");
            elem1.style.height = (String(right_spring_height) + "px");
        }



        var elem = document.querySelector(el);
        if (navigator.userAgent.match("Chrome")) {
            elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
        } else if (navigator.userAgent.match("Firefox")) {
            elem.style.MozTransform = "rotate(" + degrees + "deg)";
        } else if (navigator.userAgent.match("MSIE")) {
            elem.style.msTransform = "rotate(" + degrees + "deg)";
        } else if (navigator.userAgent.match("Opera")) {
            elem.style.OTransform = "rotate(" + degrees + "deg)";
        } else {
            elem.style.transform = "rotate(" + degrees + "deg)";
        }

        degrees = psi2;


        let elis=document.getElementById("start");

        el_stop.addEventListener("click", () => {     // КНОПКА СБРОС
            elis.disabled = false;
            elis.style.backgroundColor = ('#88CC88');

            bol = 0;
            degrees = 0
            right_spring_height = 423;
            left_spring_height = 422;
            elem2.style.height = (String(left_spring_height) + "px");
            elem1.style.height = (String(right_spring_height) + "px");

            el.style.transform = "rotate(" + degrees + "deg)";

        })

        looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
    }else {
        return 0;
    }

}
let el=document.getElementById("start");
let elem=document.querySelector(".move");

degrees= 0;

var disk1=document.querySelector(".move");

var x,y,x1,y1;
var flag=0;
disk1.addEventListener("mousedown", e=>{
    flag = 1;
    x=e.x;
    y=e.y
})


let deg_pred=0;



// disk1.onmousemove = function (event) {
//     if (flag === 1) {
//
//         x1 = event.x;
//         y1 = event.y;
//
//         left_spring_height = 422 * (1 - Math.sin(degrees * Math.PI / 180) / 5);
//         right_spring_height = 423 * (1 + Math.sin(degrees * Math.PI / 180) / 5);
//
//
//         if (x1-x > 0)
//             {if (degrees>-50) {
//
//
//
//                     // right_spring_height = 423 * Math.cos(degrees*Math.PI/180);
//                     // left_spring_height = 422 * (1 + Math.cos(degrees*Math.PI/180));
//                     //left_spring_height = left_spring_height * (Math.cos(0.35 * Math.PI / 180) + Math.tan(degrees * Math.PI / 180) * Math.sin(0.35 * Math.PI / 180));
//                 //right_spring_height = 2 * 422 - (2 * 422 - right_spring_height) * Math.cos(0.35 * Math.PI / 180) - (2 * 422 - right_spring_height) * Math.tan(degrees * Math.PI / 180) * Math.sin(0.35 * Math.PI / 180);
//                 //left_spring_height = left_spring_height * Math.cos(degrees * Math.PI/180);
//                 //right_spring_height = right_spring_height * (2 - Math.cos(degrees * Math.PI/180));
//
//
//
//                 degrees -= 0.35;
//
//             }
//             }
//         else if (x1-x < 0){
//
//             if (degrees<50) {
//
//
//
//                 //right_spring_height = right_spring_height * (Math.cos(0.35 * Math.PI/180) - Math.tan(degrees * Math.PI/180) * Math.sin(0.35 * Math.PI/180) );
//                 //left_spring_height = 2 * 422 - (2 * 422 - left_spring_height) * Math.cos(0.35 * Math.PI / 180) + (2 * 422 - left_spring_height) * Math.tan(degrees * Math.PI / 180) * Math.sin(0.35 * Math.PI / 180);
//
//                 //right_spring_height = 423 * (2 - Math.cos(degrees*Math.PI/180));
//                 // left_spring_height = 422 * Math.cos(degrees*Math.PI/180);
//                 // //right_spring_height = right_spring_height * Math.cos(degrees * Math.PI/180);
//                 // right_spring_height = 423 * (1 + Math.cos(degrees * Math.PI/180));
//                 degrees += 0.35;
//             }
//
//         }
//
//
//         deg_pred=degrees;
//         console.log("L", left_spring_height);
//         console.log("R", right_spring_height);
//         elem1.style.height = (String(right_spring_height) + "px");
//         elem2.style.height = (String(left_spring_height) + "px");
//         if(navigator.userAgent.match("Chrome")){
//                disk1.style.WebkitTransform = "rotate("+degrees+"deg)";
//          } else if(navigator.userAgent.match("Firefox")){
//              disk1.style.MozTransform = "rotate("+degrees+"deg)";
//          } else if(navigator.userAgent.match("MSIE")){
//              disk1.style.msTransform = "rotate("+degrees+"deg)";
//          } else if(navigator.userAgent.match("Opera")){
//              disk1.style.OTransform = "rotate("+degrees+"deg)";
//          } else {
//              disk1.style.transform = "rotate("+degrees+"deg)";
//          }
//         x = x1;
//         y = y1;
//     }}

disk1.addEventListener("mouseup", e => {
    flag = 0;
})
//!!
let penis = document.querySelector(".positions")
penis.addEventListener("click", e => {
    x2 = e.offsetX;
    y2 = e.offsetY;
    console.log(y2, "y");
    console.log(x2, "x");
})


let el_stop = document.getElementById("reset");

first_weight = document.getElementById('weight1');
second_weight = document.getElementById("weight2");
//degrees=0;
if (navigator.userAgent.match("Chrome")) {
    elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
} else if (navigator.userAgent.match("Firefox")) {
    elem.style.MozTransform = "rotate(" + degrees + "deg)";
} else if (navigator.userAgent.match("MSIE")) {
    elem.style.msTransform = "rotate(" + degrees + "deg)";
} else if (navigator.userAgent.match("Opera")) {
    elem.style.OTransform = "rotate(" + degrees + "deg)";
} else {
    elem.style.transform = "rotate(" + degrees + "deg)";
}


el.addEventListener("click", (e) => {  // КНОПКА СТАРТ
    bol = 1;

    elem1.style.height = (String(right_spring_height) + "px");
    elem2.style.height = (String(left_spring_height) + "px");
    // right_spring_height = 423;
    // left_spring_height = 422;

    if (first_weight.parentNode.id === "weight2") {
        r1 = first_weight.parentNode.parentNode.id.slice(-1);
        r2 = second_weight.parentNode.id.slice(-1);
    } else if (second_weight.parentNode.id === "weight1") {
        r1 = first_weight.parentNode.id.slice(-1);
        r2 = second_weight.parentNode.parentNode.id.slice(-1);
    } else {
        r1 = first_weight.parentNode.id.slice(-1);
        r2 = second_weight.parentNode.id.slice(-1);
    }

    //console.log(typeof(r1));


    flag1 = 1;
    switch (r1 + r2) {

        case "00":
            Tau = 2.913;
            q = 7.44;
            weight_radius_1 = 0;
            weight_radius_2 = 0;
            break;
        case "01":
            Tau = 3.14;
            q = 7.66;
            weight_radius_1 = 0;
            weight_radius_2 = 0.06;
            break;
        case "02":
            Tau = 3.49;
            q = 7.25;
            weight_radius_1 = 0;
            weight_radius_2 = 0.1;
            break;
        case "03":
            Tau = 4.77;
            q = 7.73;
            weight_radius_1 = 0;
            weight_radius_2 = 0.14;
            break;
        case "04":
            Tau = 5.55;
            q = 7.95;
            weight_radius_1 = 0;
            weight_radius_2 = 0.18;
            break;

        case "10":
            Tau = 3.14;
            q = 7.66;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0;
            break;
        case "11":
            Tau = 3.76;
            q = 7.78;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0.06;
            break;
        case "12":
            Tau = 4.32;
            q = 7.82;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0.1;
            break;
        case "13":
            Tau = 4.95;
            q = 7.78;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0.14;
            break;
        case "14":
            Tau = 7.1;
            q = 7.87;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0.18;
            break;

        case "20":
            Tau = 3.49;
            q = 7.25;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0;
            break;
        case "21":
            Tau = 4.32;
            q = 7.82;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0.06;
            break;
        case "22":
            Tau = 4.73;
            q = 7.83;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0.1;
            break;
        case "23":
            Tau = 5.31;
            q = 7.8;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0.14;
            break;
        case "24":
            Tau = 7.58;
            q = 7.87;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0.18;
            break;

        case "30":
            Tau = 4.77;
            q = 7.73;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0;
            break;
        case "31":
            Tau = 4.95;
            q = 7.78;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0.04;
            break;
        case "32":
            Tau = 5.31;
            q = 7.8;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0.1;
            break;
        case "33":
            Tau = 5.3;
            q = 7.43;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0.14;
            break;
        case "34":
            Tau = 6.5;
            q = 7.81;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0.18;
            break;

        case "40":
            Tau = 5.55;
            q = 7.95;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0;
            break;
        case "41":
            Tau = 7.1;
            q = 7.87;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0.06;
            break;
        case "42":
            Tau = 7.58;
            q = 7.87;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0.1;
            break;
        case "43":
            Tau = 6.5;
            q = 7.81;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0.14;
            break;
        case "44":
            Tau = 8.6;
            q = 8.126;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0.18;
            break;



        case "ss":
            Tau = 2.56;
            q = 8.126;
            weight_radius_1 = 0;
            weight_radius_2 = 0;
            break;
        case "s0":
            Tau = 2.56;
            q = 8.126;
            weight_radius_1 = 0;
            weight_radius_2 = 0;
            break;
        case "s1":
            Tau = 3.23;
            q = 7.5;
            weight_radius_1 = 0;
            weight_radius_2 = 0.06;
            break;
        case "s2":
            Tau = 3.789;
            q = 7.5;
            weight_radius_1 = 0;
            weight_radius_2 = 0.1;
            break;
        case "s3":
            Tau = 4.63;
            q = 7.5;
            weight_radius_1 = 0;
            weight_radius_2 = 0.14;
            break;
        case "s4":
            Tau = 5.75;
            q = 7.5;
            weight_radius_1 = 0;
            weight_radius_2 = 0.18;
            break;
        case "0s":
            Tau = 2.56;
            q = 8.126;
            weight_radius_1 = 0;
            weight_radius_2 = 0;
            break;
        case "1s":
            Tau = 3.23;
            q = 7.5;
            weight_radius_1 = 0.06;
            weight_radius_2 = 0;
            break;
        case "2s":
            Tau = 3.789;
            q = 7.5;
            weight_radius_1 = 0.1;
            weight_radius_2 = 0;
            break;
        case "3s":
            Tau = 4.63;
            q = 7.5;
            weight_radius_1 = 0.14;
            weight_radius_2 = 0;
            break;
        case "4s":
            Tau = 5.75;
            q = 7.5;
            weight_radius_1 = 0.18;
            weight_radius_2 = 0;
            break;

        default:
            flag1=0;
            break;

    }


    el.disabled = true;
    el.style.backgroundColor = ("#659365");

    let date = new Date();
    now = date.getTime() / 1000;
    t2 = date.getTime() / 1000;

    A=degrees;

    // if (navigator.userAgent.match("Chrome")) {
    //     elem.style.WebkitTransform = "rotate(" + -degrees + "deg)";
    // } else if (navigator.userAgent.match("Firefox")) {
    //     elem.style.MozTransform = "rotate(" + -degrees + "deg)";
    // } else if (navigator.userAgent.match("MSIE")) {
    //     elem.style.msTransform = "rotate(" + -degrees + "deg)";
    // } else if (navigator.userAgent.match("Opera")) {
    //     elem.style.OTransform = "rotate(" + -degrees + "deg)";
    // } else {
    //     elem.style.transform = "rotate(" + -degrees + "deg)";
    // }
    if (flag1===1)
        rotateAnimation(".move", 15);
})



// ползунок
var slider = document.getElementById("myRange");

slider.oninput = function() {
    degrees = -1*this.value;
    left_spring_height = 422 * (1 - Math.sin(degrees * Math.PI / 180) / 5);
    right_spring_height = 423 * (1 + Math.sin(degrees * Math.PI / 180) / 5);


    elem.style.transform = "rotate(" + degrees + "deg)"
    elem1.style.height = (String(right_spring_height) + "px");
    elem2.style.height = (String(left_spring_height) + "px");


}

el_stop.addEventListener("click", () => {     // КНОПКА СБРОС
    el.disabled = false;
    el.style.backgroundColor = ('#88CC88');

    degrees = 0
    right_spring_height = 423;
    left_spring_height = 422;

    elem.style.transform = "rotate("+degrees+"deg)";
})
// let s = "hello";
// console.log(s.slice(0, 3));

