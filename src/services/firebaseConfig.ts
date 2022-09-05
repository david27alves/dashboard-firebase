import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBjgeh5fOYIaG5LcXwagC0UiCGzzeGl4Wk",
  authDomain: "pedidoapi-9a3d8.firebaseapp.com",
  projectId: "pedidoapi-9a3d8",
  storageBucket: "pedidoapi-9a3d8.appspot.com",
  messagingSenderId: "1098362325570",
  appId: "1:1098362325570:web:367e2f14d663189d727bdb",
  measurementId: "G-LYHL94RKRE",
  databaseURL: "https://pedidoapi-9a3d8-default-rtdb.firebaseio.com"
}

export const app = initializeApp(firebaseConfig)
