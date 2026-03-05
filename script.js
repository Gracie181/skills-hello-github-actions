const links = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const target = this.getAttribute('href').substring(1);
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});