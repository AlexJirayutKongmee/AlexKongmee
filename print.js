function printDiv(printableAre) {
     var printContents = document.getElementById(printableAre).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
