<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from "../components/loginCard"
export default function Home() {
  return (
    <>
      <Login></Login>
    </>
=======
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="text-center bg-gray-50">
      <Navbar></Navbar>
    </div>
>>>>>>> f65059d06dcb91d87a910371f9d1bdb193e59778
  );
}
