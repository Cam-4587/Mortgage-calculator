document.addEventListener("DOMContentLoaded", (event) => {
    const mortgageForm = document.getElementById("form");
    const monthlyMortgagePayment = document.getElementById("monthly-mortgage-payment");
    const mortgageAmount = document.getElementById("mortgage_amount");
    const mortgageTerm = document.getElementById("mortgage_term");
    const interestRate = document.getElementById("interest_rate");
    
    mortgageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let principle = parseFloat(mortgageAmount.value);
        let numberOfPayments = parseFloat(mortgageTerm.value * 12);
        let monthlyInterestRate = parseFloat((interestRate.value / 12) /100);
        let monthlyMortgagePaymentValue = principle * (monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) / ((1 + monthlyInterestRate) ** numberOfPayments - 1);
        monthlyMortgagePayment.textContent = `£${monthlyMortgagePaymentValue.toFixed(2)}`;
    });
});
