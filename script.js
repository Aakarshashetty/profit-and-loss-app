const initialPrice = document.querySelector('.initial-price');
const stocks = document.querySelector('.stocks');
const currPrice = document.querySelector('.curr-price');
const tellMe = document.querySelector('.tell-me-btn');
const output = document.querySelector('.output');

const calculateProfitOrLoss = (sellingPrice, costPrice, stock) => {
    if(sellingPrice > costPrice){
        const profit = (sellingPrice-costPrice) * stock;
        const percentage = (profit/costPrice)*100;
        output.innerText = `Hey, the profit is ${profit}Fixed(2) and the percent is ${percentage}`;
    }
    else if(costPrice > sellingPrice){
        const loss = (costPrice - sellingPrice)*stock;
        const percentage = (loss/costPrice)*100;
        output.innerText = `Hey, the loss is ${loss} and the percent is ${percentage}%`;
    }
}
tellMe.addEventListener("click", ()=>{
    var sp = Number(initialPrice.value);
    var cp = Number(currPrice.value);
    var st = Number(stocks.value);
    calculateProfitOrLoss(sp,cp,st);
});