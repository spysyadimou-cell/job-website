// قاعدة بيانات الوظائف الشاملة
const jobsData = [
    // التعليم
    {
        id: 1,
        title: "مدرس لغة عربية",
        company: "ثانوية الأمل",
        location: "عنابة",
        category: "تعليم",
        experience: "متوسط",
        type: "دوام كامل",
        description: "مطلوب مدرس لغة عربية للتدريس في المرحلة الثانوية"
    },
    {
        id: 2,
        title: "معلم ابتدائي",
        company: "مدرسة النور",
        location: "الطارف",
        category: "تعليم",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب معلم للصفوف الابتدائية"
    },

    // الصحة
    {
        id: 3,
        title: "طبيب عام",
        company: "مستشفى الولاية",
        location: "قالمة",
        category: "صحة",
        experience: "خبير",
        type: "دوام كامل",
        description: "مطلوب طبيب عام للعمل في العيادة الخارجية"
    },
    {
        id: 4,
        title: "ممرض",
        company: "عيادة الصحة",
        location: "سوق أهراس",
        category: "صحة",
        experience: "متوسط",
        type: "دوام كامل",
        description: "مطلوب ممرض للعمل في العيادة الصحية"
    },

    // الهندسة
    {
        id: 5,
        title: "مهندس مدني",
        company: "شركة الإنشاءات",
        location: "تبسة",
        category: "هندسة",
        experience: "خبير",
        type: "دوام كامل",
        description: "مطلوب مهندس مدني للإشراف على المشاريع"
    },
    {
        id: 6,
        title: "مهندس كهرباء",
        company: "الشركة الوطنية",
        location: "قسنطينة",
        category: "هندسة",
        experience: "متوسط",
        type: "دوام كامل",
        description: "مطلوب مهندس كهرباء للصيانة والتشغيل"
    },

    // التقنية
    {
        id: 7,
        title: "مبرمج ويب",
        company: "شركة التقنية",
        location: "عنابة",
        category: "تقنية",
        experience: "متوسط",
        type: "دوام كامل",
        description: "مطلوب مبرمج ويب لتطوير التطبيقات"
    },

    // المحاسبة
    {
        id: 8,
        title: "محاسب",
        company: "الشركة المتحدة",
        location: "الطارف",
        category: "محاسبة",
        experience: "متوسط",
        type: "دوام كامل",
        description: "مطلوب محاسب لإدارة الحسابات المالية"
    },

    // الإدارة
    {
        id: 9,
        title: "مدير مكتب",
        company: "مجموعة الأعمال",
        location: "قالمة",
        category: "إدارة",
        experience: "خبير",
        type: "دوام كامل",
        description: "مطلوب مدير مكتب للإشراف على الأعمال الإدارية"
    },

    // البناء
    {
        id: 10,
        title: "بناء",
        company: "مقاولة البناء",
        location: "سوق أهراس",
        category: "بناء",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب بناء للعمل في مشاريع البناء"
    },

    // الخدمات
    {
        id: 11,
        title: "سائق",
        company: "شركة النقل",
        location: "تبسة",
        category: "نقل",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب سائق لقيادة مركبات الشركة"
    },

    // المبيعات
    {
        id: 12,
        title: "بائع",
        company: "المتجر الكبير",
        location: "قسنطينة",
        category: "بيع",
        experience: "مبتدئ",
        type: "دوام جزئي",
        description: "مطلوب بائع للعمل في المتجر"
    },

    // الزراعة
    {
        id: 13,
        title: "عامل زراعي",
        company: "مزرعة النخيل",
        location: "عنابة",
        category: "زراعة",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب عامل زراعي للعمل في المزرعة"
    },

    // الصناعة
    {
        id: 14,
        title: "عامل إنتاج",
        company: "المصنع الحديث",
        location: "الطارف",
        category: "صناعة",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب عامل إنتاج للعمل في المصنع"
    },

    // الفنادق
    {
        id: 15,
        title: "عامل نظافة",
        company: "الفندق الدولي",
        location: "قالمة",
        category: "فنادق",
        experience: "مبتدئ",
        type: "دوام كامل",
        description: "مطلوب عامل نظافة للعمل في الفندق"
    }
];

// متغيرات التطبيق
let currentJobs = [];
let displayedJobs = 6;
let currentState = 'all';
let currentCategory = '';
let currentExperience = '';
let currentJobType = '';

// ✅ الدوال الثلاثة المطلوبة:

// 1. نظام التقديم للوظائف
function applyForJob(jobId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        if (confirm('يجب تسجيل الدخول للتقدم للوظيفة. هل تريد الانتقال لصفحة التسجيل؟')) {
            window.location.href = 'login.html';
        }
        return;
    }

    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        const newApplication = {
            id: Date.now(),
            userId: currentUser.id,
            jobId: job.id,
            jobTitle: job.title,
            company: job.company,
            appliedAt: new Date().toISOString(),
            status: 'pending'
        };

        applications.push(newApplication);
        localStorage.setItem('applications', JSON.stringify(applications));

        alert(`تم التقدم بنجاح للوظيفة: ${job.title}\nفي شركة: ${job.company}\n\nسيتم مراجعة طلبك وسنتواصل معك قريباً.`);
    }
}

// 2. تحديث القوائم
function updateNavigation() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const navButtons = document.querySelector('.nav-buttons');
    
    if (currentUser && navButtons) {
        navButtons.innerHTML = `
            <a href="dashboard.html" class="btn btn-login">لوحة التحكم</a>
            <a href="#" class="btn btn-register" onclick="logout()">تسجيل الخروج</a>
        `;
    } else if (navButtons) {
        navButtons.innerHTML = `
            <a href="login.html" class="btn btn-login">تسجيل الدخول</a>
            <a href="register.html" class="btn btn-register">إنشاء حساب</a>
        `;
    }
}

// 3. تسجيل الخروج
function logout() {
    localStorage.removeItem('currentUser');
    updateNavigation();
    window.location.reload();
}

// ✅ التهيئة مع updateNavigation
function initializeApp() {
    currentJobs = [...jobsData];
    displayJobs();
}

function setupEventListeners() {
    // بحث الوظائف
    const searchBtn = document.getElementById('searchBtn');
    const mainSearch = document.getElementById('mainSearch');
    
    if (searchBtn && mainSearch) {
        searchBtn.addEventListener('click', searchJobs);
        mainSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchJobs();
        });
    }

    // فلتر الولايات
    document.querySelectorAll('.state-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentState = this.dataset.state;
            filterJobs();
        });
    });

    // فلتر التخصصات والمستويات
    const categoryFilter = document.getElementById('categoryFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const jobTypeFilter = document.getElementById('jobTypeFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            currentCategory = this.value;
            filterJobs();
        });
    }
    
    if (experienceFilter) {
        experienceFilter.addEventListener('change', function() {
            currentExperience = this.value;
            filterJobs();
        });
    }
    
    if (jobTypeFilter) {
        jobTypeFilter.addEventListener('change', function() {
            currentJobType = this.value;
            filterJobs();
        });
    }

    // تحميل المزيد
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreJobs);
    }

    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لك! تم إرسال رسالتك بنجاح.');
            this.reset();
        });
    }
}

function searchJobs() {
    const searchText = document.getElementById('mainSearch').value.toLowerCase().trim();
    
    if (searchText) {
        currentJobs = jobsData.filter(job => 
            job.title.toLowerCase().includes(searchText) ||
            job.company.toLowerCase().includes(searchText) ||
            job.description.toLowerCase().includes(searchText) ||
            job.category.toLowerCase().includes(searchText)
        );
        displayedJobs = 6;
        displayJobs();
    } else {
        currentJobs = [...jobsData];
        filterJobs();
    }
}

function filterJobs() {
    let filteredJobs = [...jobsData];

    // فلتر الولاية
    if (currentState !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.location === getStateName(currentState));
    }

    // فلتر التخصص
    if (currentCategory) {
        filteredJobs = filteredJobs.filter(job => job.category === currentCategory);
    }

    // فلتر الخبرة
    if (currentExperience) {
        filteredJobs = filteredJobs.filter(job => job.experience === currentExperience);
    }

    // فلتر نوع العمل
    if (currentJobType) {
        filteredJobs = filteredJobs.filter(job => job.type === currentJobType);
    }

    currentJobs = filteredJobs;
    displayedJobs = 6;
    displayJobs();
}

function getStateName(stateCode) {
    const states = {
        'annaba': 'عنابة',
        'el_taref': 'الطارف',
        'guelma': 'قالمة',
        'souk_ahras': 'سوق أهراس',
        'tebessa': 'تبسة',
        'constantine': 'قسنطينة'
    };
    return states[stateCode] || stateCode;
}

function displayJobs() {
    const jobsContainer = document.getElementById('jobsContainer');
    if (!jobsContainer) return;

    const jobsToShow = currentJobs.slice(0, displayedJobs);

    if (jobsToShow.length === 0) {
        jobsContainer.innerHTML = `
            <div class="empty-state">
                <h3>لا توجد وظائف</h3>
                <p>لم نعثر على وظائف تطابق معايير البحث الخاصة بك</p>
                <button class="btn btn-primary" onclick="resetFilters()">عرض جميع الوظائف</button>
            </div>
        `;
    } else {
        jobsContainer.innerHTML = jobsToShow.map(job => `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-location">ولاية ${job.location}</div>
                <div class="job-title">${job.title}</div>
                <div class="job-company">${job.company}</div>
                
                <div class="job-details">
                    <div class="job-detail">${job.type}</div>
                    <div class="job-detail">${job.experience}</div>
                    <div class="job-detail">${job.category}</div>
                </div>
                
                <div class="job-description">${job.description}</div>
                
                <button class="apply-btn" onclick="applyForJob(${job.id})">التقدم للوظيفة</button>
            </div>
        `).join('');
    }

    // إظهار/إخفاء زر تحميل المزيد
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedJobs < currentJobs.length ? 'block' : 'none';
    }
}

function loadMoreJobs() {
    displayedJobs += 6;
    displayJobs();
}

function resetFilters() {
    currentJobs = [...jobsData];
    currentState = 'all';
    currentCategory = '';
    currentExperience = '';
    currentJobType = '';
    
    document.querySelectorAll('.state-btn').forEach(btn => btn.classList.remove('active'));
    const allStatesBtn = document.querySelector('.state-btn[data-state="all"]');
    if (allStatesBtn) {
        allStatesBtn.classList.add('active');
    }
    
    const categoryFilter = document.getElementById('categoryFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const jobTypeFilter = document.getElementById('jobTypeFilter');
    const mainSearch = document.getElementById('mainSearch');
    
    if (categoryFilter) categoryFilter.value = '';
    if (experienceFilter) experienceFilter.value = '';
    if (jobTypeFilter) jobTypeFilter.value = '';
    if (mainSearch) mainSearch.value = '';
    
    displayedJobs = 6;
    displayJobs();
}

// ✅ التهيئة الرئيسية مع updateNavigation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateNavigation(); // ✅ هذا السطر موجود
});