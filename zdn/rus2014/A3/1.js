(function(){'use strict';

window.vopr.txt='Укажите пример с ошибкой в образовании формы слова.<br/>';

var ver=[//Список (на самом деле массив) правильных словосочетаний
	"банка сардин",
	"без погон",
	"богатейший выбор",
	"более долго",
	"более полутораста зрителей",
	"более полутора месяцев",
	"более просто",
	"более пятисот долларов",
	"более резкое движение",
	"более светлый",
	"более терпелив",
	"более честно",
	"в аэропорту",
	"в боку",
	"в две тысячи двадцать втором году",
	"в две тысячи десятом году",
	"в две тысячи пятом году",
	"в двухстах метрах",
	"в их отчёте",
	"в обеих руках",
	"в одна тысяча пятьсот десятом году",
	"восемь апельсинов",
	"восемь кеглей",
	"восемьюстами тридцатью",
	"в полутора часах",
	"в пятистах метрах отсюда",
	"в течение тридцати пяти минут",
	"в трехстах метрах",
	"в трёхстах метрах",
	"в тысяча девятисотом году",
	"в шкафу",
	"варка макарон",
	"вместе с детьми",
	"восемь тонн",
	"все директора гимназий",
	"выправь текст",
	"высохла",
	"горячие супы",
	"гора апельсинов",
	"дальние деревни",
	"дамских туфель",
	"две пары ботинок",
	"две пары сапог",
	"две седьмых",
	"двое грузин",
	"двух кочерёг",
	"дети скоро выздоровеют",
	"десяток абрикосов",
	"десять килограммов апельсинов",
	"дешевле",
	"директора предприятий",
	"директора школ",
	"длиннее",
	"до две тысячи пятого года",
	"до тысяча восемьсот двенадцатого года",
	"до тысяча девятьсот пятого года",
	"домашняя туфля",
	"жареные тетерева",
	"жаждет славы",
	"жёстче дерева",
	"заслуженные директора",
	"заморозков",
	"зажжёт лампаду",
	"зажжёт фейерверк",
	"зажжётся огонь",
	"здоровые дёсны",
	"знаменитые профессора",
	"искомый ответ",
	"испанские веера",
	"их дети",
	"их коллеги",
	"их работа",
	"их тетради",
	"к две тысячи пятому году",
	"к две тысячи четырнадцатому году",
	"к трёмстам сорока четырём избирателям",
	"к шестидесяти семи годам",
	"килограмм вафель",
	"килограмм помидоров",
	"килограмм яблок",
	"клади на место",
	"красивее дочери",
	"красивейший",
	"красивейший пейзаж",
	"кратчайший путь ",
	"лампочка зажжётся",
	"лажу по деревьям",
	"лажу по крышам",
	"лёгкий тюль",
	"ловкий шимпанзе",
	"лучшие парикмахеры",
	"любимые профессора",
	"лягте",
	"лягте (на пол)",
	"лягте на диван",
	"лягте на коврик",
	"лягте на кровать",
	"лягте на кушетку",
	"лягте на пол",
	"лягте на спину",
	"менее значимый",
	"менее значительный",
	"менее интересно",
	"менее полезно",
	"много вишен",
	"много облаков",
	"модных туфель",
	"молодые бухгалтеры",
	"моложе брата",
	"мокла под дождём",
	"на их территории",
	"на обоих берегах",
	"на триста пятьдесят седьмой странице",
	"наиболее выгодно",
	"наиболее полезный",
	"наиболее уместный",
	"наиболее часто",
	"наиболее четко",
	"наилучших снимков",
	"наисложнейший",
	"несколько мандаринов",
	"несколько ножниц",
	"несколько полотенец",
	"несколько яблок",
	"нет вишен",
	"нет двух простынь",
	"нет мест",
	"нет цыган",
	"обгрызенное яблоко",
	"о полутора часах",
	"опытные бухгалтеры",
	"о пятистах сорока рублях",
	"о трёхстах участниках",
	"об аэропорте",
	"обоих студентов",
	"обгрызенное яблоко",
	"оденьтесь теплее",
	"около двух килограммов",
	"около шестисот рублей",
	"опытные доктора",
	"опытные инженеры",
	"отряд партизан",
	"пакет помидоров",
	"пара ботинок",
	"пара джинсов",
	"пара носков",
	"пара полотенец",
	"пара сапог",
	"пара туфель",
	"пара чулок",
	"пара шерстяных носков",
	"пара яблок",
	"пачка макарон",
	"пять полотенец",
	"по их желанию",
	"по их указанию",
	"по приезде в город",
	"повеселее",
	"поезжай",
	"поезжай быстрее",
	"поезжай домой",
	"поезжай к лесу",
	"поезжайте в город",
	"поезжайте за продуктами",
	"поезжай налево",
	"положи на полку",
	"положите на полку",
	"поезжайте поездом",
	"полощущий бельё",
	"попробует торт",
	"посади дерево",
	"полки для кухонь",
	"почти в ста странах",
	"почётные титулы",
	"проиграв вступление",
	"прополощи бельё",
	"пятьюстами конвертами",
	"пятьюстами тридцатью тремя метрами",
	"пять блюдец",
	"пять килограммов риса",
	"пять полотенец",
	"пять принцев",
	"разожжёт костер",
	"разные возрасты",
	"розовый какаду",
	"ряд критериев",
	"с двумястами бойцами",
	"семерыми козлятами",
	"с обеих сторон",
	"спелее",
	"с полутора метров",
	"с пятьюдесятью копейками",
	"с семьюстами метрами",
	"с тремястами новобранцами",
	"самый молодой",
	"самый надёжный",
	"свежих мандаринов",
	"свыше семисот пятидесяти тысяч",
	"свыше четырёх тысяч метров",
	"семьюдесятью процентами",
	"семьюдесятью сотрудниками",
	"семьюстами монетами",
	"серьёзнейшее замечание",
	"скрывались в окрестных лесах",
	"смелее всех",
	"современные госпитали",
	"совсем озяб",
	"спелых абрикосов",
	"спелых помидоров",
	"с пятьюстами ящиками",
	"старые пропуска",
	"старые профессора",
	"тремястами дисками",
	"триста килограммов",
	"уважаемые директора",
	"уважаемые слесари",
	"умелые повара",
	"фильм интереснее",
	"хорошие доктора",
	"часовые пояса",
	"четырьмястами рублями",
	"четырьмястами строчками",
	"четырьмястами студентами",
	"чудеснейшим образом",
	"шестьюдесятью годами",
	"шестьюстами рублями",
	"шестьюстами учебниками",
	"ширина плеч",
	"шофёры",
	"якоря",
	"ярче солнца",
	"ящик макарон",
];//Лучше их располагать по алфавиту

var nev=[//Список (на самом деле массив) неправильных словосочетаний
	(
		['более','больше','менее','меньше'].iz() +' '+
		[
			"восемьсот миллионов",
			"выше",
			"глубочайший",
			"лучший ответ",
			"точнее",
			"простейший",
			"простейший способ",
			"пятьдесят рублей",
			"пятьсот сотрудников",
			"семиста километров",
			"слаще",
			"честнее",
			"шестиста рублей",
		].iz()
	),

    "в две тысяча десятом году",
	"в двух тысяч пятом году",
	"взвод солдатов",
	"вкусные торта",
    "двое подруг",
	"двое подружек",
	"двухстами предметами",
	"двухстами рублями",

	(
		['едь','ехай','ехайте'].iz()+
		' '+
		[
			'в'+lx[om.goroda.iz()].pe,
			'вперёд',
			'назад',
			'налево',
			'направо',
			['по',''].iz()+[
				'быстрее',
				'медленнее',
				'остророжнее',
			].iz(),
			"в Подмосковье",
			'быстро',
			'медленно',
			'остророжно',
		].iz()
	),

	"жгёт костер",
	"запретящий игры",
	"из полтора метров материи",
	"ихней работой",
	"ихние дела",
	"ихние друзья",
	"ихние письма",
	"килограмм сосисек",
	"копчёные окороки",
	"корзина вишней",
	"косвенных падежов",
	"красивше",
	"лежит на шкафе",
	"ляжь на спину",
	"ляжьте",

	"много яблоков",
	"мощные компьютера",
    "на восьмиста гектарах",
	"наиболее решительнее",
    "наиболее известнейший",
	"не пророняя (слов)",
	"не пророняя слов",
	"несколько огурец",
	"обгрызанный",
	"обоими преподавательницами",
	"около пятиста километров",
	"около пятиста фотографий",
	"около триста фотографий",
    "отряд партизанов",
	"пара варежков",
	"пара туфлей",
	"пара чулков",
	"поклади на стол",
    "по обоим сторонам",
	"попробоваем",
	"пришел более позднее",
	"прочитая рассказ",
	"пусть попробовает",
	"пятидесятью рублями",
	"разожгёт костёр",
	"разъехайтесь",
	"с двух тысячи первого года",
	"с пятидесятью рублями",
    "с пятидесятью спутниками",
	"с трёхстами килограммами",
	"с шестистами рублями",
	"самый крепчайший чай",
	"складные вееры",
	"смотрев вперёд",
	"трое подруг",
	"хорошо проповедовает",
    "четверо одноклассниц",
	"шестистами учениками",
	"эта работа более лучше",
];//Внимание: после последнего элемента тоже ставится запятая. Её можно и не ставить, но так удобнее.

window.vopr.ver=nev;
window.vopr.nev=ver;
AtoB();

})();
