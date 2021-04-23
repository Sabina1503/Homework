//    var changecolor= document.getElementsByClassName("card");
    
//     for(var i =0; i < changecolor.length; i++) 
//     {
//         changecolor[i].onclick = function myfunc(){

//             var el = changecolor[0];
//             while(el) 
//             {
//                 if(el.tagName === "DIV"){
//                     el.classList.remove("colorcard");
//                 }
//                 el=el.nextSibling;
//             }
//             this.classList.add("colorcard");
//         };
//     }
var myfunc = () => {
var card1_date ={
    date1: "01/02/2016",
    date2: "05/02/2016",
    date3: "07/02/2016",
    date4: "08/02/2016",
}
var card1_merchant ={
    merchant1:"Apple",
    merchant2:"Jack & Jones",
    merchant3:"F&B",
    merchant4:"Swarovski",

}
var card1_spend ={
    spend1:205.5,
    spend2:32.95,
    spend3:47.22,
    spend4:325.00,
}
var x =document.getElementsByClassName("date1_text");
x[0].innerHTML =card1_date.date1;
x[1].innerHTML =card1_date.date2;
x[2].innerHTML =card1_date.date3;
x[3].innerHTML =card1_date.date4;

var x =document.getElementsByClassName("merchant1_text");
x[0].innerHTML =card1_merchant.merchant1;
x[1].innerHTML =card1_merchant.merchant2;
x[2].innerHTML =card1_merchant.merchant3;
x[3].innerHTML =card1_merchant.merchant4;

var x =document.getElementsByClassName("spend1_text");
x[0].innerHTML =card1_spend.spend1;
x[1].innerHTML =card1_spend.spend2;
x[2].innerHTML =card1_spend.spend3;
x[3].innerHTML =card1_spend.spend4;
}
// --------------------------------------------
var myfunc2 = () => {
var card2_date ={
    date1: "17/01/2017",
    date2: "25/05/2017",
    date3: "23/10/2017",
    date4: "18/01/2017",
}
var card2_merchant ={
    merchant1:"H&M",
    merchant2:"ZARA",
    merchant3:"BESTSELLER",
    merchant4:"Versace",

}
var card2_spend ={
    spend1:205.5,
    spend2:15.45,
    spend3:17.42,
    spend4:455.45,
}
var x =document.getElementsByClassName("date2_text");
x[0].innerHTML =card2_date.date1;
x[1].innerHTML =card2_date.date2;
x[2].innerHTML =card2_date.date3;
x[3].innerHTML =card2_date.date4;

var x =document.getElementsByClassName("merchant2_text");
x[0].innerHTML =card2_merchant.merchant1;
x[1].innerHTML =card2_merchant.merchant2;
x[2].innerHTML =card2_merchant.merchant3;
x[3].innerHTML =card2_merchant.merchant4;

var x =document.getElementsByClassName("spend2_text");
x[0].innerHTML =card2_spend.spend1;
x[1].innerHTML =card2_spend.spend2;
x[2].innerHTML =card2_spend.spend3;
x[3].innerHTML =card2_spend.spend4;

}
// ----------------------------------------------------------
var myfunc3 = () => {
    var card3_date ={
        date1: "07/08/2020",
        date2: "15/04/2020",
        date3: "18/02/2020",
        date4: "03/06/2020",
    }
    var card3_merchant ={
        merchant1:"Valentino",
        merchant2:"Pull & Bear",
        merchant3:"Chanel",
        merchant4:"Dior",
    
    }
    var card3_spend ={
        spend1:50.5,
        spend2:18.45,
        spend3:485.62,
        spend4:562.05,
    }
    var x =document.getElementsByClassName("date3_text");
    x[0].innerHTML =card3_date.date1;
    x[1].innerHTML =card3_date.date2;
    x[2].innerHTML =card3_date.date3;
    x[3].innerHTML =card3_date.date4;
    
    var x =document.getElementsByClassName("merchant3_text");
    x[0].innerHTML =card3_merchant.merchant1;
    x[1].innerHTML =card3_merchant.merchant2;
    x[2].innerHTML =card3_merchant.merchant3;
    x[3].innerHTML =card3_merchant.merchant4;
    
    var x =document.getElementsByClassName("spend3_text");
    x[0].innerHTML =card3_spend.spend1;
    x[1].innerHTML =card3_spend.spend2;
    x[2].innerHTML =card3_spend.spend3;
    x[3].innerHTML =card3_spend.spend4;
    

    
    }
 




    // changecolor.addEventListener('click',() => changecolor.style.backgroundColor='green');
    // let changecolor= document.querySelectorAll('#card1');
    // changecolor.addEventListener('click',() => changecolor.style.backgroundColor='green');