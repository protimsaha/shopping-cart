function updateProductNumber(product, isIncreasing, price) {
    let productOutput = document.getElementById(product + '-output');
    let productOutputValue = productOutput.value;

    if (isIncreasing == true) {
        productOutput.value = parseInt(productOutputValue) + 1;
    }
    else if (productOutputValue > 0) {
        productOutput.value = parseInt(productOutput.value) - 1;
    }
    let productPrice = document.getElementById(product + '-price');
    let updateProductPrice = Number(productOutput.value) * price;
    productPrice.innerText = updateProductPrice;
    // calculate subtotal
    calculateTotal()
}
function getProductNumber(product) {
    let againProductOutput = document.getElementById(product + '-output');
    let productOutputValue = parseInt(againProductOutput.value);
    return productOutputValue;
}
function calculateTotal() {

    let phonePrice = getProductNumber('phone') * 1240;
    let casePrice = getProductNumber('case1') * 59;
    let sum = phonePrice + casePrice;
    let subtotal = document.getElementById('subtotal')
    subtotal.innerText = sum
}


// update phone events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1240);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1240);
})

// update case events
document.getElementById('case1-plus').addEventListener('click', function () {
    updateProductNumber('case1', true, 59)
})
document.getElementById('case1-minus').addEventListener('click', function () {
    updateProductNumber('case1', false, 59)
})