import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../../../state/atom";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ event }) => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	const alterarStatus = () => {
		evento.completo = !evento.completo;
	};

	const estilos = [
		"far",
		"fa-2x",
		evento.completo ? "fa-check-square" : "fa-square",
	];

	return <i className={estilos.join(" ")} onClick={() => alterarStatus}></i>;
};

export default EventoCheckbox;
