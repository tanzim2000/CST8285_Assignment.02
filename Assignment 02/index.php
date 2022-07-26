<?php
require_once('resources/header');
?>
<?php
include('resources/navbar');
?>
<!-- ============= Hero Section ============= -->
<main class="hero">
    <div class="slideshow_container">
        <div class="slides fade">
            <div class="numbertext">1 / 3</div>
            <img src="img/homepage_slide01.jpg" style="width:100%">
            <div class="text"><a href="">Caption One</a></div>
        </div>
        <div class="slides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img/homepage_slide02.png" style="width:100%">
            <div class="text">Caption Two</div>
        </div>
        <div class="slides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img/homepage_slide03.jpg" style="width:100%">
            <div class="text">Caption Three</div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="js/imageslider.js"></script>
</main>
    <footer>
        <address>@2022 Web Programming Assignment02 Group[4], All right reserved,  Mao Ye; Qingfang Tan; Tanzim Ahmed Sagar; Xiaopeng Li</address>
    </footer>
</section>
</body>
</html>