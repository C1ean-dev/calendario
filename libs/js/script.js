(function(win, doc) {
    'use strict';

    let calendarEl = doc.querySelector('.calendar');

    fetch('libs/controllers/ControllerGetEvents.php', {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => {
        console.log(data);

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
            
            events: data,
            dateClick: function (info) {
                window.location.href = 'libs/html/form.html?data=' + info.date.toISOString();
            },
            eventClick: function(info) {
                let event = info.event;
                alert(event.title);
            }
        });
        calendar.render();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})(window, document);
