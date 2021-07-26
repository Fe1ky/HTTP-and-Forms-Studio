function setSearchEngine(){
    let engine = document.querySelector("input[name=engine]:checked").value;
    let action= {
        "google": "https://www.google.com/",
        "duckDuckGo": "https://www.duckduckGo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    }

    let searchText = document.querySelector("input[name=q]")


    let setAction = document.getElementById("searchForm");
    setAction.setAttribute("action", action[engine]);


}
window.addEventListener("load", function(){
// TODO: register the handler
let submit = document.getElementById("button")
submit.addEventListener("click", setSearchEngine)
});
