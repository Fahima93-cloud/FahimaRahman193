async function searchCountry() {
  const countryName = document.getElementById('countryInput').value.trim();
  const result = document.getElementById('result');
  
  result.innerHTML = ""; // Clear previous results

  if (countryName === "") {
    alert("Please enter a country name!");
    return;
  }
}