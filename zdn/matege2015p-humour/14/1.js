(function(){'use strict';
var a = sl(2,245);
var b = sl(2,100);

chas2.task.setTask({
    text: 'Наблюдательный гопиник Димон Чёткий заметил, что благожелательность председателя апелляционной комиссии изменяется по формуле ' +
        '$'+b+'-(t-'+a+')e^{' + a + '+t}$, где $t$ - время в минутах, прошедшее с начала апелляции. ' +
        'Через сколько минут после начала апелляции Димону нужно попасть к председателю комиссии?',
    answers: a-1,
});

})();
