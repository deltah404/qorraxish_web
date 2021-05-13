function send(eng, qor) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/842465256286453830/hKBl4zT36Dv4_X6I4V2ejOJFa2w5BABMWKz7YfLwM0gZz810Z1XbKc9S3i_g4Z2Gqjoi");
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "Word Suggestions",
        avatar_url: "https://icon-library.com/images/suggestion-icon/suggestion-icon-3.jpg",
        content: "English - "+eng+"\nQorraxish - "+qor
    }
    request.send(JSON.stringify(params));
}

function gv(id) {
    return document.getElementById(id).value;
}