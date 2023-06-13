import Expenses from "./components/Expenses";

function App() {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible 2';
  // document.getElementById('root').append(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>

      <Expenses />
    </div>
  );
}

export default App;
