import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import './App.css'
import { db } from './components/firebase-config';
//import { collection, addDoc } from "firebase/firestore"; 

function App() {

  const gravarDados = () => {
  
      const docRef = addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Vinicius",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
  }

  const LerDados = async() => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  const excluirDado = async() => {
    await deleteDoc(doc(db, "users"));
  }

  

  return (
    <>
      <button style={{padding: '10px;', display: 'block', margin: 'auto'}} onClick={gravarDados}>Gravar</button>
      <button style={{padding: '10px;', display: 'block', margin: 'auto'}} onClick={LerDados}>Ler dados</button>
      <button style={{padding: '10px;', display: 'block', margin: 'auto'}} onClick={excluirDado}>Excluir dado</button>
    </>
    
  )
}

export default App
