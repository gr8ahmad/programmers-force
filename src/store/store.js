import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pfProjects: [
            {
                projectName: 'BuySellCrypto',
                projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/02/buysellcrypto-portfolio.png',
                projectUrl: '#',
                projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    },
            {
                projectName: 'StafTimer',
                projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/01/portfolio-staff-timer.png',
                projectUrl: '#',
                projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    },
            {
                projectName: 'Shuftipro',
                projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/01/portfolio-shuftipro.png',
                projectUrl: '#',
                projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    }
        ],
        pfTeam: [
            {
                name: 'Mr. SM Khurram',
                title: 'Co-founder',
                imgPath: 'https://pf.com.pk/wp-content/uploads/2018/03/xSM-khurram-img.png.pagespeed.ic.HZ3rilIZub.webp'
            },
            {
                name: 'Mr. Arslan Hanif',
                title: 'Co-founder',
                imgPath: 'https://pf.com.pk/wp-content/uploads/2018/03/xMr-arslan-img.png.pagespeed.ic.0DB63NAccp.webp'
            },
            {
                name: 'Jack Sparrow',
                title: 'Javascript Developer',
                imgPath: 'http://pmha.org.pk/wp-content/uploads/2017/10/pmha-dummy.jpg'
            },
            {
                name: 'Hector Barbosa',
                title: 'PHP Developer',
                imgPath: 'http://pmha.org.pk/wp-content/uploads/2017/10/pmha-dummy.jpg'
            },
            {
                name: 'Davy Jones',
                title: 'Ruby on Rails Developer',
                imgPath: 'http://pmha.org.pk/wp-content/uploads/2017/10/pmha-dummy.jpg'
            },
            {
                name: 'Captain Salazar',
                title: 'JAVA DEVELOPER',
                imgPath: 'http://pmha.org.pk/wp-content/uploads/2017/10/pmha-dummy.jpg'
            },
        ],
        pfJobs: [
            {
                title: 'Full Stack / PHP Developer',
                description: 'Programmers Force is a Fintech development company that develops applications for large financial institutes around the world. We provide our expertise to develop alternative finance applications and we are developing our own machine-learning-based fraud prediction system to minimise chargebacks merchants face online.',
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            },
            {
                title: 'Android Developer',
                description: 'We are looking for an Android Developer who possesses a passion for pushing mobile technologies to the limits. This Android app developer will work with our team of talented engineers to design and build the next generation of our mobile applications.',
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            },
            {
                title: 'Front End Developer',
                description: 'We are looking for a qualified and experienced Front-end developer to join our IT team. You will be responsible for building the ?client-side? of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.',
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            },
            {
                title: 'Server Manager',
                description: 'Programmers Force is a Fintech development company that develops applications for large financial institutes around the world. We provide our expertise to develop alternative finance applications and we are developing our own machine-learning-based fraud prediction system to minimise chargebacks merchants face online.',
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            },
            {
                title: 'System Architect (PHP)',
                description: 'This is a key role which will suit a very strong senior developer and software architect who is happy working in a small dynamic team and taking full responsibility for completing feature enhancements within Programmers Force?s overall development cycle as well driving the development of our new projects on PHP platform.'
                ,
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            },
            {
                title: 'Project Manager',
                description: 'We are looking for a Project Manager/ Senior Web Developer with extensive experience in PHP / LAMP, MySQL, HTML5, JavaScript and CSS3 to join our team. If you are a Senior having 3 to 5 years of experience with solid PHP / LAMP, MySQL, JavaScript, HTML5 and CSS3 experience, please read on!',
                skills: [
                    'Good knowledge of fundamental principles behind OOP and defensive programming',
                    'Backend development experience in Php5/Php 7 is must', 'Strong grip on Codeigniter/Laravel', 'Bash', 'Ubuntu Server management',
                ],
                mustHave: [
                    'Good communication and presentation skills', 'Critical analysis and argument skills', 'Punctuality', 'Critical analysis and argument skills'
                ]
            }
        ],
        pfPerks: [
                    '25 paid holidays yearly/unused leaves can be enchased at double pay rate', 'Double pay rate for overtime', 'Lucrative salary increments based on performance', 'Lunch provided', 'EOBI Facility', 'Facility to enjoy indoor games'
                ]
    },
    getters: {
        getProjects: state => {
            return state.pfProjects;
        },
        getTeam: state => {
            return state.pfTeam.slice();
        },
        getJobs: state => {
            return state.pfJobs.slice();
        },
        getPerks: state=> {
            return state.pfPerks;
        },
        removeProject: (state, index) => {
            state.pfProjects.splice(index, 1);
        }
    }
})
