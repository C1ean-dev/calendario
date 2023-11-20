(function(win, doc) {
    'use strict';

    let calendarEl = doc.querySelector('.calendar');
    var EventJsonObj;
    fetch('../libs/controllers/ControllerGetEvents.php', {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => {
        EventJsonObj = data;
        console.log(EventJsonObj);
    })
    .catch((error) => {
        console.log(EventJsonObj);
        console.error('Error:', error);
    });

                
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            buttonText:{
                today: 'Hoje',
                month: 'MÊS',
                week: 'SEMANA',
                day: 'DIA'
            },
            events: EventJsonObj,
            dateClick: function (info) {
                // Quando o usuário clica em uma data, redirecione para o formulário
                window.location.href = '/libs/html/form.html?data=' + info.date.toISOString();
            },
            eventClick: function(info) {
                let event = info.event;
                alert(event.title);
            }
        });
    calendar.render();
})(window, document);
