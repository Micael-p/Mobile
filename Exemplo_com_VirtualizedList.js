import React from 'react';
import { View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

  const getItems = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  });

  const getItemCount = (data) => 100;

  const Item = ({ title }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    </View>
  );

  const App = () => {
    return (
      <View style={styles.container}>
        <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} /> }
        keyExtrator={item => item.key}
        getItemCount={getItemCount}
        getItem={getItems}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  item: {
    backgroundColor: 'gray',
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
  },

  title: {
    fontSize: 22,
  },
});
export default App;
