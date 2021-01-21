
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from './components/TodoInsert';

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
     
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.appTitle}>Get it Done!</Text>
      <Text style={styles.appPara}>If you want it, work for it. It's that simple</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  appTitle: {
    color: '#fff',
    fontSize: 60,
    marginTop: 30,
    
    fontWeight: '300',
    fontFamily: "poppins",
    textAlign: 'center',
    backgroundColor: '#ff0000',
    paddingTop: 50,
  },

  appPara: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
    fontWeight: '300',
    fontFamily: "poppins",
    textAlign: 'center',
    backgroundColor: '#ff0000',
  
  },


  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
