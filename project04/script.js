/* ==========================================
   Chapter IV — Exercise 00: Personal Portfolio
   JavaScript: Theme Switcher & Event Lifecycle
   ========================================== */

/**
 * 1. DOM Elements Selection
 */
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

/**
 * 2. Check for Saved User Preference on Page Load
 */
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

/**
 * 3. Event Listener & Complete Event Lifecycle Implementation
 * 
 * --- EVENT LIFECYCLE EXPLANATION ---
 * عندما يقوم المستخدم بالنقر على زر تبديل الثيم، تحدث دورة حياة الحدث (Event Lifecycle) عبر المراحل التالية:
 * 
 * 1. User Action (إجراء المستخدم): 
 *    المستخدم يقوم بالنقر الفعلي (Click) بفرشاة الماوس أو الإصبع على عنصر زر التبديل (`#theme-toggle`).
 * 
 * 2. Event Firing / Capturing & Bubbling (إطلاق الحدث):
 *    المتصفح (Browser Engine) يلتقط هذا الإجراء ويقوم بإنشاء كائن حدث (Event Object of type 'click') ويطلقه (Dispatches) صعوداً عبر عناصر الـ DOM Tree.
 * 
 * 3. JavaScript Callback Execution (تنفيذ الدالة البرمجية - Callback):
 *    الدالة المربطة بالـ Event Listener (`addEventListener`) تستقبل كائن الحدث وتبدأ بتنفيذ الكود البرمجي المكتوب داخلها (تغيير السمة، قلب الـ Attribute، وتحديث الـ localStorage).
 * 
 * 4. DOM/CSS Mutation (تعديل الـ DOM وتحديث الـ CSS):
 *    يتم تعديل خاصية `data-theme` على عنصر الـ `<html>`، مما يفعّل مباشرة متغيرات الـ CSS المتغيرة (`:root` مقابل `[data-theme="dark"]`)، ويعيد المتصفح رسم الصفحة (Repaint/Reflow) لتظهر الألوان الجديدة بسلاسة.
 */

themeToggleBtn.addEventListener('click', function(event) {
    // منع أي سلوك افتراضي غير مطلوب
    event.preventDefault();

    // جلب الثيم الحالي وتغييره للعكس
    let activeTheme = htmlElement.getAttribute('data-theme');
    let newTheme = activeTheme === 'dark' ? 'light' : 'dark';

    // تطبيق الثيم الجديد على الـ DOM
    htmlElement.setAttribute('data-theme', newTheme);

    // حفظ الاختيار في الـ LocalStorage ليبقى محفوظاً عند تحديث الصفحة
    localStorage.setItem('theme', newTheme);

    // تحديث أيقونة الزر
    updateToggleIcon(newTheme);
});

/**
 * Helper function to update the button icon based on the active theme
 */
function updateToggleIcon(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerHTML = '<span class="icon">✨</span>';
    } else {
        themeToggleBtn.innerHTML = '<span class="icon">🌙</span>';
    }
}