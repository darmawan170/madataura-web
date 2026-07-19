async function loadProfile() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Header
        document.getElementById('profile-header').innerHTML = `
            <img src="${data.photo}" alt="${data.name}" class="profile-img">
            # ${data.name}
            <p class="subtitle">${data.title}</p>
        `;
        
        // About
        document.getElementById('about').innerHTML = `
            ## Tentang Saya
            <p>${data.about}</p>
        `;
        
        // Skills
        const skillsHtml = data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        document.getElementById('skills').innerHTML = `
            ## Skill
            <div class="skills-list">${skillsHtml}</div>
        `;
        
        // Contact
        document.getElementById('contact').innerHTML = `
            ## Kontak
            <div class="contact-item">**Email:** <a href="mailto:${data.contact.email}">${data.contact.email}</a></div>
            <div class="contact-item">**GitHub:** <a href="https://${data.contact.github}" target="_blank">${data.contact.github}</a></div>
            <div class="contact-item">**LinkedIn:** <a href="https://${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a></div>
        `;
        
        document.title = `Profil ${data.name}`;
        
    } catch (error) {
        console.error('Gagal load data:', error);
        document.body.innerHTML = '<p>Gagal memuat profil. Cek file data.json</p>';
    }
}

loadProfile();