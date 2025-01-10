button = document.getElementById("submit")

button.addEventListener("click",(e)=>{
    const name = document.getElementById("name").value
    const msg = document.getElementById("message").value

    sendRequest(name,msg);
    console.log("clicked")
    alert("Meowww")

})

async function sendRequest(name,message){
    console.log("Trying to send request")
    await fetch(`https://0a14-2401-4900-1c89-a0cf-193b-b54f-eb59-84c5.ngrok-free.app/auth/${name}/${message}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        mode:'no-cors'
      });
}


var i = 0;
var txt = 'Good Morninggg Princess! Sorry kal na mai thoda jaldi chla gaya tha sorry, Wo papa daant rhe the ki jldi so ja, akhei dekhi hai apni, nhi to mai apko akele chhorkr nhi jata kl, btao itna rote ho mere chle jane pr? do minute ke liye?, btao itna sensitive hh shona, aur mai itna rulata hu Sorrry 😞😞😞, MM shrminda hu apni harkato ke liye, Apko pta hh mm kyu gya, kyuki mujhe na pata hh mai apko deserve nahi krta itna bura hu mai apke pass na abhi bhi time hai chhor do mujhe, zindagi bhr pareshan rahoge, Pr Suno , mmne nhi jhut bola kal aapse koi, ha mai pehle kafi jhut bolta tha, kyuki merko kisiko bhi apni baatein btana psnd nhi tha, pr suno mai aapse sb sb sch bolta hu abhi, aapse request hh atleast thoda sa, I mean thoda sa trust develop krlo shonaa, bina trust ke kaise hoga, mm apko fir bol rha hu agr aap kbhi bhi mujhpr trust nhi kr skte to chhor do shona, aap hi humesha overthinking aur stress me rhoge, Pr sunoo, mai aapse bhot pyaar krta hu aap soch nhi skte kitna krta hu, mm sirf aap aur apse pyaar krta hu , mm kabhi nhi chhorna chahta aapko, aapko apni wifeyy ji banana chahte ho , wo to klmerko thoda bura lg gya tha apke liye, aapko sehna pd rha hh, mujh jaise kutte ko, aur apne bola leave me, isliye gya mm, nhi to mm apko kbhi chhorkr nhi jata 2 minute ke liye bhi, btao kl itna panic ho gaye, ek hi cheez bol rhe the, shonaa kaan kholkr sun lo, mai aapko chhorkr kahi bhi, kbhi bhi nhi jaungaaa, aap mera hath lo aur apne hath se bandh kr rkh lo , btao mm itna drta hu aapse, aur apke bina permission ke dur jaunga apse? nahiiii, accha sunoo jao khana vagehra khao aur merko pyaari si photo bhejooo,pandaaaaaaaaa I love youuuuu 💖💖💖💖💖 mu tomaku bahut bhala pauchi 💓💓💓💓💓 Aaami tomake khub bhalo bashi 💖💖💖💖'; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("paragraph").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".form").style.display = "block";
  }
}

document.querySelector(".form").style.display = "none";
typeWriter();