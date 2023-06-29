import { createRouter, createWebHistory } from 'vue-router'
import landingPage from './landingPage'
import projectsPage from './projectsPage'
import accessPolicy from './policyPage'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'home', path: '/', component: landingPage },
        { name: 'projects',path: '/projects', component: projectsPage },
        { name: 'policy',path: '/policy', component: accessPolicy },
    ]
})

export default router