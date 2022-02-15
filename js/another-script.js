function updatePhonePrice(product, isIncreasing, price) {
    let phoneOutput = document.getElementById(product + '-output');
    let phoneValue = phoneOutput.value;
    if (isIncreasing == true) {
        let newValue = Number(phoneValue) + 1;
        let newPrice = Number(newValue) * price;
        phoneOutput.value = newValue;
        let phonePrice = document.getElementById('phone-price');
        phonePrice.innerText = newPrice;
        let subtotal = document.getElementById('subtotal');
        subtotal.innerText = newPrice;
        let tax = document.getElementById('tax');
        tax.innerText = (newPrice * 10) / 100;
        let total = document.getElementById('total');
        total.innerText = newPrice + Number(tax.innerText)
    }
    else if (phoneValue > 0) {
        let phoneOutput = document.getElementById(product + '-output');
        let phoneValue = phoneOutput.value;
        let newValue = Number(phoneValue) - 1;
        let newPrice = Number(newValue) * price;
        phoneOutput.value = newValue;
        let phonePrice = document.getElementById('phone-price');
        phonePrice.innerText = newPrice;
        let subtotal = document.getElementById('subtotal');
        subtotal.innerText = newPrice;
        let tax = document.getElementById('tax');
        tax.innerText = (newPrice * 10) / 100;
        let total = document.getElementById('total');
        total.innerText = newPrice + Number(tax.innerText)
    }
}


document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhonePrice('phone', true, 1240);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhonePrice('phone', false, 1240);

})
