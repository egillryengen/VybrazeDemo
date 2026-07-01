import { AppRegistry, Text, View } from 'react-native';

function TestApp() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
      <Text>TEST APP RUNNER</Text>
    </View>
  );
}

AppRegistry.registerComponent('main', () => TestApp);
export default TestApp;
