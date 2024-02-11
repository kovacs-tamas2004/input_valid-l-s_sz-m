function ellenorizSzam() {
    let szam = document.getElementById('szam').value;

    let szamjegy = /^\d+$/;
    if (!szamjegy.test(szam)) {
      alert('A szám csak számjegyeket tartalmazhat!');
      return false;
    }

    let kisnagybetu = /[a-zA-Z]/;
    if (kisnagybetu.test(szam)) {
      alert('A szám nem tartalmazhat kisbetűt vagy nagybetűt!');
      return false;
    }

    let specKarakter = /^[\-\+\.]*$/;
    if (!specKarakter.test(szam)) {
      alert('A szám csak ezeket a speciális karaktereket tartalmazhatja: -, +, .');
      return false;
    }

    alert("A szám megfelelő")
    return true;
  }