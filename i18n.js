i18next.init({
    lng: 'en',
    resources: {
      en: {
            translation: {
                softwareEngineer: 'Software Engineer Steven Jones II',
                email: "Email spj2nd@gmail.com ",
                download: "Download Resume",
                aboutText: "Hello welcome to my Website!",
                p1n: "C++ Projects",
                p2n: "Python Projects",
                p3n: "Modder Projects",
                skill1n: "What Tech I Used",
                skill2n: "What I Learned",
                skill3n: "What Comes Next",
            }
        },
      es: {
            translation: {
                softwareEngineer: "Ingeniero de Software Steven Jones II",
                email: "correo electrónico spj2nd@gmail.com ",
                download: "Descargar Currículum",
                aboutText: "Hola bienvenido a mi Sitio Web!",
                p1n: "Proyectos de C++",
                p2n: "Proyectos de Python",
                p3n: "Proyectos de Modder",
                skill1n: "Tecnologías Usadas",
                skill2n: "Tecnologías Aprendidas",
                skill3n: "Proximamente",
            }
        },
      ja: {
            translation: {
                softwareEngineer: "ソフトウェアエンジニアのスティーブン・ジョーンズ",
                email: "メール spj2nd@gmail.com ",
                download: "履歴書のダウンロード",
                aboutText: "こんにちは！私のウェブページにようこそ！",
                p1n: "C++プロジェクト",
                p2n: "Pythonプロジェクト",
                p3n: "Modderプロジェクト",
                skill1n: "使用した技術",
                skill2n: "学びた技術",
                skill3n: "次の目標",
            }
        }
    }
  }).then(() => {
    document.getElementById('english').addEventListener('click', () => {
        i18next.changeLanguage('en');
    });

    document.getElementById('spanish').addEventListener('click', () => {
        i18next.changeLanguage('es');
    });

    document.getElementById('japanese').addEventListener('click', () => {
        i18next.changeLanguage('ja');
    })

    function updateContent() {
        document.getElementById('download').textContent = i18next.t('download');
        document.getElementById('email').textContent = i18next.t('email');
        document.getElementById('softwareEngineer').textContent = i18next.t('softwareEngineer');
        document.getElementById('aboutText').textContent = i18next.t('aboutText');
        document.getElementById('p1n').textContent = i18next.t('p1n');
        document.getElementById('p2n').textContent = i18next.t('p2n');
        document.getElementById('p3n').textContent = i18next.t('p3n');
        document.getElementById('skill1n').textContent = i18next.t('skill1n');
        document.getElementById('skill2n').textContent = i18next.t('skill2n');
        document.getElementById('skill3n').textContent = i18next.t('skill3n');
    }

    updateContent();
    i18next.on('languageChanged', () => {
        updateContent();
    });
}); 