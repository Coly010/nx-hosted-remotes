import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const TestRemote = React.lazy(() => import('react-test-remote/Module'))

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test-remote">Test Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-shell" />} />
        <Route path="/test-remote" element={<TestRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
