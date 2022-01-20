//SELECTOR
const Input = document.getElementById('input');
const Result = document.getElementById('result');
const From = document.getElementById('from');
const to = document.getElementById('to');
const historyList = document.getElementById('historyList');
const delBtn = document.getElementById('delRecord');
let rowAlert = document.querySelector('.rowAlert');

//EVENT

document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    //Get 
    let x = Input.value;
    let y = From.value;
    let z = to.value;

    //Select Table Item
    let date = new Date().toLocaleString();
    let fT = From.options[From.selectedIndex].innerText;
    let tT = to.options[to.selectedIndex].innerText;
 
    //process
    let firstResut = x*y;
    let secoundResult = firstResut/z;
    let finalResult = secoundResult.toFixed(2);
    
    //Set Result
    Result.innerHTML = finalResult + to.options[to.selectedIndex].innerText;

    //Refresh calculator
    Input.value = "";
    Input.focus();
    From.value = "";
    to.value = "1";
   
    //Create Tabe row
    let arr = [date, fT, tT, x, Result.innerText];
    createTr(arr);
    
    record();
    delBtn.innerHTML = "Delete Record";
});
//FUNCTION

//delete record
function delet(){
    localStorage.clear();
    historyList.innerHTML = localStorage.getItem("item");
    delBtn.innerHTML = "Deleted Your Record";

}

//Create Currency Option
function createOption(x,y,z){
    const option = document.createElement('option');
    const text = document.createTextNode(y);

    option.setAttribute('value',toChangeNum(z));
    option.appendChild(text);
    x.appendChild(option);
}

function toChangeNum(x){
    return Number(x.replace(",",""));
}
for(x in data.rates){
    createOption(From,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
}

function createTr(x){
    if(rowAlert){
        rowAlert.remove();
    }
    let tr = document.createElement('tr');
    x.map((el)=>{
        let td = document.createElement('td');
        let tableText = document.createTextNode(el);

        td.appendChild(tableText);
        tr.appendChild(td);
    });
    tr.setAttribute("id","row");
    historyList.appendChild(tr);

    
} 
   

function record(){
    localStorage.setItem("item",historyList.innerHTML);
}

(function(){
    if(localStorage.getItem("item")){
        historyList.innerHTML = localStorage.getItem("item");
    }
})();


let icon = document.getElementById('icon');

function modeChange(){
    document.body.classList.toggle("night-mode");
    if(icon.className === "fas fa-moon"){
        icon.className = "fas fa-sun";
    }else{
        icon.className = "fas fa-moon";
    }
}
