import React, { useEffect } from 'react';
import { Deputados } from 'components';
import { useDeputados } from 'components/contexts/DeputadosProvider';
import apiRequest from 'utils/requests';

export default function Deputadospage() {
  const { deputadosHook: { updateDeputados } } = useDeputados();

  async function getDeputados() {
    const dados = await apiRequest('deputados', {
      params: {
        ordem: 'ASC',
        ordenarPor: 'nome',
      },
    });

    updateDeputados(dados);
  }

  useEffect(() => {
    getDeputados();
  }, []);

  return (
    <Deputados />
  );
}
