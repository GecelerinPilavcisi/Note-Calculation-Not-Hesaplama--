var notSonuc = document.getElementById("notSonuc");
var progressValue = document.getElementById("progressValue");
var dersSayisi = document.getElementById("dersSayisi");


function hesapNotu() {
  document.getElementById("spinners").style.display = "none";
  document.getElementById("Hesapla").innerHTML = "Yeni ders ekle";
  // var new_element_div = document.createElement("DIV");
  // var btn = document.createElement('BUTTON');
  // new_element_div.classList.add("btn");

  var harfNotu = new Array("FF", "FD", "DD", "DC", "CC", "CB", "BB", "BA", "AA");


  for (var i = 0; i <= dersSayisi.value - 1; i++) {
    var page = document.createElement("DIV");
    page.className = "form-group mx-sm-3 mb-2";
    page.id = "pageHesap";
    var elementSelectHarf = document.createElement("select");
    elementSelectHarf.className = "select-style";

    elementSelectHarf.id = "elementSelectHarf";
    var elementInput = document.createElement("input");
    elementInput.className = "form-control";
    elementInput.placeholder = "Ders adı girin";
    var elementSelectKredi = document.createElement("select");
    elementSelectKredi.className = "select-styleKredi";
    elementSelectKredi.id = "elementSelectKredi";
    var selectNote = document.getElementById("selectNote");
    var labelInfo = document.createElement("label");
    labelInfo.innerHTML = i + 1 + "-";
    var exitButton = document.createElement("button");
    exitButton.className = "btn btn-light";
    exitButton.textContent = "x";
    exitButton.type = "button";

    if (i <= 9) {
      for (var j = 8; j >= 0; j--) {
        var opt = document.createElement('option');
        opt.value = j + 1;
        opt.innerHTML = j + 1 + " kredi";
        elementSelectKredi.appendChild(opt);
        var opt1 = document.createElement('option');
        opt1.value = j / 2;
        opt1.innerHTML = harfNotu[j];
        elementSelectHarf.appendChild(opt1);

      }
    }

    page.appendChild(labelInfo);
    page.appendChild(elementInput);
    page.appendChild(elementSelectHarf);
    page.appendChild(elementSelectKredi);
    page.appendChild(exitButton);
    selectNote.appendChild(page);
    elementSelectHarf.addEventListener('change', function () {
      notHesapla();
    });
    elementSelectKredi.addEventListener('change', function () {
      notHesapla();
    });
    exitButton.addEventListener('click', function () {
      document.getElementById("elementSelectHarf").remove();
      // document.getElementById("elementSelectKredi").remove();
      // document.getElementById("elementInput").remove();    
      document.getElementById("pageHesap").remove();
      notHesapla();
    });
  }

  notHesapla();
}

function notHesapla() {
  //console.log(elementSelectHarf[0].options[elementSelectHarf[0].selectedIndex].value,elementSelectKredi[0].options[elementSelectKredi[0].selectedIndex].value);
  var toplamKredi = 0;
  var ortalama = 0;
  for (var i = 0; i <= elementSelectHarf.length - 1; i++) {
    toplamKredi += parseFloat(elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);
    ortalama += parseFloat(elementSelectHarf[i].options[elementSelectHarf[i].selectedIndex].value) * (elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);

  }
  var sonuc = ortalama / toplamKredi;
  notSonuc.innerHTML = sonuc;
  console.log("ders sayısı:", dersSayisi.value, "ort:", ortalama, "tkredi:", toplamKredi, "sonuc:", sonuc);
  progressValue.innerHTML = toplamKredi;




}