const prizes = [
    "Ein Wochenende in einem Luxushotel",
    "Ein Gutschein für ein exklusives Abendessen",
    "Ein Technik-Gadget deiner Wahl",
    "Ein Jahresvorrat an Schokolade",
    "Ein Abenteuer-Wochenende im Freizeitpark"
  ];
  
  function generatePrize() {
    const prizeOutput = document.getElementById("prizeOutput");
    const randomIndex = Math.floor(Math.random() * prizes.length);
    prizeOutput.textContent = prizes[randomIndex];
  }
  