const initialPrice = document.querySelector('.initial-price');
const stocks = document.querySelector('.stocks');
const currPrice = document.querySelector('.curr-price');
const tellMe = document.querySelector('.tell-me-btn');
const output = document.querySelector('.output');

const calculateProfitOrLoss = (initial, current, stock) => {
    if(initial < current){
        const profit = (current-initial) * stock;
        const percentage = (profit/initial)*100;
        output.style.color = "green";
        output.innerText = `Hey, the profit is ${profit} and the percent is ${percentage.toFixed(2)}%`;
    }
    else if(initial > current){
        const loss = (initial - current)*stock;
        const percentage = (loss/initial)*100;
        output.style.color = "red";
        output.innerText = `Hey, the loss is ${loss} and the percent is ${percentage.toFixed(2)}%`;
    }
    else{
        output.innerText = "No pain no gain, and no gain no pain🙂";
    }
}
tellMe.addEventListener("click", ()=>{
    var ip = initialPrice.value;
    var cp = currPrice.value;
    var st = stocks.value;
    if(ip && cp && st !== ''){
        calculateProfitOrLoss(ip,cp,st);
    }
    else{
        output.innerText = "Please fill out all the fields😐"
    }
});