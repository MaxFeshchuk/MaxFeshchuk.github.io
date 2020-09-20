$(document).ready(function(){
	function Steel(C, S, P, Si, Ni, Mn, Cr, Mo, V, Cu){
		this.C = C;
		this.S = S;
		this.P = P; 
		this.Si = Si; 
		this.Ni = Ni; 
		this.Mn = Mn; 
		this.Cr = Cr; 
		this.Mo = Mo; 
		this.V = V; 
		this.Cu = Cu;
	}
	Steel.prototype.getC = function(){
		return this.C;
	}
	Steel.prototype.getS = function(){
		return this.Sr;
	}
	Steel.prototype.getP = function(){
		return this.P;
	}
	Steel.prototype.getSi = function(){
		return this.Si;
	}
	Steel.prototype.getNi = function(){
		return this.Ni;
	}
	Steel.prototype.getMn = function(){
		return this.Mn;
	}
	Steel.prototype.getCr = function(){
		return this.Cr;
	}
	Steel.prototype.getMo = function(){
		return this.Mo;
	}
	Steel.prototype.getV = function(){
		return this.V;
	}
	Steel.prototype.getCu = function(){
		return this.Cu;
	}
	Steel.prototype.getHRC1 = function(){
		var HRC1 = (this.C*(this.S+this.P+0.004*this.Si+0.01*this.Ni))/(3*this.Mn+this.Cr+this.Mo+this.V);
		return HRC1;
	}
	function newSteel(a, b, c, d, i, f, g, h, m, n){
		var steelStorage = {C: a, S: b, P: c, Si: d, Ni: i, Mn: f, Cr: g, Mo: h, V: m, Cu: n};
		return steelStorage;
	}
	Steel.prototype.save = function(){
		var Obj = {C: this.C, S: this.S, P: this.P, Si: this.Si, Ni: this.Ni, Mn: this.Mn, Cr: this.Cr, Mo: this.Mo, V: this.V, Cu: this.Cu}
		var myJSON = JSON.stringify(Obj);
		localStorage.setItem("WeldCalc", myJSON);
	}

		
		$("#button_calc").click(function(){

			var C;
			var S;
			var P;
			var Si;
			var Ni;
			var Mn;
			var Cr;
			var Mo;
			var V;
			var Cu;

			var C1 = parseFloat($('#inp1').val());
			if (isNaN(C1)){
				C = 0;
			}else{
				C = C1;
			}
			var S1 = parseFloat($('#inp2').val());
			if (isNaN(S1)){
				S = 0;
			}else{
				S = S1;
			}
			var P1 = parseFloat($('#inp3').val());
			if (isNaN(P1)){
				P = 0;
			}else{
				P = P1;
			}
			var Si1  = parseFloat($('#inp4').val());
			if (isNaN(Si1)){
				Si = 0;
			}else{
				Si = Si1;
			}
			var Ni1 = parseFloat($('#inp5').val());
			if (isNaN(Ni1)){
				Ni = 0;
			}else{
				Ni = Ni1;
			}
			var Mn1 = parseFloat($('#inp6').val());
			if (isNaN(Mn1)){
				Mn = 0;
			}else{
				Mn = Mn1;
			}
			var Cr1  = parseFloat($('#inp7').val());
			if (isNaN(Cr1)){
				Cr = 0;
			}else{
				Cr = Cr1;
			}
			var Mo1 = parseFloat($('#inp8').val());
			if (isNaN(Mo1)){
				Mo = 0;
			}else{
				Mo = Mo1;
			}
			var V1 = parseFloat($('#inp9').val());
			if (isNaN(V1)){
				V = 0;
			}else{
				V = V1;
			}
			var Cu1 = parseFloat($('#inp10').val());
			if (isNaN(Cu1)){
				Cu = 0;
			}else{
				Cu = Cu1;
			}

			if (C > 100){ //Перевірка, щоб введений хімічний елемент не перевищував 100%
				$('#result').html("Вміст C не може перевищувати 100%. Перевірте введені дані.");
			}else if (S > 100){
				$('#result').html("Вміст S не може перевищувати 100%. Перевірте введені дані.");
			}else if (P > 100){
				$('#result').html("Вміст P не може перевищувати 100%. Перевірте введені дані.");
			}else if (Si > 100){
				$('#result').html("Вміст Si не може перевищувати 100%. Перевірте введені дані.");
			}else if (Ni > 100){
				$('#result').html("Вміст Ni не може перевищувати 100%. Перевірте введені дані.");
			}else if (Mn > 100){
				$('#result').html("Вміст Mn не може перевищувати 100%. Перевірте введені дані.");
			}else if (Cr > 100){
				$('#result').html("Вміст Cr не може перевищувати 100%. Перевірте введені дані.");
			}else if (Mo > 100){
				$('#result').html("Вміст Mo не може перевищувати 100%. Перевірте введені дані.");
			}else if (V > 100){
				$('#result').html("Вміст V не може перевищувати 100%. Перевірте введені дані.");
			}else if (Cu > 100){
				$('#result').html("Вміст Cu не може перевищувати 100%. Перевірте введені дані.");

			}else if((C+S+P+Si+Ni+Mn+Cr+Mo+V+Cu)>100){ //Перевірка, щоб сумарний вміст хімічних ел. не первищував 100%
				$('#result').html("Сумарний вміст хім.ел. не може перевищувати 100%. Перевірте введені дані.");
			}else{

				var St = new Steel(C, S, P, Si, Ni, Mn, Cr, Mo, V, Cu);


				var HRC = St.getHRC1();
				St.save();

				if (HRC <= 0.004 & HRC > 0){
					$('#result').html("Сталь не схильна до появи гарячих тріщин");
				}
				else{
					if(HRC > 0.004){
						$('#result').html("Сталь схильна до появи гарячих тріщин");
					}
					else{
					$('#result').html('Перевірте введені дані');
					}
				}
			}
			
		});

	var text = JSON.parse(localStorage.getItem("WeldCalc"));

	$('#reset').click(function(){
		$('#inp1').val(null);
		$('#inp2').val(null);
		$('#inp3').val(null);
		$('#inp4').val(null);
		$('#inp5').val(null);
		$('#inp6').val(null);
		$('#inp7').val(null);
		$('#inp8').val(null);
		$('#inp9').val(null);
		$('#inp10').val(null);
		$('#result').html(null);
	});

	$('#help').click(function(){
		alert("Потрібно ввести в поля вміст хімічних елементів після чого натиснути на кнопку Calculate");
	})

	$('#reload').click(function(){
		$('#inp1').val(null);
		$('#inp2').val(null);
		$('#inp3').val(null);
		$('#inp4').val(null);
		$('#inp5').val(null);
		$('#inp6').val(null);
		$('#inp7').val(null);
		$('#inp8').val(null);
		$('#inp9').val(null);
		$('#inp10').val(null);
		$('#result').html(null);
		localStorage.removeItem("WeldCalc")
	});

	if (text){
		$('#inp1').val(text.C);
		$('#inp2').val(text.S);
		$('#inp3').val(text.P);
		$('#inp4').val(text.Si);
		$('#inp5').val(text.Ni);
		$('#inp6').val(text.Mn);
		$('#inp7').val(text.Cr);
		$('#inp8').val(text.Mo);
		$('#inp9').val(text.V);
		$('#inp10').val(text.Cu);
	}
});