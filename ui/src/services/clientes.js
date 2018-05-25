const API_URL = "https://mindblox.me/api";

class ClienteService {

	static getClientes() {
		// const headers = new Headers({
		// 	"Acesso": "75BE9907-DBCD-4C81-82C6-A4EA0127D0BC",
		// 	"Content-Type": "application/json",
		// 	"Cache-Control": "no-cache"
		// });
		return fetch(`${API_URL}/user`, {
		// return fetch(`${API_URL}/Financeiro/RetornaGraficoRankingClientes`, {
			mode: 'cors',
			method: "GET",
			// method: "POST",
			// headers: headers,
			// data: "1EEC62F8-DFCD-4815-B7CC-8372CE8D23DF"
		});
	}

}

export default ClienteService;