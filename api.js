async function searchCountry() {
  const countryName = document.getElementById('countryInput').value.trim();
  const result = document.getElementById('result');
  
  result.innerHTML = ""; // Clear previous results

  if (countryName === "") {
    alert("Please enter a country name!");
    return;
  }

  if (countryName.length < 2) {
    alert("Please enter at least 2 characters!");
    return;
  }

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!response.ok) {
      throw new Error("Country not found!");
    }

    const data = await response.json();
    const country = data[0];

    const currencies = country.currencies ? Object.values(country.currencies)[0].name : "N/A";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";

    result.innerHTML = `
      <div class="country-card">
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
        <div class="country-details">
          <h2>${country.name.common}</h2>
          <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
          <p><strong>Currency:</strong> ${currencies}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> ${languages}</p>
        </div>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
