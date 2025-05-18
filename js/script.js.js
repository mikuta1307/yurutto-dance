// DOM要素の取得
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');
const faqItems = document.querySelectorAll('.faq-item');
const backToTop = document.querySelector('.back-to-top');
const contactForm = document.getElementById('contactForm');

// すべての要素を確実に表示する関数
function makeAllElementsVisible() {
  // すべてのセクションタイトルを表示
  document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '1';
    title.style.visibility = 'visible';
    title.style.display = 'block';
    title.style.fontWeight = 'bold';
    title.style.color = title.getAttribute('data-color') || '#333333';
    title.style.marginBottom = '40px';
    title.style.textShadow = '1px 1px 1px rgba(0,0,0,0.1)';
  });

  // すべての特徴項目を表示
  document.querySelectorAll('.feature-item, .testimonial-item, .class-item, .instructor-item, .schedule-item').forEach(item => {
    item.style.opacity = '1';
    item.style.visibility = 'visible';
    item.style.transform = 'none';
  });

  // すべての見出しを表示
  document.querySelectorAll('h1, h2, h3, p').forEach(text => {
    text.style.opacity = '1';
    text.style.visibility = 'visible';
    text.style.display = 'block';
  });

  // すべての画像を確実に表示
  document.querySelectorAll('img').forEach(img => {
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.onerror = function() {
      // 画像読み込みエラー時のフォールバック
      const placeholder = document.createElement('div');
      placeholder.textContent = img.alt || '画像';
      placeholder.style.padding = '20px';
      placeholder.style.background = '#f0f0f0';
      placeholder.style.border = '1px solid #ddd';
      placeholder.style.borderRadius = '8px';
      placeholder.style.textAlign = 'center';
      img.parentNode.replaceChild(placeholder, img);
    };
  });

  // クラス情報を強調表示
  document.querySelectorAll('.class-item p').forEach(p => {
    p.style.fontWeight = 'bold';
    p.style.marginTop = '10px';
    p.style.color = '#333';
  });

  // 特定のセクションの特別な処理
  const testimonials = document.querySelector('#voice .section-title');
  if (testimonials) {
    testimonials.style.color = 'white';
    testimonials.style.backgroundColor = 'rgba(0,0,0,0.2)';
    testimonials.style.padding = '10px';
    testimonials.style.borderRadius = '5px';
  }

  const classes = document.querySelector('#class .section-title');
  if (classes) {
    classes.style.color = '#333';
    classes.style.backgroundColor = 'white';
    classes.style.padding = '10px';
    classes.style.borderRadius = '5px';
    classes.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
  }

  const schedule = document.querySelector('#schedule .section-title');
  if (schedule) {
    schedule.style.color = 'white';
    schedule.style.backgroundColor = 'rgba(0,0,0,0.2)';
    schedule.style.padding = '10px';
    schedule.style.borderRadius = '5px';
  }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', makeAllElementsVisible);

// 念のため、ウィンドウ読み込み完了時にも実行
window.addEventListener('load', makeAllElementsVisible);

// スクロールしても常に要素を表示するために定期実行
setInterval(makeAllElementsVisible, 1000);

// スクロールイベント
window.addEventListener('scroll', function() {
  // ヘッダーの背景色変更
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
  
  // トップに戻るボタンの表示/非表示
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
  
  // 要素の可視性を維持
  makeAllElementsVisible();
});

// ハンバーガーメニューのトグル
hamburger.addEventListener('click', function() {
  nav.classList.toggle('active');
  
  // ハンバーガーアイコンの切り替え
  const icon = hamburger.querySelector('.material-icons');
  if (nav.classList.contains('active')) {
    icon.textContent = 'close';
  } else {
    icon.textContent = 'menu';
  }
});

// FAQアコーディオン
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', function() {
    // すでに開いている項目を閉じる
    faqItems.forEach(faqItem => {
      if (faqItem !== item && faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
      }
    });
    
    // クリックされた項目をトグル
    item.classList.toggle('active');
  });
});

// フォームの送信ハンドリング
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    
    if (!email) {
      alert('メールアドレスを入力してください');
      return;
    }
    
    if (date === "日程を選択してください") {
      alert('希望日時を選択してください');
      return;
    }
    
    // 実際のフォーム送信処理はここに追加
    // この例ではモックの成功メッセージを表示
    alert('予約リクエストを受け付けました。確認メールをお送りしましたのでご確認ください。');
    contactForm.reset();
  });
}

// 見学予約ボタンのイベントハンドラ
const observeButton = document.querySelector('.btn-secondary');
if (observeButton) {
  observeButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    
    if (!email) {
      alert('見学予約にはメールアドレスの入力が必要です');
      return;
    }
    
    // 実際の見学予約処理はここに追加
    // この例ではモックの成功メッセージを表示
    alert('見学予約を受け付けました。詳細を記載したメールをお送りしましたのでご確認ください。');
    contactForm.reset();
  });
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    // ナビゲーションメニューが表示されている場合は閉じる
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.querySelector('.material-icons').textContent = 'menu';
    }
    
    const offset = 80; // ヘッダーの高さ分をオフセット
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
