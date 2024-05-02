let sidebar = document.getElementsByClassName("sidebar")[0];
let open_button = document.getElementsByClassName("open_button_container")[0];
let close_button = document.getElementsByClassName("close_button_container")[0];
let main_content = document.getElementsByClassName("main_content")[0];

function open_sidebar() {
    main_content.style.filter = "blur(.3rem)"
    main_content.style.opacity = .3;
    open_button.style.opacity = 0;
    setTimeout(() => {
        sidebar.style.left = "0px";
        sidebar.style.opacity = 1;
        close_button.style.transform = "scale(1)";
        close_button.style.opacity = 1;
    }, 50);


}

function close_sidebar() {
    main_content.style.filter = "blur(0)"
    main_content.style.opacity = 1
    sidebar.style.left = "-410px";
    sidebar.style.opacity = 0;
    close_button.style.transform = "scale(0)";
    close_button.style.opacity = 0;
    setTimeout(() => {
        open_button.style.opacity = 1;
    }, 150);


}