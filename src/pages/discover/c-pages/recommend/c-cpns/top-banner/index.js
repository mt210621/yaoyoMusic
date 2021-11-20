import React, { memo,useEffect,useRef,useCallback,useState } from 'react'
import { useSelector, useDispatch,shallowEqual} from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function HYTopBanner() {
    const [currentIndex,setCurrentIndex] = useState(0)
    // 组件和redux关联： 获取数据 和进行操作
    const {topBanners} = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend","topBanners"])
    }),shallowEqual)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTopBannerAction());
    },[dispatch]);

    const bannerRef = useRef();
    
    const bannerChange = useCallback((from,to)=>{
        setCurrentIndex(to)
    },[]);

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay beforeChange={bannerChange} ref={bannerRef}>
                        {
                            topBanners.map((item,index)=>{
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight/>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
