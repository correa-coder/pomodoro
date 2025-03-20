function get_seconds(time){
    // extracts seconds from a string in the format MM:SS
    return time.slice(3);
}

function get_minutes(time){
    // extract minutes from a string in the format MM:SS
    return time.slice(0, 2);
}

function update_timer(timer_id, interval){
    timer = document.getElementById(timer_id);

    // getting values from string
    seconds = parseInt(get_seconds(timer.innerText));
    minutes = parseInt(get_minutes(timer.innerText));

    // console.log(seconds);
    // console.log(minutes);
    // console.log(timer);

    if(seconds == 0){
        if(minutes == 0){
            clearInterval(interval);
            console.log("Finished");
        }else{
            seconds = 59;
            minutes--;
        } 
    }else{
        seconds--;
    }

    // update HTML
    timer.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // update Page title
    document.title = `Pomodoro | ${timer.innerText}`;
}

function update_work_timer(){
    update_timer("work_timer", interval);
}

function update_shortbreak_timer(){
    update_timer("shortbreak_timer", short_interval);
}

function update_longbreak_timer(){
    update_timer("longbreak_timer", long_interval);
}

// reset timer
function reset(timer_id){
    timer = document.getElementById(timer_id);

    default_time = "";

    switch(timer_id){
        case "work_timer":
            default_time = "25:00";
            break;
        case "shortbreak_timer":
            default_time = "05:00";
            break;
        case "longbreak_timer":
            default_time = "10:00";
    }

    timer.innerText = default_time;

    // remove the time from the page title
    document.title = "Pomodoro";
}