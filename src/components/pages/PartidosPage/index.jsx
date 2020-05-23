import React, { useEffect } from 'react';
import { Partidos } from 'components';
import apiRequest from 'utils/requests';
import { usePartidos } from 'components/contexts/PartidosProvider';

export default function PartidosPage() {
  const { partidosHook: { updatePartidos } } = usePartidos();

  async function getPartidos() {
    const data = await apiRequest('partidos', {
      parmas: {
        ordem: 'ASC',
        ordenarPor: 'sigla',
      },
    });

    updatePartidos(data);
  }

  useEffect(() => {
    getPartidos();
  }, []);

  return (
    <Partidos />
  );
}
