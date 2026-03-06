function toggleMenu(){

const sidebar = document.getElementById("sidebar");

sidebar.classList.toggle("active");

}
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
}