import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage'; // <- adicionem essa parte

if (__DEV__) {
    const tron = Reactotron.configure({ host: '127.0.0.1' })
        .useReactNative()
        .setAsyncStorageHandler(AsyncStorage) // <- adicionem essa parte
        .connect();

    console.tron = tron;

    tron.clear();
}
