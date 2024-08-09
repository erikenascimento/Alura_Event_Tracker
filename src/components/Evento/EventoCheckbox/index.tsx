import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../../../state/atom";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	const alterarStatus = () => {
		const eventoAlterado = {
			...evento,
		};

		eventoAlterado.completo = !evento.completo;

		setListaDeEventos(listaAntiga => {
			const index = listaAntiga.findIndex(event => event.id === evento.id);
			return [
				...listaAntiga.slice(0, index),
				evento,
				...listaAntiga.slice(index + 1),
			];
		});
	};

	const estilos = [
		"far",
		"fa-2x",
		evento.completo ? "fa-check-square" : "fa-square",
	];

	return <i className={estilos.join(" ")} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;
