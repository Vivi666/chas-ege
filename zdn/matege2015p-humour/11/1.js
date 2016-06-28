//
//	11. Гламурная выпускница Кандализа Изолентова за 5 дней до последнего звонка
//	померила талию и решила похудеть. Кандализа нашла в интернете диету, позволяющую
//	сбросить m = n log_a (b/c) килограмм, где n - количество дней, a - количество яблок,
//	съедаемых в день, b - количество приседаний в день, с - масса творога в дневном
//	рационе. На сколько килограмм похудеет Кандализа, есть будет в течение недели
//	питаться только яблоками (2 яблока в день) и творогом (100 г в день), делая
//	ежедневно 4 подхода по 50 приседаний?
//

(function(){'use strict';
NAinfo.requireApiVersion(0, 0);

var m = sl(6,22,2);
var days = m / 2;
var apples = sl(2,5);
var curd = sl(50,100,10);
var squats = curd * Math.pow(apples, 2);

NAtask.setTask({
	text: 'Гламурная выпускница Кандализа Изолентова за ' + chislitlx(days, 'день') + ' до последнего ' +
		'звонка померила талию и решила похудеть. Кандализа нашла в интернете диету, ' +
		'позволяющую сбросить $n \\cdot \\log_a \\frac{b}{c}$ килограмм, где $n$ - количество дней, ' +
		'$a$ - количество яблок, съедаемых в день, $b$ - количество приседаний в день, $с$ - ' +
		'масса творога в дневном рационе. На сколько килограмм похудеет Кандализа, есть ' +
		'будет в течение ' + days + ' дней питаться только яблоками (' + chislitlx(apples, 'яблоко') + ' в день) и творогом ' +
		'(' + curd + ' г в день), делая ежедневно ' + chislitlx(10, 'подход') + ' по ' + chislitlx(squats / 10, 'приседание') + '?',
	answers: m,
});

})();

//
//	Юмористически набор, №11
//	https://bitbucket.org/chas-ege-team/chas-ege/issues/55/
//	hripunov
//  patched by nickkolok