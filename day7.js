var button=document.getElementById("button1");
button.addEventListener("click",x);

 

var table =document.createElement("table");
document.body.appendChild(table);
var header=document.createElement("tr");
table.appendChild(header);
var th1=document.createElement("th");
header.appendChild(th1);
th1.innerHTML="id";
var th2=document.createElement("th");
header.appendChild(th2);
th2.innerHTML="full name";
var th3=document.createElement("th");
header.appendChild(th3);
th3.innerHTML="email";
var th4=document.createElement("th");
header.appendChild(th4);
th4.innerHTML="telephone";
var th5=document.createElement("th");
header.appendChild(th5);
th5.innerHTML="age";

function x(){
    var row=document.createElement("tr")
    table.appendChild(row);
   var data1=document.getElementById("in").value;
   var td1=document.createElement("td");
   td1.innerHTML=data1;
   row.appendChild(td1);

   var data2=document.getElementById("name2").value;
   var td2=document.createElement("td");
   td2.innerHTML=data2;
   row.appendChild(td2);

   var data3=document.getElementById("email2").value;
   var td3=document.createElement("td");
   td3.innerHTML=data3;
   row.appendChild(td3);

   var data4=document.getElementById("tele2").value;
   var td4=document.createElement("td");
   td4.innerHTML=data4;
   row.appendChild(td4);

   
   var data5=document.getElementById("age2").value;
   var td5=document.createElement("td");
   td5.innerHTML=data5;
   row.appendChild(td5);
   table.appendChild(row);
   alert("Data saved");
  
}
function reset(){
    console.log("nhh");
document.getElementsByTagName("input")[0].value="";
document.getElementsByTagName("input")[1].value="";
document.getElementsByTagName("input")[2].value="";
document.getElementsByTagName("input")[3].value="";
document.getElementsByTagName("input")[4].value="";
}