import React, { useState, useEffect } from "react";
import CategoriaService from "../../../services/CategoriaService";
import { Container, Info, ContainerTitle, ContainerButtons, Title, Descricao, Action } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Listar = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    CategoriaService.listarTodos()
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {lista.map((c, index) => (
        <Info key={index}>
          <ContainerTitle>
            <ContainerButtons>
              <Action>
                <FontAwesomeIcon icon={faEdit} />
              </Action>
              <Action>
                <FontAwesomeIcon icon={faTrash} />
              </Action>
            </ContainerButtons>
            <Title>{c.nome}</Title>
          </ContainerTitle>
          <Descricao>{c.descricao}</Descricao>
        </Info>
      ))}
      </>
  );
};

export default Listar;