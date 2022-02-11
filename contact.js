const scriptURL = 'https://script.google.com/macros/s/AKfycbw5ApkgFBNIv7TKR6tZlpMSpA0ImDhx_-bg6l6puLVIzUmMrdOd-hphQTOuoMr-Xc3lAw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you for the order. Will contact you soon through WhatsApp / Phone Call."))
        .catch(error => console.error('Error!', error.message))
})