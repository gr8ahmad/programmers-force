import  Home  from './components/Home.vue'
import  Portfolio  from './components/portfolio/Portfolio.vue'
import  ProjectList  from './components/portfolio/projects/ProjectList.vue'
import  Project  from './components/portfolio/projects/Project.vue'
import  VueParticlesAdmin  from './components/vue-particles/VueParticlesAdmin.vue'
export const routes = [
    {path: '', component: Home},
    {path: '/portfolio', component: Portfolio, children: [
        {path: '', component: ProjectList,},
        {path: ':id', component: Project}
    ]},
    {path: '/vp-admin', component: VueParticlesAdmin},
]