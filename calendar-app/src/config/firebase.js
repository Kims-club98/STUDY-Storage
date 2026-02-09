// npm firebase 설치 후 실행
// 일정관리 내역을 firebase로 불러오는 작업 진행
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1gTnCiaiBf28F6P-b2B5wjuz95TiZU7I",
  authDomain: "kosmo-cloud251110.firebaseapp.com",
  projectId: "kosmo-cloud251110",
  storageBucket: "kosmo-cloud251110.firebasestorage.app",
  messagingSenderId: "470631049205",
  appId: "1:470631049205:web:8806c98501e7456b01a2bc"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)