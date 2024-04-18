let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date(userInput.value);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();
    let toDay = today.getDate();
    let toMonth = today.getMonth() + 1;
    let toYear = today.getFullYear();

    let d3, m3, y3;

    y3 = toYear - birthYear;
    
    if(toMonth >= birthMonth){
        m3 = toMonth-birthMonth;
    }else{
        y3--;
        m3 = 12 + toMonth - birthMonth;
    }

    if (toDay >= birthDay) {
        d3 = toDay - birthDay;  
    }else{
        m3--;
        d3 = getDaysinMonth(birthYear, birthMonth) + toDay - birthDay;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysinMonth(year, month){
    return new Date(year,month,0).getDate();
}

let result = document.getElementById("result");