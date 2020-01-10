const fs = require('fs')
var $ = require("jquery")

var CreditCard = require('credit-card');
 
$("#generat").click(function(e){
    generator = require('creditcard-generator');
    const randomInt = require('random-int');

    switch ($("#cardType").val()) {
        case "VISA":
          var typeReturn = "VISA";
          var cvvRturn = randomInt(100, 999);
          break;
        case "MASTERCARD":
          var typeReturn = "MasterCard";
          var cvvRturn = randomInt(100, 999);
          break;
        case "AMERICANEXPRESS":
          var typeReturn = "Amex";
          var cvvRturn = randomInt(1000, 9999);
          break;
        case "DINERSCLUB":
          var typeReturn = "Diners";
          var cvvRturn = randomInt(100, 999);
          break;
        case "DISCOVER":
          var typeReturn = "Discover";
          var cvvRturn = randomInt(100, 999);
          break;
        case "JCB":
          var typeReturn = "JCB";
          var cvvRturn = randomInt(100, 999);
          break;
        default:
          console.log("Not valide");
      }   

    // Default      
    $('#cvv').val(cvvRturn);
    $('#number').val(generator.GenCC(typeReturn, 1, Math.random));
    $('#expiryMonth').val(randomInt(1, 12));
    $('#expiryYear').val(randomInt(2020, 2026));
 
    var card = {
        cardType: $("#cardType").val(),
        number: $("#number").val(),
        expiryMonth: $("#expiryMonth").val(),
        expiryYear: $("#expiryYear").val(),
        cvv: $("#cvv").val()
      };
      var validation = CreditCard.validate(card);

      // Card number
      $("#cardType").addClass("uk-form-success");

      if (validation.validCardNumber === true) {
        $("#number").removeClass("uk-form-danger");
        $("#number").addClass("uk-form-success");        
       } else {
        $("#number").removeClass("uk-form-success");
        $("#number").addClass("uk-form-danger");
       }
        // Expiry Month
       if (validation.validExpiryMonth === true) {
        $("#expiryMonth").removeClass("uk-form-danger");
        $("#expiryMonth").addClass("uk-form-success");        
       } else {
        $("#expiryMonth").removeClass("uk-form-success");
        $("#expiryMonth").addClass("uk-form-danger");
       }
        // Expiry Year
       if (validation.validExpiryYear === true) {
        $("#expiryYear").removeClass("uk-form-danger");
        $("#expiryYear").addClass("uk-form-success");        
       } else {
        $("#expiryYear").removeClass("uk-form-success");
        $("#expiryYear").addClass("uk-form-danger");
       }
       // Cvv
       if (validation.validCvv === true) {
        $("#cvv").removeClass("uk-form-danger");
        $("#cvv").addClass("uk-form-success");
        
       } else {
        $("#cvv").removeClass("uk-form-success");
        $("#cvv").addClass("uk-form-danger");
       }    
});
 
