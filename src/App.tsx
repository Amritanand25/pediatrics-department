import React from 'react';
import { PediatricsHeader } from './components/PediatricsHeader';
import { PatientTable } from './components/PatientTable';
import { PatientProvider } from './context/PatientContext';

function App() {

  return (
    <div >
       <PatientProvider>
      <div className="min-h-screen bg-gray-100">
        <PediatricsHeader />
        <main className="container mx-auto px-4 py-8">
          <PatientTable />
        </main>
      </div>
    </PatientProvider>
    </div>
  );
}

export default App;