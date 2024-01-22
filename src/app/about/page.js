
import Link from "next/link";
import Navbar from "@/components/Navbar";
export const metadata = {
    title: 'Aidan Lao',
  }
export default function Page() {
    return (
        <div className="homepage">
            <Navbar></Navbar>
            <div className="spinning"></div>
            <div id="about" className="about">
                <h1>About me</h1>
                <div className='grid'>
                    <div>
                        <div className="card">
                            <h1>Software Engineering @ McMaster</h1>
                            <p>4.0 cGPA, Provost Medallist <br /><br /> 1st place Winner @ DeltaHacks Web Development Competition 2024 <br /><br />A winner of McMaster Engineering Competition</p>
                        </div>
                        <div className="card img">
                            <img src="./piano.JPG" alt="" />
                        </div>
                        <div className="card">
                            <h1>Experienced Full-stack Developer</h1>
                            <p> Current Software Developer @ Deighton (Co-op) <br /><br /> Experience in Agile environments with Scrum  </p>
                        </div>
                    </div>
                    <div>

                        <div className="card">
                            <h1>Helping the Community</h1>
                            <p> Partnered with the Ronald McDonald House <br /><br /> Current Coding Challenge Director @ Project Tech Careers <br /> <br />Helping Students across Canada learn Python through Competitive Coding</p>
                        </div>
                        <div className="card">
                            <h1>Passionate for learning</h1>
                            <p> Experience in React, .NET, HTML, CSS, JS, C#, C, Java, and more <br /> <br />Former Responsive Web Development Instructor </p>
                        </div>
                        <div className="card">
                            <h1>Professional Pianist</h1>
                            <p> Winner of international competitions and national representative <br /><br /> Accredited by the Royal Conservatory of Music (L.Mus) <br/><br/></p>
                            <Link className="link" href="https://laopiano.ca">laopiano.ca</Link>
                        </div>
                    </div>
                    <div>


                    </div>
                </div>
            </div>
            


        </div>
    );
}