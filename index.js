// template_91wrldd
// service_fr3vq0s
// KJXHaU6B8Zzu04vLT



function contact(event) {
    event.preventDefault ();
    emailjs
    .sendForm(
        'service_fr3vq0s', 
        'template_91wrldd',
        event.target,
        'KJXHaU6B8Zzu04vLT'
    ).then(() => {
        console.log('this worked1')
    })
}