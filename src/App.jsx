import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin border-t-blue-500"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  const [data, setData] = useState(null); // Yüklenen veri
  const [loading, setLoading] = useState(true); // Yükleme durumu

  useEffect(() => {
    // Yapay bir gecikme simülasyonu
    const timer = setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 3000); // 3 saniye (3000 ms) gecikme

    return () => clearTimeout(timer); // Temizlik
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Data:</h1>
      <pre className="bg-gray-100 p-4 rounded-md shadow-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
