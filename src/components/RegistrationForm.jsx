import { useState } from "react";

export default function RegistrationForm({OnAdd}) {
  // etat de formulaire
  const [nom, setNom] = useState("");
  const [equipe, setEquipe] = useState("");
  const [message, setMessage] = useState("");
  const [niveau, setNiveau] = useState("débutant");

  const isFormValid = nom.length >= 3;

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const newparticipant={
      id:Date.now() ,
      name: nom,
      team: equipe,
      level: niveau
    };

    OnAdd(newparticipant);
    setNom("");
    setEquipe("");
    setNiveau("débutant")
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl mt-4"
    >
      <h4 className="text-sm font-bold text-gray-700">
        Formulaire d'Inscription
      </h4>

      <input
        type="text"
        placeholder="Nom (Min 3 carac.)"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="p-2 border rounded outline-none focus:border-indigo-500"
      />

      <input
        type="text"
        placeholder="Équipe"
        value={equipe}
        onChange={(e) => setEquipe(e.target.value)}
        className="p-2 border rounded outline-none focus:border-indigo-500"
      />

      <select
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
        className="p-2 border rounded outline-none"
      >
        <option value="débutant">Débutant</option>
        <option value="intermédiaire">Intermédiaire</option>
        <option value="avancé">Avancé</option>
      </select>

      {/* 5. Bouton dima disabled ila l-nom sghir (Challenge 2) */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`p-2 rounded font-bold text-white transition-all ${
          isFormValid
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Valider l'inscription
      </button>

      {message && (
        <p className="mt-2 text-green-600 text-sm font-medium text-center italic">
          {message}
        </p>
      )}
    </form>
  );
}
