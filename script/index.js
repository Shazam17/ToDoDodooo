function changeItem(h) {
    document.getElementById('1').style.backgroundColor="rgba(102, 51, 153, 0.297)";
    document.getElementById('1').style.gridArea=h+2+'/2/'+(h+5)+'/3';
}

  function rechangeItem() {
    document.getElementById('1').style.backgroundColor="white";
    document.getElementById('1').style.gridArea='3/2/6/3';
  }
