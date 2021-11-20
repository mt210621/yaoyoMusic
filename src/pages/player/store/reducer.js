import { Map } from 'immutable'

import * as actionTypes from './contants'

const defaultState = Map({
    playList: [
        // {
        //     "name": "漠河舞厅·2022",
        //     "id": 1894094482,
        //     "pst": 0,
        //     "t": 0,
        //     "ar": [
        //         {
        //             "id": 1060132,
        //             "name": "柳爽",
        //             "tns": [],
        //             "alias": []
        //         }
        //     ],
        //     "alia": [],
        //     "pop": 100,
        //     "st": 0,
        //     "rt": "",
        //     "fee": 8,
        //     "v": 3,
        //     "crbt": null,
        //     "cf": "",
        //     "al": {
        //         "id": 135992033,
        //         "name": "漠河舞厅·2022",
        //         "picUrl": "https://p2.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg",
        //         "tns": [],
        //         "pic_str": "109951166609630672",
        //         "pic": 109951166609630670
        //     },
        //     "dt": 304195,
        //     "h": {
        //         "br": 320000,
        //         "fid": 0,
        //         "size": 12169965,
        //         "vd": -45176
        //     },
        //     "m": {
        //         "br": 192000,
        //         "fid": 0,
        //         "size": 7301997,
        //         "vd": -42579
        //     },
        //     "l": {
        //         "br": 128000,
        //         "fid": 0,
        //         "size": 4868013,
        //         "vd": -40904
        //     },
        //     "a": null,
        //     "cd": "01",
        //     "no": 0,
        //     "rtUrl": null,
        //     "ftype": 0,
        //     "rtUrls": [],
        //     "djId": 0,
        //     "copyright": 0,
        //     "s_id": 0,
        //     "mark": 0,
        //     "originCoverType": 1,
        //     "originSongSimpleData": null,
        //     "tagPicList": null,
        //     "resourceState": true,
        //     "version": 3,
        //     "songJumpInfo": null,
        //     "single": 0,
        //     "noCopyrightRcmd": null,
        //     "rtype": 0,
        //     "rurl": null,
        //     "mst": 9,
        //     "cp": 0,
        //     "mv": 0,
        //     "publishTime": 0
        // },
        // {
        //     "name": "路过人间",
        //     "id": 1888915574,
        //     "pst": 0,
        //     "t": 0,
        //     "ar": [
        //         {
        //             "id": 10200,
        //             "name": "郁可唯",
        //             "tns": [],
        //             "alias": []
        //         }
        //     ],
        //     "alia": [],
        //     "pop": 100,
        //     "st": 0,
        //     "rt": "",
        //     "fee": 8,
        //     "v": 4,
        //     "crbt": null,
        //     "cf": "",
        //     "al": {
        //         "id": 135115949,
        //         "name": "时光音乐会 第1期",
        //         "picUrl": "https://p2.music.126.net/b_lFQUHgdaOvuBgf8wMO0w==/109951166557050112.jpg",
        //         "tns": [],
        //         "pic_str": "109951166557050112",
        //         "pic": 109951166557050110
        //     },
        //     "dt": 288546,
        //     "h": {
        //         "br": 320000,
        //         "fid": 0,
        //         "size": 11544076,
        //         "vd": -45493
        //     },
        //     "m": {
        //         "br": 192000,
        //         "fid": 0,
        //         "size": 6926463,
        //         "vd": -42914
        //     },
        //     "l": {
        //         "br": 128000,
        //         "fid": 0,
        //         "size": 4617657,
        //         "vd": -41403
        //     },
        //     "a": null,
        //     "cd": "01",
        //     "no": 5,
        //     "rtUrl": null,
        //     "ftype": 0,
        //     "rtUrls": [],
        //     "djId": 0,
        //     "copyright": 0,
        //     "s_id": 0,
        //     "mark": 0,
        //     "originCoverType": 1,
        //     "originSongSimpleData": null,
        //     "tagPicList": null,
        //     "resourceState": true,
        //     "version": 4,
        //     "songJumpInfo": null,
        //     "single": 0,
        //     "noCopyrightRcmd": null,
        //     "mst": 9,
        //     "cp": 0,
        //     "rtype": 0,
        //     "rurl": null,
        //     "mv": 0,
        //     "publishTime": 0
        // },
        // {
        //     "name": "有何不可",
        //     "id": 167876,
        //     "pst": 0,
        //     "t": 0,
        //     "ar": [
        //         {
        //             "id": 5771,
        //             "name": "许嵩",
        //             "tns": [],
        //             "alias": []
        //         }
        //     ],
        //     "alia": [],
        //     "pop": 100,
        //     "st": 0,
        //     "rt": "600902000007916021",
        //     "fee": 8,
        //     "v": 51,
        //     "crbt": null,
        //     "cf": "",
        //     "al": {
        //         "id": 16953,
        //         "name": "自定义",
        //         "picUrl": "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
        //         "tns": [],
        //         "pic_str": "109951166118671647",
        //         "pic": 109951166118671650
        //     },
        //     "dt": 241840,
        //     "h": {
        //         "br": 320000,
        //         "fid": 0,
        //         "size": 9675799,
        //         "vd": -21099
        //     },
        //     "m": {
        //         "br": 192000,
        //         "fid": 0,
        //         "size": 5805497,
        //         "vd": -18400
        //     },
        //     "l": {
        //         "br": 128000,
        //         "fid": 0,
        //         "size": 3870346,
        //         "vd": -16900
        //     },
        //     "a": null,
        //     "cd": "1",
        //     "no": 3,
        //     "rtUrl": null,
        //     "ftype": 0,
        //     "rtUrls": [],
        //     "djId": 0,
        //     "copyright": 2,
        //     "s_id": 0,
        //     "mark": 8192,
        //     "originCoverType": 1,
        //     "originSongSimpleData": null,
        //     "tagPicList": null,
        //     "resourceState": true,
        //     "version": 51,
        //     "songJumpInfo": null,
        //     "single": 0,
        //     "noCopyrightRcmd": null,
        //     "rtype": 0,
        //     "rurl": null,
        //     "mst": 9,
        //     "cp": 22036,
        //     "mv": 0,
        //     "publishTime": 1231516800000
        // }
    ],
    currentSongIndex : 0,
    currentSong: {},
    lyricList:[],
    currentLyricIndex: 0,
    sequence: 0 // 0 循环播放 1 随机 2 单曲循环
});

function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList",action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.index)
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence)
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList",action.lyricList)
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex",action.index)
        default:
            return state;
    }
}

export default reducer