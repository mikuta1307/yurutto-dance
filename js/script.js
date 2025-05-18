document.addEventListener('DOMContentLoaded', function() {
    // アニメーション要素の表示
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .slide-in, .scale-in, .bounce-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    };
    
    // スクロールイベントでアニメーション発火
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初期表示時にも実行
    
    // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = document.querySelector('.nav').innerHTML;
    document.body.appendChild(mobileMenu);
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
    });
    
    // モバイルメニューのリンククリック時に閉じる
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    });
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // FAQの開閉
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 現在開いているFAQを閉じる
            const currentActive = document.querySelector('.faq-item.active');
            if (currentActive && currentActive !== item) {
                currentActive.classList.remove('active');
            }
            
            // クリックしたアイテムの開閉を切り替え
            item.classList.toggle('active');
        });
    });
    
    // フォームの送信処理
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const date = this.querySelector('#date').value;
            
            if (!email) {
                alert('メールアドレスは必須です。');
                return;
            }
            
            if (!date) {
                alert('希望日時を選択してください。');
                return;
            }
            
            // 本来はここでAPIを呼び出し、送信処理を行う
            // ここでは仮の成功メッセージを表示
            alert('予約リクエストを受け付けました。メールをご確認ください。');
            this.reset();
        });
    }
    
    // スクロール位置によるヘッダーの背景色変更
    const header = document.querySelector('.header');
    
    const updateHeaderStyle = function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    };
    
    window.addEventListener('scroll', updateHeaderStyle);
    updateHeaderStyle();
});
