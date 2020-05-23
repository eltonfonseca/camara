import React, { useState } from 'react';
import apiRequest from 'utils/requests';
import { useDeputados } from 'components/contexts/DeputadosProvider';
import { usePartidos } from 'components/contexts/PartidosProvider';

import {
  Container,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './style';

export default function SearchBox({ resource }) {
  const [searchContent, updateSearchContent] = useState('');
  const { deputadosHook: { updateDeputados } } = useDeputados();
  const { partidosHook: { updatePartidos } } = usePartidos();

  async function getDeputados() {
    const data = await apiRequest('deputados', {
      params: {
        ordem: 'ASC',
        ordenarPor: 'nome',
        nome: searchContent,
      },
    });

    updateDeputados(data);
  }

  async function getPartidos() {
    const data = await apiRequest('partidos', {
      params: {
        ordem: 'ASC',
        ordenarPor: 'nome',
        sigla: searchContent,
      },
    });

    updatePartidos(data);
  }

  function handleClick() {
    if (resource === 'deputados') {
      getDeputados();
    } else {
      getPartidos();
    }
  }

  return (
    <Container>
      <SearchInput
        onChange={(event) => updateSearchContent(event.target.value)}
        type="text"
        placeholder={`Buscar ${resource}`}
      />
      <SearchButton onClick={() => handleClick()}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}
