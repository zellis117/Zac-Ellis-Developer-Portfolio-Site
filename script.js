var languages = document.querySelector('#box_1');
var software = document.querySelector('#box_2');
var clients = document.querySelector('#box_3');
var management = document.querySelector('#box_4');
var sales = document.querySelector('#box_5');
var resume = document.querySelector('#box_6');
var topRow = document.querySelector('#display1');
var bottomRow = document.querySelector('#display2');

var softwareActive = false;
var languagesActive = false;
var clientsActive = false;
var managementActive = false;
var salesActive = false;
var resumeActive = false;

//Displays software experience when the matching div is clicked
var displaySoftware = function(){
    if(softwareActive == false){
        var softwareTitle = document.createElement('h4');
        softwareTitle.setAttribute('id','st');
        var softwareBody = document.createElement('p');
        softwareBody.setAttribute('id','sb');
        topRow.appendChild(softwareTitle);
        topRow.appendChild(softwareBody);
        softwareTitle.textContent = 'Software Experience:';
        softwareBody.textContent = 'VS Code, Eclipse, Unity Engine, Unreal Engine, Android Studio';
    } else if(softwareActive == true){
        var delST = document.getElementById('st');
        delST.remove();
        var delSB = document.getElementById('sb');
        delSB.remove();
    }
    softwareActive = !softwareActive;
}

//Displays programming languages when matched div is selected
var displayLanguages = function(){
    if(languagesActive == false){
        var languagesTitle = document.createElement('h4');
        languagesTitle.setAttribute('id','lt');
        var languagesBody = document.createElement('p');
        languagesBody.setAttribute('id','lb');
        topRow.appendChild(languagesTitle);
        topRow.appendChild(languagesBody);
        languagesTitle.textContent = 'Lanaguages, Libraries, and Frameworks:';
        languagesBody.textContent = 'HTML, CSS, JavaScript and Node.js; Java, C#, Express.js; SQL, MySQL; JQuery, Bootstrap, Handlebars';
    } else if(languagesActive == true){
        var delLT = document.getElementById('lt');
        delLT.remove();
        var delLB = document.getElementById('lb');
        delLB.remove();
    }
    languagesActive = !languagesActive;
}

//Displays past clients when matching div is clicked
var displayClients = function(){
    if(clientsActive == false){
        var clientsTitle = document.createElement('h4');
        clientsTitle.setAttribute('id','ct');
        var clientsBody = document.createElement('p');
        clientsBody.setAttribute('id','cb');
        topRow.appendChild(clientsTitle);
        topRow.appendChild(clientsBody);
        clientsTitle.textContent = 'Past Clients / Companies:';
        clientsBody.textContent = 'Tour Level Golf, Esklin Art, Freelance Work';
    } else if(clientsActive == true){
        var delCT = document.getElementById('ct');
        delCT.remove();
        var delCB = document.getElementById('cb');
        delCB.remove();
    }
    clientsActive = !clientsActive;
}

//Displays management experience on div click
var displayManagement = function(){
    if(managementActive == false){
        var managementTitle = document.createElement('h4');
        managementTitle.setAttribute('id','mt');
        var managementBody = document.createElement('p');
        managementBody.setAttribute('id','mb');
        bottomRow.appendChild(managementTitle);
        bottomRow.appendChild(managementBody);
        managementTitle.textContent = 'Management Experience:';
        managementBody.textContent = '7+ years between multiple facilities; Disney Management Training';
    } else if(managementActive == true){
        var delMT = document.getElementById('mt');
        delMT.remove();
        var delMB = document.getElementById('mb');
        delMB.remove();
    }
    managementActive = !managementActive;
}

//Displays sales experience on div click

//Displays Button to view Resume
var displayResume = function(){
    if(resumeActive == false){
        var resumeTitle = document.createElement('h4');
        resumeTitle.setAttribute('id','rt');
        var resumeBody = document.createElement('button');
        resumeBody.setAttribute('id','rb');
        resumeBody.setAttribute('onclick',"location.href='https://docs.google.com/document/d/11WDH1stS1nmLkulNq4j9MGTa8YyG6Oy7/edit?usp=sharing&ouid=104810966695280107652&rtpof=true&sd=true'");
        resumeBody.setAttribute('target','_blank');
        bottomRow.appendChild(resumeTitle);
        bottomRow.appendChild(resumeBody);
        resumeTitle.textContent = 'Resume Link:';
        resumeBody.textContent = 'Click to View Resume';
    } else if(resumeActive == true){
        var delRT = document.getElementById('rt');
        delRT.remove();
        var delRB = document.getElementById('rb');
        delRB.remove();
    }
    resumeActive = !resumeActive;
}

languages.addEventListener('click',displayLanguages);
software.addEventListener('click',displaySoftware);
clients.addEventListener('click',displayClients);
management.addEventListener('click',displayManagement);
resume.addEventListener('click',displayResume);
