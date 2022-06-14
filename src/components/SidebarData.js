import React from 'react'
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiIcons.BiHomeHeart />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <BiIcons.BiHappy />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <BiIcons.BiPalette />,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <BiIcons.BiBriefcaseAlt />,
        cName: 'nav-text'
    },
]