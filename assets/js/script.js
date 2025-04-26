document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.matches('.hamburger')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
        });
    });

    // Menu Items
    // Menu Items
    const menuItems = [
        { 
            name: 'Ice Blue Potion', 
            price: '18K', 
            desc: 'Perpaduan Bunga Telang dan Lemon',
            image: 'img/bluepotion.png' 
        },
        { 
            name: 'Ice Ocean Milk', 
            price: '20K', 
            desc: 'Perpaduan Bunga Telang dan Susu',
            image: 'img/oceanmilk.png' 
        },
        { 
            name: 'Ice Blue Sky', 
            price: '19K', 
            desc: 'Original Bunga Telang',
            image: 'img/bluesky.png' 
        }
    ];

// Populate Menu
    const menuGrid = document.querySelector('.menu-grid');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item animate-fade';
        menuItem.innerHTML = `
        <div class="menu-image" style="background-image: url('${item.image}')">

        </div>
        <div class="menu-content">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>
        `;
        menuItem.style.animationDelay = `${index * 0.2}s`;

        menuItem.addEventListener('click', () => {
        // Scroll ke section order
            document.querySelector('#order').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        // Opsional: Tambahkan efek visual saat diklik
            menuItem.classList.add('clicked');
            setTimeout(() => {
                menuItem.classList.remove('clicked');
            }, 200);
        });

        menuGrid.appendChild(menuItem);
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-slide, .animate-fade').forEach(el => {
        observer.observe(el);
    });
});

function openWhatsApp() {
    const phone = '6285696153995';
    const message = 'Halo Bluechella, saya ingin memesan:';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}