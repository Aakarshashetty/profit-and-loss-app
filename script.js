const initialPrice = document.querySelector('.initial-price');
const stocks = document.querySelector('.stocks');
const currPrice = document.querySelector('.curr-price');
const tellMe = document.querySelector('.tell-me-btn');
const output = document.querySelector('.output');

const calculateProfitOrLoss = (initial, stock, current) => {
    console.log(initial, current, stock);
    output.style.display = "inline";
    if(initial > current){
        var loss = (initial - current)*stock;
        var percentage = (loss/initial)*100;
        output.style.color = "red";
        output.innerText = `Hey, the loss is ${loss} and the percent is ${percentage.toFixed(2)}%`;
    }
    
    else if(current > initial){
        var profit = (current-initial) * stock;
        var percentage = (profit/initial)*100;
        output.style.color = "green";
        output.innerText = `Hey, the profit is ${profit} and the percent is ${percentage.toFixed(2)}%`;
    }
    else{
        output.style.color = "black";
        output.innerText = "No pain no gain, and no gain no pain🙂";
    }
}
tellMe.addEventListener("click", ()=>{
    var ip = Number(initialPrice.value);
    var cp = Number(currPrice.value);
    var st = Number(stocks.value);
    if(ip && cp && st !== ''){
        calculateProfitOrLoss(ip,st,cp);
    }
    else{
        output.style.display = "inline";
        output.style.color = "black";
        output.innerText = "Please fill out all the fields😐"
    }
});