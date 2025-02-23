document.addEventListener('DOMContentLoaded', function() {
    const settingsBtn = document.querySelector('.settings-btn');
    const sidebar = document.querySelector('.sidebar');

    settingsBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    const sendBtn = document.querySelector('.send-btn');
    const inputField = document.querySelector('input[type="text"]');
    const chatArea = document.querySelector('.chat-area');

    sendBtn.addEventListener('click', function() {
        const messageText = inputField.value.trim();
        if (messageText) {
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user');
            userMessage.innerHTML = `<div class="bubble">${messageText}</div><img src="https://example.com/user-avatar.png" alt="User Avatar" class="avatar">`;
            chatArea.insertBefore(userMessage, chatArea.querySelector('.typing-indicator'));
            inputField.value = '';
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    });
});
