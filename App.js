import {StatusBar} from 'expo-status-bar';
import styled from 'styled-components/native';
import {Home} from './src/pages/home/index';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppView = styled.SafeAreaView`
    flex: 1;`
const Status = styled.StatusBar``
const Title = styled.Text`
    font-size: 150px;
    color: pink;`

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden={true}/>
            <Home />
        </SafeAreaView>
    );
}

