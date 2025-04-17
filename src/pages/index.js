import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EachSolution from "@/pages/each-solution";
import { Container, Row, Col } from "react-bootstrap";
import EachFeature from "./each-feature";
import Enterprise from "./enterprise";
import EachIndustry from "./each-industry";

export default function Home() {
	return (
		<>
			<Header />
			<div>
				{/* <EachSolution/> */}
				{/* <EachFeature/> */}
				{/* <Enterprise/> */}
				<EachIndustry/>
			</div>
			<Footer />
    	</>
	);
}
