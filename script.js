// Ambil elemen-elemen HTML yang diperlukan
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("btn-search");

// Tambahkan event listener ke tombol pencarian
searchButton.addEventListener("click", function () {
    // Fokuskan kursor ke input pencarian
    searchInput.focus();
});

function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name,
        email,
        city,
        zipCode,
        status,
    };
}

function isNumber(inputString) {
    return !isNaN(inputString);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
    if (
        formData &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked(formData.status)
    ) {
        return true;
    }
    return false;
}


function submit() {
    const formData = handleGetFormData();
    const isFormValid = validateFormData(formData);
    const warning = document.getElementById("warning");
    if (!isFormValid) {
        warning.style.visibility = "visible";
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.style.visibility = "hidden";
        warning.innerHTML = "";
    }
}


const formElement = document.getElementById("submit-form").addEventListener("click", function (e) {
    e.preventDefault();

    console.log(handleGetFormData());
    submit();
});


let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let cityInput = document.getElementById('city');
let zipCodeInput = document.getElementById('zip-code');
let statusSelect = document.getElementById('status');
let dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

function addData() {

    let name = nameInput.value;
    let email = emailInput.value;
    let city = cityInput.value;
    let zipCode = zipCodeInput.value;
    let status = statusSelect.value;

    const newRow = dataTable.insertRow();


    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = name;

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = city;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = zipCode;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = status;

}


