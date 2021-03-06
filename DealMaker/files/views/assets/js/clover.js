var config = {
    clientId: '607VGD11A3024',
    domain: 'https://clover.com/'
};

function getAccessToken() {
    userInfo = {};
    params = window.location.hash.split('&');
    var i = 0;
    if (params.length > 0) {
        while (param == params[i++]) {
            param = param.split("=");
            userInfo[param[0]] = param[1];
        }
    }
    alert(userInfo[param[0]]);
    localStorage.SetItem("demouuid", userInfo[param[0]]);
}

function redirect() {
    var redirectlocal = window.location.href.replace(window.location.hash, '');
    var url = config.domain + 'oauth/authorize?response_type=token&client_id=' + config.clientId + '&redirect_uri=' + encodeURIComponent(redirectlocal);
    window.location.href = url;
}