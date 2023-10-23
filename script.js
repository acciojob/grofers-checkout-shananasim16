//const getSumBtn = document.createElement("button");
//getSumBtn.append("Get Total Price");
//document.body.appendChild(getSumBtn);

//const getSum = () => {
//Add your code here
  
//};

//getSumBtn.addEventListener("click", getSum);

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class "prices" in the grocery list
    const priceElements = document.querySelectorAll(".prices");

    let totalPrice = 0;

    // Calculate the total price by summing up the prices
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row to display the total price
    const totalRow = document.createElement("tr");
    const totalCell1 = document.createElement("td");
    const totalCell2 = document.createElement("td");
    totalCell1.textContent = "Total Price:";
    totalCell2.textContent = totalPrice.toFixed(2);
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);

    // Check if the total row already exists and replace it
    const existingTotalRow = document.querySelector("#total-price");
    if (existingTotalRow) {
        existingTotalRow.replaceWith(totalRow);
    } else {
        const tableFooter = document.querySelector("table tfoot");
        tableFooter.appendChild(totalRow);
    }
};

getSumBtn.addEventListener("click", getSum);

// Initial calculation when the page loads
getSum();

