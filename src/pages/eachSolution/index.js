import Head from "next/head";
import SortlySolutions from "../../../public/images/sortly_solutions.svg"
import Image from "next/image";

export default function Features() {
  return (
    <>
    <div className="main_solution_hero">
       <div className="row">
        <div className="col-6"> 
             <h1>Sortly Solutions.</h1>
             <p>No matter what you need to track,<br/> Sortky has you covered.</p>
             <div>
                <button type="button" class="btn secondary_fill_btn">See All Features</button>
                <button type="button" class="btn primary_fill_btn">Try Sortly Free</button>
             </div>
        </div>
        <div className="col-6">
          <Image src={SortlySolutions} width={500} height={300}/>
        </div>

       </div>

    </div>

    </>
  );
}
