$("document").ready(() => {
    let all= JSON.parse(localStorage.getItem("total"))
    $("#pricetotal").html(`TOTAL PRICE ${all}&euro;`)

})
$("#pay").click(() => {
   
        alert("Transaction successful, thank you for your purchase!")
        localStorage.removeItem("total");
        localStorage.removeItem("products")
        location.assign("index.html")

    




})

