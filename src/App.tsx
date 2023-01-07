import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from '@chakra-ui/react';
import { Loading } from './components/Loading';

const expandModule = (name: string) => {
  return import(`./pages/${name}`).then(module => ({ default: module[name] }));
}

const Table = lazy(() => expandModule('Table'));
const CreateRecord = lazy(() => expandModule('CreateRecord'));
const EditRecord = lazy(() => expandModule('EditRecord'));

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
