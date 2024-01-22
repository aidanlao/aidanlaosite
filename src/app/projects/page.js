import Navbar from "@/components/Navbar";
import { Grenze } from "next/font/google";
import Link from "next/link";
export const metadata = {
    title: 'Aidan Lao',
  }
export default function Page() {
    return (
        <>
            <div className="homepage projects">
                <Navbar number={1}></Navbar>
                <div className="projectList">
                    <div className="project">
                        <h1>CareLink</h1>
                        <p>React, Next.js, OpenAI, HTML, CSS</p>
                        <ul>
                            <li>Submitted for DeltaHacks 2024</li>
                            <li>Uses AI to generate detailed health reports from patient data</li>
                            <li>Bridges the communication gap between personal support workers and patients</li>
                        </ul>
                        <Link className="link" href="https://github.com/aidanlao/deltahacks">Link</Link>
                    </div>
                    <div className="project">
                        <h1>Automated Vehicle Driving System</h1>
                        <p>P5.js, HTML, CSS, JS</p>
                        <ul>
                            <li>A <span style={{ color: "#ccffc5"}}>Winner</span> of McMaster's Engineering Competition</li>
                            <li>Implemented pedestrian and parking spot detection system visualized in P5.js</li>
                            <li>Developed virtual dashboard simulating a real car, displaying speed and battery usage</li>
                        </ul>
                        <Link className="link" href="https://replit.com/@AidanLao2004/Autonomous-Vehicle-Simulation">Link</Link>
                    </div>
                    <div className="project">
                        <h1>Binary Relations</h1>
                        <p>HTML, CSS, JS</p>
                        <ul>
                            <li>Created for Discrete Math I @ McMaster University</li>
                            <li>Tests the properties of binary relations</li>
                            <li>Randomly generates relations and provides feedback</li>
                        </ul>
                        <Link className="link" href="https://replit.com/@AidanLao2004/Relations-Tester#script.js">Link</Link>
                    </div>
                    
                    
                </div>

            </div>

        </>

    )
}