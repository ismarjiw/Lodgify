import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    getDoc,
    query,
    where 
} from "firebase/firestore/lite" 


const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.apiKey,
  authDomain: "lodgify-b4f47.firebaseapp.com",
  projectId: "lodgify-b4f47",
  storageBucket: "lodgify-b4f47.appspot.com",
  messagingSenderId: "1090707364763",
  appId: "1:1090707364763:web:4ae6e068ea8a7b68ecdf3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const rentalsCollectionRef = collection(db, "rentals")

export async function getRentals() {
    const querySnapshot = await getDocs(rentalsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getRental(id) {
    const docRef = doc(db, "rentals", id)
    const rentalSnapshot = await getDoc(docRef)
    return {
        ...rentalSnapshot.data(),
        id: rentalSnapshot.id
    }
}

export async function getHostRentals() {
    const q = query(rentalsCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

// will have to rewrite fx for Firebase/Firestore configuration

// export async function loginUser(creds) {
//   const res = await fetch("/api/login", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   return data;
// }