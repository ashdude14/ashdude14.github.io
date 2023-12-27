import { useState } from "react";
//import "../dist/styles.css";
//import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
 
    return <nav>
        <h4 className="logo"><b>@ashdude14</b></h4>
        <ul>
            <l1>
                <a href="#home"> Home </a>
            </l1>
            <l1>
                <a href="#about"> About </a>
            </l1>
            <l1>
                <a href="#projects">Projects </a>
            </l1>
            <l1>
                <a href="#contact"> Contact </a>
            </l1>
        </ul>
    </nav>
}

export default Navbar;
