import React, { memo ,useEffect,useRef, useState,useCallback} from 'react'
import { Slider,message } from 'antd';
import {shallowEqual, useDispatch} from 'react-redux'

import { 
    getSongDetailAction,
    changeSequenceAction,
    changeCurrentIndexAndSongAction,
    changeCurrentLyricIndexAction
 } from '../store/actionCreator';
import {getSizeImage,formatDate,getPlaySong} from '@/utils/format-utils'
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default memo(function HYAppPlayerBar() {

    const [currentTime, setCurrentTime] = useState(0);
    
    const dispatch = useDispatch()
    const {
        currentSong,
        sequence,
        lyricList,
        currentLyricIndex
    } = useSelector(state=>({
        currentSong: state.getIn(["player","currentSong"]),
        sequence: state.getIn(["player","sequence"]),
        lyricList: state.getIn(["player","lyricList"]),
        currentLyricIndex: state.getIn(["player","currentLyricIndex"])
    }),shallowEqual)
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id)
        audioRef.current.play().then(res=>{
            setIsPlaying(true)
        }).catch(err=>{
            setIsPlaying(false)
        })
    }, [currentSong])
    const audioRef = useRef();
    const picUrl = currentSong.al && currentSong.al.picUrl
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0
    const showDuration = formatDate(duration,"mm:ss")
    const showCurrentTime = formatDate(currentTime,"mm:ss")
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    

    const timeUpdate = (e) => {
        const currentTime = e.target.currentTime
        //console.log(e.target.currentTime)
        
        if(!isChanging){
            setCurrentTime(currentTime*1000);
            setProgress(currentTime*1000/duration*100)
        }
        //获取当前的歌词
        let i = 0;
        
        for (;i< lyricList.length;i++){
            let lyricItem = lyricList[i]
            if(currentTime*1000<lyricItem.time){
                break;
            }
        }
        if(currentLyricIndex !== (i-1)){
            dispatch(changeCurrentLyricIndexAction(i-1))
            const content = lyricList[i-1] && lyricList[i-1].content
            message.open({
                key: "lyric",
                content: content,
                duration:0,
                className: "lyric-class"
            })
        }
        
        
    }
    //handle function
    const playMusic = () =>{
        
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }

    const sliderChange = useCallback(
        (value) => {
            setIsChanging(true)
            const current = value / 100 * duration ;
            setCurrentTime(current)
            setProgress(value)
        },
        [duration],
    );
    const sliderAfterChange = useCallback(
        (value) => {
            const currentT = value / 100 * duration / 1000;
            audioRef.current.currentTime = currentT
            setCurrentTime(currentT*1000)
            setIsChanging(false)
            if(!isPlaying){
                playMusic()
            }
        },
        [duration,isPlaying,playMusic],
    )

    const changeSequence = () => {
        let currentSequence = sequence + 1;
        if(currentSequence > 2){
            currentSequence = 0;
        }
        dispatch(changeSequenceAction(currentSequence))
    }
    const changeMusic = (tag)=>{
        dispatch(changeCurrentIndexAndSongAction(tag))
    }

    const handleMusicEnded = () =>{
        if(sequence === 2){
            //单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play()
        }else{
            dispatch(changeCurrentIndexAndSongAction(1))
        }
    }

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_player play" onClick={e => playMusic()}></button>
                    <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(picUrl,35)}
                                />

                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                            value={progress} />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={e =>{changeSequence()}}></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleMusicEnded} />
        </PlaybarWrapper>
    )
})

