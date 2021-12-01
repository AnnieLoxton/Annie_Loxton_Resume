/*Function for tabs that reveal & hide content.
Found here:
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_tabulators_active */

function openTab(evt, tabName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("tabContent");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tabLinkActive", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tabLinkActive";
  }