// ==================== DATA KOMIK (PALSU DULU) ====================
// Nanti kalo API udah bisa, tinggal ganti bagian ini
const comics = [
    { 
        id: 1, 
        title: 'Solo Leveling', 
        chapter: 'Chapter 185', 
        image: 'https://picsum.photos/200/300?random=1',
        date: '2026-02-21',
        type: 'update'
    },
    { 
        id: 2, 
        title: 'Naruto', 
        chapter: 'Chapter 700', 
        image: 'https://picsum.photos/200/300?random=2',
        date: '2026-02-20',
        type: 'update'
    },
    { 
        id: 3, 
        title: 'One Piece', 
        chapter: 'Chapter 1090', 
        image: 'https://picsum.photos/200/300?random=3',
        date: '2026-02-21',
        type: 'update'
    },
    { 
        id: 4, 
        title: 'Tower of God', 
        chapter: 'Chapter 550', 
        image: 'https://picsum.photos/200/300?random=4',
        date: '2026-02-19',
        type: 'update'
    },
    { 
        id: 5, 
        title: 'Wind Breaker', 
        chapter: 'Chapter 420', 
        image: 'https://picsum.photos/200/300?random=5',
        date: '2026-02-21',
        type: 'update'
    },
];

// Data dummy buat history
let history = [
    { id: 1, title: 'Solo Leveling', chapter: 'Chapter 185', lastRead: '10 menit lalu' },
    { id: 3, title: 'One Piece', chapter: 'Chapter 1090', lastRead: '2 jam lalu' },
];

// Data dummy buat download
let downloads = [
    { id: 2, title: 'Naruto', chapter: 'Chapter 700' },
    { id: 4, title: 'Tower of God', chapter: 'Chapter 550' },
];

// Data profile
const profile = {
    name: 'Vinc User',
    email: 'vinc@email.com',
    joinDate: 'Februari 2026',
    totalRead: '47 Chapter'
};

// ==================== FUNGSI RENDER HALAMAN ====================
function renderHome() {
    // Urutin dari tanggal terbaru
    const latest = [...comics].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '<h2 class="page-title">🔥 Update Terbaru</h2>';
    html += '<div class="comic-grid">';
    
    latest.forEach(comic => {
        html += `
            <div class="comic-card">
                <img src="${comic.image}" alt="${comic.title}">
                <div class="info">
                    <h4>${comic.title}</h4>
                    <p>${comic.chapter}</p>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('mainContent').innerHTML = html;
}

function renderSearch() {
    let html = '<h2 class="page-title">🔍 Cari Komik</h2>';
    html += '<div class="comic-grid">';
    
    comics.forEach(comic => {
        html += `
            <div class="comic-card">
                <img src="${comic.image}" alt="${comic.title}">
                <div class="info">
                    <h4>${comic.title}</h4>
                    <p>${comic.chapter}</p>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('mainContent').innerHTML = html;
}

function renderHistory() {
    let html = '<h2 class="page-title">📜 Riwayat Baca</h2>';
    
    if (history.length === 0) {
        html += '<p style="color: #9ca3af; text-align: center;">Belum ada riwayat</p>';
    } else {
        history.forEach(item => {
            html += `
                <div class="list-item">
                    <h4>${item.title}</h4>
                    <p>${item.chapter} • ${item.lastRead}</p>
                </div>
            `;
        });
    }
    
    document.getElementById('mainContent').innerHTML = html;
}

function renderDownload() {
    let html = '<h2 class="page-title">📥 Komik Tersimpan</h2>';
    
    if (downloads.length === 0) {
        html += '<p style="color: #9ca3af; text-align: center;">Belum ada download</p>';
    } else {
        downloads.forEach(item => {
            html += `
                <div class="list-item">
                    <h4>${item.title}</h4>
                    <p>${item.chapter}</p>
                </div>
            `;
        });
    }
    
    document.getElementById('mainContent').innerHTML = html;
}

function renderProfile() {
    let html = '<h2 class="page-title">👤 Profile</h2>';
    html += `
        <div class="profile-card">
            <div class="profile-avatar">👤</div>
            <h3>${profile.name}</h3>
            <p>${profile.email}</p>
            <p>Member sejak: ${profile.joinDate}</p>
            <p>Total baca: ${profile.totalRead}</p>
        </div>
    `;
    
    document.getElementById('mainContent').innerHTML = html;
}

// ==================== NAVIGASI ====================
document.addEventListener('DOMContentLoaded', () => {
    // Default buka halaman home
    renderHome();
    
    // Ambil semua tombol nav
    const navBtns = document.querySelectorAll('.nav-btn');
    
    // Kasih event listener ke setiap tombol
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Hapus class active dari semua tombol
            navBtns.forEach(b => b.classList.remove('active'));
            
            // Kasih class active ke tombol yang diklik
            e.target.classList.add('active');
            
            // Ambil data-page
            const page = e.target.getAttribute('data-page');
            
            // Panggil fungsi sesuai page
            switch(page) {
                case 'home':
                    renderHome();
                    break;
                case 'search':
                    renderSearch();
                    break;
                case 'history':
                    renderHistory();
                    break;
                case 'download':
                    renderDownload();
                    break;
                case 'profile':
                    renderProfile();
                    break;
            }
        });
    });
});