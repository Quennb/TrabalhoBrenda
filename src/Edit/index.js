import React, { useState } from "react";
import NavBar from "../components/NavBar";
import api from "../services/api";

import "./index.css";

function Edit() {
  const [id, setId] = useState("");
  const [id2, setId2] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [privacity, setPrivacity] = useState(true);

  const handleEditFlashcards = async () => {
    const data = {
      nome: name,
      descricao: description,
      publico: privacity,
    };
    await api.put(`api/colecoes/${id}`, data);
    setId("");
    setName("");
    setDescription("");
    setPrivacity(true);
  };

  const handleDeleteFlashcards = async () => {
    await api.delete(`api/colecoes/${id2}`);
    setId2("");
  };
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h2>Edit FlashCard</h2>
        <div className="forms">
          <form>
            <h3>Editar FlashCard</h3>
            <strong>
              <p>Id</p>
            </strong>
            <input
              type="text"
              value={id}
              placeholder="Id"
              required
              onChange={(value) => setId(value.target.value)}
            ></input>
            <strong>
              <p>Nome</p>
            </strong>
            <input
              type="text"
              value={name}
              placeholder="Nome"
              required
              onChange={(value) => setName(value.target.value)}
            ></input>
            <strong>
              <p>Descriçao</p>
            </strong>
            <input
              type="text"
              value={description}
              placeholder="Descriçao"
              required
              onChange={(value) => setDescription(value.target.value)}
            ></input>
            <strong>
              <p>Privacidade</p>
            </strong>
            <select
              value={privacity}
              required
              onChange={(value) => setPrivacity(value.target.value)}
            >
              <option value={true}>Publico</option>
              <option value={false}>Privado</option>
            </select>
            <button type="button" onClick={() => handleEditFlashcards()}>
              Editar FlashCard
            </button>
          </form>
          <form>
            <h3>Deletar FlashCard</h3>
            <strong>
              <p>Id</p>
            </strong>
            <input
              type="text"
              value={id2}
              placeholder="Id"
              required
              onChange={(value) => setId2(value.target.value)}
            ></input>
            <button type="button" onClick={() => handleDeleteFlashcards()}>
              Deletar FlashCard
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
