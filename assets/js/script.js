const toggle = document.querySelector("#check")
const prices = document.querySelectorAll(".price")

toggle.addEventListener("change", () => {
    const isMonthly = toggle.checked

    prices.forEach((priceElement) => {
        const newPrice = isMonthly ? priceElement.dataset.annually : priceElement.dataset.monthly
        priceElement.innerHTML = `&dollar;${newPrice}`
    })
})