import React, { memo, useEffect,useRef } from 'react'
import {shallowEqual, useDispatch} from 'react-redux'
import { Carousel } from 'antd'
import { getNewAlbumAction } from '../../store/actionCreators'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { useSelector } from 'react-redux'
import {AlbumWrapper} from './style'
import HYAlbumCover from '@/components/album-cover'

export default memo(function HYNewAlbum() {

    const {newAlbums} = useSelector(state=>({
        newAlbums: state.getIn(["recommend","newAlbums"])
    }),shallowEqual);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNewAlbumAction(10));
    },[dispatch])

    const pageRef = useRef();

    return (
        <AlbumWrapper>
            <HYThemeHeaderRCM title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0,1].map(item=>{
                                return <div key={item} className="page">
                                    {
                                        newAlbums.slice(item*5,(item+1)*5).map(iten=>{
                                            return <HYAlbumCover size={100} 
                                            width={118}
                                            bgp="-570px"
                                            info={iten} key={iten.id}/>
                                        })
                                    }
                                </div>
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.prev()}></button>
            </div>
        </AlbumWrapper>
    )
})
