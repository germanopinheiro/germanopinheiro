// var start = document.querySelector("#enviar")
// start.addEventListener("click", function(){


function calcularINSS(){

	var tabela = document.querySelector("#tabela")
	var quantidade = tabela.rows.length
	var linha = tabela.insertRow(quantidade)
/*CELULAS*/

	var cellNome = linha.insertCell(0)
	var cellNumdependentes = linha.insertCell(1)
	var cellSalariobruto = linha.insertCell(2)
	var cellPercentINSS = linha.insertCell(3)
	var cellDiscINSS = linha.insertCell(4)
	var cellPercentIRPF = linha.insertCell(5)
	var celldiscIRPF = linha.insertCell(6)
	var cellSalarioLiquido = linha.insertCell(7)

	var nome = document.querySelector("#name").value
	var numerodep = parseFloat(document.querySelector("#numerodep").value)
	var salariob = parseFloat(document.querySelector("#salariob").value)
	var percinss = ""
	var descinss = ""
	var percirpf = ""
	var descirpf = ""
	var salarioa = salariob * 12
	
/*DESCONTOS INSS*/	

	if (salariob <= 1100.1) {
	  descinss = salariob*7.5/100
		percinss = 7.5
	} else if (salariob <= 2203.5) {
		descinss = (salariob - 1100.1)*9/100+82.5
		percinss = 9
	} else if (salariob <= 3305.3) {
		descinss = (salariob - 2203.5)*12/100+181.81
		percinss = 12
	} else if (salariob <= 6433.6) {
		descinss = (salariob - 3305.3)*14/100+314.02
		percinss = 14
	} else if (salariob >= 6433.6) {
		descinss = (salariob - 3305.3)*14/100+314.02
		percinss = 14
	}
	else {
		descinss = 0 
		percinss = 0
	}

	/*DESCONTO IRPF*/

	if (salarioa <= 22847.76) {
		descirpf = 0
		percirpf = 0
	} else if (salarioa <= 33919.80) {
		descirpf = salarioa * .075
		percirpf = 7.5
	} else if (salarioa <= 45012.60) {
		descirpf = salarioa * .015
		percirpf = 15
	} else if (salarioa <= 55976.16) {
		descirpf = salarioa * .0225
		percirpf = 22.5
	}
  else {
		descirpf = salarioa*0.275
		percirpf = 27.5
	}

	descirpf = descirpf/12
	var salarioliquido = salariob-descirpf-descinss

	cellNome.innerHTML = nome
	cellNumdependentes.innerHTML = numerodep
	cellSalariobruto.innerHTML = salariob.toFixed(2)
	cellPercentINSS.innerHTML = percinss
	cellDiscINSS.innerHTML = descinss.toFixed(2)
	cellPercentIRPF.innerHTML = percirpf
	celldiscIRPF.innerHTML = descirpf.toFixed(2)
	cellSalarioLiquido.innerHTML = salarioliquido.toFixed(2)
}
