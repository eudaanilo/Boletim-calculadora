var primeiro,segundo,terceiro,quarto,boletim;

function calcular(event){
event.preventDefault();

primeiro = parseFloat(document.getElementById('primeiro').value);
segundo =parseFloat(document.getElementById('segundo').value);
terceiro = parseFloat(document.getElementById('terceiro').value);
quarto = parseFloat(document.getElementById('quarto').value);



boletim = (primeiro+segundo+terceiro+quarto)/4;
		if (boletim<6){
			resultado=document.getElementById('resultado');
			resultado.innerHTML= `<br/>Sua média anual foi de ${boletim} e você foi reprovado, sua recuperação será dia 04/10 e a prova final 13/10.`;
		}else if(boletim >= 6){
			resultado=document.getElementById('resultado');
			resultado.innerHTML = "<br/> Parabéns você  foi aprovado";
		}
		
	document.getElementById('primeiro').value ='';
	document.getElementById('segundo').value ='';
	document.getElementById('terceiro').value ='';
	document.getElementById('quarto').value ='';
}