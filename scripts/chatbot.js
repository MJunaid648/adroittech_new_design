$(function () {
  var INDEX = 0;
  var userId = generateUUID(); // Generate a unique user ID
  loadChatHistory();

  // Function to generate a unique user ID (UUID)
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  // Function to send a message to the API
  function sendMessageToAPI(userId, message) {
    var apiUrl = "https://mask-web-chatbot.azurewebsites.net/Query";
    var requestData = {
      user_id: userId,
      message: message,
    };

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response and generate the bot's message
        generate_message(data.responseMessage, "user");
        // 1
        // Store the user and bot messages in chat history
        var chatHistory = JSON.parse(sessionStorage.getItem("userId")) || [];
        chatHistory.push({ type: "self", message: message });
        chatHistory.push({ type: "user", message: data.responseMessage });
        sessionStorage.setItem("userId", JSON.stringify(chatHistory));
      })
      .catch((error) => {
        console.error("Error sending message to API:", error);
      });
  }

  // Function to generate a chat message and append it to the chat logs
  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
    str += '          <span class="msg-avatar">';
    str +=
      '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
    str += "          </span>";
    str += '          <div class="cm-msg-text">';
    str += msg;
    str += "          </div>";
    str += "        </div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX)
      .hide()
      .fadeIn(300);
    if (type == "self") {
      $("#chat-input").val("");
    }
    $(".chat-logs")
      .stop()
      .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }

  // Function to load chat history for the user
  function loadChatHistory() {
    // Clear the chat logs before loading chat history
    $(".chat-logs").empty();

    var chatHistory = JSON.parse(sessionStorage.getItem("userId")) || [];
    chatHistory.forEach((item) => {
      console.log(item, "item");
      generate_message(item.message, item.type);
    });
  }

  // Load chat history when the chatbox opens
  $("#chat-circle").click(function () {
    loadChatHistory();
    $("#chat-circle").toggle("scale");
    $(".chat-box").toggle("scale");
  });

  // Close the chatbox and show the chat circle
  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle("scale");
    $(".chat-box").toggle("scale");
  });

  // Send user messages to the API when the submit button is clicked
  $("#chat-submit").click(function (e) {
    e.preventDefault();
    var msg = $("#chat-input").val().trim();
    if (msg == "") {
      return false;
    }

    // Send the message to the API
    sendMessageToAPI(userId, msg);

    // Generate and display the user message
    generate_message(msg, "self");

    // Clear the input field
    $("#chat-input").val("");
  });

  // Load chat history when the page loads
});

// $(function () {
//     var INDEX = 0;
//     var userId = generateUUID(); // Generate a unique user ID

//     // Function to generate a unique user ID (UUID)
//     function generateUUID() {
//       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//         var r = (Math.random() * 16) | 0,
//           v = c == "x" ? r : (r & 0x3) | 0x8;
//         return v.toString(16);
//       });
//     }

//     // Function to generate a chat message and append it to the chat logs
//     function generate_message(msg, type) {
//       INDEX++;
//       var str = "";
//       str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
//       str += '          <span class="msg-avatar">';
//       str += '            <img src="https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745">';
//       str += "          <\/span>";
//       str += '          <div class="cm-msg-text">';
//       str += msg;
//       str += "          <\/div>";
//       str += "        <\/div>";
//       $(".chat-logs").append(str);
//       $("#cm-msg-" + INDEX)
//         .hide()
//         .fadeIn(300);
//       if (type == "self") {
//         $("#chat-input").val("");
//       }
//       $(".chat-logs")
//         .stop()
//         .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
//     }

//     // Function to load chat history for the user
//     function loadChatHistory() {
//       var chatHistory = JSON.parse(localStorage.getItem(userId)) || [];
//       chatHistory.forEach((item) => {
//         generate_message(item.message, item.type);
//       });
//     }

//     // Load chat history when the chatbox opens
//     $("#chat-circle").click(function () {
//       loadChatHistory();
//       $("#chat-circle").toggle("scale");
//       $(".chat-box").toggle("scale");
//     });

//     // Close the chatbox and show the chat circle
//     $(".chat-box-toggle").click(function () {
//       $("#chat-circle").toggle("scale");
//       $(".chat-box").toggle("scale");
//     });

//     // Send user messages to the API when the submit button is clicked
//     $("#chat-submit").click(function (e) {
//       e.preventDefault();
//       var msg = $("#chat-input").val().trim();
//       if (msg == "") {
//         return false;
//       }

//       // Send the message to the API
//       sendMessageToAPI(userId, msg);

//       // Generate and display the user message
//       generate_message(msg, "self");

//       // Clear the input field
//       $("#chat-input").val("");
//     });

//     // Function to send a message to the API
//     function sendMessageToAPI(userId, message) {
//       var apiUrl = "https://mask-web-chatbot.azurewebsites.net/Query";
//       var requestData = {
//         user_id: userId,
//         message: message,
//       };

//       $.ajax({
//         type: "POST",
//         url: apiUrl,
//         data: JSON.stringify(requestData),
//         contentType: "application/json",
//         success: function (data) {
//           // Handle the API response and generate the bot's message
//           generate_message(data.response, "user");

//           // Store the user message in chat history
//           var chatHistory = JSON.parse(localStorage.getItem(userId)) || [];
//           chatHistory.push({ type: "self", message: message });
//           localStorage.setItem(userId, JSON.stringify(chatHistory));
//         },
//         error: function (error) {
//           console.error("Error sending message to API:", error);
//         },
//       });
//     }
//   });
