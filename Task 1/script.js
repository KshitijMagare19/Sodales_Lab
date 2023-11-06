function computeLoan(){
    let amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest_rate').value;
    let months = document.getElementById('months').value;
    let monthly_interest = (amount * interest_rate) / 100 ;
    let total_interest = monthly_interest * months;
    let total = +amount + +total_interest;
    let monthly_total = total / months;

    document.getElementById('payment').innerHTML = `Monthly Payment = ${monthly_total}` 
    
}