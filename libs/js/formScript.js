document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formEvent");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataParam = urlParams.get('data');

    if (dataParam != null && dataParam != undefined && dataParam != '') {
        const date = new Date(dataParam);
        const formattedDate = date.toISOString().split('T')[0];
        document.getElementById('start').value = formattedDate;
        document.getElementById('end').value = formattedDate;
    }

    form.addEventListener("button", function (e){
        console.log('click');
        window.location.href = '../../index.php';
    })

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var allDay = document.getElementById("allDay").checked;
        var url = window.location.href;

        const eventData ={
            allDay: allDay,
            url: url,
            start: document.getElementById("start").value,
            end: document.getElementById("end").value,
            startHour: document.getElementById("startHour").value,
            endHour: document.getElementById("endHour").value,
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            colorEvent: document.getElementById("colorEvent").value,
            colorText: document.getElementById("colorText").value
        }
        
        const formData = new FormData(form)
        const startDateTime = new Date(eventData.start + "T" + eventData.startHour).toISOString();
        const endDateTime = new Date(eventData.end + "T" + eventData.endHour).toISOString();
        
        
        formData.append("allDay", allDay);
        formData.append("url", url);
        formData.append("start", startDateTime);
        formData.append("end", endDateTime);
        formData.append("startHour", eventData.startHour);
        formData.append("endHour", eventData.endHour);
        formData.append("title", eventData.title);
        formData.append("description", eventData.description);
        formData.append("colorEvent", eventData.colorEvent);
        formData.append("colorText", eventData.colorText);
        //formData.append("action", "save");

        // Envia os dados do formulário para o servidor
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../controllers/controllerSaveEvents.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }else{
                console.log(xhr.responseText)
            }
        };
            xhr.send(formData);
            alert("Evento salvo com sucesso!");
            
    });
});
