function onReady() {
    console.log("Javascript is working!");
}
onReady();

//creating a global variable for the the total monthly cost
let totalMonthlyCost = 0;

function addEmployee(event){
  
  event.preventDefault();
  console.log("Did this work?");

  let tableElement = document.querySelector("tbody");
  
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let id = document.getElementById("id").value;
  let title = document.getElementById("title").value;
  let annualSalary = document.getElementById("annualSalary").value;

  document.getElementById('firstName').value = "";
  document.getElementById('lastName').value = "";
  document.getElementById('id').value = "";
  document.getElementById('title').value = "";
  document.getElementById('annualSalary').value = "";

  
  // Adding employee row to existing table element when submit is clicked
  tableElement.innerHTML += `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td>
      <button onclick="deleteRow(event)">Delete</button>
    </td>
  </tr>
`;
  

totalMonthlyCost += Number(annualSalary)/12;
console.log ('Annual salary', annualSalary);
console.log ('Current value of total monthly cost', totalMonthlyCost);
totalMonthlyCost = Number(totalMonthlyCost);
totalMonthlyCost = Math.round(totalMonthlyCost*100)/100;
console.log('Total Monthly cost:', totalMonthlyCost);



document.querySelector('footer').innerHTML = `Total Monthly: $${totalMonthlyCost}`;

}

//function to delete entire employee row when delete button is clicked

function deleteRow (event){
  event.target.parentElement.parentElement.remove();

}
