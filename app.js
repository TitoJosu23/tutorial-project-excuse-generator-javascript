function Excuse() {
    who = ["The dog", "My grandma", "His turtle", "My bird",];
    did = ["ate", "peed", "crushed", "broke",];
    what = ["my homework", "the keys", "the car",];
    when = ["before the class","right on time","when I finished","during my lunch","while I was praying",];
  
     who = who[Math.round(Math.random() * (who.length - 1))];
     did = did[Math.round(Math.random() * (did.length - 1))];
     what = what[Math.round(Math.random() * (what.length - 1))];
     when = when[Math.round(Math.random() * (when.length - 1))];
  
    document.getElementById("excuses").innerHTML =
      "<div> " + who + " " + did + " " + what + " " + when + ".</div>";
  }