(function() {

var t=sluchch(2,9);
var a=t.pow(4).sluchDel();
var b=t.pow(4)/a*5.7;
var s1=sluchch(3);
var p1=24+s1;
var p2=20+s1;
for(;b>10;b/=10){
	p1++;
}
var t1=[['наибольшую','более'],['наименьшую','менее']].iz();

var c=	'Для определения эффективной температуры звeзд используют закон Стефана–Больцмана, согласно которому мощность'+
		' излучения нагретого тела P, измеряемая в ваттах, прямо пропорциональна площади его поверхности и четвeртой степени'+
		' температуры:  $P = \\sigma ST^4$, где $\\sigma  = 5,7 \\cdot 10^{-8}$ — постоянная, площадь S измеряется в '+
		'квадратных метрах, а температура T — в градусах Кельвина. Известно, что некоторая звезда имеет площадь'+
		' $S = '+(1).frac(a)+'\\cdot 10^{'+p2+
		'} м{}^2$, а излучаемая ею мощность $P$ не '+t1[1]+' $'+b.ts()+'\\cdot 10^{'+p1+'}$ Вт. '+
		'Определите '+t1[0]+' возможную температуру этой звезды.'+
		' Приведите ответ в градусах Кельвина.';

window.vopr.txt=c.plusminus();
window.vopr.ver=[t+'000'];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();

