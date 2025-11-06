import './App.css'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, error } = useProducts();

  if (error) return <div>{error.message}</div>;

  return (
    <ul>
      {products.map((p, i) => (
        <li key={i}>{JSON.stringify(p)}</li>
      ))}
    </ul>
  );
}


export default App
