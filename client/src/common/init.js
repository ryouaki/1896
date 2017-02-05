((root) => {
    
    // Get server address.
    let serverUrl = document.getElementsByTagName('meta')['server'];

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

    window.addEventListener('resize', resizeCallback, false);

    root.hi1896 = {
        initRootFontSize
    }

    initRootFontSize();

})(window||global);