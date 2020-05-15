<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>CityScapes</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="home.css" rel="stylesheet">
</head>

<body>
    <div id="page-container">
        <!-- As a heading -->
        <nav class="navbar navbar-light bg-light navbar-expand-sm" style="border-bottom:solid ActiveBorder">
            <a class="navbar-brand" href="home.php">
                <img src="images/logo_transparent1.png" alt="" id="logo">
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-tabs mr-auto" id="navtab">
                    <li class="nav-item">
                        <a class="nav-link active" href="#cities.php">Αρχική</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#my_comments.php">Προφίλ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#contact.php">Επικοινωνία</a>
                    </li>
                </ul>
                <div class="container" id="divimg">
                    <a href="home.php"><img src="https://fontmeme.com/permalink/200331/82c1cf1b8cfff500d341f69d92aa8761.png" alt="calligraphy-fonts" class="img-fluid" id="img"></a>
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Αναζήτηση" id="city-search" aria-label="Search">
                </form>
                <button class="btn btn-outline-secondary m-2 my-sm-0" id="nickname" disabled></button>
                <button class="btn btn-outline-secondary m-2 my-sm-0" type="submit" id="logout">Αποσύνδεση</button>
            </div>
        </nav>

        <div class="container-fluid" id="container">
            <div class="row">
                <div class="col-sm-12" id="card-container">

                </div>
            </div>

        </div>

        <footer class="bottom bg-light" style="border-top:solid ActiveBorder" id="footer">
            <div class="container-fluid pt-5 pr-5 pl-5">
                <div class="row">
                    © 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
        </footer>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/main-home.js"></script>

</body>

</html>