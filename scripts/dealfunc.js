'use strict';

// Abstand von oben
let topp = 100;

for (var i = 0; i < 20; i++) {
  // Jedes Element 30px weiter unten
  topp = 100 + i*30;

  // Position soll absolut sein
  document.getElementById(("card"+(40+i))).style.position = "absolute";

  // top-Abstand:   100 + i * 30
  // Card-Id:       Card 40 + i
  // Card40 (100px), Card41 (130px), Card42 (160px) ...
  document.getElementById(("card"+(40+i))).style.top = topp + "px";

  // Abstand der Karten von rechts 10px
  document.getElementById(("card"+(40+i))).style.right = "20px";

  // Karten um 90 Grad drehen
  document.getElementById(("card"+(40+i))).style.transform = "rotate(90deg)";
}

//<editor-fold> Main-Java

  class Spieler {
  // TODO: Spieler deklarieren


  }
  class Card {
    constructor (sortId, color, ifTrumpf, power, name, points) {
      this.sortId = sortId;
      this.color = color;
      this.ifTrumpf = ifTrumpf;
      this.power = power;
      this.name = name;
      this.points = points;
    }
  }
  // TODO: Karten definieren, Punktreihenfolge ausdenken
  // TODO: Trumpffarbe als boolVariable definieren, noch was ausdenken

  //------------------------ Karten ------------------------------
  //**************************************************************
  let ifTrumpf = 0;
  let power = 1;
  let points = 1;

  let AHe = new Card(35, "herz", ifTrumpf, power, "AHe", points)
  let AKa = new Card(34, "karo", ifTrumpf, power, "AKa", points)
  let AKr = new Card(33, "kreuz", ifTrumpf, power, "AKr", points)
  let APi = new Card(32, "pik", ifTrumpf, power, "APi", points)

  let KHe = new Card(31, "herz", ifTrumpf, power, "KHe", points)
  let KKa = new Card(30, "karo", ifTrumpf, power, "KKa", points)
  let KKr = new Card(29, "kreuz", ifTrumpf, power, "KKr", points)
  let KPi = new Card(28, "pik", ifTrumpf, power, "KPi", points)

  let QHe = new Card(27, "herz", ifTrumpf, power, "QHe", points)
  let QKa = new Card(26, "karo", ifTrumpf, power, "QKa", points)
  let QKr = new Card(25, "kreuz", ifTrumpf, power, "QKr", points)
  let QPi = new Card(24, "pik", ifTrumpf, power, "QPi", points)

  let JHe = new Card(23, "herz", ifTrumpf, power, "JHe", points)
  let JKa = new Card(22, "karo", ifTrumpf, power, "JKa", points)
  let JKr = new Card(21, "kreuz", ifTrumpf, power, "JKr", points)
  let JPi = new Card(20, "pik", ifTrumpf, power, "JPi", points)

  let He10 = new Card(19, "herz", ifTrumpf, power, "He10", points)
  let Ka10 = new Card(18, "karo", ifTrumpf, power, "Ka10", points)
  let Kr10 = new Card(17, "kreuz", ifTrumpf, power, "Kr10", points)
  let Pi10 = new Card(16, "pik", ifTrumpf, power, "Pi10", points)

  let He9 = new Card(15, "herz", ifTrumpf, power, "He9", points)
  let Ka9 = new Card(14, "karo", ifTrumpf, power, "Ka9", points)
  let Kr9 = new Card(13, "kreuz", ifTrumpf, power, "Kr9", points)
  let Pi9 = new Card(12, "pik", ifTrumpf, power, "Pi9", points)

  let He8 = new Card(11, "herz", ifTrumpf, power, "He8", points)
  let Ka8 = new Card(10, "karo", ifTrumpf, power, "Ka8", points)
  let Kr8 = new Card(9, "kreuz", ifTrumpf, power, "Kr8", points)
  let Pi8 = new Card(8, "pik", ifTrumpf, power, "Pi8", points)

  let He7 = new Card(7, "herz", ifTrumpf, power, "He7", points)
  let Ka7 = new Card(6, "karo", ifTrumpf, power, "Ka7", points)
  let Kr7 = new Card(5, "kreuz", ifTrumpf, power, "Kr7", points)
  let Pi7 = new Card(4, "pik", ifTrumpf, power, "Pi7", points)

  let He6 = new Card(3, "herz", ifTrumpf, power, "He6", points)
  let Ka6 = new Card(2, "karo", ifTrumpf, power, "Ka6", points)
  let Kr6 = new Card(1, "kreuz", ifTrumpf, power, "Kr6", points)
  let Pi6 = new Card(0, "pik", ifTrumpf, power, "Pi6", points)


  const FULLDECK = [AHe, AKa, AKr, APi, KHe, KKa, KKr, KPi,
                    QHe, QKa, QKr, QPi, JHe, JKa, JKr, JPi,
                    He10, Ka10, Kr10, Pi10, He9, Ka9, Kr9, Pi9,
                    He8, Ka8, Kr8, Pi8, He7, Ka7, Kr7, Pi7,
                    He6, Ka6, Kr6, Pi6];

//</editor-fold>


let trumpfCard;

//Spieler
let player0 = [];
let player1 = [];
let player2 = [];

//Spieler-Arrays
let players = [player0, player1, player2];


 function dealCards() {

  // document.getElementById("card9").style.display='none'; --> 'block' = einblenden



  let allcards = FULLDECK.slice(); //allcards = Kopie von FULLDECK

  // Standardfunktion, Deklarierung des Spieler-Arrays
  arraysLeeren([players,player0,player1,player2]);
  players = [player0,player1,player2];

  // Bestimmung der Trumpfkarte
  let x = getRandom(0,allcards.length);

  // Entfernung der Trumpfkarte von dem Deck
  trumpfCard = allcards.splice(x,1);

  // 2 for-Schleifen: jeder Spieler bekommt 6 Karten (1. Schleife),
  for (var i = 0; i < 6; i++) {
    // für insgesamt 3 Spieler (2. Schleife)
    for (var j = 0; j < 3; j++) {

      // 1 zufaellige Karte, das Ganze 6 x 3 mal
      let x = getRandom(0,allcards.length - 1);

      // Attribut ifTrumpf wird 1 gesetzt
      if(trumpfCard[0].color === allcards[x].color) {
        allcards[x].ifTrumpf = 1;
        // Trumpfkarten Sortierungs-Id wird erhöht
        allcards[x].sortId = allcards[x].sortId + 36;
      }
      // zufaellige Karte aus Kartendeck wird auf Hand von Spieler 0 - 2 zugeordnet
      players[j].push(allcards[x]);
      document.getElementById("card"+(20*j+i)).src = "Images/Cards/" + players[j][i].name + ".png";
      allcards.splice(x,1);
    }
  }

  // letzte Karte nach dem Austeilen: Trumpfkarte
  document.getElementById("deck2").src = "Images/Cards/" + trumpfCard[0].name + ".png";
  sortCards();
  console.log(player0);

}

// Sortierung der Karten auf der Hand
function compareBySortId (c1,c2) {
  console.log('SORTIERUNG');
  if (c1.sortId > c2.sortId) { return -1 }
  else if (c1.sortId < c2.sortId) { return 1 }
  else { return 0 }
}

function sortCards() {
  // sortiert die Karten auf der Hand, basierend auf der sortId
  console.log("sort started");
  player0.sort(compareBySortId);

  for (var i = 0; i < player0.length; i++) {
    document.getElementById("card"+i).src = "Images/Cards/" + player0[i].name + ".png";
  }
}


function kleinsterTrumpf() {
  // wichtig dafuer, wer die Runde beginnt
  // 2 for-Schleifen: jeder Spieler hat 6 Karten (1. Schleife),
  for (var i = 0; i < 6; i++) {
    // für insgesamt 3 Spieler (2. Schleife)
    for (var j = 0; j < 3; j++) {
      // vielleicht mit einer switch-funktion
      // Vergleiche sortIds der Karten miteinander:
      // case 0: liegen zwischen 36 und 39 (beide Zahlen eingeschlossen): Spieler mit Trumpf 6 darf beginnen
      // case 1: liegen zwischen 40 und 43 (beide Zahlen eingeschlossen): Spieler mit Trumpf 7 darf beginnen
      // case 2: liegen zwischen 44 und 47 (beide Zahlen eingeschlossen): Spieler mit Trumpf 8 darf beginnen
      // case 3: liegen zwischen 48 und 51 (beide Zahlen eingeschlossen): Spieler mit Trumpf 9 darf beginnen
      // case 4: liegen zwischen 52 und 55 (beide Zahlen eingeschlossen): Spieler mit Trumpf 10 darf beginnen
      // case 5: liegen zwischen 56 und 59 (beide Zahlen eingeschlossen): Spieler mit Trumpf J darf beginnen
      // case 6: liegen zwischen 60 und 63 (beide Zahlen eingeschlossen): Spieler mit Trumpf Q darf beginnen
      // case 7: liegen zwischen 64 und 67 (beide Zahlen eingeschlossen): Spieler mit Trumpf K darf beginnen
      // case 8: liegen zwischen 68 und 71 (beide Zahlen eingeschlossen): Spieler mit Trumpf A darf beginnen
      }


}
}
function angriffAI() {
// greife immer mit den niedrigsten nichtTrumpfKarten an
// am besten mit so vielen Karten wie möglich gleichzeitig
// wenn keine nicht-trumpfkarten mehr auf der Hand: greife mit Trumpf an


}

function verteidigungAI() {
// verteidige jede Karte so gering wie möglich
// wenn keine Karte der gleichen Farbe auf der Hand ist --> verteidige mit dem kleinsten Trumpf oder nimm auf (möglicherweise zufällig, oder bei
// mehr eine bestimmte Anzahl an Karten wird trumpf erst genutzt)

}

function angriffSpieler() {
// bewege die mit einem Dropdown-Menü gewählte Karte auf die Angriffsfläche
// schaue ob der Spieler eine Karte mit der gleichen Zahl/Bild auf der Hand hat, wenn ja:
// erlaube, diese ebenfalls zu spielen


}

function verteidigungSpieler() {


}




document.getElementById("button0").addEventListener("click",dealCards);
