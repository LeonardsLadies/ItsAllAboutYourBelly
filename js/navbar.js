document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-md navbar-light bg-white">
    <div class="container">
        <!-- Brand Logo Positioned on the Left -->
        <a class="navbar-brand brand-logo" href="index.html"><img src="images/IAAYB-logo-2.png" alt="images/IAAYB-logo-2" width="40" height="40">It's All About<br>Your Belly</a>

        <!-- Navbar Toggler Button for the Hambugrer Icon -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"><span class="navbar-toggler-icon"></span></button>

        <!-- Navigation Items Positioned on the Right -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                    <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                        <li><a class="dropdown-item" href="Janets-Story.html">Janet's Story</a></li>
                        <li><a class="dropdown-item" href="Our-History.html">Our History</a></li>
                        <li><a class="dropdown-item" href="benefits.html">Benefits</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="video-performances.html">Shows</a></li>
                <li class="nav-item"><a class="nav-link" href="tv-appearances.html">Spotlights</a></li>
                <li class="nav-item"><a class="nav-link" href="testimonials.html">Testimonials</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Connect</a></li>
            </ul>
        </div>
    </div>
</nav>
`;
