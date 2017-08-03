function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getUrlVar(name, default_value) {
    var vars = getUrlVars();
    return vars[name] || default_value;
}

// send a message to the user
// good = -1 for an error, 0 neutral, -1 successful operation
// move_to_url = if specified the user will be redirected to that url
function sendMessage(message, good, move_to_url) {
    localStorage.setItem('message', message);
    localStorage.setItem('message_good', good || 0);
    if (move_to_url) {
        window.location.href = move_to_url;
    } else {
        showMessage();
    }
}

// show the last message send to the user if any
function showMessage() {
    message = localStorage.getItem('message') || '';
    good = localStorage.getItem('message_good') || 0;
    
    if (message) {
        var $div = $('#user-message');
        
        if ($div.length == 0) {
           $('body').append('<div id="user-message" class="notification">' +
              '</div>'
          )
        }

        var $div = $('#user-message');
        var class_from_good = {
            '-1': 'is-danger',
            '0': 'is-info',
            '1': 'is-success',
        };
        $div.attr('class', 'notification '+class_from_good[good]);
        $div.html(message);
        $div.show().delay(1000).fadeOut(2000);
        
        // clear the message
        localStorage.setItem('message', '');
    }
}

$(function() {
    showMessage();
});
