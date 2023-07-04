let string=""
let result=""
let i=localStorage.length
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            if(string.includes("log") ){

              result= Math.log(Number(string.substring(3,string.length)));
              
            }
            else if(string.includes("^") ){

              result= Math.exp(Number(string.substring(3,string.length)));
              
            }
            
           
            else{
            result=eval(string)
            console.log("value ..........",string)}
            localStorage.setItem(i,`${string } = ${result}`);
            i++;
            document.querySelector('input').value=result;
            showData();
        }
        else if(e.target.innerHTML == 'AC'){
            string=""
            document.querySelector('input').value=string;
        }
        
        
        else{
        console.log(e.target);
        string=string+ e.target.innerHTML;
        document.querySelector('input').value=string;
        // document.getElementById('id').value=string;
        }
    })
})


// var listContainer = document.createElement('div');
// var listContainer=document.ge
// listContainer.setAttribute('id', 'dataContainer');
// document.body.appendChild(listContainer);
function showData() {

    var listContainer = document.getElementById('dataContainer');
    listContainer.innerHTML = '';
  listContainer.style.border = '1px solid #ccc';
    var listItems = "";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      listItems += "<li>" + key + ": " + value + "</li>";
    }
  
    var dataList = document.createElement('ul');
    dataList.innerHTML = listItems;
    listContainer.appendChild(dataList);
  
    listContainer.classList.add('slide');
  }
  
