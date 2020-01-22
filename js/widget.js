(function () {
    "use strict";

    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    
    xhr.open('GET', 'https://senseoff.github.io/hw_ajax/data/employees.json')

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            console.log(xhr.status + " : " + xhr.statusText);
        } else {
            let people = xhr.response;
            let dlist = document.getElementById('employeeList');
            let crul = document.createElement('ul');
            crul.setAttribute("id", "list");
            dlist.append(crul);
            let list = document.getElementById('list')
            
            people.forEach((person) => {
                let crli = document.createElement('li');
                if (person.inoffice == true) {
                    list.append(crli);
                    crli.classList.add('in');
                    crli.innerText = person.name;
                    console.log(person)
                } else {
                    list.append(crli);
                    crli.classList.add('out');
                    crli.innerText = person.name;
                    console.log(person)
                }
            });
            console.log(xhr.response)
            
            
            
        // for (let i = 0; i < people.length; i++) {
        //     list.append(crli);
        //     console.log(people[i].name)
        // }
        }
    }
    
    xhr.send();

}());
