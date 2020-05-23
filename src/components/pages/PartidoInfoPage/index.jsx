import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PartidoInfo } from 'components';
import { usePartidos } from 'components/contexts/PartidosProvider';
import apiRequest from 'utils/requests';

export default function PartidoInfoPage() {
  const { id } = useParams();
  const { partidoHook: { updatePartido } } = usePartidos();

  async function getPartido() {
    const data = await apiRequest(`partidos/${id}`);
    updatePartido(data);
  }

  useEffect(() => {
    getPartido();
  }, [id]);

  return (
    <PartidoInfo />
  );
}
