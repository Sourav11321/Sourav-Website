// ------------tablinks&activelinks-----------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ----------openmenu & closemenu----------

var sidemeu = document.getElementById("sidemenu")

function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}
// ----------------contact from---------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwgWIVX3PuxgBK-As2sMrQ5-jRBcxJgaIRv2KtoniUtoiMQm4IAY0VbtcuwjUplW-tB/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Massage sent successfully"
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })


        // ===============scroll reveal===============

        ScrollReveal({ 
           // reset : true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.container, .sub-title', {origin: 'top'});
        ScrollReveal().reveal('.row1-col-1,.work-list, .services-list, .about-col-2, .contact-right', {origin: 'botton'});
        ScrollReveal().reveal('.row1-col-2,.work, .sub-title p, .about-col-1, .contact-right', {origin: 'left'});

         // ===============typed js===============

        const typed = new Typed('.multiple-text', {
            strings: ['Sourav Bandopadhyay', 'Learner', 'Coder', 'Student'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1500,
            loop: true
        });