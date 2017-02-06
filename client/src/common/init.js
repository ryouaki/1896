((root) => {
    
    // Get server address.
    let serverUrl = document.getElementsByTagName('meta')['server'];
    serverUrl = serverUrl.content;

    let initRootFontSize = () => {
        let rootFontSize = 0;
        let width = document.body.clientWidth;
        let html = document.getElementsByTagName('html')[0];
        if (width < 1000) {
            rootFontSize = width / 10;
        } else {
            rootFontSize = 14;
        }
        html.style.fontSize = rootFontSize + 'px';
    }

    let resizeCallback = () => {
        initRootFontSize();
    }

    let onloadCallback = () => {
        let loadingDiv = document.getElementById('loading-div');
        if (loadingDiv) {
            document.body.removeChild(loadingDiv);
        }
    }

    window.addEventListener('resize', resizeCallback, false);
    window.addEventListener('load', onloadCallback, false);

    root.Hi1896 = {
        initRootFontSize,
        serverUrl
    }

    initRootFontSize();

})(window||global);