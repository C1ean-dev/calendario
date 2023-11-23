document.getElementById('buttonUpdate').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão de envio

    const eventData ={
        allDay : document.getElementById('allDayUpdate').checked,
        start : document.getElementById('startUpdate').value,
        end : document.getElementById('endUpdate').value,
        startHour : document.getElementById('startHourUpdate').value,
        endHour : document.getElementById('endHourUpdate').value,
        title : document.getElementById('titleUpdate').value,
        description : document.getElementById('description').value,
        colorEvent : document.getElementById('colorEventUpdate').value,
        colorText : document.getElementById('colorTextUpdate').value
    }

    const startDateTime = start && startHour ? new Date(start + "T" + startHour).toISOString() : null;
    const endDateTime = end && endHour ? new Date(end + "T" + endHour).toISOString() : null;
    const formData = new FormData()

    formData.append("allDay", eventData.allDay);
    formData.append("start", startDateTime);
    formData.append("end", endDateTime);
    formData.append("startHour", eventData.startHour);
    formData.append("endHour", eventData.endHour);
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("colorEvent", eventData.colorEvent);
    formData.append("colorText", eventData.colorText);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../controllers/controllerUpdateEvents.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            alert("Evento salvo com sucesso!");
        }else{
            console.log(xhr.responseText)
        }
    };
    xhr.send(formData);
 
    
});
