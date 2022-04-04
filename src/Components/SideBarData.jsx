import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from 'react-icons/hi'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Trending',
        path: '/',
        icon: <AiIcons.AiOutlineFire />,
        cName: 'nav-text',
    },
    {
        title: 'Subscriptions',
        path: '/',
        icon: <MdIcons.MdOutlineSubscriptions />,
        cName: 'nav-text',
    },
    {
        title: 'Library',
        path: '/',
        icon: <AiIcons.AiFillFolder />,
        cName: 'nav-text',
    },
    {
        title: 'History',
        path: '/',
        icon: <RiIcons.RiFilePaper2Fill />,
        cName: 'nav-text',
    },
    {
        title: 'Watch later',
        path: '/',
        icon: <AiIcons.AiFillClockCircle />,
        cName: 'nav-text',
    },
    {
        title: 'Favourites',
        path: '/',
        icon: <AiIcons.AiFillStar />,
        cName: 'nav-text',
    },
    {
        title: 'Liked videos',
        path: '/',
        icon: <AiIcons.AiOutlineHeart />,
        cName: 'nav-text',
    },
    {
        title: 'Music',
        path: '/',
        icon: <HiIcons.HiOutlineMusicNote />,
        cName: 'nav-text',
    },
    {
        title: 'Games',
        path: '/',
        icon: <GiIcons.GiConsoleController />,
        cName: 'nav-text',
    },
    {
        title: 'Show more',
        path: '/',
        icon: <MdIcons.MdKeyboardArrowDown />,
        cName: 'nav-text',
    },
]
