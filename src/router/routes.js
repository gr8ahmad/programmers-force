import Home from '../components/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import ProjectList from '../components/portfolio/projects/ProjectList.vue'
import Project from '../components/portfolio/projects/Project.vue'
import VueParticlesAdmin from '../components/vue-particles/VueParticlesAdmin.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Careers from '../views/Careers.vue'
import Contact from '../views/Contact.vue'
import Dashboard from '../components/dashboard/Index.vue'
import NewProject from '../components/portfolio/projects/NewProject.vue'
export const routes = [
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
        path: '/services',
        component: Services
    },
    {
        path: '/careers',
        component: Careers
    },
    {
        path: '/contact',
        component: Contact
    },
    {path: '/admin', component: Dashboard, children: [
    {
        path: 'new-project',
        component: NewProject
    }
    ]}

]
