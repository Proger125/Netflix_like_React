import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/main/Content';

function App() {
  return (
    <>
    <ErrorBoundary FallbackComponent={customFallbackComponent}>
      <Header />
        <Content/>
        <Footer>
            <span className="logo-text"><b>netflix</b>roulette</span> 
        </Footer>
    </ErrorBoundary>
    </>
  );
}

const customFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default App;
