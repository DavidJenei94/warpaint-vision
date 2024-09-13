import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './components/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
