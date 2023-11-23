document.getElementById('buttonCreate').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Botão create clicado');

    var allDay = document.getElementById("allDayCreate").checked;

    const eventData ={
        allDay: allDay,
        start: document.getElementById("startCreate").value,
        end: document.getElementById("endCreate").value,
        startHour: document.getElementById("startHourCreate").value,
        endHour: document.getElementById("endHourCreate").value,
        title: document.getElementById("titleCreate").value,
        description: document.getElementById("descriptionCreate").value,
        colorEvent: document.getElementById("colorEventCreate").value,
        colorText: document.getElementById("colorTextCreate").value
    }
    console.log(eventData.start);
    console.log(eventData.end);
    console.log(eventData.startHour);
    console.log(eventData.endHour);
    const formData = new FormData()
    const startDateTime = eventData.start && eventData.startHour ? new Date(eventData.start + "T" + eventData.startHour).toISOString() : null;
    const endDateTime = eventData.end && eventData.endHour ? new Date(eventData.end + "T" + eventData.endHour).toISOString() : null;
    
    
    formData.append("allDay", allDay);
    formData.append("start", startDateTime);
    formData.append("end", endDateTime);
    formData.append("startHour", eventData.startHour);
    formData.append("endHour", eventData.endHour);
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("colorEvent", eventData.colorEvent);
    formData.append("colorText", eventData.colorText);

    // Envia os dados do formulário para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../controllers/controllerSaveEvents.php", true);
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