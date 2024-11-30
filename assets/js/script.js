// DOM elements
const toggle = document.querySelector("#check")
const prices = document.querySelectorAll(".price")

// Event listener on toggle button
toggle.addEventListener("change", () => {
    const isMonthly = toggle.checked

    prices.forEach((priceElement) => {
        const newPrice = isMonthly ? priceElement.dataset.annually : priceElement.dataset.monthly
        priceElement.innerHTML = `<span class="text-5xl mr-1">&dollar;</span>${newPrice}`
    })
})