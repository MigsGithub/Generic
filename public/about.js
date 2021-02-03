document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });


  function myFunction() {
    document.getElementById("demo").innerHTML = `<p class="gitHub"><i class="fab fa-github"></i> GitHub: <span class ="linkName">github.com/MigsGithub </span></p>
    <p class="gitHub"><i class="fab fa-linkedin"></i> LinkedIN: <span class ="linkName">www.linkedin.com/in/migatx/ </span></p>
    <p class="gitHub"><i class="fas fa-envelope-square"></i> Email: Migs@gmail.com</p>
`;
  }
  function myFunction2() {
    document.getElementById("demo").innerHTML = `<p class="gitHub"><i class="fab fa-github"></i> GitHub: <span class ="linkName">github.com/mariohernandezk10 </span></p>
    <p class="gitHub"><i class="fab fa-linkedin"></i> LinkedIN: <span class ="linkName">www.linkedin.com/in/mariohernandezk10/ </span></p>
    <p class="gitHub"><i class="fas fa-envelope-square"></i> Email: mariohernandezk10@gmail.com</p>`;
  }
  function myFunction3() {
    document.getElementById("demo").innerHTML = `<p class="gitHub"><i class="fab fa-github"></i> GitHub: <span class ="linkName">github.com/FerdinadAguwa </span></p>
    <p class="gitHub"><i class="fab fa-linkedin"></i> LinkedIN: <span class ="linkName">www.linkedin.com/in/ferdinad-aguwa/ </span></p>
    <p class="gitHub"><i class="fas fa-envelope-square"></i> Email: ferd.aguwa@gmail.com</p>`;
  }
  function myFunction4() {
    document.getElementById("demo").innerHTML = `<p class="gitHub"><i class="fab fa-github"></i> GitHub: <span class ="linkName">github.com/MaddyCalvo </span></p>
    <p class="gitHub"><i class="fab fa-linkedin"></i> LinkedIN: <span class ="linkName"> www.linkedin.com/in/madison-calvo-784145172/  </span></p>
    <p class="gitHub"><i class="fas fa-envelope-square"></i> Email: madison.calvo1@gmail.com</p>`;
  }
  function myFunction5() {
    document.getElementById("demo").innerHTML = `<p class="gitHub"><i class="fab fa-github"></i> GitHub: <span class ="linkName">github.com/nwscott81 </span></p>
    <p class="gitHub"><i class="fab fa-linkedin"></i> LinkedIN: <span class ="linkName">www.linkedin.com/in/nathaniel-scott </span></p>
    <p class="gitHub"><i class="fas fa-envelope-square"></i> Email: nwscott81@gmail.com</p>`;
  }