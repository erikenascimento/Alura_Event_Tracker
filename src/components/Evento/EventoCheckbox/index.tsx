import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ event }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={() => }></i>)
}

export default EventoCheckbox