/* eslint-disable unicorn/filename-case */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure({
    name: 'Pheraas',
    host: 'localhost',
  })
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // Make Reactotron available globally
  console.tron = Reactotron;
}

export default Reactotron;
