function selecionarPrato(elemento, descricao, valor) {
	const selecionado = document.querySelector(".card-item.prato.ativo");
	if (selecionado !== null) {
		selecionado.classList.remove("ativo");
	}
	elemento.classList.add("ativo");
	prato = descricao;
	valorPrato = Number(valor);
	validarPedido();
}

function selecionarBebida(elemento, descricao, valor) {
	const selecionado = document.querySelector(".card-item.bebida.ativo");
	if (selecionado !== null) {
		selecionado.classList.remove("ativo");
	}
	elemento.classList.add("ativo");
	bebida = descricao;
	valorBebida = Number(valor);
	validarPedido();
}

function selecionarSobremesa(elemento, descricao, valor) {
	const selecionado = document.querySelector(".card-item.sobremesa.ativo");
	if (selecionado !== null) {
		selecionado.classList.remove("ativo");
	}
	elemento.classList.add("ativo");
	sobremesa = descricao;
	valorSobremesa = Number(valor);
	validarPedido();
}

function validarPedido() {
	const botao = document.querySelector(".botao-pedidos button");
	if (prato && bebida && sobremesa) {
		botao.disabled = false;
		botao.innerHTML = "Fechar pedido";
		botao.classList.add("ativo");
	} else {
		botao.disabled = true;
		botao.innerHTML = "Selecione os 3 pedidos para fechar";
		botao.classList.remove("ativo");
	}
}

function finalizarPedido() {
	const total = valorPrato + valorBebida + valorSobremesa;
	const totalFormatado = total.toFixed(2);

	const mensagem = `
Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${totalFormatado}
`;

	const numeroRestaurante = "55999999";
	const url = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(mensagem)}`;

	window.open(url);
}
