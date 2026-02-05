const team = [
    { name: "Thành viên 1", desc: "Ba báo chính hiệu, trùm Toán Lý." },
    { name: "Thành viên 2", desc: "Hậu vệ FC Mathematics, quẹt đâu trúng đó." },
    { name: "Thành viên 3", desc: "Lớp trưởng 12A1 gương mẫu." },
    // ... Thêm đủ 10 người ở đây
];

let currentIndex = 0;

// Khởi tạo thẻ
const slider = document.getElementById('slider');
team.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `<h3>${member.name}</h3>`;
    slider.appendChild(card);
});

const cards = document.querySelectorAll('.member-card');

function updateSlider() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        card.style.opacity = "0";

        if (index === currentIndex) {
            card.classList.add('active');
            card.style.opacity = "1";
        } else if (index === (currentIndex - 1 + team.length) % team.length) {
            card.classList.add('prev');
            card.style.opacity = "0.4";
        } else if (index === (currentIndex + 1) % team.length) {
            card.classList.add('next');
            card.style.opacity = "0.4";
        }
    });

    // Hiệu ứng chữ
    const descText = document.getElementById('member-desc');
    descText.classList.remove('fade-in');
    void descText.offsetWidth; // Reset animation
    descText.innerText = team[currentIndex].desc;
    descText.classList.add('fade-in');
}

function move(step) {
    currentIndex = (currentIndex + step + team.length) % team.length;
    updateSlider();
}

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    updateSlider();
});