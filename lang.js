(function () {
  /* ── inject toggle button CSS ── */
  const style = document.createElement('style');
  style.textContent = `
    .lang-btn {
      display: inline-flex; align-items: center;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.12);
      color: #a0aab8;
      font-family: 'Outfit', sans-serif;
      font-size: .78rem; font-weight: 700;
      padding: 5px 11px; border-radius: 8px;
      cursor: pointer; transition: .2s;
      letter-spacing: .06em; flex-shrink: 0;
    }
    .lang-btn:hover { color: #f1f2f5; border-color: rgba(249,115,22,.35); }
  `;
  document.head.appendChild(style);

  /* ── translations ── */
  const T = {
    tr: {
      /* shared nav */
      'nav.hakkimizda':   'Hakkımızda',
      'nav.iletisim':     'İletişim',
      'nav.senaryolar':   'Senaryolar',
      'nav.indir':        'İndir',
      'nav.indir-full':   'Uygulamayı İndir',

      /* shared footer */
      'footer.tagline':         'Gündemdeki konulara oy ver.<br>Toplumun nabzını ölç.',
      'footer.col-app':         'Uygulama',
      'footer.link-about':      'Hakkımızda',
      'footer.link-scenarios':  'Kullanım Senaryoları',
      'footer.link-contact':    'İletişim',
      'footer.col-legal':       'Yasal',
      'footer.link-privacy':    'Gizlilik Politikası',
      'footer.link-cookie':     'Çerez Politikası',
      'footer.link-terms':      'Kullanım Şartları',
      'footer.link-kvkk':       'KVKK Aydınlatma Metni',
      'footer.link-child':      'Çocuk Güvenliği Standartları',
      'footer.link-disclaimer': 'Sorumluluk Reddi',
      'footer.col-support':     'Destek',
      'footer.link-deletion':   'Verilerimi Sıfırla',
      'footer.copyright':       '© 2026 Pickside. Tüm hakları saklıdır.',

      /* ── index.html ── */
      'index.hero-tag':   'Günlük Gündem Oylama',
      'index.hero-title': 'Toplum<br>gerçekten ne<br><span class="hl">düşünüyor?</span>',
      'index.hero-sub':   'Gündemdeki konulara oy ver. Toplumun hangi görüşe yakın olduğunu anında gör. Her gün yeni kartlar, her kart gerçek bir tartışma.',
      'index.badge-tl':   'Bugün Gündemde<span>Eğitim sistemi güncellemeli mi?</span>',
      'index.badge-br':   '%50 Çoğunluk<span>Katıldığın görüşte</span>',
      'index.dl-ios':     "App Store'dan İndir",
      'index.dl-android': "Google Play'den İndir",
      'index.ticker': '<div class="ticker-item"><span class="dot"></span>Teknoloji</div><div class="ticker-item"><span class="dot"></span>Ekonomi</div><div class="ticker-item"><span class="dot"></span>Kültür</div><div class="ticker-item"><span class="dot"></span>Toplumsal Tartışmalar</div><div class="ticker-item"><span class="dot"></span>İnternet Gündemi</div><div class="ticker-item"><span class="dot"></span>Magazin</div><div class="ticker-item"><span class="dot"></span>Siyaset</div><div class="ticker-item"><span class="dot"></span>Spor</div><div class="ticker-item"><span class="dot"></span>Bilim</div><div class="ticker-item"><span class="dot"></span>Teknoloji</div><div class="ticker-item"><span class="dot"></span>Ekonomi</div><div class="ticker-item"><span class="dot"></span>Kültür</div><div class="ticker-item"><span class="dot"></span>Toplumsal Tartışmalar</div><div class="ticker-item"><span class="dot"></span>İnternet Gündemi</div><div class="ticker-item"><span class="dot"></span>Magazin</div><div class="ticker-item"><span class="dot"></span>Siyaset</div><div class="ticker-item"><span class="dot"></span>Spor</div><div class="ticker-item"><span class="dot"></span>Bilim</div>',
      'index.how-label':    'Nasıl Çalışır?',
      'index.how-title':    '3 adımda<br>topluluğa katıl.',
      'index.step1-title':  'Gündem kartını oku',
      'index.step1-text':   'Her gün yeni kartlar gelir. Teknoloji, ekonomi, kültür, magazin — gerçek gündemden seçilmiş konular ve kısa bir bağlam açıklaması.',
      'index.step2-title':  'Swipe ile görüşünü seç',
      'index.step2-text':   'Her kartta o konuya özgü 3 farklı bakış açısı var. Sola, sağa veya yukarı kaydırarak görüşünü seç. Swipe yönlerinin ideolojik anlamı yok — sadece hızlı seçim için.',
      'index.step3-title':  'Toplumun nabzını gör',
      'index.step3-text':   'Oy verdikten sonra her görüşün yüzdesini, toplam oy sayısını ve kendi görüşünün çoğunlukta mı azınlıkta mı olduğunu anında görürsün.',
      'index.showcase-label': 'Uygulama İçi',
      'index.showcase-title': 'Tam olarak<br>böyle görünüyor.',
      'index.showcase-scroll': 'Kaydırarak tüm ekranları gör.',
      'index.shot1': 'Gündem Kartı',
      'index.shot2': 'Seçenek Ekranı',
      'index.shot3': 'Sonuç Görünümü',
      'index.shot4': 'Dağılım & Paylaş',
      'index.shot5': 'Oy Dağılımı',
      'index.shot6': 'Profil & Persona',
      'index.result-label':    'Psikolojik Güç',
      'index.result-title':    'Çoğunlukta<br>mısın?',
      'index.result-sub':      "Oy verdikten sonra asıl soru bu. Toplumun %50'si mi senin gibi düşünüyor, yoksa azınlıkta mı kaldın? Bu sorunun cevabı seni bir sonraki karta taşıyor.",
      'index.stat1':           'Azınlık görüşündesin',
      'index.stat2':           'Çoğunluk görüşünde',
      'index.stat3':           'Nüans görüşünde',
      'index.feat-label':  'Özellikler',
      'index.feat-title':  'Sadece oylama<br>değil.',
      'index.feat1-title': 'Her Gün Yeni Gündem',
      'index.feat1-text':  'Teknoloji, ekonomi, kültür, siyaset, magazin — gerçek hayattan seçilmiş güncel konular her sabah gelir. Sıkılmak yok.',
      'index.feat2-title': 'Anlık Toplum Nabzı',
      'index.feat2-text':  'Oyunu verdikten sonra topluluğun nasıl bölündüğünü gerçek zamanlı görürsün. Çoğunlukta mısın, azınlıkta mı?',
      'index.feat3-title': 'Persona Sistemi',
      'index.feat3-text':  'Oy davranışlarına bakarak seni tanımlayan bir kişilik analizi yapılır. Diplomat, Asi, Dengeleyici, Analist mi olduğunu keşfedersin. Her persona kendi hikayesiyle gelir.',
      'index.feat4-title': 'Leaderboard',
      'index.feat4-text':  'En aktif kullanıcılar haftalık ve aylık sıralamada yer alır. Bu hafta kaçıncısın?',
      'index.feat5-title': 'Günlük Bildirimler',
      'index.feat5-text':  'Yeni kartlar ve güncel sonuçlar için bildirim al. İzin vermeden asla göndermeyiz.',
      'index.dl-label': 'Ücretsiz İndir',
      'index.dl-title': 'Sen ne düşünüyorsun?',
      'index.dl-sub':   'iOS ve Android için ücretsiz. Hesap açmana bile gerek yok — hemen oylama yap.',
      'index.dl-btn-ios':     "App Store'dan İndir",
      'index.dl-btn-android': "Google Play'den İndir",

      /* ── gizlilik.html ── */
      'gizlilik.tag':   '🔒 Yasal',
      'gizlilik.title': 'Gizlilik Politikası',
      'gizlilik.date':  'Son Güncelleme: 11 Nisan 2026',
      'gizlilik.content': `
        <h2>1. Amaç</h2>
        <p>İşbu Gizlilik Politikası, Pickside mobil uygulamasını kullanan kullanıcıların gizliliğinin korunmasına ilişkin esasları açıklamak amacıyla hazırlanmıştır. Pickside, kullanıcıların kişisel verilerinin korunmasına ve dijital ortamda güvenliğinin sağlanmasına önem vermekte olup, kullanıcı verilerinin korunması konusunda gerekli teknik ve idari tedbirleri almaktadır.</p>
        <p>Bu Politika, Pickside mobil uygulamasının kullanımı sırasında elde edilen bilgilerin nasıl toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklamaktadır.</p>
        <h2>2. Gizliliğin Korunmasına İlişkin Temel İlkeler</h2>
        <p>Pickside, kullanıcı verilerinin korunması süreçlerinde aşağıdaki temel ilkelere uygun hareket etmektedir:</p>
        <ul>
          <li>Kullanıcı verileri hukuka ve dürüstlük kurallarına uygun şekilde işlenir. Veriler belirli, açık ve meşru amaçlarla toplanır.</li>
          <li>Toplanan veriler işleme amacıyla bağlantılı, sınırlı ve ölçülü şekilde kullanılır.</li>
          <li>Verilerin güvenliği için gerekli teknik ve idari tedbirler alınır.</li>
        </ul>
        <h2>3. Toplanan Bilgiler</h2>
        <p>Pickside mobil uygulamasının kullanımı sırasında bazı teknik ve kullanım bilgileri elde edilebilir. Bu bilgiler, kullanıcıların uygulamayı nasıl kullandığını anlamak ve uygulamanın güvenli şekilde işletilmesini sağlamak amacıyla kullanılmaktadır.</p>
        <p>Uygulama kapsamında elde edilebilecek bilgiler şunlardır:</p>
        <ul>
          <li>Kullanıcı tarafından belirlenen kullanıcı adı</li>
          <li>IP adresi</li>
          <li>Cihaz bilgileri</li>
          <li>İşletim sistemi bilgileri</li>
          <li>Uygulama kullanım verileri</li>
          <li>Uygulama içi etkileşim verileri</li>
          <li>Swipe (kaydırma) hareketlerine ilişkin tercihler</li>
          <li>Teknik sistem kayıtları</li>
        </ul>
        <p>Pickside uygulamasında klasik anlamda bir üyelik sistemi bulunmamaktadır. Bu nedenle kullanıcıdan kimlik numarası, adres veya iletişim bilgisi gibi doğrudan kimliği belirleyici veriler talep edilmemektedir.</p>
        <h2>4. Bilgilerin Kullanımı</h2>
        <p>Pickside tarafından elde edilen bilgiler aşağıdaki amaçlarla kullanılabilir:</p>
        <ul>
          <li>Uygulamanın teknik olarak çalışmasını sağlamak</li>
          <li>Uygulama güvenliğini sağlamak</li>
          <li>Kullanıcı deneyimini geliştirmek</li>
          <li>Uygulama performansını analiz etmek</li>
          <li>Teknik sorunları tespit etmek ve gidermek</li>
          <li>Kötüye kullanımı ve güvenlik ihlallerini önlemek</li>
        </ul>
        <p>Pickside, kullanıcı verilerini bu amaçlar dışında kullanmamayı taahhüt eder.</p>
        <h2>5. Bilgi Güvenliği</h2>
        <p>Pickside, kullanıcı verilerinin yetkisiz erişime, kayba veya hukuka aykırı kullanıma karşı korunması amacıyla uygun teknik ve idari güvenlik önlemleri uygulamaktadır.</p>
        <p>Bu kapsamda sistem güvenliği, veri güvenliği ve erişim kontrolü gibi çeşitli güvenlik mekanizmaları kullanılmaktadır.</p>
        <p>Ancak internet ortamında gerçekleştirilen veri iletimlerinin tamamen güvenli olduğuna ilişkin mutlak bir garanti verilmesi mümkün değildir.</p>
        <h2>6. Üçüncü Taraf Hizmetler</h2>
        <p>Pickside uygulaması, teknik altyapının sağlanması veya uygulama performansının analiz edilmesi amacıyla üçüncü taraf hizmet sağlayıcıları kullanabilir.</p>
        <p>Bu hizmet sağlayıcılar, yalnızca Pickside tarafından belirlenen amaçlar doğrultusunda ve gerekli güvenlik önlemleri çerçevesinde veri işleyebilir.</p>
        <h2>7. Çerezler ve Benzeri Teknolojiler</h2>
        <p>Pickside mobil uygulaması, kullanıcı deneyimini geliştirmek ve uygulama performansını analiz etmek amacıyla çerezler ve benzeri teknolojiler kullanabilir. Bu teknolojiler hakkında detaylı bilgi <a href="cerez-politikasi.html">Pickside Çerez Politikası</a> kapsamında sunulmaktadır.</p>
        <h2>8. Politika Değişiklikleri</h2>
        <p>Pickside, işbu Gizlilik Politikası’nı mevzuat değişiklikleri, teknik gereklilikler veya uygulamanın işleyişine bağlı olarak güncelleyebilir. Politika’da yapılan değişiklikler uygulama üzerinden yayımlandığı tarihte yürürlüğe girer.</p>
      `,

      /* ── cerez-politikasi.html ── */
      'cerez.tag':   '🍪 Yasal',
      'cerez.title': 'Çerez ve Benzeri Teknolojiler Politikası',
      'cerez.date':  'Son Güncelleme: 11 Nisan 2026',
      'cerez.content': `
        <h2>1. Amaç</h2>
        <p>İşbu Çerez ve Benzeri Teknolojiler Politikası (“Politika”), Pickside mobil uygulamasını kullanan kullanıcıların cihazlarında kullanılan çerezler ve benzeri teknolojiler hakkında bilgi vermek amacıyla hazırlanmıştır.</p>
        <p>Pickside, kullanıcı deneyiminin geliştirilmesi, uygulamanın teknik olarak işletilmesi, güvenliğin sağlanması ve uygulama kullanımına ilişkin analizlerin yapılabilmesi amacıyla çerezler ve benzeri teknolojiler kullanabilmektedir.</p>
        <h2>2. Çerez Nedir?</h2>
        <p>Çerezler, bir internet sitesi veya uygulama tarafından kullanıcıların cihazlarında saklanan küçük veri dosyalarıdır. Çerezler aracılığıyla kullanıcıların uygulamayı nasıl kullandığına ilişkin bazı bilgiler elde edilebilmektedir.</p>
        <p>Mobil uygulamalarda çerezlere ek olarak cihaz tanımlayıcıları, SDK teknolojileri, uygulama içi analiz araçları ve benzeri teknolojiler de kullanılabilmektedir. İşbu Politika kapsamında bu teknolojilerin tamamı “çerez ve benzeri teknolojiler” olarak ifade edilmektedir.</p>
        <h2>3. Pickside Tarafından Kullanılan Çerez Türleri</h2>
        <p>Pickside uygulaması kapsamında aşağıdaki türlerde çerezler ve benzeri teknolojiler kullanılabilmektedir.</p>
        <p><strong>Zorunlu Çerezler</strong></p>
        <p>Bu çerezler uygulamanın teknik olarak çalışabilmesi için gerekli olan çerezlerdir. Uygulamanın düzgün çalışması, güvenliğin sağlanması ve temel sistem fonksiyonlarının yürütülmesi amacıyla kullanılmaktadır.</p>
        <p><strong>Performans ve Analiz Çerezleri</strong></p>
        <p>Bu çerezler, kullanıcıların uygulamayı nasıl kullandığını analiz etmek amacıyla kullanılmaktadır. Uygulama performansının ölçülmesi, kullanıcı davranışlarının anlaşılması ve uygulama deneyiminin geliştirilmesi amacıyla kullanılabilir.</p>
        <p><strong>Fonksiyonel Çerezler</strong></p>
        <p>Bu çerezler, kullanıcıların uygulama içerisindeki tercihlerini hatırlamak ve uygulama deneyimini geliştirmek amacıyla kullanılmaktadır.</p>
        <h2>4. Çerezlerin Kullanım Amaçları</h2>
        <p>Pickside mobil uygulamasında kullanılan çerezler ve benzeri teknolojiler, uygulamanın teknik olarak sağlıklı şekilde çalışmasını temin etmek, uygulama güvenliğini sağlamak ve kullanıcı deneyimini geliştirmek amacıyla kullanılmaktadır. Bu teknolojiler aracılığıyla elde edilen veriler, uygulamanın performansının ölçülmesi, kullanıcıların uygulama içerisindeki etkileşimlerinin analiz edilmesi ve uygulamanın işleyişinin iyileştirilmesi amacıyla değerlendirilebilmektedir.</p>
        <p>Ayrıca çerezler ve benzeri teknolojiler, kullanıcıların uygulama içerisinde gerçekleştirdiği etkileşimlerin anlaşılması, uygulama kullanımına ilişkin istatistiksel analizlerin yapılması ve uygulamanın teknik altyapısının daha verimli şekilde yönetilmesi amacıyla kullanılabilir. Bu kapsamda elde edilen veriler, Pickside tarafından yalnızca uygulamanın geliştirilmesi, güvenliğinin sağlanması ve kullanıcı deneyiminin iyileştirilmesi amaçlarıyla kullanılmaktadır.</p>
        <h2>5. Çerezler Aracılığıyla İşlenen Veriler</h2>
        <p>Pickside mobil uygulamasında kullanılan çerezler ve benzeri teknolojiler aracılığıyla bazı teknik ve kullanım verileri işlenebilmektedir. Bu veriler, uygulamanın güvenli şekilde çalışmasının sağlanması, kullanıcı deneyiminin geliştirilmesi ve uygulama performansının analiz edilmesi amacıyla kullanılmaktadır.</p>
        <p>Bu kapsamda çerezler ve benzeri teknolojiler aracılığıyla IP adresi, cihaz bilgileri, işletim sistemi bilgileri, uygulama kullanımına ilişkin teknik veriler, uygulama içerisindeki etkileşim bilgileri, kullanıcıların swipe (kaydırma) hareketlerine ilişkin tercihleri ve uygulama kullanımına ilişkin teknik log kayıtları işlenebilmektedir.</p>
        <p>Söz konusu veriler, Pickside tarafından uygulamanın teknik olarak işletilmesi, sistem güvenliğinin sağlanması, uygulama performansının değerlendirilmesi ve kullanıcı deneyiminin geliştirilmesi amaçlarıyla kullanılmakta olup ilgili mevzuata uygun şekilde korunmaktadır.</p>
        <h2>6. Çerezlerin Kontrolü</h2>
        <p>Kullanıcılar cihazlarının ayarları üzerinden çerez kullanımına ilişkin tercihlerini değiştirebilir veya çerezleri sınırlandırabilir. Bununla birlikte çerez kullanımının sınırlandırılması veya devre dışı bırakılması, Pickside uygulamasının bazı özelliklerinin beklenen şekilde çalışmamasına neden olabilir.</p>
        <h2>7. Politika’da Değişiklik</h2>
        <p>Pickside, işbu Çerez Politikası’nı yürürlükteki mevzuat, teknik gereklilikler veya uygulamanın işleyişine bağlı olarak güncelleyebilir. Politika’da yapılacak değişiklikler uygulama üzerinden yayımlandığı tarihte yürürlüğe girer.</p>
      `,

      /* ── hakkimizda.html ── */
      'about.tag':          '🧭 Hakkımızda',
      'about.title':        'Pickside <span class="hl">nedir?</span>',
      'about.sub':          'Toplumun gerçekte ne düşündüğünü ortaya çıkarmak için tasarlandı. Gündem oylama uygulaması.',
      'about.mission-title':'Misyonumuz',
      'about.mission-p1':   'Gündemdeki konularda toplumun gerçek düşüncelerini görünür kılmak. Pickside, insanların fikirlerini özgürce paylaştığı, toplumsal nabzın ölçüldüğü bir platform olmayı hedefliyor.',
      'about.mission-p2':   'Sosyal medyadaki algoritmalar ve filtre balonları gerçeği çarpıtıyor. Pickside bu çarpıtmayı ortadan kaldırmak için var: anonim, tarafsız, gerçek zamanlı.',
      'about.val1-title':   'Anonimlik',
      'about.val1-text':    'Kimlik yok, hesap yok. Sadece düşüncen.',
      'about.val2-title':   'Tarafsızlık',
      'about.val2-text':    'Her konuda birden fazla bakış açısı. Yargı yok.',
      'about.val3-title':   'Şeffaflık',
      'about.val3-text':    'Sonuçlar gerçek zamanlı, herkese açık.',
      'about.how-title':    'Nasıl Çalışır?',
      'about.how-p1':       'Her gün teknoloji, ekonomi, kültür, toplumsal tartışmalar ve internet gündeminden seçilen konular kart olarak sunulur. Her kart bir konu, kısa bir bağlam açıklaması ve o konuya özel 3 farklı bakış açısı içerir.',
      'about.how-p2':       'Kullanıcı swipe hareketi ile görüşünü seçer. Seçimin ardından toplumun nasıl bölündüğü, hangi görüşün öne çıktığı ve kendi görüşünün azınlıkta mı çoğunlukta mı olduğu anında gösterilir.',
      'about.vision-title': 'Vizyon',
      'about.vision-p':     "Türkiye'nin toplumsal gündemini en doğru şekilde yansıtan, en güvenilir nabız ölçme platformu olmak. Pickside, sadece bir uygulama değil; toplumun sesini görünür kılan bir araç olmayı hedefliyor.",
      'about.tech-title':   'Teknik Altyapı',
      'about.tech-p1':      'Pickside iOS ve Android platformlarında çalışır. Veriler güvenli bulut altyapısında saklanır. Uygulama tamamen anonim çalışır; kullanıcıdan hiçbir kişisel bilgi talep edilmez.',
      'about.tech-p2':      'Tüm oylama verileri toplu halde işlenir. Bireysel seçimler kimlikle ilişkilendirilmez.',

      /* ── iletisim.html ── */
      'contact.tag':   '✉️ İletişim',
      'contact.title': 'Bize<br>Ulaş.',
      'contact.sub':   'Soru, öneri, geri bildirim veya iş birliği için aşağıdaki kanalları kullanabilirsin.',
      'contact.c1-title': 'Genel İletişim',
      'contact.c1-text':  'Uygulama hakkındaki soru ve önerileriniz için.',
      'contact.c2-title': 'Veri Silme Talebi',
      'contact.c2-text':  'Verilerinin silinmesini talep etmek için ya da doğrudan veri silme sayfasını ziyaret et.',
      'contact.c2-link':  'Veri Silme Sayfası →',
      'contact.c3-title': 'İş Birliği & Reklam',
      'contact.c3-text':  'İçerik ortaklığı, sponsorluk veya reklam fırsatları için.',
      'contact.c4-title': 'Hata Bildirimi',
      'contact.c4-text':  'Uygulamada bir sorunla karşılaştıysan bize bildir, en kısa sürede düzeltelim.',
      'contact.c4-link':  'Hata Bildir ↗',
      'contact.topics-title': 'Hangi konuda yazabilirsin?',
      'contact.t1-title': 'Genel Sorular',
      'contact.t1-text':  'Uygulama nasıl çalışır, özellikler nedir?',
      'contact.t2-title': 'Öneriler',
      'contact.t2-text':  'Yeni özellik fikirlerin veya içerik önerilerin',
      'contact.t3-title': 'Gizlilik',
      'contact.t3-text':  'Veri kullanımı hakkında sorular',
      'contact.t4-title': 'Medya & Basın',
      'contact.t4-text':  'Haber, röportaj veya içerik için',

      /* ── kullanim-sartlari.html ── */
      'terms.tag':   '📋 Yasal',
      'terms.title': 'Kullanım Şartları',
      'terms.date':  'Son Güncelleme: 16 Mart 2026',
      'terms.content': `
        <p>Bu kullanım şartları, Pickside mobil uygulamasını ("Uygulama") kullanım koşullarını düzenler. Uygulamayı kullanarak bu şartları kabul etmiş sayılırsınız.</p>
        <h2>1. Hizmetin Kapsamı</h2>
        <p>Pickside, gündemdeki konularda anonim oylama yapmanıza ve toplumun genel eğilimlerini görmenize olanak tanıyan bir mobil uygulamadır. Uygulama iOS ve Android platformlarında ücretsiz olarak sunulmaktadır.</p>
        <h2>2. Kullanım Koşulları</h2>
        <p>Uygulamayı kullanmak için en az 13 yaşında olmanız gerekmektedir. Uygulamayı kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:</p>
        <ul>
          <li>Uygulamayı yalnızca yasal amaçlarla kullanacaksınız.</li>
          <li>Platformun işleyişini bozacak davranışlarda bulunmayacaksınız.</li>
          <li>Oylama sistemi üzerinde manipülasyon girişiminde bulunmayacaksınız.</li>
          <li>Uygulamayı tersine mühendislik veya izinsiz kopyalama amacıyla kullanmayacaksınız.</li>
        </ul>
        <h2>3. Fikri Mülkiyet</h2>
        <p>Pickside adı, logosu, tasarımı ve uygulama içeriği Pickside'a aittir. İzinsiz kopyalanması, dağıtılması veya ticari amaçlarla kullanılması yasaktır.</p>
        <h2>4. İçerik Sorumluluğu</h2>
        <p>Uygulama içindeki gündem kartlarının içerikleri genel kamuya açık bilgilere dayalıdır. Pickside, içeriklerin doğruluğunu garanti etmez. Sunulan oylama seçenekleri herhangi bir ideolojiyi, siyasi partiyi veya kişiyi temsil etmez.</p>
        <p>Oylama sonuçları istatistiksel birer gösterge olup bilimsel araştırma niteliği taşımaz.</p>
        <h2>5. Sorumluluk Sınırlaması</h2>
        <p>Pickside, uygulamanın kesintisiz veya hatasız çalışacağını garanti etmez. Teknik aksaklıklardan kaynaklanan kayıplar için sorumluluk kabul edilmez.</p>
        <p>Uygulama içindeki oylama sonuçlarının üçüncü taraflarca yanlış yorumlanmasından Pickside sorumlu tutulamaz.</p>
        <h2>6. Hizmetin Değiştirilmesi</h2>
        <p>Pickside, uygulamanın içeriğini, özelliklerini veya bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler bu sayfada yayınlandığında yürürlüğe girer.</p>
        <h2>7. Hizmetin Sonlandırılması</h2>
        <p>Pickside, herhangi bir gerekçe göstermeksizin hizmetini kısmen veya tamamen sonlandırabilir. Kullanıcılar bu durumda uygulamayı kullanamaz hale gelir.</p>
        <h2>8. Uygulanacak Hukuk</h2>
        <p>Bu kullanım şartları Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.</p>
        <h2>9. İletişim</h2>
        <p>Kullanım şartlarına ilişkin sorularınız için: <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></p>
      `,

      /* ── kullanim-senaryolari.html ── */
      'scenarios.tag':   '📱 Nasıl Kullanılır?',
      'scenarios.title': 'Kullanım<br>Senaryoları',
      'scenarios.sub':   'Pickside günlük hayatta nasıl kullanılır? Gerçek senaryolar ve örnek kartlarla tanı.',
      's1.title': 'Sabah rutini: Güne haberlere bakarak başla',
      's1.sub':   'Her sabah 2–3 dakika, o günün gündemine bak',
      's1.p1':    'Uygulamayı açıyorsun. O gün öne çıkan 10 kart seni bekliyor. Ekonomi, magazin, teknoloji... Her biri farklı bir konu.',
      's1.p2':    'Kartları hızlıca geçiyorsun. Swipe sol, sağ, yukarı — birkaç saniyede görüşünü seçiyorsun. Oy verdikten sonra toplumun ne düşündüğünü görüyorsun.',
      's1.p3':    'Kahven soğumadan bitti. Ama o gün herhangi bir konuda sohbet açıldığında ne düşündüğünü ve toplumun ne düşündüğünü biliyorsun.',
      's2.title': 'Öğrenci: Toplumun gerçekte ne düşündüğünü merak et',
      's2.sub':   'Sosyal medya balonunun dışına çık',
      's2.p1':    'Takip ettiğin hesaplar, baktığın içerikler hep benzer görüşleri gösteriyor. Algoritma seni bir balonun içine hapsetti.',
      's2.p2':    "Pickside'da oy verdiğinde çevrendeki insanların değil, geniş bir topluluğun dağılımını görüyorsun. %18 azınlıkta kalmak da öğretici. %72 çoğunlukta olmak da.",
      's2.p3':    'Bu bilgi seni sosyal medyada daha sağlıklı tartışmaya hazırlıyor.',
      's3.title': "Rekabetçi kullanıcı: Leaderboard'da yukarı çık",
      's3.sub':   'Her gün oyla, sıralamada yüksel',
      's3.p1':    "Her gün tüm kartları oyluyorsun. Leaderboard'da haftalık ve aylık sıralamaya giriyorsun.",
      's3.p2':    'Oy verdikçe persona analizin şekilleniyor. Diplomat mısın, Asi mi? Çoğunlukla mı hareket ediyorsun, yoksa kendi yolunu mu çiziyorsun?',
      's3.p3':    'Seri kırılmadan devam et — bu hafta #1 olabilirsin.',
      's4.title': 'Sosyal paylaşım: Arkadaşlarını şaşırt',
      's4.sub':   'Bir kart sonucunu paylaş, tartışmayı başlat',
      's4.p1':    'Bir karta oy verdin. Sonuçlar beklenmedik — %50 tam ortadan bölünmüş. Ya da sen azınlıkta kaldın.',
      's4.p2':    '"Siz ne derdiniz?" diye soruyorsun. Tartışma başlıyor.',
      's4.p3':    'Pickside bir sohbet başlatıcı olarak da işe yarıyor.',
      'uc1.title': 'Haber takipçisi',
      'uc1.text':  'Güncel gelişmelere kendi perspektifini katıyorsun.',
      'uc2.title': 'Kendini tanımak isteyenler',
      'uc2.text':  'Persona analizi sana davranış kalıplarını gösteriyor.',
      'uc3.title': 'Kısa molalar',
      'uc3.text':  '2-3 dakikada 5-6 kart. Asansörde, beklerken.',
      'scenarios.cta-title': 'Hemen dene.',
      'scenarios.cta-sub':   'iOS ve Android için ücretsiz. Kayıt gerekmez.',
      'scenarios.btn-ios':     "App Store'dan İndir",
      'scenarios.btn-android': "Google Play'den İndir",

      /* ── kvkk.html ── */
      'kvkk.tag':   '🛡️ Yasal',
      'kvkk.title': 'Kişisel Verilerin Korunması Hakkında Aydınlatma Metni',
      'kvkk.date':  'Son Güncelleme: 12 Nisan 2026',
      'kvkk.content': `
        <h2>Amaç</h2>
        <p>İşbu Aydınlatma Metni, Pickside mobil uygulamasını kullanan kullanıcıların kişisel verilerinin hangi kapsamda toplandığını, nasıl işlendiğini, hangi amaçlarla kullanıldığını ve bu verilerin nasıl korunduğunu açıklamak amacıyla hazırlanmıştır.</p>
        <p>Pickside, kullanıcıların gizliliğine ve kişisel verilerinin korunmasına önem vermekte olup, kişisel verilerin işlenmesi süreçlerinde 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat hükümlerine uygun şekilde hareket etmeyi taahhüt eder.</p>
        <h2>Açık Rıza Beyanı</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında tarafıma sunulan Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni’ni okuduğumu ve anladığımı beyan ederim.</p>
        <p>Bu kapsamda Pickside mobil uygulaması tarafından, uygulama kullanım davranışlarımın analiz edilmesi, uygulama içerisindeki etkileşimlerimin değerlendirilmesi, içerik sunum sisteminin geliştirilmesi, kullanıcı deneyiminin iyileştirilmesi ve uygulama performansının analiz edilmesi amaçlarıyla; uygulama kullanım verilerimin, cihaz bilgilerimin, IP adresimin, uygulama içi etkileşim verilerimin ve swipe (kaydırma) hareketlerine ilişkin tercihlerimin işlenmesine açık rıza verdiğimi kabul ve beyan ederim.</p>
        <p>Ayrıca söz konusu kişisel verilerin, Pickside uygulamasının teknik altyapısının işletilmesi, sistem güvenliğinin sağlanması ve uygulama hizmetlerinin sürdürülebilir şekilde sunulabilmesi amacıyla hizmet alınan teknik hizmet sağlayıcıları ile paylaşılmasına açık rıza verdiğimi kabul ederim.</p>
        <p>Tarafımca verilen bu açık rızanın, dilediğim zaman Pickside’a başvurarak geri alınabileceği hususunda bilgilendirildiğimi ve bu hususu kabul ettiğimi beyan ederim.</p>
        <h2>1. Veri Sorumlusu</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla Pickside mobil uygulamasını işleten şirket tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
        <h2>2. İşlenen Kişisel Veriler</h2>
        <p>Pickside mobil uygulamasının kullanımı sırasında, uygulamanın teknik olarak işletilmesi, güvenliğinin sağlanması ve kullanıcı deneyiminin geliştirilmesi amacıyla sınırlı nitelikte bazı kişisel veriler işlenebilmektedir. İşlenen kişisel veriler aşağıdaki veri kategorileri kapsamında değerlendirilmektedir:</p>
        <table>
          <tr><th>Veri Kategorisi</th><th>İşlenen Kişisel Veriler</th></tr>
          <tr><td>Kullanıcı Kimlik Bilgileri</td><td>Kullanıcı tarafından uygulama içerisinde belirlenen kullanıcı adı</td></tr>
          <tr><td>Cihaz ve Teknik Bilgiler</td><td>IP adresi, cihaz türü, işletim sistemi bilgileri, uygulama sürümü ve benzeri teknik veriler</td></tr>
          <tr><td>Kullanım ve Etkileşim Verileri</td><td>Kullanıcıların uygulama içerisinde gerçekleştirdiği etkileşimler, swipe (kaydırma) hareketleri, içerik tercihleri, uygulama kullanım süreleri ve uygulama içi davranışlara ilişkin veriler</td></tr>
          <tr><td>Log ve Sistem Kayıtları</td><td>Uygulamanın güvenliğinin sağlanması, teknik sorunların tespit edilmesi ve sistem performansının izlenmesi amacıyla oluşturulan log kayıtları ve benzeri teknik veriler</td></tr>
        </table>
        <p>Pickside uygulaması kapsamında klasik anlamda bir üyelik sistemi bulunmamakta olup kullanıcıdan kimlik numarası, adres veya iletişim bilgileri gibi doğrudan kimlik tespitine yönelik veriler talep edilmemektedir. Bu kapsamda işlenen veriler ağırlıklı olarak uygulamanın teknik işleyişinin sağlanması, güvenliğinin korunması ve kullanıcı deneyiminin geliştirilmesi amacıyla sınırlı ölçüde toplanmaktadır.</p>
        <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p>Pickside mobil uygulaması kapsamında toplanan kişisel veriler, uygulamanın güvenli, etkin ve kullanıcı dostu şekilde işletilebilmesi amacıyla aşağıda belirtilen amaçlarla işlenmektedir:</p>
        <table>
          <tr><th>Veri İşleme Amacı</th><th>Açıklama</th></tr>
          <tr><td>Uygulamanın Teknik Olarak İşletilmesi</td><td>Pickside uygulamasının düzgün çalışmasının sağlanması, sistem altyapısının yönetilmesi ve teknik süreçlerin yürütülmesi</td></tr>
          <tr><td>Kullanıcı Deneyiminin Geliştirilmesi</td><td>Kullanıcıların uygulama içerisindeki etkileşimlerinin analiz edilmesi, içerik sunumunun iyileştirilmesi ve uygulama performansının geliştirilmesi</td></tr>
          <tr><td>Uygulama Güvenliğinin Sağlanması</td><td>Uygulamanın kötüye kullanımının önlenmesi, sistem güvenliğinin sağlanması ve olası güvenlik ihlallerinin tespit edilmesi</td></tr>
          <tr><td>Uygulama Performansının Analiz Edilmesi</td><td>Uygulama kullanımına ilişkin teknik verilerin değerlendirilmesi ve uygulama işleyişinin geliştirilmesine yönelik analizlerin yapılması</td></tr>
          <tr><td>Teknik Sorunların Tespit Edilmesi ve Giderilmesi</td><td>Sistem hatalarının tespit edilmesi, teknik arızaların giderilmesi ve uygulamanın kesintisiz şekilde çalışmasının sağlanması</td></tr>
          <tr><td>Hukuki Yükümlülüklerin Yerine Getirilmesi</td><td>Mevzuattan doğan yükümlülüklerin yerine getirilmesi ve yetkili kamu kurum ve kuruluşlarının taleplerinin karşılanması</td></tr>
        </table>
        <p>Pickside, kişisel verileri yalnızca yukarıda belirtilen amaçlarla ve ilgili mevzuat hükümlerine uygun şekilde işlemekte olup, veri işleme faaliyetlerinde ölçülülük ve veri minimizasyonu ilkelerine uygun hareket etmeyi taahhüt etmektedir.</p>
        <h2>4. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h2>
        <p>Pickside mobil uygulaması kapsamında işlenen kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 5. maddesinde yer alan veri işleme şartlarına uygun olarak işlenmektedir. Bu kapsamda kişisel veriler, öncelikle kullanıcıların Pickside uygulamasını kullanabilmesi ve uygulama kapsamında sunulan hizmetlerden yararlanabilmesi için gerekli olması nedeniyle bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili veri işleme şartına dayanılarak işlenebilmektedir.</p>
        <p>Ayrıca Pickside, yürürlükteki mevzuattan doğan yükümlülüklerini yerine getirebilmek ve yetkili kamu kurum ve kuruluşlarının taleplerini karşılayabilmek amacıyla kişisel verileri işleyebilmektedir. Bu kapsamda veri işleme faaliyetleri, veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi hukuki sebebine dayanmaktadır.</p>
        <p>Bunun yanı sıra, Pickside’ın olası hukuki uyuşmazlıklarda haklarını koruyabilmesi, gerekli kayıtların tutulması ve hukuki süreçlerin yürütülebilmesi amacıyla kişisel veriler bir hakkın tesisi, kullanılması veya korunması hukuki sebebine dayanılarak işlenebilmektedir.</p>
        <p>Pickside tarafından gerçekleştirilen veri işleme faaliyetlerinin önemli bir bölümü ise uygulamanın güvenliğinin sağlanması, kötüye kullanımın önlenmesi, sistem performansının izlenmesi ve kullanıcı deneyiminin geliştirilmesi amacıyla yürütülmektedir. Bu kapsamda kişisel veriler, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması hukuki sebebine dayanılarak işlenmektedir.</p>
        <p>Pickside, kişisel verilerin işlenmesi süreçlerinde KVKK’da yer alan genel ilkelere uygun hareket etmekte; kişisel verilerin hukuka ve dürüstlük kurallarına uygun şekilde, belirli, açık ve meşru amaçlarla sınırlı olarak ve işlendikleri amaçla bağlantılı, sınırlı ve ölçülü olacak şekilde işlenmesini sağlamayı amaçlamaktadır.</p>
        <h2>5. Kişisel Verilerin Aktarılması</h2>
        <p>Pickside mobil uygulaması kapsamında işlenen kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat hükümlerine uygun olarak, veri işleme amaçlarının gerektirdiği ölçüde ve sınırlı olarak üçüncü kişilere aktarılabilmektedir.</p>
        <p>Bu kapsamda kişisel veriler; uygulamanın teknik altyapısının işletilmesi, sistem güvenliğinin sağlanması ve uygulama hizmetlerinin sürdürülebilir şekilde sunulabilmesi amacıyla bilişim altyapısı sağlayıcıları, teknik hizmet sağlayıcıları ve benzeri destek hizmeti sunan iş ortakları ile paylaşılabilmektedir.</p>
        <p>Ayrıca Pickside, yürürlükteki mevzuattan doğan yükümlülüklerin yerine getirilmesi, hukuki süreçlerin yürütülmesi veya yetkili kamu kurum ve kuruluşları tarafından talep edilmesi halinde, kişisel verileri ilgili kamu kurum ve kuruluşlarına aktarabilmektedir.</p>
        <p>Kişisel verilerin üçüncü kişilere aktarılması süreçlerinde Pickside, veri güvenliğinin sağlanması amacıyla gerekli teknik ve idari tedbirleri almakta ve veri aktarımının yalnızca veri işleme amaçlarıyla sınırlı olacak şekilde gerçekleştirilmesini sağlamaktadır. Kişisel veriler, ilgili mevzuatta öngörülen şartlar dışında üçüncü kişilerle paylaşılmamaktadır.</p>
        <h2>6. Kişisel Verilerin Toplanma Yöntemi</h2>
        <p>Pickside mobil uygulaması kapsamında kişisel veriler, kullanıcıların uygulamayı kullanması sırasında elektronik ortamda ve otomatik yöntemlerle toplanmaktadır. Bu veriler, kullanıcıların mobil cihazları üzerinden uygulamaya erişmeleri, uygulama içerisinde gerçekleştirilen etkileşimler ve uygulamanın teknik altyapısı tarafından oluşturulan sistem kayıtları aracılığıyla elde edilmektedir.</p>
        <p>Kişisel veriler; uygulamanın çalışması sırasında oluşan teknik log kayıtları, kullanıcıların uygulama içerisindeki kullanım ve etkileşim bilgileri, cihaz ve sistem tarafından oluşturulan teknik veriler ile benzeri dijital izler üzerinden otomatik olarak toplanabilmektedir.</p>
        <p>Pickside uygulaması kapsamında klasik anlamda bir üyelik sistemi bulunmadığından, kişisel veriler doğrudan kullanıcı tarafından girilen bilgilerden ziyade uygulamanın kullanımı sırasında oluşan teknik ve kullanım verileri üzerinden elde edilmektedir.</p>
        <p>Toplanan kişisel veriler, uygulamanın teknik olarak işletilmesi, güvenliğinin sağlanması, kullanıcı deneyiminin geliştirilmesi ve mevzuattan doğan yükümlülüklerin yerine getirilmesi amaçlarıyla sınırlı olarak işlenmektedir. Bu süreçlerde veri minimizasyonu ilkesine uygun hareket edilmekte ve yalnızca gerekli olan veriler toplanmaktadır.</p>
        <h2>7. KVKK Kapsamındaki Haklarınız</h2>
        <p>KVKK’nın 11. maddesi uyarınca kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenen kişisel verilere ilişkin bilgi talep etme</li>
          <li>Kişisel verilerin işlenme amacını öğrenme</li>
          <li>Kişisel verilerin aktarılıp aktarılmadığını öğrenme</li>
          <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
          <li>Kişisel verilerin silinmesini veya yok edilmesini talep etme</li>
          <li>İşleme faaliyetlerine itiraz etme</li>
          <li>Zarara uğramanız halinde tazminat talep etme</li>
        </ul>
        <p>Bu haklarınıza ilişkin taleplerinizi veri sorumlusuna ileterek kullanabilirsiniz.</p>
      `,

      /* ── sorumluluk-reddi.html ── */
      'disclaimer.tag':    'Bilgilendirme',
      'disclaimer.title':  'İçerik Sorumluluğu &amp; Sorumluluk Reddi',
      'disclaimer.date':   'Son güncelleme: Mart 2026',
      'disclaimer.notice': '<strong>Önemli:</strong> Pickside\'da yer alan içerikler Twitter/X, Reddit, haber siteleri ve çeşitli internet kaynaklarından derlenmekte olup bu içeriklerin doğruluğu Pickside tarafından garanti edilmemektedir. Lütfen bu sayfayı dikkatlice okuyunuz.',
      'disclaimer.content': `
        <h2>1. Genel Bilgilendirme</h2>
        <p>Pickside, kullanıcıların güncel olaylar ve toplumsal konular hakkında oy vermesine ve görüş bildirmesine olanak tanıyan bir mobil uygulamadır. Uygulama içerisinde sunulan gündem konuları ve bağlamsal bilgiler; Twitter/X, Reddit, çeşitli haber siteleri, bundle platformları ve diğer kamuya açık internet kaynaklarından otomatik veya manuel olarak derlenmektedir.</p>
        <p>Pickside, bir haber ajansı veya editoryal kuruluş değildir. Uygulama yalnızca kullanıcıların gündemdeki konulara oy vererek toplumun genel eğilimini ölçmesine yardımcı olmak amacıyla tasarlanmıştır.</p>
        <h2>2. İçerik Kaynakları</h2>
        <p>Uygulama içerisindeki gündem konuları ve açıklamalar aşağıdaki kaynak türlerinden beslenebilmektedir:</p>
        <ul>
          <li><strong>Twitter/X:</strong> Sosyal medya paylaşımları, trend konular ve kullanıcı gönderileri.</li>
          <li><strong>Reddit:</strong> Forum tartışmaları, alt dizin (subreddit) içerikleri ve topluluk yorumları.</li>
          <li><strong>Haber Siteleri:</strong> Türkiye ve uluslararası yayın organlarının dijital haberleri.</li>
          <li><strong>Bundle ve İçerik Küratörü Platformlar:</strong> Haberleri ve konuları bir araya getiren toplayıcı servisler.</li>
          <li><strong>Diğer Kamuya Açık Kaynaklar:</strong> Blog yazıları, açık veri tabanları ve kamuya açık web siteleri.</li>
        </ul>
        <p>Bu kaynaklar kendi editoryal süreçlerine, yanlılıklarına ve hata paylarına sahiptir. Pickside, söz konusu kaynaklarda yer alan bilgilerin bağımsız doğrulamasını yapmamaktadır.</p>
        <h2>3. İçeriklerin Doğruluğu ve Eksiksizliği</h2>
        <p>Pickside, uygulama içerisinde yer alan içeriklerin doğru, güncel, eksiksiz veya belirli bir amaca uygun olduğunu taahhüt etmez.</p>
        <ul>
          <li>Kaynak bilgileri yanlış veya yanıltıcı olabilir.</li>
          <li>İçerikler yayımlandıktan sonra değişmiş ya da güncelliğini yitirmiş olabilir.</li>
          <li>Bağlam dışında aktarılan bilgiler farklı bir anlam taşıyor olabilir.</li>
          <li>Birden fazla kaynaktan derlenen içerikler birbiriyle çelişen bilgiler içerebilir.</li>
        </ul>
        <h2>4. Sorumluluk Reddi</h2>
        <p>Pickside ve bağlı şirketleri, uygulama içeriklerinin kullanımı ya da bu içeriklere dayanılarak alınan kararlar nedeniyle ortaya çıkabilecek zararlardan sorumlu tutulamaz.</p>
        <h2>5. Üçüncü Taraf Bağlantılar ve İçerikler</h2>
        <p>Uygulama veya web sitemiz, üçüncü taraf web sitelerine bağlantılar ya da atıflar içerebilir. Pickside, söz konusu üçüncü taraf sitelerinin içerik, gizlilik uygulamaları veya erişilebilirliği konusunda herhangi bir sorumluluk üstlenmez.</p>
        <h2>6. Fikri Mülkiyet</h2>
        <p>Uygulama içerisinde derlenen içeriklerin fikri mülkiyet hakları ilgili kaynak kuruluşlara ve yazarlara aittir. Herhangi bir içeriğin fikri mülkiyet haklarını ihlal ettiğini düşünüyorsanız lütfen <a href="iletisim.html">iletişim sayfamız</a> aracılığıyla bize bildirin.</p>
        <h2>7. Kullanıcı Sorumluluğu</h2>
        <p>Pickside kullanıcıları, uygulama içerisindeki içerikleri eleştirel bir gözle değerlendirmekle yükümlüdür. Hatalı olduğunu düşündüğünüz bir içeriği, uygulama içindeki geri bildirim mekanizmaları veya <a href="iletisim.html">iletişim formumuz</a> aracılığıyla bize iletebilirsiniz.</p>
        <h2>8. İçerik Moderasyonu ve Güncelleme</h2>
        <p>Pickside ekibi, uygulama içeriklerini periyodik olarak gözden geçirmeye ve kullanıcı bildirimleri doğrultusunda güncellemeye çalışmaktadır.</p>
        <h2>9. Bu Metnin Değiştirilmesi</h2>
        <p>Pickside, bu sorumluluk reddi metnini önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar.</p>
        <h2>10. İletişim</h2>
        <p>Bu sorumluluk reddi metni hakkında sorularınız için:</p>
        <ul>
          <li>E-posta: <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></li>
          <li>İletişim formu: <a href="iletisim.html">iletisim.html</a></li>
        </ul>
      `,

      /* ── child-safety.html ── */
      'child.tag':   '🔒 Politika',
      'child.title': 'Çocuk Güvenliği ve İstismar Önleme Politikası',
      'child.date':  'Son Güncelleme: 18 Mart 2026',
      'child.content': `
        <p>Pickside, platformunda çocukların cinsel istismarını ve sömürüsünü (CSAE) önlemeye kararlıdır.</p>
        <h2>Kesinlikle yasaklananlar:</h2>
        <ul>
          <li>Reşit olmayanların cinsel istismarını içeren her türlü içerik</li>
          <li>Reşit olmayanlarla ilgili uygunsuz içeriklerin paylaşılması veya talep edilmesi</li>
          <li>Reşit olmayanlara yönelik taciz veya sömürü davranışları</li>
        </ul>
        <h2>Moderasyon ve Uygulama</h2>
        <ul>
          <li>İçerikler izlenmekte ve kullanıcılar tarafından şikayet edilebilmektedir</li>
          <li>İhlal eden hesaplar kalıcı olarak yasaklanır</li>
          <li>Şüpheli faaliyetler ilgili yetkililere bildirilebilir</li>
        </ul>
        <h2>Kullanıcı Bildirimi</h2>
        <p>Kullanıcılar, uygunsuz içerikleri doğrudan uygulama içinden bildirebilir.</p>
        <h2>İletişim</h2>
        <p>Güvenlikle ilgili endişeleriniz için:<br><a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></p>
      `,

      /* ── data-deletion.html ── */
      'del.tag':   '🗑️ Veri Yönetimi',
      'del.title': 'Verilerini<br>Sil.',
      'del.sub':   "Pickside verilerini kaldırmak için iki yol mevcut: doğrudan uygulama içinden ya da e-posta ile. Her iki yöntem de hızlı ve kesindir.",
      'del.card1-title': '📱 Uygulama içinden sıfırla',
      'del.card1-p1':    'Uygulamanın içinden verilerini anında silebilirsin. Ekstra işlem gerekmez.',
      'del.card1-p2':    '<strong>Profil › Ayarlar › Verilerimi Sıfırla</strong>',
      'del.card1-btn1':  '← Ana Sayfaya Dön',
      'del.card1-btn2':  'E-posta Gönder',
      'del.card2-title': '⚡ Hızlı Özet',
      'del.card2-li1':  'Uygulamada <strong>Profil › Ayarlar › Verilerimi Sıfırla</strong> adımını izle.',
      'del.card2-li2':  'Alternatif olarak <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a> adresine yaz.',
      'del.card2-li3':  'E-postanda uygulamadaki kullanıcı adını belirt.',
      'del.detail-header': '📋 Detaylı Bilgi',
      'del.s1-title':  'Silme Talebi Hakkı',
      'del.s1-text':   'Pickside uygulamasını kullanan kullanıcılar, uygulama ile ilişkili tüm verilerinin silinmesini talep edebilir.',
      'del.s2-title':  'Silinebilen Veriler',
      'del.s2-li1':    'Kullanıcı adı',
      'del.s2-li2':    'Profil verileri',
      'del.s2-li3':    'Oylama geçmişi',
      'del.s2-li4':    'Bildirim cihaz kimliği',
      'del.s3-title':  'E-posta ile Talep Oluşturma',
      'del.s3-p1':     'Veri silme talebi için aşağıdaki adrese yazabilirsin:',
      'del.s3-p2':     'E-postanda uygulamada kullandığın kullanıcı adını belirtmen yeterli. Talebiniz doğrulandıktan sonra verileriniz sistemlerimizden kalıcı olarak silinir.',
      'del.s4-title':  'Ek Bilgi',
      'del.s4-text':   'Yasal yükümlülükler nedeniyle anonim teknik loglar kısa bir süre saklanabilir.',
      'del.s5-title':  "Android Veri Silme URL'si",
      'del.s5-text':   'Google Play politikası gereği resmi veri silme sayfası:',
    },

    /* ─────────────────────────────── ENGLISH ─────────────────────────────── */
    en: {
      /* shared nav */
      'nav.hakkimizda':   'About',
      'nav.iletisim':     'Contact',
      'nav.senaryolar':   'Use Cases',
      'nav.indir':        'Download',
      'nav.indir-full':   'Download App',

      /* shared footer */
      'footer.tagline':         'Vote on trending topics.<br>Feel the pulse of society.',
      'footer.col-app':         'App',
      'footer.link-about':      'About Us',
      'footer.link-scenarios':  'Use Cases',
      'footer.link-contact':    'Contact',
      'footer.col-legal':       'Legal',
      'footer.link-privacy':    'Privacy Policy',
      'footer.link-cookie':     'Cookie Policy',
      'footer.link-terms':      'Terms of Use',
      'footer.link-kvkk':       'KVKK Notice',
      'footer.link-child':      'Child Safety Standards',
      'footer.link-disclaimer': 'Disclaimer',
      'footer.col-support':     'Support',
      'footer.link-deletion':   'Delete My Data',
      'footer.copyright':       '© 2026 Pickside. All rights reserved.',

      /* ── index.html ── */
      'index.hero-tag':   'Daily Agenda Voting',
      'index.hero-title': 'What does<br>society really<br><span class="hl">think?</span>',
      'index.hero-sub':   'Vote on trending topics. Instantly see which view society leans towards. New cards every day, each card a real debate.',
      'index.badge-tl':   "Today's Agenda<span>Should the education system be updated?</span>",
      'index.badge-br':   '50% Majority<span>Shares your view</span>',
      'index.dl-ios':     'Download on App Store',
      'index.dl-android': 'Get it on Google Play',
      'index.ticker': '<div class="ticker-item"><span class="dot"></span>Technology</div><div class="ticker-item"><span class="dot"></span>Economy</div><div class="ticker-item"><span class="dot"></span>Culture</div><div class="ticker-item"><span class="dot"></span>Social Debates</div><div class="ticker-item"><span class="dot"></span>Internet Buzz</div><div class="ticker-item"><span class="dot"></span>Entertainment</div><div class="ticker-item"><span class="dot"></span>Politics</div><div class="ticker-item"><span class="dot"></span>Sports</div><div class="ticker-item"><span class="dot"></span>Science</div><div class="ticker-item"><span class="dot"></span>Technology</div><div class="ticker-item"><span class="dot"></span>Economy</div><div class="ticker-item"><span class="dot"></span>Culture</div><div class="ticker-item"><span class="dot"></span>Social Debates</div><div class="ticker-item"><span class="dot"></span>Internet Buzz</div><div class="ticker-item"><span class="dot"></span>Entertainment</div><div class="ticker-item"><span class="dot"></span>Politics</div><div class="ticker-item"><span class="dot"></span>Sports</div><div class="ticker-item"><span class="dot"></span>Science</div>',
      'index.how-label':    'How It Works',
      'index.how-title':    'Join the community<br>in 3 steps.',
      'index.step1-title':  'Read the agenda card',
      'index.step1-text':   'New cards arrive every day. Technology, economy, culture, entertainment — real topics from the news cycle with a short context summary.',
      'index.step2-title':  'Swipe to pick your stance',
      'index.step2-text':   'Each card offers 3 different perspectives on the topic. Swipe left, right, or up to choose your view. Swipe directions carry no ideological meaning — just a fast choice.',
      'index.step3-title':  "See society's pulse",
      'index.step3-text':   "After voting, you instantly see each view's percentage, total vote count, and whether your opinion is in the majority or minority.",
      'index.showcase-label': 'Inside the App',
      'index.showcase-title': 'This is exactly<br>what it looks like.',
      'index.showcase-scroll': 'Scroll to see all screens.',
      'index.shot1': 'Agenda Card',
      'index.shot2': 'Option Screen',
      'index.shot3': 'Results View',
      'index.shot4': 'Distribution & Share',
      'index.shot5': 'Vote Breakdown',
      'index.shot6': 'Profile & Persona',
      'index.result-label':    'Psychological Edge',
      'index.result-title':    'Are you in the<br>majority?',
      'index.result-sub':      "That's the real question after you vote. Does 50% of society think like you, or are you in the minority? The answer pushes you to the next card.",
      'index.stat1':           "You're in the minority",
      'index.stat2':           'In the majority view',
      'index.stat3':           'In the nuanced view',
      'index.feat-label':  'Features',
      'index.feat-title':  'More than just<br>voting.',
      'index.feat1-title': 'Fresh Agenda Every Day',
      'index.feat1-text':  'Technology, economy, culture, politics, entertainment — hand-picked, real-world topics arrive every morning. Never boring.',
      'index.feat2-title': 'Real-Time Society Pulse',
      'index.feat2-text':  "After you vote, you see in real time how the community is split. Are you in the majority or the minority?",
      'index.feat3-title': 'Persona System',
      'index.feat3-text':  'Based on your voting patterns, a personality profile is built for you. Discover whether you\'re a Diplomat, Rebel, Balancer, or Analyst — each persona comes with its own story.',
      'index.feat4-title': 'Leaderboard',
      'index.feat4-text':  'The most active users appear on weekly and monthly rankings. Where do you stand this week?',
      'index.feat5-title': 'Daily Notifications',
      'index.feat5-text':  'Get notified about new cards and latest results. We never send without permission.',
      'index.dl-label': 'Free Download',
      'index.dl-title': 'What do you think?',
      'index.dl-sub':   "Free for iOS and Android. No sign-up needed — just start voting.",
      'index.dl-btn-ios':     'Download on App Store',
      'index.dl-btn-android': 'Get it on Google Play',

      /* ── gizlilik.html ── */
      'gizlilik.tag':   '🔒 Legal',
      'gizlilik.title': 'Privacy Policy',
      'gizlilik.date':  'Last Updated: April 11, 2026',
      'gizlilik.content': `
        <h2>1. Purpose</h2>
        <p>This Privacy Policy has been prepared to explain the principles regarding the protection of the privacy of users who use the Pickside mobile application. Pickside attaches importance to the protection of users' personal data and ensuring their security in digital environments, and takes the necessary technical and administrative measures regarding the protection of user data.</p>
        <p>This Policy explains how information obtained during the use of the Pickside mobile application is collected, used, and protected.</p>
        <h2>2. Core Principles Regarding the Protection of Privacy</h2>
        <p>Pickside acts in accordance with the following core principles in processes related to the protection of user data:</p>
        <ul>
          <li>User data is processed in accordance with the law and the principles of honesty and good faith. Data is collected for specific, explicit, and legitimate purposes.</li>
          <li>Collected data is used in a manner that is relevant, limited, and proportionate to the processing purpose.</li>
          <li>Necessary technical and administrative measures are taken for the security of the data.</li>
        </ul>
        <h2>3. Information Collected</h2>
        <p>During the use of the Pickside mobile application, certain technical and usage information may be obtained. This information is used to understand how users use the application and to ensure that the application is operated securely.</p>
        <p>The information that may be obtained within the scope of the application includes:</p>
        <ul>
          <li>Username determined by the user</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Operating system information</li>
          <li>Application usage data</li>
          <li>In-app interaction data</li>
          <li>Preferences regarding swipe actions</li>
          <li>Technical system records</li>
        </ul>
        <p>There is no traditional membership system in the Pickside application. Therefore, directly identifying data such as identity number, address, or contact information is not requested from the user.</p>
        <h2>4. Use of Information</h2>
        <p>The information obtained by Pickside may be used for the following purposes:</p>
        <ul>
          <li>Ensuring the technical operation of the application</li>
          <li>Ensuring application security</li>
          <li>Improving user experience</li>
          <li>Analyzing application performance</li>
          <li>Detecting and resolving technical problems</li>
          <li>Preventing misuse and security breaches</li>
        </ul>
        <p>Pickside undertakes not to use user data outside these purposes.</p>
        <h2>5. Information Security</h2>
        <p>Pickside implements appropriate technical and administrative security measures to protect user data against unauthorized access, loss, or unlawful use.</p>
        <p>Within this scope, various security mechanisms such as system security, data security, and access control are used.</p>
        <p>However, it is not possible to provide an absolute guarantee that data transmissions carried out over the internet are completely secure.</p>
        <h2>6. Third-Party Services</h2>
        <p>The Pickside application may use third-party service providers for the provision of technical infrastructure or the analysis of application performance.</p>
        <p>These service providers may process data only in line with the purposes determined by Pickside and within the framework of the necessary security measures.</p>
        <h2>7. Cookies and Similar Technologies</h2>
        <p>The Pickside mobile application may use cookies and similar technologies to improve user experience and analyze application performance. Detailed information about these technologies is provided under the <a href="cerez-politikasi.html">Pickside Cookie Policy</a>.</p>
        <h2>8. Policy Changes</h2>
        <p>Pickside may update this Privacy Policy depending on legislative changes, technical requirements, or the operation of the application. Changes made to the Policy enter into force on the date they are published through the application.</p>
      `,

      /* ── cerez-politikasi.html ── */
      'cerez.tag':   '🍪 Legal',
      'cerez.title': 'Cookie and Similar Technologies Policy',
      'cerez.date':  'Last Updated: April 11, 2026',
      'cerez.content': `
        <h2>1. Purpose</h2>
        <p>This Cookie and Similar Technologies Policy ("Policy") has been prepared to provide information about the cookies and similar technologies used on the devices of users who use the Pickside mobile application.</p>
        <p>Pickside may use cookies and similar technologies for the purposes of improving user experience, operating the application technically, ensuring security, and carrying out analyses regarding application usage.</p>
        <h2>2. What Is a Cookie?</h2>
        <p>Cookies are small data files stored on users' devices by a website or application. Through cookies, certain information may be obtained regarding how users use the application.</p>
        <p>In mobile applications, in addition to cookies, device identifiers, SDK technologies, in-app analytics tools, and similar technologies may also be used. Within the scope of this Policy, all of these technologies are referred to as "cookies and similar technologies."</p>
        <h2>3. Types of Cookies Used by Pickside</h2>
        <p>Within the scope of the Pickside application, the following types of cookies and similar technologies may be used.</p>
        <p><strong>Strictly Necessary Cookies</strong></p>
        <p>These cookies are required for the technical operation of the application. They are used to ensure that the application functions properly, security is maintained, and core system functions are carried out.</p>
        <p><strong>Performance and Analytics Cookies</strong></p>
        <p>These cookies are used to analyze how users use the application. They may be used to measure application performance, understand user behavior, and improve the application experience.</p>
        <p><strong>Functional Cookies</strong></p>
        <p>These cookies are used to remember users' preferences within the application and improve the application experience.</p>
        <h2>4. Purposes of Cookie Use</h2>
        <p>The cookies and similar technologies used in the Pickside mobile application are used to ensure the healthy technical operation of the application, provide application security, and improve user experience. The data obtained through these technologies may be evaluated for measuring application performance, analyzing users' interactions within the application, and improving the operation of the application.</p>
        <p>In addition, cookies and similar technologies may be used to understand the interactions users perform within the application, conduct statistical analyses regarding application use, and manage the technical infrastructure of the application more efficiently. The data obtained within this scope is used by Pickside solely for the purposes of improving the application, ensuring its security, and enhancing user experience.</p>
        <h2>5. Data Processed Through Cookies</h2>
        <p>Through the cookies and similar technologies used in the Pickside mobile application, certain technical and usage data may be processed. This data is used to ensure the secure operation of the application, improve user experience, and analyze application performance.</p>
        <p>Within this scope, IP address, device information, operating system information, technical data relating to application use, interaction information within the application, users' preferences regarding swipe actions, and technical log records relating to application use may be processed through cookies and similar technologies.</p>
        <p>Such data is used by Pickside for the purposes of operating the application technically, ensuring system security, evaluating application performance, and improving user experience, and is protected in accordance with applicable legislation.</p>
        <h2>6. Control of Cookies</h2>
        <p>Users may change their preferences regarding cookie use through their device settings or restrict cookies. However, restricting or disabling cookie use may cause certain features of the Pickside application not to function as expected.</p>
        <h2>7. Changes to the Policy</h2>
        <p>Pickside may update this Cookie Policy depending on applicable legislation, technical requirements, or the operation of the application. Changes made to the Policy enter into force on the date they are published through the application.</p>
      `,

      /* ── hakkimizda.html ── */
      'about.tag':          '🧭 About Us',
      'about.title':        'What is <span class="hl">Pickside?</span>',
      'about.sub':          'Designed to reveal what society really thinks. An agenda voting app.',
      'about.mission-title':'Our Mission',
      'about.mission-p1':   "To make society's genuine thoughts on trending topics visible. Pickside aims to be a platform where people freely share their views and the social pulse is measured.",
      'about.mission-p2':   'Social media algorithms and filter bubbles distort reality. Pickside exists to cut through that distortion: anonymous, unbiased, real-time.',
      'about.val1-title':   'Anonymity',
      'about.val1-text':    'No identity, no account. Just your thoughts.',
      'about.val2-title':   'Impartiality',
      'about.val2-text':    'Multiple perspectives on every topic. No judgment.',
      'about.val3-title':   'Transparency',
      'about.val3-text':    'Results are real-time and open to everyone.',
      'about.how-title':    'How It Works',
      'about.how-p1':       'Each day, topics selected from technology, economy, culture, social debates, and internet news are presented as cards. Each card contains a topic, a brief context description, and 3 unique perspectives.',
      'about.how-p2':       'The user swipes to choose their view. Immediately after, they see how society is divided, which view stands out, and whether their own view is in the majority or minority.',
      'about.vision-title': 'Vision',
      'about.vision-p':     "To become the most reliable pulse-measuring platform that accurately reflects Turkey's social agenda. Pickside aims to be more than an app — a tool that makes society's voice visible.",
      'about.tech-title':   'Technical Infrastructure',
      'about.tech-p1':      'Pickside runs on iOS and Android. Data is stored on a secure cloud infrastructure. The app operates fully anonymously; no personal information is requested from users.',
      'about.tech-p2':      'All voting data is processed in aggregate. Individual choices are not linked to any identity.',

      /* ── iletisim.html ── */
      'contact.tag':   '✉️ Contact',
      'contact.title': 'Get<br>in Touch.',
      'contact.sub':   'Use the channels below for questions, suggestions, feedback, or collaboration.',
      'contact.c1-title': 'General Inquiries',
      'contact.c1-text':  'For questions and suggestions about the app.',
      'contact.c2-title': 'Data Deletion Request',
      'contact.c2-text':  'To request deletion of your data, or visit the data deletion page directly.',
      'contact.c2-link':  'Data Deletion Page →',
      'contact.c3-title': 'Partnership & Advertising',
      'contact.c3-text':  'For content partnerships, sponsorships, or advertising opportunities.',
      'contact.c4-title': 'Bug Report',
      'contact.c4-text':  "If you've encountered an issue in the app, let us know and we'll fix it as soon as possible.",
      'contact.c4-link':  'Report a Bug ↗',
      'contact.topics-title': 'What can you write about?',
      'contact.t1-title': 'General Questions',
      'contact.t1-text':  'How does the app work? What are the features?',
      'contact.t2-title': 'Suggestions',
      'contact.t2-text':  'New feature ideas or content suggestions',
      'contact.t3-title': 'Privacy',
      'contact.t3-text':  'Questions about data usage',
      'contact.t4-title': 'Media & Press',
      'contact.t4-text':  'For news, interviews, or content',

      /* ── kullanim-sartlari.html ── */
      'terms.tag':   '📋 Legal',
      'terms.title': 'Terms of Use',
      'terms.date':  'Last Updated: March 16, 2026',
      'terms.content': `
        <p>These terms of use govern the conditions for using the Pickside mobile application ("App"). By using the App, you are deemed to have accepted these terms.</p>
        <h2>1. Scope of Service</h2>
        <p>Pickside is a mobile application that allows you to anonymously vote on trending topics and see the general trends of society. The app is available free of charge on iOS and Android platforms.</p>
        <h2>2. Terms of Use</h2>
        <p>You must be at least 13 years old to use the app. By using the app, you agree to the following conditions:</p>
        <ul>
          <li>You will use the app for legal purposes only.</li>
          <li>You will not engage in behavior that disrupts the functioning of the platform.</li>
          <li>You will not attempt to manipulate the voting system.</li>
          <li>You will not use the app for reverse engineering or unauthorized copying.</li>
        </ul>
        <h2>3. Intellectual Property</h2>
        <p>The Pickside name, logo, design, and app content belong to Pickside. Unauthorized copying, distribution, or commercial use is prohibited.</p>
        <h2>4. Content Responsibility</h2>
        <p>The content of agenda cards within the app is based on publicly available information. Pickside does not guarantee the accuracy of content. The voting options presented do not represent any ideology, political party, or individual.</p>
        <p>Voting results are statistical indicators and do not constitute scientific research.</p>
        <h2>5. Limitation of Liability</h2>
        <p>Pickside does not guarantee that the app will operate without interruption or error. No liability is accepted for losses arising from technical failures.</p>
        <p>Pickside cannot be held responsible for third parties misinterpreting in-app voting results.</p>
        <h2>6. Service Modification</h2>
        <p>Pickside reserves the right to modify the app's content, features, or these terms of use without prior notice. Changes take effect when published on this page.</p>
        <h2>7. Termination of Service</h2>
        <p>Pickside may partially or completely terminate its service without giving any reason. In such a case, users will no longer be able to use the app.</p>
        <h2>8. Applicable Law</h2>
        <p>These terms of use are subject to the laws of the Republic of Turkey. Istanbul courts and enforcement offices have jurisdiction in disputes.</p>
        <h2>9. Contact</h2>
        <p>For questions regarding these terms: <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></p>
      `,

      /* ── kullanim-senaryolari.html ── */
      'scenarios.tag':   '📱 How to Use',
      'scenarios.title': 'Use<br>Cases',
      'scenarios.sub':   'How is Pickside used in daily life? Explore real scenarios and example cards.',
      's1.title': 'Morning routine: Start the day checking the news',
      's1.sub':   '2–3 minutes every morning to check the day\'s agenda',
      's1.p1':    "You open the app. 10 top cards are waiting for you. Economy, entertainment, technology... Each one a different topic.",
      's1.p2':    'You swipe through quickly. Left, right, up — you pick your view in seconds. After voting, you see what society thinks.',
      's1.p3':    "Done before your coffee gets cold. But now, when any of these topics come up in conversation, you know what you think — and what society thinks.",
      's2.title': 'Student: Curious about what society really thinks',
      's2.sub':   'Break out of the social media bubble',
      's2.p1':    "The accounts you follow, the content you see — all showing similar views. The algorithm has trapped you in a bubble.",
      's2.p2':    "When you vote on Pickside, you see the distribution of a broad community, not just the people around you. Being in the 18% minority is eye-opening. So is being in the 72% majority.",
      's2.p3':    'This insight prepares you for healthier discussions on social media.',
      's3.title': 'Competitive user: Climb the leaderboard',
      's3.sub':   'Vote every day, rise in the rankings',
      's3.p1':    "You vote on all the cards every day. You make it onto the weekly and monthly leaderboard.",
      's3.p2':    'As you vote, your persona analysis takes shape. Are you a Diplomat or a Rebel? Do you go with the majority or forge your own path?',
      's3.p3':    "Keep the streak alive — you could be #1 this week.",
      's4.title': 'Social sharing: Surprise your friends',
      's4.sub':   'Share a card result, start a conversation',
      's4.p1':    "You voted on a card. The results are unexpected — exactly 50/50 split. Or you ended up in the minority.",
      's4.p2':    '"What would you say?" The discussion starts.',
      's4.p3':    'Pickside also works as a conversation starter.',
      'uc1.title': 'News follower',
      'uc1.text':  'Add your own perspective to current events.',
      'uc2.title': 'Self-discovery seekers',
      'uc2.text':  'Persona analysis reveals your behavioral patterns.',
      'uc3.title': 'Short breaks',
      'uc3.text':  '5-6 cards in 2-3 minutes. On the elevator, while waiting.',
      'scenarios.cta-title': 'Try it now.',
      'scenarios.cta-sub':   'Free for iOS and Android. No sign-up required.',
      'scenarios.btn-ios':     'Download on App Store',
      'scenarios.btn-android': 'Get it on Google Play',

      /* ── kvkk.html ── */
      'kvkk.tag':   '🛡️ Legal',
      'kvkk.title': 'Information Notice on the Protection of Personal Data',
      'kvkk.date':  'Last Updated: April 12, 2026',
      'kvkk.content': `
        <h2>Purpose</h2>
        <p>This Information Notice has been prepared to explain within what scope the personal data of users who use the Pickside mobile application is collected, how it is processed, for which purposes it is used, and how this data is protected.</p>
        <p>Pickside attaches importance to the privacy of users and the protection of their personal data, and undertakes to act in accordance with the Personal Data Protection Law No. 6698 ("KVKK") and the relevant legislation in personal data processing processes.</p>
        <h2>Explicit Consent Statement</h2>
        <p>I declare that I have read and understood the Information Notice on the Protection of Personal Data presented to me within the scope of the Personal Data Protection Law No. 6698.</p>
        <p>Within this scope, I accept and declare that I give my explicit consent to the processing of my application usage data, device information, IP address, in-app interaction data, and my preferences related to swipe actions for the purposes of analyzing my app usage behavior, evaluating my in-app interactions, improving the content delivery system, enhancing user experience, and analyzing application performance by the Pickside mobile application.</p>
        <p>I also accept that I give my explicit consent to the sharing of such personal data with technical service providers from whom support is received for the operation of Pickside's technical infrastructure, ensuring system security, and enabling the sustainable delivery of application services.</p>
        <p>I declare that I have been informed that I may withdraw this explicit consent at any time by applying to Pickside, and that I accept this matter.</p>
        <h2>1. Data Controller</h2>
        <p>Pursuant to the Personal Data Protection Law No. 6698 ("KVKK"), your personal data may be processed by the company operating the Pickside mobile application, acting as the data controller, within the scope explained below.</p>
        <h2>2. Personal Data Processed</h2>
        <p>During the use of the Pickside mobile application, a limited set of personal data may be processed for the purposes of technically operating the application, ensuring its security, and improving user experience. The processed personal data is evaluated under the following data categories:</p>
        <table>
          <tr><th>Data Category</th><th>Personal Data Processed</th></tr>
          <tr><td>User Identity Information</td><td>Username determined by the user within the application</td></tr>
          <tr><td>Device and Technical Information</td><td>IP address, device type, operating system information, application version, and similar technical data</td></tr>
          <tr><td>Usage and Interaction Data</td><td>Interactions users perform within the application, swipe actions, content preferences, application usage durations, and data relating to in-app behaviors</td></tr>
          <tr><td>Log and System Records</td><td>Log records and similar technical data created for ensuring application security, detecting technical issues, and monitoring system performance</td></tr>
        </table>
        <p>There is no traditional membership system within the Pickside application, and therefore data aimed at directly identifying the user, such as identity number, address, or contact details, is not requested. The data processed within this scope is collected primarily in a limited manner for ensuring the technical functioning of the application, protecting its security, and improving user experience.</p>
        <h2>3. Purposes of Processing Personal Data</h2>
        <p>The personal data collected within the scope of the Pickside mobile application is processed for the following purposes so that the application can be operated securely, effectively, and in a user-friendly manner:</p>
        <table>
          <tr><th>Processing Purpose</th><th>Description</th></tr>
          <tr><td>Technical Operation of the Application</td><td>Ensuring the proper functioning of the Pickside application, managing system infrastructure, and carrying out technical processes</td></tr>
          <tr><td>Improving User Experience</td><td>Analyzing users' interactions within the application, improving content delivery, and enhancing application performance</td></tr>
          <tr><td>Ensuring Application Security</td><td>Preventing misuse of the application, ensuring system security, and detecting possible security breaches</td></tr>
          <tr><td>Analyzing Application Performance</td><td>Evaluating technical data relating to application use and conducting analyses aimed at improving the operation of the application</td></tr>
          <tr><td>Detecting and Resolving Technical Problems</td><td>Detecting system errors, resolving technical failures, and ensuring the uninterrupted operation of the application</td></tr>
          <tr><td>Fulfilling Legal Obligations</td><td>Fulfilling obligations arising from legislation and responding to requests from competent public institutions and organizations</td></tr>
        </table>
        <p>Pickside undertakes to process personal data only for the purposes specified above and in accordance with the relevant legislation, and to act in accordance with the principles of proportionality and data minimization in data processing activities.</p>
        <h2>4. Legal Grounds for Processing Personal Data</h2>
        <p>The personal data processed within the scope of the Pickside mobile application is processed in accordance with the data processing conditions set out in Article 5 of the Personal Data Protection Law No. 6698 ("KVKK"). In this context, personal data may first be processed based on the data processing condition that it is directly related to the establishment or performance of a contract, as it is necessary for users to be able to use the Pickside application and benefit from the services offered within the application.</p>
        <p>In addition, Pickside may process personal data in order to fulfill its obligations arising from applicable legislation and to respond to requests from competent public institutions and organizations. In this context, data processing activities are based on the legal ground of the data controller being able to fulfill its legal obligation.</p>
        <p>Furthermore, personal data may be processed based on the legal ground that processing is necessary for the establishment, exercise, or protection of a right, in order for Pickside to protect its rights in possible legal disputes, keep necessary records, and conduct legal processes.</p>
        <p>A significant part of the data processing activities carried out by Pickside is conducted for the purposes of ensuring application security, preventing misuse, monitoring system performance, and improving user experience. In this context, personal data is processed based on the legal ground that data processing is necessary for the legitimate interests of the data controller.</p>
        <p>Pickside aims to act in accordance with the general principles set out in KVKK in personal data processing processes and to ensure that personal data is processed lawfully and in accordance with the rules of honesty and good faith, in a limited manner for specific, explicit, and legitimate purposes, and in a way that is relevant, limited, and proportionate to the purposes for which it is processed.</p>
        <h2>5. Transfer of Personal Data</h2>
        <p>The personal data processed within the scope of the Pickside mobile application may be transferred to third parties to a limited extent and to the degree required by the data processing purposes, in accordance with the Personal Data Protection Law No. 6698 and the relevant legislation.</p>
        <p>In this context, personal data may be shared with IT infrastructure providers, technical service providers, and business partners providing similar support services for the purposes of operating the technical infrastructure of the application, ensuring system security, and enabling the sustainable delivery of application services.</p>
        <p>In addition, Pickside may transfer personal data to relevant public institutions and organizations in cases where it is necessary to fulfill obligations arising from applicable legislation, conduct legal processes, or where such data is requested by competent public institutions and organizations.</p>
        <p>In processes involving the transfer of personal data to third parties, Pickside takes the necessary technical and administrative measures to ensure data security and ensures that the transfer is carried out only in a manner limited to the data processing purposes. Personal data is not shared with third parties outside the conditions stipulated by the relevant legislation.</p>
        <h2>6. Method of Collecting Personal Data</h2>
        <p>Within the scope of the Pickside mobile application, personal data is collected in electronic environments and through automated means while users use the application. This data is obtained through users accessing the application via their mobile devices, interactions carried out within the application, and system records created by the technical infrastructure of the application.</p>
        <p>Personal data may be collected automatically through technical log records generated during the operation of the application, users' usage and interaction information within the application, technical data generated by the device and system, and similar digital traces.</p>
        <p>Since there is no traditional membership system within the Pickside application, personal data is obtained not so much from information directly entered by the user, but rather from technical and usage data generated during the use of the application.</p>
        <p>The collected personal data is processed only for the purposes of technically operating the application, ensuring security, improving user experience, and fulfilling obligations arising from legislation. In these processes, the principle of data minimization is observed and only the data that is necessary is collected.</p>
        <h2>7. Your Rights Under KVKK</h2>
        <p>Pursuant to Article 11 of KVKK, you have the following rights regarding your personal data:</p>
        <ul>
          <li>To learn whether your personal data is being processed</li>
          <li>To request information regarding personal data that has been processed</li>
          <li>To learn the purpose of processing personal data</li>
          <li>To learn whether personal data has been transferred</li>
          <li>To request correction of incomplete or incorrectly processed data</li>
          <li>To request the deletion or destruction of personal data</li>
          <li>To object to processing activities</li>
          <li>To request compensation in case you suffer damage</li>
        </ul>
        <p>You may exercise these rights by submitting your requests to the data controller.</p>
      `,

      /* ── sorumluluk-reddi.html ── */
      'disclaimer.tag':    'Information',
      'disclaimer.title':  'Content Responsibility &amp; Disclaimer',
      'disclaimer.date':   'Last Updated: March 2026',
      'disclaimer.notice': '<strong>Important:</strong> Content on Pickside is aggregated from Twitter/X, Reddit, news sites, and various internet sources. The accuracy of this content is not guaranteed by Pickside. Please read this page carefully.',
      'disclaimer.content': `
        <h2>1. General Information</h2>
        <p>Pickside is a mobile application that allows users to vote on and comment about current events and social topics. The agenda topics and contextual information presented within the app are compiled automatically or manually from Twitter/X, Reddit, various news sites, bundle platforms, and other publicly accessible internet sources.</p>
        <p>Pickside is not a news agency or editorial organization. The app is designed solely to help users measure the general social trend by voting on trending topics.</p>
        <h2>2. Content Sources</h2>
        <p>Agenda topics and descriptions within the app may be sourced from:</p>
        <ul>
          <li><strong>Twitter/X:</strong> Social media posts, trending topics, and user submissions.</li>
          <li><strong>Reddit:</strong> Forum discussions, subreddit content, and community comments.</li>
          <li><strong>News Sites:</strong> Digital news from Turkish and international outlets.</li>
          <li><strong>Bundle and Content Curator Platforms:</strong> Aggregator services that compile news and topics.</li>
          <li><strong>Other Public Sources:</strong> Blog posts, open databases, and publicly accessible websites.</li>
        </ul>
        <p>These sources have their own editorial processes, biases, and margins of error. Pickside does not independently verify information from these sources.</p>
        <h2>3. Accuracy and Completeness of Content</h2>
        <p>Pickside does not guarantee that content within the app is accurate, current, complete, or fit for a particular purpose.</p>
        <ul>
          <li>Source information may be incorrect or misleading.</li>
          <li>Content may have changed or become outdated after publication.</li>
          <li>Information conveyed out of context may carry a different meaning.</li>
          <li>Content compiled from multiple sources may contain conflicting information.</li>
        </ul>
        <h2>4. Disclaimer</h2>
        <p>Pickside and its affiliates, directors, employees, and partners cannot be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use of app content or decisions made based on it.</p>
        <h2>5. Third-Party Links and Content</h2>
        <p>The app or website may contain links or references to third-party websites. Pickside assumes no responsibility for the content, privacy practices, or accessibility of such third-party sites.</p>
        <h2>6. Intellectual Property</h2>
        <p>Intellectual property rights for content compiled within the app belong to the respective source organizations and authors. If you believe any content infringes intellectual property rights, please notify us via our <a href="iletisim.html">contact page</a>; the content will be reviewed immediately and removed if necessary.</p>
        <h2>7. User Responsibility</h2>
        <p>Pickside users are responsible for evaluating content within the app critically. Users should independently verify sources before sharing information with others. You can report content you believe to be incorrect via in-app feedback or our <a href="iletisim.html">contact form</a>.</p>
        <h2>8. Content Moderation and Updates</h2>
        <p>The Pickside team periodically reviews app content and strives to update it based on user reports. However, due to the volume of content, real-time verification of all content may not be possible.</p>
        <h2>9. Modification of This Text</h2>
        <p>Pickside reserves the right to update this disclaimer without prior notice. Changes take effect from the date published on this page.</p>
        <h2>10. Contact</h2>
        <p>For questions about this disclaimer:</p>
        <ul>
          <li>Email: <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></li>
          <li>Contact form: <a href="iletisim.html">Contact Page</a></li>
        </ul>
      `,

      /* ── child-safety.html ── */
      'child.tag':   '🔒 Policy',
      'child.title': 'Child Safety & Abuse Prevention Policy',
      'child.date':  'Last Updated: March 18, 2026',
      'child.content': `
        <p>Pickside is committed to preventing child sexual abuse and exploitation (CSAE) on its platform.</p>
        <h2>We strictly prohibit:</h2>
        <ul>
          <li>Any content involving sexual exploitation of minors</li>
          <li>Sharing or requesting inappropriate content involving minors</li>
          <li>Harassment or grooming behavior targeting minors</li>
        </ul>
        <h2>Moderation &amp; Enforcement</h2>
        <ul>
          <li>Content is monitored and can be reported by users</li>
          <li>Violating accounts are permanently banned</li>
          <li>Suspicious activity may be reported to relevant authorities</li>
        </ul>
        <h2>User Reporting</h2>
        <p>Users can report inappropriate content directly within the app.</p>
        <h2>Contact</h2>
        <p>For safety-related concerns:<br><a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a></p>
      `,

      /* ── data-deletion.html ── */
      'del.tag':   '🗑️ Data Management',
      'del.title': 'Delete<br>Your Data.',
      'del.sub':   'There are two ways to remove your Pickside data: directly from within the app, or by email. Both methods are fast and final.',
      'del.card1-title': '📱 Reset from within the app',
      'del.card1-p1':    'You can delete your data instantly from inside the app. No extra steps needed.',
      'del.card1-p2':    '<strong>Profile › Settings › Reset My Data</strong>',
      'del.card1-btn1':  '← Back to Home',
      'del.card1-btn2':  'Send Email',
      'del.card2-title': '⚡ Quick Summary',
      'del.card2-li1':  'In the app, go to <strong>Profile › Settings › Reset My Data</strong>.',
      'del.card2-li2':  'Alternatively, write to <a href="mailto:info.pickside@gmail.com">info.pickside@gmail.com</a>.',
      'del.card2-li3':  'Include your username from the app in the email.',
      'del.detail-header': '📋 Detailed Information',
      'del.s1-title':  'Right to Request Deletion',
      'del.s1-text':   'Users of the Pickside app may request deletion of all data associated with their account.',
      'del.s2-title':  'Data That Can Be Deleted',
      'del.s2-li1':    'Username',
      'del.s2-li2':    'Profile data',
      'del.s2-li3':    'Voting history',
      'del.s2-li4':    'Notification device ID',
      'del.s3-title':  'Requesting Deletion by Email',
      'del.s3-p1':     'To request data deletion, write to the address below:',
      'del.s3-p2':     'Simply include your username from the app. After your request is verified, your data will be permanently deleted from our systems.',
      'del.s4-title':  'Additional Information',
      'del.s4-text':   'Anonymous technical logs may be retained for a short period due to legal obligations.',
      'del.s5-title':  'Android Data Deletion URL',
      'del.s5-text':   'Official data deletion page required by Google Play policy:',
    }
  };

  let lang = localStorage.getItem('ps-lang') || 'tr';

  function applyLang(l) {
    lang = l;
    localStorage.setItem('ps-lang', l);
    document.documentElement.lang = l === 'tr' ? 'tr' : 'en';
    const d = T[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = d[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = l === 'tr' ? 'EN' : 'TR';
  }

  window.toggleLang = function () { applyLang(lang === 'tr' ? 'en' : 'tr'); };

  /* apply on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyLang(lang); });
  } else {
    applyLang(lang);
  }
})();
