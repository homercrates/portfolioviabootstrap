
const NavBar = () => {
<nav class="navbar navbar-expand-sm navbar-dark sticky-top">
    <div class="container">
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#smwportNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="smwportNavbar">
            <ul class="navbar-nav">
                <li class="nav-item-active"><a class="nav-link" href="#"><i class="fa fa-home fa-lg"> Home</i></a></li>
                <li class="nav-item"><a class="nav-link" href="/pages/about.html"><i class="fa fa-info fa-lg"> About</i></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-github fa-lg"> Github</i></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-linkedin fa-lg"> Linked In</i></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-resume fa-lg"> Resume</i></a></li>
            </ul>
        </div>
    </div>
</nav>
}

export default NavBar;
