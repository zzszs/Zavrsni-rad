

$("document").ready(() => {

const logged = localStorage.getItem("status");
    
if (logged) {
        
let products = []
 
$("#clear").click(() => {
    $("#cartt").find("tr:gt(0)").remove();
    
    localStorage.removeItem("products")
    location.reload()


}) 

$("#btn1").click(() => {
    const prod1 = $("#prod1").text()
    const qnty1 = $("#qnty1").val() 

    const prc1 = $("#prc1").text()
    const price = parseInt(prc1)
    let prr1 = price * qnty1;




    const newProds1 ={
        productname: prod1,
        price: prr1,
        quantity: qnty1
    }
if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds1)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds1);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn2").click(() => {
    const prod2 = $("#prod2").text()
    const qnty2 = $("#qnty2").val() 

    const prc2 = $("#prc2").text()
    const price2 = parseInt(prc2)
    let prr2 = price2 * qnty2;




    const newProds2 ={
        productname: prod2,
        price: prr2,
        quantity: qnty2
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds2)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds2);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn3").click(() => {
    const prod3 = $("#prod3").text()
    const qnty3 = $("#qnty3").val() 

    const prc3 = $("#prc3").text()
    const price3 = parseInt(prc3)
    let prr3 = price3 * qnty3;




    const newProds3 ={
        productname: prod3,
        price: prr3,
        quantity: qnty3
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds3)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds3);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn4").click(() => {
    const prod4 = $("#prod4").text()
    const qnty4 = $("#qnty4").val() 

    const prc4 = $("#prc4").text()
    const price4 = parseInt(prc4)
    let prr4 = price4 * qnty4;




    const newProds4 ={
        productname: prod4,
        price: prr4,
        quantity: qnty4
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds4)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds4);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn5").click(() => {
    const prod5 = $("#prod5").text()
    const qnty5 = $("#qnty5").val() 

    const prc5 = $("#prc5").text()
    const price5 = parseInt(prc5)
    let prr5 = price5 * qnty5;




    const newProds5 ={
        productname: prod5,
        price: prr5,
        quantity: qnty5
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds5);
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds5);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn6").click(() => {
    const prod6 = $("#prod6").text()
    const qnty6 = $("#qnty6").val() 

    const prc6 = $("#prc6").text()
    const price6 = parseInt(prc6)
    let prr6 = price6 * qnty6;




    const newProds6 ={
        productname: prod6,
        price: prr6,
        quantity: qnty6
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds6)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds6);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn7").click(() => {
    const prod7 = $("#prod7").text()
    const qnty7 = $("#qnty7").val() 

    const prc7 = $("#prc7").text()
    const price7 = parseInt(prc7)
    let prr7 = price7 * qnty7;




    const newProds7 ={
        productname: prod7,
        price: prr7,
        quantity: qnty7
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds7)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds7);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn8").click(() => {
    const prod8 = $("#prod8").text()
    const qnty8 = $("#qnty8").val() 

    const prc8 = $("#prc8").text()
    const price8 = parseInt(prc8)
    let prr8 = price8 * qnty8;




    const newProds8 ={
        productname: prod8,
        price: prr8,
        quantity: qnty8
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds8)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds8);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn9").click(() => {
    const prod9 = $("#prod9").text()
    const qnty9 = $("#qnty9").val() 

    const prc9 = $("#prc9").text()
    const price9 = parseInt(prc9)
    let prr9 = price9 * qnty9;




    const newProds9 ={
        productname: prod9,
        price: prr9,
        quantity: qnty9
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds9)
    localStorage.setItem('products',JSON.stringify(products));

    } else {
        products.push(newProds9);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn10").click(() => {
    const prod10 = $("#prod10").text()
    const qnty10 = $("#qnty10").val() 

    const prc10 = $("#prc10").text()
    const price10 = parseInt(prc10)
    let prr10 = price10 * qnty10;




    const newProds10 ={
        productname: prod10,
        price: prr10,
        quantity: qnty10
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds10)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds10);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn11").click(() => {
    const prod11 = $("#prod11").text()
    const qnty11 = $("#qnty11").val() 

    const prc11 = $("#prc11").text()
    const price11 = parseInt(prc11)
    let prr11 = price11 * qnty11;




    const newProds11 ={
        productname: prod11,
        price: prr11,
        quantity: qnty11
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds11)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds11);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn12").click(() => {
    const prod12 = $("#prod12").text()
    const qnty12 = $("#qnty12").val() 

    const prc12 = $("#prc12").text()
    const price12 = parseInt(prc12)
    let prr12 = price12 * qnty12;




    const newProds12 ={
        productname: prod12,
        price: prr12,
        quantity: qnty12
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds12)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds12);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn13").click(() => {
    const prod13 = $("#prod13").text()
    const qnty13 = $("#qnty13").val() 

    const prc13 = $("#prc13").text()
    const price13 = parseInt(prc13)
    let prr13 = price13 * qnty13;




    const newProds13 ={
        productname: prod13,
        price: prr13,
        quantity: qnty13
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds13)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds13);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn14").click(() => {
    const prod14 = $("#prod14").text()
    const qnty14 = $("#qnty14").val() 

    const prc14 = $("#prc1").text()
    const price14 = parseInt(prc14)
    let prr14 = price14 * qnty14;




    const newProds14 ={
        productname: prod14,
        price: prr14,
        quantity: qnty14
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds14)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds14);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn15").click(() => {
    const prod15 = $("#prod15").text()
    const qnty15 = $("#qnty15").val() 

    const prc15 = $("#prc15").text()
    const price15 = parseInt(prc15)
    let prr15 = price15 * qnty15;




    const newProds15 ={
        productname: prod15,
        price: prr15,
        quantity: qnty15
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds15)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds15);
        localStorage.setItem('products',JSON.stringify(products));

    }

})

$("#btn16").click(() => {
    const prod16 = $("#prod16").text()
    const qnty16 = $("#qnty16").val() 

    const prc16 = $("#prc16").text()
    const price16 = parseInt(prc16)
    let prr16 = price16 * qnty16;




    const newProds16 ={
        productname: prod16,
        price: prr16,
        quantity: qnty16
    }
if (localStorage.getItem("products")) {
    
    products = JSON.parse(localStorage.getItem("products"));
    products.push(newProds16)
    localStorage.setItem('products',JSON.stringify(products));
    } else {
        products.push(newProds16);
        localStorage.setItem('products',JSON.stringify(products));

    }

})


$("#cartbtn").click(() => {
    $("#cartt").find("tr:gt(0)").remove();
var cartproducts = JSON.parse(localStorage.getItem("products"))

if (cartproducts !== null && cartproducts.length !== 0 ) {

for (i = 0; i < cartproducts.length; i++) {

    var row = cartt.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = cartproducts[i].productname;
    cell2.innerHTML = cartproducts[i].quantity;
    cell3.innerHTML = cartproducts[i].price;}
}

if (cartproducts !== null && cartproducts.length !== 0 ) {

    var val = cartproducts.reduce(function(previousValue, currentValue) {
        return {
            price: previousValue.price + currentValue.price,
        }
      });
      $("#cartTotal").html(`<b>TOTAL: ${val.price}</b>`)

    }

    $("#checkout").click(() => {
        localStorage.setItem('total', JSON.stringify(val.price));
        location.assign('checkout.html')
    }) 
    

})


} else {
    $("#btn1").click(() => {
        alert("Please signup/login")
    });
    $("#btn2").click(() => {
        alert("Please signup/login")
    });
    $("#btn3").click(() => {
        alert("Please signup/login")
    });
    $("#btn4").click(() => {
        alert("Please signup/login")
    });
    $("#btn5").click(() => {
        alert("Please signup/login")
    });
    $("#btn6").click(() => {
        alert("Please signup/login")
    });
    $("#btn7").click(() => {
        alert("Please signup/login")
    });
    $("#btn8").click(() => {
        alert("Please signup/login")
    });
    $("#btn9").click(() => {
        alert("Please signup/login")
    });
    $("#btn10").click(() => {
        alert("Please signup/login")
    });
    $("#btn11").click(() => {
        alert("Please signup/login")
    });
    $("#btn12").click(() => {
        alert("Please signup/login")
    });
    $("#btn13").click(() => {
        alert("Please signup/login")
    });
    $("#btn14").click(() => {
        alert("Please signup/login")
    });
    $("#btn15").click(() => {
        alert("Please signup/login")
    });
    $("#btn16").click(() => {
        alert("Please signup/login")
    });


}
});