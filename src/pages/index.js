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
import MainFeature from "./main-feature";
import HelpCenter from "./help-center";
import AboutUs from "./about-us";
import Blogs from "./blogs";
import HomePage from "./home";
import MainSolution from "./main-solution";
import MainIndustries from "./main-industry";
import BlogDetail from "./blog-details";

export default function Home() {
	return (
		<>
			<Header />
			<div>
				{/* <EachSolution/> */}
				{/* <EachFeature/> */}
				{/* <Enterprise/> */}
				{/* <EachIndustry/> */}
				{/* <MainFeature/> */}
				{/* <HelpCenter/> */}
				{/* <AboutUs/> */}
				{/* <BlogDetail /> */}
				{/* <BlogDetail/> */}
				{/* <Blogs/> */}
				{/* <MainSolution/> */}
				{/* <MainIndustries/> */}
				<HomePage/>
			</div>
			<Footer />
    	</>
	);
}
