import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'home',
        path: `/hello`,
        component: lazy(() => import('@/views/Home')),
        authority: []
    },
    // Additional shared routes can be added here
]

export default sharedRoutes