(function(win, doc) {
    'use strict';

    const calendarEl = doc.querySelector('.calendar');

    async function fetchEvents() {
        try {
            const response = await fetch('libs/controllers/ControllerGetEvents.php', {mode: 'no-cors'});
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    function eventClickHandler(info) {
        // Abre o modal de edição
        $('#modalEventUpdate').modal('show');
        // Preenche os campos do modal com as informações do evento
        const { allDay, start, end, startHour, endHour, title, description, colorEvent, colorText } = info.event;
        $('#allDay').val(allDay);
        $('#start').val(start);
        $('#end').val(end);
        $('#startHour').val(startHour);
        $('#endHour').val(endHour);
        $('#title').val(title);
        $('#description').val(description);
        $('#colorEvent').val(colorEvent);
        $('#colorText').val(colorText);
        // Atualiza a data do evento no campo de data do modal
        $('#start').on('change', function() {
            $('#startHour').val($('#start').val());
        });
        console.log(info.event.allDay);
        console.log(info.event.start);
        console.log(info.event.end);
        console.log(info.event.startHour);
        console.log(info.event.endHour);
        console.log(info.event.title);
        console.log(info.event.description);
        console.log(info.event.colorEvent);
        console.log(info.event.colorText);
    }

    function dateClickHandler(info) {
        // Abre o modal de criação
        $('#modalEventCreate').modal('show');
        // Preenche o campo de data do modal com a data clicada
        $('#allDay').val(info.allDay);
    }

    async function initCalendar() {
        const events = await fetchEvents();
        const calendar = new FullCalendar.Calendar(calendarEl, {
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
            events,
            eventClick: eventClickHandler,
            dateClick: dateClickHandler
        });
        calendar.render();
    }

    initCalendar();
    
    
    
    
})(window, document);
