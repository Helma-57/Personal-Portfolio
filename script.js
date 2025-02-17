// Initialize AOS animation
AOS.init({ offset: 0 });

// Hamburg menu toggle
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

// Cancel menu toggle
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Initialize AOS (Animate On Scroll) library
AOS.init({ offset: 0 });

// Hamburg Menu Toggle Functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Initialize AOS library
AOS.init({ offset: 0 });

// Hamburger menu functionality
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// EmailJS integration
window.onload = function () {
  emailjs.init("xnfDcKCMxdhDjQFC7"); // Replace with your EmailJS User ID
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    let formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_nkn4kz9", "template_fpnmw39", formData).then(
      function () {
        alert("Message sent successfully! Check your Gmail inbox.");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("Email sending error:", error);
      }
    );
  });

  // Initialize AOS (Animation On Scroll)
AOS.init({ offset: 0 });

// Function to toggle the hamburger menu
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

// Function to close the hamburger menu
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

AOS.init({ offset: 0 });

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}
/*chatbot*/
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function closechat() {
    const closec = document.getElementById('chatbot');
    closec.style.display = closec.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Function to send message to chatbot
  function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase(); // Normalize input to lowercase
  
    // Check if the user input is not empty
    if (userInput) {
      // Display user message
      const userMessageDiv = document.createElement('div');
      userMessageDiv.classList.add('message', 'user-message');
      userMessageDiv.textContent = userInput;
      document.getElementById('chatbot-body').appendChild(userMessageDiv);
     
      // Determine the bot's response based on user input
      setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
       
        let botResponse = "I'm not sure how to respond to that."; // Default response
  
        // Define keyword-response pairs (case-insensitive)
        const responses = {
          "hello": "Hi there! How can I assist you today?",
          "how are you": "im great thanks and you?",
          "hey": "Hi there! How can I assist you today?",
          "hi": "Hi there! How can I assist you today?",
          "help": "I'm here to help! What do you need assistance with?",
          "CV" : "You can download the CV under the Resume",
          "bye": "Goodbye! Have a great day!",
          "thank you": "You're welcome! Let me know if you need anything else.",
          "skills": "Some of the the soft skills that Helma poses are good communication and technical skills:CSS navigate to the skills page for more information.",
          "thanks": "You're welcome! Let me know if you need anything else.",
          "name": "My name is Taurus, Helma's assistant. I'm here to help!",
          "tell me more about the profile": "Motivated IT professional with a Diploma in Information Communication Technology, specialized in Communication Networks. Skilled in designing, coding, with proficiency in languages Html, CSS and Python.",
          "contact": "To get a hold of Helma email her at makhubelehelma@gmail.com",
          "education": "Helma studied at the Cape Peninsula University of Technology , South Africa.",
          "experience": "Helma worked at Cape Peninsula University of Technology as a Network Engineer. For more information click on resume.",
          "profile" : "The portfolio page is designed to showcase Helma Makhubele’s professional profile, skills, education, and work experience, while also offering potential collaborators or employers a means to contact him directly through the form or chatbot. It's built with modern web technologies (HTML, CSS, JavaScript) and is structured to highlight both technical and soft skills, providing an overview of his career and achievements in a clean, user-friendly layout."
        };
  
        // Loop through the responses object to match user input with keywords
        for (let keyword in responses) {
          if (userInput.includes(keyword)) {
            botResponse = responses[keyword];
            break;
          }
        }
  
        // Display the bot response
        botMessageDiv.textContent = botResponse;
        document.getElementById('chatbot-body').appendChild(botMessageDiv);
  
        // Scroll to the bottom of the chat
        document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;
  
      }, 500); // Delay before bot response
  
     
  
      // Clear the input field after sending the message
      document.getElementById('user-input').value = '';
    }
  }
  
  // Event listener to allow "Enter" key to send the message
  document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      sendMessage(); // Trigger the sendMessage function when Enter is pressed
    }
  });
  // Automatically send a message when the chatbot is opened
  window.onload = function() {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'bot-message');
    botMessageDiv.textContent = "Hi! How can I help you today?";
    document.getElementById('chatbot-body').appendChild(botMessageDiv);
  
    // Scroll to the bottom of the chat
    document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;
  };