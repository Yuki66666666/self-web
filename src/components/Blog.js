import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [language, setLanguage] = useState('zh'); // 'zh' for Chinese, 'en' for English

  const blogPosts = {
    zh: [
      {
        id: 1,
        title: '剛滿兩個月的創投 Entry-Level 分析師小記：從「目的導向」到「換位思考」',
        date: 'April 28, 2025',
        summary: '分享在創投擔任分析師的兩個月心得，探討目的導向思維和換位思考的重要性。',
        content: `
          <h2>剛滿兩個月的創投 Entry-Level 分析師小記：從「目的導向」到「換位思考」</h2>
          
          <p>轉眼間，正式加入創投工作的日子已經超過兩個月。這段時間，學到最多的一件事，就是<strong>必須從「目的」去思考事情該如何完成</strong>。</p>
          
          <h3>1. 目的導向的工作思維</h3>
          
          <p>剛開始做報告時，因為沒有太多相關經驗，很容易在浩瀚的資料海中迷失。看似收集了很多資訊，但如果不能收斂，無法直指重點，最終的產出也無法發揮真正價值。</p>
          
          <p>比如：<br>
          有時老闆只給你半小時簡報的時間，卻希望了解一間公司的亮點、投資價值與潛在風險。這時不是單純堆砌資料，而是要思考：「<strong>在這有限的時間內，我如何讓對方最有效掌握核心資訊？</strong>」</p>
          
          <p>同樣地，一個專案的進度報告，也不只是交代做了哪些事，而是要快速傳達：「<strong>目前狀況如何？還有哪些待解決的問題？下一步是什麼？</strong>」<br>
          這種目的導向的思維，幫助我在資訊整理與溝通上，逐漸變得更有結構，也更有重點。</p>
          
          <h3>2. 從創業者角度看募資：理解投資人要的是什麼</h3>
          
          <p>另一個深刻的學習，是從觀察早期新創募資的過程中體會到的。</p>
          
          <p>工作到現在，看過數十個新創團隊來向 VC pitch。我發現，很多<strong>第一次創業的創辦人</strong>，常常會犯一個關鍵錯誤：</p>
          
          <blockquote>
            <p><strong>沒有釐清募資對象想要的是什麼，也沒有針對對方的需求來設計自己的故事。</strong></p>
          </blockquote>
          
          <p>事實上，不同類型的投資人，看重的事情也不一樣：</p>
          
          <p><strong>天使投資人（Angel Investors）</strong>：<br>
          可能更在意創辦人的夢想、熱情與個人魅力。如果能打動他們的心，喚起共鳴，有時比冷冰冰的財務數字還更重要。</p>
          
          <p><strong>企業型創投（CVC, Corporate VC）</strong>：<br>
          更關心的是這個新創能否與集團現有的業務產生協同效應？未來是否有機會帶來內部合作、或成為收購標的？</p>
          
          <p><strong>傳統創投（VC, Venture Capital）</strong>：<br>
          則多半會從財務報酬出發，想知道：「<strong>如果我現在投資你，未來五年內，你能不能做到爆發性的成長？</strong>」<br>
          — 你的商業模式能否被市場驗證？<br>
          — 你的產品能否擴張、變成標準化的營收機器？<br>
          — 最終你要怎麼讓投資人有合理的 Exit？是 IPO？還是被收購？或者在下一輪募資中以幾倍估值讓老股東獲利退出？</p>
          
          <p>如果創辦人在講述自己的故事時，沒有針對不同投資人關心的角度去設計內容，很可能即使產品本身很有潛力，也難以成功募資。</p>
          
          <h3>3. 小結：換位思考，目標明確</h3>
          
          <p>無論是做內部報告，還是幫助團隊評估新創，這兩個月的體悟都是同一件事：</p>
          
          <p>👉 <strong>「先問自己：這件事的最終目的是什麼？我要讓對方得到什麼？」</strong></p>
          
          <p>👉 <strong>「站在對方的角度思考，他最在乎的是什麼？」</strong></p>
          
          <p>除了這兩點，在過去工作的兩個月中還有很多其他的學習，後續會持續分享。</p>
        `
      }
    ],
    en: [
      {
        id: 1,
        title: 'Two Months as an Entry-Level Venture Capital Analyst: From "Purpose-Driven" to "Perspective-Taking"',
        date: 'April 28, 2025',
        summary: 'Sharing insights from two months as a venture capital analyst, exploring purpose-driven thinking and perspective-taking.',
        content: `
          <h2>Two Months as an Entry-Level Venture Capital Analyst: From "Purpose-Driven" to "Perspective-Taking"</h2>
          
          <p>It's been over two months since I officially joined the venture capital industry. During this time, the most important lesson I've learned is that <strong>I must approach tasks with clear purpose in mind</strong>.</p>
          
          <h3>1. Purpose-Driven Work Mindset</h3>
          
          <p>When I first started preparing reports, with little relevant experience, it was easy to get lost in vast amounts of information. I would collect a lot of data, but without focus, without pointing to what matters, the final output couldn't deliver real value.</p>
          
          <p>For example:<br>
          Sometimes my boss only gives me a 30-minute presentation slot to explain a company's highlights, investment value, and potential risks. In this situation, rather than simply compiling data, I need to think: <strong>"With this limited time, how can I help the audience grasp the core information most effectively?"</strong></p>
          
          <p>Similarly, for project progress reports, it's not just about listing what's been done, but quickly communicating: <strong>"What's the current status? What problems remain unsolved? What's the next step?"</strong><br>
          This purpose-driven mindset has helped me become more structured and focused when organizing information and communicating.</p>
          
          <h3>2. Viewing Fundraising from the Entrepreneur's Perspective: Understanding What Investors Want</h3>
          
          <p>Another profound learning comes from observing early-stage startups in their fundraising processes.</p>
          
          <p>So far, I've seen dozens of startup teams pitch to VCs. I've noticed that many <strong>first-time founders</strong> often make one critical mistake:</p>
          
          <blockquote>
            <p><strong>They fail to clarify what their fundraising targets want and don't tailor their stories to address those specific needs.</strong></p>
          </blockquote>
          
          <p>In reality, different types of investors value different things:</p>
          
          <p><strong>Angel Investors</strong>:<br>
          They tend to care more about the founder's vision, passion, and personal charisma. If you can touch their hearts and resonate with them, that sometimes matters more than cold financial figures.</p>
          
          <p><strong>Corporate VCs (CVC)</strong>:<br>
          They're more concerned with whether the startup can create synergies with the corporation's existing business. Can it lead to internal collaboration opportunities or become an acquisition target in the future?</p>
          
          <p><strong>Traditional Venture Capital (VC)</strong>:<br>
          They typically approach from a financial return perspective, wanting to know: <strong>"If I invest in you now, can you achieve explosive growth within the next five years?"</strong><br>
          — Can your business model be validated by the market?<br>
          — Can your product scale and become a standardized revenue-generating machine?<br>
          — How will you ultimately provide investors with a reasonable exit? IPO? Acquisition? Or allowing earlier investors to profit by exiting in the next funding round at a multiple of the current valuation?</p>
          
          <p>If founders don't design their narratives with different investors' perspectives in mind, they may struggle to raise funds successfully even with a potentially strong product.</p>
          
          <h3>3. Summary: Perspective-Taking, Clear Objectives</h3>
          
          <p>Whether preparing internal reports or helping the team evaluate startups, my realization over these two months boils down to one thing:</p>
          
          <p>👉 <strong>"First ask yourself: What is the ultimate purpose of this task? What do I want the other person to gain?"</strong></p>
          
          <p>👉 <strong>"Think from the other person's perspective: What matters most to them?"</strong></p>
          
          <p>Beyond these two points, I've learned much more during the past two months of work, which I'll continue to share in future posts.</p>
        `
      }
    ]
  };

  const openModal = (post) => {
    setActivePost(post);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  // Close modal when clicking outside the content
  const handleModalClick = (e) => {
    if (e.target.className === 'blog-modal') {
      closeModal();
    }
  };

  return (
    <section id="blog" className="section">
      <div className="section-header">
        <h2 className="section-title">Blog</h2>
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'zh' ? 'English' : '中文'}
        </button>
      </div>
      <div className="blog-container">
        {blogPosts[language].map(post => (
          <div className="blog-post" key={post.id}>
            <div className="blog-content full-width">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
              <button onClick={() => openModal(post)} className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
      
      {showModal && activePost && (
        <div className="blog-modal" onClick={handleModalClick}>
          <div className="blog-modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="blog-modal-body" dangerouslySetInnerHTML={{ __html: activePost.content }}></div>
          </div>
        </div>
      )}
      
      <div className="blog-cta">
        <a href="#blog" className="view-all-posts">View All Posts</a>
      </div>
    </section>
  );
}

export default Blog; 