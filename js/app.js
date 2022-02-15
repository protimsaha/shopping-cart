function updateCaseNumber(product, price, isIncreasing) {
    let productDisplay = document.getElementById(product + '-output')
    let casenumber = caseDisplay.value;
    if (isIncreasing == true) {
        caseDisplay.value = Number(casenumber) + 1;

    }
    else if (casenumber > 0) {
        caseDisplay.value = Number(casenumber) - 1;
    }
    let casePrice = document.getElementById(product + '-price');
    casePrice.innerText = Number(caseDisplay.value) * price;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true)
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false)
})

document.getElementById('case1-plus').addEventListener('click', function () {
    updateCaseNumber('case1', 59, true)
});

document.getElementById('case1-minus').addEventListener('click', function () {
    updateCaseNumber('case1', 59, false)
});