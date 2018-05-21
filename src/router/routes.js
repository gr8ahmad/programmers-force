import Home from '../components/home/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import ProjectList from '../components/portfolio/projects/ProjectList.vue'
import Project from '../components/portfolio/projects/Project.vue'
import VueParticlesAdmin from '../components/vue-particles/VueParticlesAdmin.vue'
import About from '../components/pages/About.vue'
import Careers from '../components/pages/careers/Careers.vue'
import JobList from '../components/pages/careers/jobs/JobList.vue'
import JobDetails from '../components/pages/careers/jobs/JobDetails.vue'
import Contact from '../components/pages/Contact.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import NewProject from '../components/portfolio/projects/NewProject.vue'
import Login from '../components/dashboard/Login.vue';
export const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '',
        component: Home
    },
    {
        path: '/portfolio',
        component: Portfolio,
        children: [
            {
                path: '',
                component: ProjectList,
            },
            {
                path: ':id',
                component: Project
            }
    ]
    },
    {
        path: '/vp-admin',
        component: VueParticlesAdmin
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/careers',
        component: Careers,
        children: [
            {
                path: '',
                component: JobList
            },
            {
                path: ':id',
                component: JobDetails
            }
        ]
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/admin',
        name: 'admin',
        component: Dashboard,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'new-project',
                component: NewProject
    }
    ]
    }

]
