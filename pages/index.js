import Login from "../components/loginCard";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Register from "../components/registerCard";

export default function Home() {
  return (
    <div className="text-center bg-gray-50">
      <Navbar></Navbar>
      <div className=" flex justify-center my-48">
        <Login></Login>
      </div>
      <div className=" flex justify-center my-48">
        <Register></Register>
      </div>
    </div>
  );
}
