const express = require("express");

const router = express.Router();

router.post("/ussd", (req, res) => {

  // Read variables sent via POST from our SDK
  
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('####################', req.body);
  let response = "";

  // Chained IF statements will take us through the USSD logic
  if (text === "") {
    console.log(text);
    // This is the first request 
    // Start responses with CON if they have further options/they CONtinue
    response = `CON Welcome to  Fistula Care. Join us in a journey to restore a mother's dignity:
    Select a language to proceed.
        1. English;
        2. Kiswahili;`
  } else if (text === "1") {
    // Business logic for first level response
     response = `CON Have you  experienced  any of the following symptoms; *** 
     Urine incontinence, Feacal incontinence and skin irritation :
        1. Yes
        2. No;`

  } else if (text === "2") {
    response = `CON Karibu , kwenye lugha ya kiswahili `
  } else if (text === "1*1") {
    // This is a second level response
    // 1 was selected in the first level, 1 in the second level
      1. `Stay and Make a call`    
      2. `END Proceed to website https://amref.org/kenya/jasmilas-struggle-with-fistula for more information.`;
  } else if (text === "1*1") {
    // if 1 was selected in the first level, 1 in the second level
    response = `END You will receive a call shortly`;
  }

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
});

module.exports = router;