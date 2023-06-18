let first = [];
let last = [];
let rdm;
let number = 0;

for (let i = 0; i < 16; i++) {
    first[i] = i + 1;
}


for (let i = 0; i < 16; i++) {
    rdm = Math.floor(Math.random() * first.length);
    last[i] = first[rdm];
    first.splice(rdm, 1);
}


function table() {
    let tbl = document.getElementById("tbl");
    let data = "";
    for (let i = 0; i < 4; i++) {
        data += "<tr>";
        for (let j = 0; j < 4; j++) {
            data += `<td onclick="cellClick(event)">${last[number]}</td>`;
            number++;
        }
        data += "</tr>";
    }
    tbl.innerHTML = data;


    function greeting(){
        alert(" Game Over!");
      }
      
      setTimeout(greeting, 20000);
   
}


let currentNumber = 1;

function cellClick(event) {
    const cell = event.target
 
    const selectedNumber = parseInt(cell.textContent);
   
    if (selectedNumber === currentNumber) {
        cell.classList.add("clicked");
        currentNumber++;

        if (currentNumber > 16) {
           
            cell.style.backgroundColor = "green";
            function greeting(){
                alert("Congratulations!");
              }
               
              setTimeout(greeting);
        }

    } else {
        cell.style.backgroundColor = "red";
       

        function greeting(){
            alert(" wrong!",);
          }
           
          setTimeout(greeting);
    }
}


    table();





  




 
