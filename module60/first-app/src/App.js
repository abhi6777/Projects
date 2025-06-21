import logo from './logo.svg';
import './App.css';

function Person(props) {
  return <p>Name: {props.name}, Age: {props.age} </p>;
};

function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function Header(props) {
  return <header>{props.title}</header>
};

function List(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div>
      <div>
        <Person name="Abhimanyu" age={21} />
        <Button text="Click Me" onClick={() => alert('Clicked')}/>
        <Header title="Abhimanyu"/>
        <List items={['Apple', 'Banana', 'Mango']}/>
      </div>
    </div>
  );
};

export default App;
