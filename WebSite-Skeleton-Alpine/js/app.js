//Contact

const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href',
        `mailTo: crew2k22@gmail.com?subject=${fd.get('subject')}&body=${fd.get('message')}`
    )

    sendMail.click()
}

form.addEventListener('submit', handleSendEmail)
