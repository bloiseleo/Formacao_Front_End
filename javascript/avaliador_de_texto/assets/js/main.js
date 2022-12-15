const form = document.querySelector(".main__form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const textarea = form.querySelector(".main__form__text")
    const textTyped = textarea.value;
    const keywords = extractKeywords(textTyped)
    const textFirstFive = keywords.slice(0, 5);
    const textFirstTen = keywords.slice(0, 10);
})