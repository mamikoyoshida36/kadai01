// ハンバーガーメニュー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('jsHamburger');
  var blackBg = document.getElementById('jsBlackBg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('navOpen');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('navOpen');
  });
}
toggleNav();

// Q&Aトグル


// メニューがクリックされた時の表示・非表示
  var a = document.querySelectorAll("a");

  a[0].addEventListener("click", function(){
    document.body.classList.remove('navOpen');
  });

  a[1].addEventListener("click", function(){
    document.body.classList.remove('navOpen');

    document.getElementById("intro").style.backgroundImage = 'url("./images/AdobeStock_295587079.png")';
    document.getElementById("intro").style.paddingTop = "121.066667%";
    document.getElementById("introP").style.display = "none";

    var p = document.createElement("p");
    document.getElementById("intro").appendChild(p);
    p.textContent = "NEWS";
    p.style.color = "#918F89";
    p.style.fontSize = "8vw";
    p.style.left = "0";
    p.style.width = "100%";
    p.style.textAlign = "center";
    var h2 = document.getElementById("news").getElementsByTagName("h2");
    h2[0].innerHTML = "<h2>最新情報</h2>";
    document.getElementById("teian").style.display = "none";
    document.getElementById("style").style.display = "none";
    document.getElementById("contact").style.visibility = "hidden";
  });

  a[2].addEventListener("click", function(){
    document.body.classList.remove('navOpen');
  });
