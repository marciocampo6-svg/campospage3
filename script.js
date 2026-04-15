function openWhatsApp() {
    window.open('https://wa.me/5511919720892', '_blank');
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        element.style.display = 'none';
    }
}

function openReadme() {
    document.getElementById('readmeModal').style.display = 'block';
}

function closeReadme() {
    document.getElementById('readmeModal').style.display = 'none';
}