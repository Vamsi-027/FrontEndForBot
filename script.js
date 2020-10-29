function talk(){
    var user=document.getElementById("inputbox").value.toLowerCase();
    user_msg_append(user)
    if(user=="hi" || user=="hello")
    {
      bot_msg_append("Hello!Tell me what to do")
    }
    else if(user.includes("joke")){
      joke()
    }
    else if(user.includes("eval"))
    {
      evall(user.slice(5,user.length))
    }
    else if(user.includes("time"))
    {
      var date=new Date();
      bot_msg_append(date)
    }
    else if(user.includes("exit") || user.includes("thank you") || user.includes("bye")){
      bot_msg_append("Nice to chat with you.See you around")
    }
    else{
      bot_msg_append("Sorry! I didnt understand:(")
    }
    scrolldown();
}

function user_msg_append(user){
  
    var node = document.createElement("p");
    node.classList.add("user_msg")
    var textnode = document.createTextNode(user);
    document.getElementById("inputbox").value="";
    node.appendChild(textnode);
    document.getElementsByClassName("chatlogs")[0].appendChild(node);
    scrolldown();
}

function bot_msg_append(data){
    var node = document.createElement("p");
    node.classList.add("bot_msg")
    var textnode = document.createTextNode(data);
    document.getElementById("inputbox").value="";
    node.appendChild(textnode);
    document.getElementsByClassName("chatlogs")[0].appendChild(node);
    scrolldown();
}

function joke(){
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var data=JSON.parse(this.responseText)
      bot_msg_append(data.content)
      
    }
   
  });
  xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke");
  xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "6db373d25cmsh3b2c181abcde788p12167bjsn0800b6171148");
  xhr.send();
   scrolldown();
}

function evall(user){
  var c = eval(user)
  if(c.toString().length!=0){
    bot_msg_append("Result of "+user+" : "+c)

  }
  else{
    bot_msg_append("Please enter a valid expression")
  }
   scrolldown();
  
}

function scrolldown() {
  document.getElementsByClassName("chatbox")[0].scrollBy(0, 250);
}