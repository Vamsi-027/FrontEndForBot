// talk function is being called when user clicks send button 

function talk(){
    var user=document.getElementById("inputbox").value;
    user_msg_append(user)
    if(user.toLowerCase()=="hi" || user.toLowerCase()=="hello")
    {
      bot_msg_append("Hello!Tell me what to do")
    }
    else if(user.toLowerCase().includes("joke")){
      joke()
    }
    else if(user.includes("eval"))
    {
      evall(user.slice(5,user.length))
    }
    else if(user.includes("movie"))
    {
      imdb(user.slice(6,user.length))
    }
    else if(user.includes("exit") || user.includes("thank you") || user.includes("thank you")){
      bot_msg_append("Nice to chat with you.See you around")
    }
    else{
      bot_msg_append("Sorry! I didnt understand:(")
    }
    scrolldown();
}

//Appends all user messages into the chatlog
function user_msg_append(user){
  
    var node = document.createElement("p");
    node.classList.add("user_msg")
    var textnode = document.createTextNode(user);
    document.getElementById("inputbox").value="";
    node.appendChild(textnode);
    document.getElementsByClassName("chatlogs")[0].appendChild(node);
    scrolldown();
}

//Appends all bot messages into the chatlog 
function bot_msg_append(data){
    var node = document.createElement("p");
    node.classList.add("bot_msg")
    var textnode = document.createTextNode(data);
    document.getElementById("inputbox").value="";
    node.appendChild(textnode);
    document.getElementsByClassName("chatlogs")[0].appendChild(node);
    scrolldown();
}

//Tells a random joke using rapid api
function joke(){
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var data=JSON.parse(this.responseText) //data from the api comes in the form of object.So we need to parse the object inorder to send the data to frontend
      bot_msg_append(data.content)
      
    }
   
  });
  xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke");
  xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "6db373d25cmsh3b2c181abcde788p12167bjsn0800b6171148");
  xhr.send();
   scrolldown();
}

//Evaluates an expression
//NOTE: user should give an expression as eval [space] expression otherwise it wont works
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

//Page scrolls down automatically 
function scrolldown() {
  document.getElementsByClassName("chatbox")[0].scrollBy(0, 250);
}
