let sidebar = document.getElementsByClassName("sidebar")[0];
let open_button = document.getElementsByClassName("open_button_container")[0];
let close_button = document.getElementsByClassName("close_button_container")[0];
let main_content = document.getElementsByClassName("main_content")[0];

function open_sidebar() {
    sidebar.style.left = "0px";
    main_content.style.left = "20vw";
    open_button.style.opacity = "0";
}

function close_sidebar() {
    sidebar.style.left = "-410px";
    main_content.style.left = "15vw";
    setTimeout(() => {
        open_button.style.opacity = "100";
    }, 200)
}