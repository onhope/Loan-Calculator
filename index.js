function calculateLoan() {
  LoanAmountValue = document.getElementById("loan-amount").value;
  InterestRateValue = document.getElementById("interest-rate").value;
  MonthsToPayValue = document.getElementById("months-to-pay").value;
  
  interest = (LoanAmountValue * (InterestRateValue * 0.01)) / MonthsToPayValue;
  MonthlyPayment = (LoanAmountValue/MonthsToPayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly PaymentL ${MonthlyPayment}`;
}