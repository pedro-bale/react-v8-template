import ReactDOM from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    return (
        <div />
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
