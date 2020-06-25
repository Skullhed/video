import React, {Component} from 'react';
import { AppRegistry, View,  StatusBar, StyleSheet } from 'react-native';
import Video from 'react-native-af-video-player';
import GoogleCast, { CastButton } from "react-native-google-cast";

export default class App extends Component{
    startCast = () => {
        GoogleCast.castMedia({
            mediaUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
            imageUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/images/480x270/BigBuckBunny.jpg',
            title: 'Big Buck Bunny',
            subtitle:
                'A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to go kill yourself!',
            studio: 'Blender foundation',
            streamDuration: 596,
            contentType: 'video/mp4',
            playPosition: 10,
            customData: {
                customKey: 'customValue',
            }
        });
    }
    render() {
        return(
            <CastButton style={{ width: 24, height: 24, }}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
