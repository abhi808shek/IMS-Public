import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EachSolution from "@/pages/eachSolution/index";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
	return (
		<>
			<Header />
			<div>
				<EachSolution/>
			</div>
			<Footer />
    	</>
	);
}
