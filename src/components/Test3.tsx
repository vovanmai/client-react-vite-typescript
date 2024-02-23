import {Suspense, lazy} from 'react'
const Test4 = lazy(() => import("@/components/Test4"));
export default function App() {
  return (
    <div>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Test4 />
      </Suspense>
    </div>
  );
}
