const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    // create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>`  // Fix the closing tag from <P> to </p>
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;  // Fix the closing tag from <P> to </p>
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        //
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
}; 600);
}

sendChatBtn.addEventListener("click", handleChat);
