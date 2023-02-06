// Set what to be executed on page load
window.onload = function(){
    // Add listener to Post Messages
    if (window.addEventListener){
        window.addEventListener("message", function(event){ receivePostMessage(event); }, {passive: true});
    }else{
        window.attachEvent("onmessage", function(event){ receivePostMessage(event); });
    }
}

// Receive post messages and handle them
function receivePostMessage(event){
    // Check data from post message. Here we expected receive msgId and percentage from data
    if (event.data){
        try{
            var messageJSON = event.data;
            switch(messageJSON.msgId){
                case "preloaderProgress":
                    // Update preloader progress
                    // Code ...
                    document.getElementById("progressBar").style.width = messageJSON.percentage + '%';
                    document.getElementById("percentageLabel").innerHTML = Math.floor(messageJSON.percentage) + '%';
                    break;

                case "preloaderEnd":
                    // End preloader and clear listeners
                    // Code ...
                    document.getElementById("progressBar").style.width = messageJSON.percentage + '%';
                    document.getElementById("percentageLabel").innerHTML = Math.floor(messageJSON.percentage) + '%'
                    document.getElementById("finishMsg").style.visibility = "visible";
                    break;
            }
        }catch(e){
            // Do nothing
            // Not readable message from the game or error parsing the content as JSON
        }
    }
    return;
};
