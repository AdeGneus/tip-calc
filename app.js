// UI variables
const billAmount = document.getElementById("amount");
const tipPercent = document.getElementById("tip");
const numberOfPeople = document.getElementById("people");
const calculateBill = document.getElementById("calculate-bill");
const finalResult = document.querySelector(".results");
const resetBtn = document.getElementById("reset");
const loader = document.getElementById("loading");

// Listen for click
calculateBill.addEventListener("click", function(){
    // Hide results
    finalResult.style.display = "none";

    // Show loader
    loader.style.display = "block";

    setTimeout(calculateBills, 2000);
});

// Calculate bills
function calculateBills(){
    if(billAmount.value !== "" && tipPercent.value !== "" && numberOfPeople.value !== ""){
        // compute tip amount
        let tipAmount = parseFloat(billAmount.value) * parseFloat(tipPercent.value) / 100;
        // compute total bill
        let totalBill = parseFloat(billAmount.value) + tipAmount;
        // compute individual tip
        let tipIndividual = tipAmount / parseInt(numberOfPeople.value);
        // compute individual bill
        let individualBill = totalBill / parseInt(numberOfPeople.value);

        let results = `
        <div class="row1">
            <div class="total-bill">
                <p>Total Bill (Tip Inclusive)</p>
                <h3 class="totalBill"><span>&#8358;${totalBill.toFixed(2)}</span></h3>
            </div>
            <div class="tip-amount">
                <p>Tip Amount</p>
                <h3 class="tipAmount"><span>&#8358;${tipAmount.toFixed(2)}</span></h3>
            </div>
        </div>
        <div class="row2">
            <div class="individual">
                <p>Tip Per Individual</p>
                <h3 class="tipIndividual"><span>&#8358;${tipIndividual.toFixed(2)}</span></h3>
            </div>
            <div class="individual-bill">
                <p>Individual Bill</p>
                <h3 class="individualBill"><span>&#8358;${individualBill.toFixed(2)}</span></h3>
            </div>
        </div>
        `;
        finalResult.innerHTML = results;

        // show results
        finalResult.style.display = "block";

        // hide loader
        loader.style.display = "none";
    } else {
        showError("Please check your numbers and try again!");
    }
};

// show error message
function showError(error){
    // Hide results
    finalResult.style.display = "none";
    // hide loader
    loader.style.display = "none";

    //create error message div
    const errorDiv = document.createElement("div");
    // add class
    errorDiv.className = "error";
    
    //get parent and sibling element
    const container = document.querySelector(".container"); //parent
    const heading = document.querySelector(".heading"); //sibling

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert errorDiv before heading
    container.insertBefore(errorDiv, heading);

    // clear error after after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector(".error").remove();
}

// listen for reset
resetBtn.addEventListener("click", function(){
    // Hide results
    finalResult.style.display = "none";

    // clear input fields
    billAmount.value = "";
    tipPercent.value = "";
    numberOfPeople.value = "";
});