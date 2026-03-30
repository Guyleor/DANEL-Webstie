/* ═══════════════════════════════════════════════
   ALL2MD Promotional Website — JavaScript
   ═══════════════════════════════════════════════ */

/* ── i18n Translations ── */
const translations = {
  en: {
    logo_sub:          'Medical Equipment & Supply LTD',
    nav_store:         'Visit Store ↗',
    nav_about:         'About',
    nav_services:      'Solutions',
    nav_brands:        'Brands',
    nav_why:           'Why Us',
    nav_academy:       'Academy',
    nav_testimonials:  'Testimonials',
    nav_contact:       'Contact',
    nav_cta:           'Get in Touch',

    hero_badge:        'ENT · Dental · Gynecology',
    hero_tagline:      '25 Years of Reliability, Expertise & Service.',
    hero_title_1:      'Medical Equipment',
    hero_title_2:      'For Specialists.',
    hero_sub:          'ENT, dental and gynecology equipment — selected carefully, delivered reliably, supported long-term.',
    hero_cta1:         'Explore Our Solutions',
    hero_cta2:         'Contact Us',
    hero_cta3:         'Visit Our Store ↗',
    stat_years:        'Years of Excellence',
    stat_specialties:  'Medical Specialties',
    stat_brands:       'Premium Brands',
    stat_global:       'Global Shipping',

    about_label:       'Who We Are',
    about_title:       'Your Trusted Partner in Medical Equipment',
    about_p1:          'DANEL — part of ALL2MD Group — supplies specialized medical equipment for ENT, dental and gynecology clinics, combining clinical expertise with direct, responsive service from initial consultation through long-term support.',
    about_p2:          '',
    badge_exp:         'Years Expertise',
    pillar1_title:     'Expert Consultation',
    pillar1_sub:       'Personalized guidance for every clinic',
    pillar2_title:     'Full Service Support',
    pillar2_sub:       'Installation, training & after-sales care',
    pillar3_title:     'Premium Quality',
    pillar3_sub:       'Only verified, top-tier brands',

    services_label:    'What We Offer',
    services_title:    'Comprehensive Medical Solutions',
    services_sub:      'We supply specialized equipment across three key medical disciplines, supported by turnkey clinic design and professional training.',
    svc_dental_title:  'Dental Equipment',
    svc_dental_desc:   'Complete dental units, chairs, handpieces, microscopes, intraoral scanners, and sterilization systems — everything needed to build an efficient, modern dental practice.',
    svc_dental_1:      'Dental Units & Chairs',
    svc_dental_2:      'Microscopes & Cameras',
    svc_dental_3:      'Intraoral Scanners',
    svc_dental_4:      'Handpieces & Turbines',
    svc_dental_5:      'Sterilization Systems',
    svc_featured:      'Most Popular',
    svc_ent_title:     'ENT Equipment',
    svc_ent_desc:      'Advanced otolaryngology solutions — from flexible and rigid endoscopes to otological microscopes, examination chairs and video systems for ENT specialists.',
    svc_ent_1:         'Flexible & Rigid Endoscopes',
    svc_ent_2:         'Otological Microscopes',
    svc_ent_3:         'ENT Examination Chairs',
    svc_ent_4:         'Video Systems',
    svc_ent_5:         'Diagnostic Instruments',
    svc_gyn_title:     'Gynecology Equipment',
    svc_gyn_desc:      'Professional gynecological solutions including examination tables, colposcopes, ultrasound equipment and complete clinic setups for obstetrics and gynecology practices.',
    svc_gyn_1:         'Examination Tables',
    svc_gyn_2:         'Colposcopes',
    svc_gyn_3:         'Ultrasound Equipment',
    svc_gyn_4:         'Treatment Instruments',
    svc_gyn_5:         'Complete Clinic Setup',
    svc_turnkey_title: 'Turnkey Clinic Projects',
    svc_turnkey_desc:  'From concept to completion — we design and equip entire clinics. Whether you are opening a new practice or renovating an existing one, our team handles equipment selection, layout planning, installation and training for a seamless handover.',
    learn_more:        'Learn More →',

    brands_label:      'Our Partners',
    brands_title:      'World-Class Brands We Represent',
    brands_sub:        'We partner exclusively with proven, industry-leading manufacturers to guarantee quality, reliability and long-term support for every product we supply.',

    why_label:         'Why DANEL',
    why_title:         'The Difference That Matters',
    why1_title:        'Deep Domain Expertise',
    why1_desc:         'Our team combines clinical knowledge with technical expertise — we speak the language of medical professionals and understand what clinicians actually need.',
    why2_title:        'Fast, Reliable Delivery',
    why2_desc:         'Free express shipping worldwide. We understand that downtime in a clinical setting is not an option — we deliver quickly and accurately.',
    why3_title:        'Complete After-Sales Care',
    why3_desc:         'Installation, training, maintenance and technical support — we remain your partner long after the sale, ensuring your equipment performs at its best.',
    why4_title:        'Competitive Pricing',
    why4_desc:         'Top-tier quality doesn\'t have to break the budget. We offer transparent, competitive pricing with flexible options for all clinic sizes.',
    why5_title:        'Tailored Solutions',
    why5_desc:         'Every clinic is unique. We take the time to understand your specific requirements and curate the perfect equipment configuration for your practice.',
    why6_title:        'Hassle-Free Returns',
    why6_desc:         '14-day no-questions return policy. We stand behind the quality of our products and make every transaction risk-free for our customers.',

    academy_label:     'Education & Training',
    academy_title:     'DANEL Academy',
    academy_p1:        'The DANEL Academy offers hands-on training courses and workshops for medical professionals — covering equipment operation, clinical techniques and best practices, delivered by experienced practitioners.',
    academy_p2:        '',
    ac_feat1:          'Hands-on practical workshops',
    ac_feat2:          'Small groups, personalized attention',
    ac_feat3:          'Equipment-specific training programs',
    ac_feat4:          'International certified instructors',
    academy_cta:       'View Upcoming Courses',
    ac_dental:         'Dental',
    ac_ent:            'ENT',
    ac_scope:          'Microscopy',
    ac_clinic:         'Clinic Setup',

    testi_label:       'What Clients Say',
    testi_title:       'Trusted by Medical Professionals',
    testi_more:        'Show More Reviews',
    testi1_quote:      '"I purchased this set and still wonder how I worked without it for so long. The quality of the images is truly excellent — no lag. The assistance from the DANEL team was perfect."',
    testi1_name:       'Dr. Ettore Scaini',
    testi1_title:      'ENT Specialist',
    testi2_quote:      '"I have been a loyal customer for over 10 years. When I decided to open a completely new, modern ENT clinic, DANEL was the obvious choice — full equipment, excellent service and ongoing support."',
    testi2_name:       'Dr. Moshe Elam, MD, MHA',
    testi2_title:      'Senior ENT Specialist',
    testi3_quote:      '"Purchased two dental microscopes with full objectives. Excellent microscopes at a very attractive price. Great technical support and service — a genuine recommendation."',
    testi3_name:       'Dr. Ilan Vigder',
    testi3_title:      'Dental365',
    testi4_quote:      '"Very happy with the fast response and outstanding service DANEL provided for an urgent request. Professionalism at the highest level."',
    testi4_name:       'Dr. Sonnik Clausen',
    testi4_title:      'Pyro Optic, Denmark',

    contact_label:         'Get in Touch',
    contact_title:         'Let\'s Talk About Your Clinic',
    contact_desc:          'Whether you need a single instrument or a complete clinic setup — our team is here to help. Reach out and we\'ll respond within one business day.',
    contact_phone_label:   'Phone',
    contact_web_label:     'Website',
    contact_ship_label:    'Shipping',
    contact_ship_val:      'Worldwide · Free express delivery',
    contact_ret_label:     'Returns',
    contact_ret_val:       '14-day hassle-free returns',
    form_fname:            'First Name',
    form_lname:            'Last Name',
    form_email:            'Email Address',
    form_specialty:        'Specialty',
    form_spec_placeholder: 'Select your specialty…',
    form_spec_dental:      'Dental',
    form_spec_ent:         'ENT',
    form_spec_gyn:         'Gynecology',
    form_spec_other:       'Other',
    form_message:          'Message',
    form_message_ph:       'Tell us about your needs…',
    form_submit:           'Send Message',
    form_note:             'We respond within 1 business day.',

    footer_tagline:    'Professional Medical Equipment & Supply. Trusted by Specialists.',
    footer_solutions:  'Solutions',
    footer_dental:     'Dental Equipment',
    footer_ent:        'ENT Equipment',
    footer_gyn:        'Gynecology Equipment',
    footer_turnkey:    'Turnkey Projects',
    footer_company:    'Company',
    footer_about:      'About Us',
    footer_academy:    'Academy',
    footer_brands:     'Our Brands',
    footer_contact:    'Contact',
    footer_contact_head: 'Contact',
    footer_store:      '🛒 Visit Our Store',
    footer_copy:       '© 2025 DANEL Medical Equipment & Supply LTD. All rights reserved.',
  },

  he: {
    logo_sub:          'ציוד ומכשור רפואי בע"מ',
    nav_store:         'לחנות ↗',
    nav_about:         'אודות',
    nav_services:      'פתרונות',
    nav_brands:        'מותגים',
    nav_why:           'למה אנחנו',
    nav_academy:       'אקדמיה',
    nav_testimonials:  'המלצות',
    nav_contact:       'צור קשר',
    nav_cta:           'דברו איתנו',

    hero_badge:        'א.א.ג · דנטל · גניקולוגיה',
    hero_tagline:      '25 שנים של אמינות, מקצועיות ושירות.',
    hero_title_1:      'ציוד רפואי',
    hero_title_2:      'למומחים.',
    hero_sub:          'ציוד א.א.ג, דנטל וגניקולוגיה — נבחר בקפידה, מסופק באמינות, נתמך לאורך זמן.',
    hero_cta1:         'גלו את הפתרונות שלנו',
    hero_cta2:         'צרו קשר',
    hero_cta3:         'לחנות שלנו ↗',
    stat_years:        'שנות מצוינות',
    stat_specialties:  'תחומי התמחות',
    stat_brands:       'מותגים מובילים',
    stat_global:       'משלוח עולמי',

    about_label:       'מי אנחנו',
    about_title:       'ציוד רפואי מקצועי עם שירות אישי',
    about_p1:          'דנאל — חלק מקבוצת ALL2MD — מספקת ציוד רפואי מתמחה לקליניקות א.א.ג, דנטל וגניקולוגיה, עם מומחיות קלינית ושירות ישיר מהייעוץ הראשוני ועד לתמיכה שוטפת.',
    about_p2:          '',
    badge_exp:         'שנות מומחיות',
    pillar1_title:     'ייעוץ מקצועי',
    pillar1_sub:       'הכוונה אישית לכל קליניקה',
    pillar2_title:     'שירות מלא',
    pillar2_sub:       'התקנה, הדרכה וטיפול לאחר המכירה',
    pillar3_title:     'איכות פרימיום',
    pillar3_sub:       'רק מותגים מאומתים ומובילים',

    services_label:    'מה אנחנו מציעים',
    services_title:    'פתרונות רפואיים מקיפים',
    services_sub:      'אנו מספקים ציוד מתמחה בשלושה תחומי רפואה מרכזיים, בתמיכת עיצוב קליניקות מלא והכשרה מקצועית.',
    svc_dental_title:  'ציוד דנטלי',
    svc_dental_desc:   'יחידות דנטל מלאות, כיסאות, כלי עבודה, מיקרוסקופים, סורקים תוך-פיומיים ומערכות עיקור — כל מה שנדרש לקליניקה דנטלית מודרנית.',
    svc_dental_1:      'יחידות וכיסאות דנטל',
    svc_dental_2:      'מיקרוסקופים ומצלמות',
    svc_dental_3:      'סורקים תוך-פיומיים',
    svc_dental_4:      'כלי רוטציה',
    svc_dental_5:      'מערכות עיקור',
    svc_featured:      'הכי פופולרי',
    svc_ent_title:     'ציוד אא"ג',
    svc_ent_desc:      'פתרונות אוטולרינגולוגיה מתקדמים — מאנדוסקופים גמישים וקשיחים ועד מיקרוסקופים אוטולוגיים, כיסאות בדיקה ומערכות וידאו.',
    svc_ent_1:         'אנדוסקופים גמישים וקשיחים',
    svc_ent_2:         'מיקרוסקופים אוטולוגיים',
    svc_ent_3:         'כיסאות בדיקה לאא"ג',
    svc_ent_4:         'מערכות וידאו',
    svc_ent_5:         'מכשירי אבחון',
    svc_gyn_title:     'ציוד גניקולוגי',
    svc_gyn_desc:      'פתרונות גניקולוגיים מקצועיים הכוללים שולחנות בדיקה, קולפוסקופים, ציוד אולטרסאונד ועיצוב קליניקות מלא למיילדות וגניקולוגיה.',
    svc_gyn_1:         'שולחנות בדיקה',
    svc_gyn_2:         'קולפוסקופים',
    svc_gyn_3:         'ציוד אולטרסאונד',
    svc_gyn_4:         'כלי טיפול',
    svc_gyn_5:         'הקמת קליניקה מלאה',
    svc_turnkey_title: 'הקמת קליניקות מקצה לקצה',
    svc_turnkey_desc:  'מרעיון לכדאיות — אנו מתכננים ומציידים קליניקות שלמות. בין אם פתיחת קליניקה חדשה או שיפוץ של קיימת, הצוות שלנו מטפל בבחירת ציוד, תכנון פריסה, התקנה והדרכה.',
    learn_more:        'למידע נוסף ←',

    brands_label:      'השותפים שלנו',
    brands_title:      'מותגים עולמיים שאנו מייצגים',
    brands_sub:        'אנו משתפים פעולה אך ורק עם יצרנים מוכחים ומובילים כדי להבטיח איכות, אמינות ותמיכה ארוכת טווח לכל מוצר שאנו מספקים.',

    why_label:         'למה דנאל',
    why_title:         'ההבדל שחשוב',
    why1_title:        'מומחיות עמוקה בתחום',
    why1_desc:         'הצוות שלנו משלב ידע קליני עם מומחיות טכנית — אנחנו מדברים בשפת אנשי הרפואה ומבינים מה הם צריכים.',
    why2_title:        'משלוח מהיר ואמין',
    why2_desc:         'משלוח אקספרס חינם לכל העולם. אנחנו מבינים שהשבתה בסביבה קלינית היא לא אפשרות — אנחנו מספקים מהר ובדיוק.',
    why3_title:        'שירות לאחר מכירה מלא',
    why3_desc:         'התקנה, הדרכה, תחזוקה ותמיכה טכנית — אנחנו נשארים שותפים שלכם הרבה אחרי המכירה.',
    why4_title:        'תמחור תחרותי',
    why4_desc:         'איכות מהשורה הראשונה לא חייבת לעלות הון. אנו מציעים תמחור שקוף ותחרותי עם אפשרויות גמישות לכל גודל קליניקה.',
    why5_title:        'פתרונות מותאמים אישית',
    why5_desc:         'כל קליניקה היא ייחודית. אנחנו לוקחים את הזמן להבין את הדרישות הספציפיות שלכם ומרכיבים את תצורת הציוד המושלמת.',
    why6_title:        'החזרות ללא כאב ראש',
    why6_desc:         'מדיניות החזרה ל-14 יום ללא שאלות. אנחנו עומדים מאחורי איכות המוצרים שלנו וכל עסקה אצלנו היא ללא סיכון.',

    academy_label:     'חינוך והכשרה',
    academy_title:     'אקדמיית דנאל',
    academy_p1:        'אקדמיית דנאל מציעה קורסי הדרכה מעשיים וסדנאות לאנשי רפואה — הפעלת ציוד, טכניקות קליניות ושיטות עבודה מיטביות, בהדרכת מומחים מנוסים.',
    academy_p2:        '',
    ac_feat1:          'סדנאות מעשיות',
    ac_feat2:          'קבוצות קטנות, תשומת לב אישית',
    ac_feat3:          'תוכניות הדרכה ספציפיות לציוד',
    ac_feat4:          'מדריכים מוסמכים בינלאומיים',
    academy_cta:       'צפו בקורסים הקרובים',
    ac_dental:         'דנטל',
    ac_ent:            'אא"ג',
    ac_scope:          'מיקרוסקופיה',
    ac_clinic:         'הקמת קליניקה',

    testi_label:       'מה אומרים הלקוחות',
    testi_title:       'מה אומרים עלינו',
    testi_more:        'הצג עוד המלצות',
    testi1_quote:      '"קניתי את הסט ועדיין תוהה איך עבדתי בלעדיו כל כך הרבה זמן. איכות התמונות מצוינת — אפס השהייה. הסיוע מצוות דנאל היה מושלם."',
    testi1_name:       'ד"ר אטורה סקייני',
    testi1_title:      'מומחה אא"ג',
    testi2_quote:      '"אני לקוח נאמן כבר למעלה מ-10 שנים. כשהחלטתי לפתוח קליניקת אא"ג חדשה ומודרנית, דנאל היו הבחירה הברורה — ציוד מלא, שירות מעולה ותמיכה שוטפת."',
    testi2_name:       'ד"ר משה עלם, MD, MHA',
    testi2_title:      'מומחה בכיר אא"ג',
    testi3_quote:      '"רכשתי שני מיקרוסקופים דנטליים עם עדשות מלאות. מיקרוסקופים מצוינים במחיר אטרקטיבי מאוד. תמיכה טכנית ושירות נהדרים — המלצה אמיתית."',
    testi3_name:       'ד"ר אילן ויגדר',
    testi3_title:      'Dental365',
    testi4_quote:      '"שמח מאוד על מהירות התגובה והשירות המעולה שסיפקה דנאל לבקשה דחופה. מקצועיות ברמה הגבוהה ביותר."',
    testi4_name:       'ד"ר סוניק קלאוסן',
    testi4_title:      'Pyro Optic, דנמרק',

    contact_label:         'צרו קשר',
    contact_title:         'נדבר על הקליניקה שלכם',
    contact_desc:          'בין אם אתם צריכים מוצר בודד או הקמת קליניקה מלאה — הצוות שלנו כאן כדי לעזור. פנו אלינו ונחזור תוך יום עסקים אחד.',
    contact_phone_label:   'טלפון',
    contact_web_label:     'אתר',
    contact_ship_label:    'משלוח',
    contact_ship_val:      'עולמי · משלוח אקספרס חינם',
    contact_ret_label:     'החזרות',
    contact_ret_val:       'החזרה ל-14 יום ללא שאלות',
    form_fname:            'שם פרטי',
    form_lname:            'שם משפחה',
    form_email:            'כתובת אימייל',
    form_specialty:        'התמחות',
    form_spec_placeholder: 'בחרו את ההתמחות שלכם…',
    form_spec_dental:      'דנטל',
    form_spec_ent:         'אא"ג',
    form_spec_gyn:         'גינקולוגיה',
    form_spec_other:       'אחר',
    form_message:          'הודעה',
    form_message_ph:       'ספרו לנו על הצרכים שלכם…',
    form_submit:           'שלחו הודעה',
    form_note:             'אנו מגיבים תוך יום עסקים אחד.',

    footer_tagline:    'ציוד ומכשור רפואי מקצועי. מהימן על ידי מומחים.',
    footer_solutions:  'פתרונות',
    footer_dental:     'ציוד דנטלי',
    footer_ent:        'ציוד אא"ג',
    footer_gyn:        'ציוד גניקולוגי',
    footer_turnkey:    'פרויקטי קליניקה',
    footer_company:    'חברה',
    footer_about:      'אודות',
    footer_academy:    'אקדמיה',
    footer_brands:     'המותגים שלנו',
    footer_contact:    'צור קשר',
    footer_contact_head: 'צור קשר',
    footer_store:      '🛒 לחנות שלנו',
    footer_copy:       '© 2025 דנאל ציוד ומכשור רפואי בע"מ. כל הזכויות שמורות.',
  }
};

/* ── DANEL logo white-background removal ──
   Converts the white background of the DANEL JPG to transparent
   so the logo integrates naturally on any background, just like an SVG.  */
function removeDanelLogoBg(img) {
  try {
    const canvas  = document.createElement('canvas');
    canvas.width  = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = imageData.data;

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      // Near-white threshold: alpha fades smoothly from opaque (200) to transparent (240+)
      const whiteness = Math.min(r, g, b);
      if (whiteness > 200) {
        d[i + 3] = Math.round(Math.max(0, (200 - whiteness) * (255 / 40)));
      }
    }
    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
  } catch (e) { /* cross-origin guard — silently skip */ }
}

function initDanelLogos() {
  document.querySelectorAll('.danel-img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      removeDanelLogoBg(img);
    } else {
      img.addEventListener('load', () => removeDanelLogoBg(img), { once: true });
    }
  });
}

/* ── Language state ── */
let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  const htmlEl = document.getElementById('html-root');

  // Update HTML lang & direction
  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Update select options
  document.querySelectorAll('select option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update language button
  const langLabel = document.getElementById('lang-label');
  if (lang === 'en') {
    langLabel.textContent = 'עברית';
    document.querySelector('.lang-flag').textContent = '🇮🇱';
  } else {
    langLabel.textContent = 'English';
    document.querySelector('.lang-flag').textContent = '🇬🇧';
  }

  // Adjust font
  document.body.style.fontFamily = lang === 'he'
    ? "'Heebo', system-ui, sans-serif"
    : "'Inter', system-ui, sans-serif";
}

/* ── Language Toggle ── */
document.getElementById('lang-btn').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'he' : 'en';
  applyTranslations(currentLang);
});

/* ── Init logo transparent bg ── */
initDanelLogos();

/* ── Apply default language on load ── */
applyTranslations(currentLang);

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── "Get in Touch" nav CTA ── */
document.querySelector('.nav-cta').addEventListener('click', () => {
  const contact = document.getElementById('contact');
  const navH    = navbar.offsetHeight;
  const top     = contact.getBoundingClientRect().top + window.scrollY - navH - 16;
  window.scrollTo({ top, behavior: 'smooth' });
});

/* ── Contact form ── */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('[type="submit"]');
  const t   = translations[currentLang];
  btn.textContent = currentLang === 'en' ? 'Sending…' : 'שולח…';
  btn.disabled = true;

  // Simulate submission (replace with real endpoint)
  setTimeout(() => {
    btn.textContent = currentLang === 'en' ? '✓ Message Sent!' : '✓ ההודעה נשלחה!';
    btn.style.background = '#0E9B8A';
    this.reset();
    setTimeout(() => {
      btn.textContent = t.form_submit;
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }, 1200);
});

/* ── Show More Testimonials ── */
const testiMoreBtn = document.getElementById('testi-more-btn');
if (testiMoreBtn) {
  testiMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.testi-card--hidden').forEach(card => {
      card.classList.add('testi-visible');
      revealObserver.observe(card);
    });
    testiMoreBtn.classList.add('testi-btn--hidden');
  });
}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navAnchs = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - navbar.offsetHeight - 80) {
      current = sec.id;
    }
  });
  navAnchs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });
