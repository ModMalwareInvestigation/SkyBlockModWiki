document$.subscribe(function() {
    const IGNORED_PATHS = []

    for (const ignoredPath of IGNORED_PATHS) {
        if (window.location.pathname.match(`(\/${ignoredPath}[\/?].*)`)) {
            return;
        }
    }

    let links = document.getElementsByTagName("a");

    for (const link of links) {
        if (link.hostname !== window.location.hostname) {
            link.target = "_blank";
        }
    }
})