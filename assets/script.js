document.addEventListener("DOMContentLoaded", (event) => {
    const mortgageForm = document.getElementById("form");
    const monthlyMortgagePayment = document.getElementById("monthly-mortgage-payment");
    const mortgageAmount = document.getElementById("mortgage_amount");
    const mortgageTerm = document.getElementById("mortgage_term");
    const interestRate = document.getElementById("interest_rate");
    
    mortgageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(`The Mortgage amount is: £${mortgageAmount.value}\nThe Mortgage term is: ${mortgageTerm.value} years\nThe Interest rate is: ${interestRate.value}%`);
    });
});
