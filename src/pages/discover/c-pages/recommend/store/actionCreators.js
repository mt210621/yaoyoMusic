import * as actionTypes from './constants'

import {getNewAlbums,getTopList} from '@/services/recommend'
import {getTopBanners,getHotRecommends} from '@/services/recommend' 

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}
const changeNewAblumAction = (res)=>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbums:res
})

const changeUpRankingAction = (res)=>({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})
const changeNewRankingAction = (res)=>({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})
const changeOriginRankingAction = (res)=>({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const getHotRecommendAction = (limit) =>{
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res));
        })
    }
}
export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res=>{
            console.log(res)
            const album = res.albums
            dispatch(changeNewAblumAction(album));
        })
    }
}

export const getTopListAction = (idx)=>{
    return dispatch => {
        getTopList(idx).then(res=>{
            switch(idx){
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break
                case 3:
                    dispatch(changeOriginRankingAction(res));
                    break
                default:

                
            }
        })
    }
}