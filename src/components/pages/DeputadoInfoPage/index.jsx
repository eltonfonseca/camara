import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiRequest from 'utils/requests';
import { useDeputados } from 'components/contexts/DeputadosProvider';
import { DeputadoInfo } from 'components';

export default function DeputadosInfoPage() {
  const { id } = useParams();
  const { deputadoHook: { updateDeputado } } = useDeputados();

  async function getDeputado() {
    const data = await apiRequest(`deputados/${id}`);
    updateDeputado(data);
  }

  useEffect(() => {
    getDeputado();
  }, [id]);

  return <DeputadoInfo />;
}
