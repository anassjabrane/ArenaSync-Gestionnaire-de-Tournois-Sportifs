import { useState } from "react";

export default function RegistrationForm(){
    // etat de formulaire 
    const [nom,SetNom]=useState("");
    const [equipe ,SetEquipe]=useState("");
    const [niveau,SetNiveau]=useState("debutent");
    const [message, setMessage] = useState("");

    const isFormValid= nom.length >=3;

    const handelSubmit = (e)=>{
        e.preventDefault();
        setMessage('bravo ${nom},tu es inscrit avec l’équipe ${equipe} ')
    }




}
