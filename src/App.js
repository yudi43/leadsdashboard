import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import DataList from './DataList';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBab-G7F-B37NF3jGO8YvM7sDmkuFleF5I",
      authDomain: "leadgenlp.firebaseapp.com",
      databaseURL: "https://leadgenlp-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "leadgenlp",
      storageBucket: "leadgenlp.appspot.com",
      messagingSenderId: "701596933248",
      appId: "1:701596933248:web:204e04eb6d0eb2ec805a65",
      measurementId: "G-14QFLYWYGN"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const databaseRef = ref(database, 'leads');

    // Listen for changes on the 'leads' reference
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      // Convert the object into an array of entries
      const entries = data ? Object.entries(data) : [];
      setData(entries);
    });

    // Clean up the Firebase app and database when the component unmounts
    return () => {
      // Clean up any Firebase related resources
    };
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <DataList data={data} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
