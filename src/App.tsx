import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from '@chakra-ui/react';
import { Loading } from './components/Loading';

const Table = lazy(() => {
  return import('./pages/Table').then(module => ({ default: module.Table }));
});
const CreateRecord = lazy(() => {
  return import('./pages/CreateRecord').then(module => ({ default: module.CreateRecord }));
});
const EditRecord = lazy(() => {
  return import('./pages/EditRecord').then(module => ({ default: module.EditRecord }));
});

const router = createBrowserRouter([
  { path: '/', element: <Table /> },
  { path: '/create', element: <CreateRecord /> },
  { path: '/edit/:id', element: <EditRecord /> }
]);

function App() {
  return (
    <Container mt="30px" maxW="4xl">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Container>
  )
}

export default App;
