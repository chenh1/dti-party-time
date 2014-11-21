function dtiCrunch(propertyVal, loanAmt, ratePercent, termYears, hoa, monthlyLiab, monthlyInc){
  //converts interest rate to decimal
    int=ratePercent/100;
  //payment amounts derived from multiplying the loan's term in years with 12 months
    payAmt = termYears*12;
  //Calculate mortgage payments using the principal loan amount, interest rate, and total # payments
    var mortPay = (loanAmt*(int/12)*(Math.pow((1+int/12), payAmt)))/(Math.pow((1+int/12), payAmt)-1);
  //Calculate estimated hazard insurance monthly payments
    hazInsEst = (propertyVal*.002)/12;
  //Calculate estimate property tax based on current average property tax in California
    approxPropertyTax = (propertyVal*.0125)/12;
  //Combine insurance, tax, hoa, and monthly mortgage for total proposed monthly payment
    var totalProposedPmts = mortPay + hazInsEst + approxPropertyTax + hoa;
  //Calculate debt-to-income ratio, factoring in user's total monthly liabilities and income
  //Convert to percentage once completed
    var dti = Math.round(10000*((totalProposedPmts + monthlyLiab)/monthlyInc))/100 + "%";
  //Alert mortgage payments, total payments, and DTI
    alert("Monthly mortgage payments: $" + Math.round(100*mortPay)/100 + "\n" +
    "Total proposed monthly payments: $" + Math.round(100*totalProposedPmts)/100 + "\n" +
    "Debt to Income Ratio: " + dti);
}
