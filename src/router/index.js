import React from 'react';

//懒加载的路由形式
// const HYDiscover = React.lazy(()=> import('@/pages/discover'))


import HYDiscover from '@/pages/discover'
import HYMine from '@/pages/mine'
import HYFriend from '@/pages/friend'
import { Redirect } from 'react-router';

import HYRecommend from '../pages/discover/c-pages/recommend'
import HYRanking from '../pages/discover/c-pages/ranking'
import HYSongs from '../pages/discover/c-pages/songs'
import HYDJRadio from '../pages/discover/c-pages/djradio'
import HYArtist from '../pages/discover/c-pages/artist'
import HYAlbum from '../pages/discover/c-pages/album'
import HYPlayer from '../pages/player'

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: HYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: ()=>(
                    <Redirect to={"/discover/album"}/>
                )
            },
            {
                path:"/discover/recommend",
                component:HYRecommend
            },
            {
                path:'/discover/ranking',
                component:HYRanking
            },
            {
                path:'/discover/songs',
                component:HYSongs
            },
            {
                path:'/discover/djradio',
                exact:true,
                component:HYDJRadio
            },
            {
                path:'/discover/artist',
                component:HYArtist
            },
            {
                path:'/discover/album',
                component:HYAlbum
            },
            {
                path:'/discover/player',
                component: HYPlayer
            }
        ]
    },
    {
        path: '/mine',
        component: HYMine
    },
    {
        path: '/friend',
        component: HYFriend
    }
];

export default routes;