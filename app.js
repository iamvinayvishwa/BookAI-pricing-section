// Function to handle API key generation
document.getElementById('generateApiKey').addEventListener('click', function() {
    fetch('/generate-api-key', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        const apiKeyDisplay = document.getElementById('apiKeyDisplay');
        apiKeyDisplay.innerHTML = `Your API Key: <strong>${data.api_key}</strong>`;
        apiKeyDisplay.style.opacity = '0';
        setTimeout(() => {
            apiKeyDisplay.style.opacity = '1';
        }, 100);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('apiKeyDisplay').innerHTML = 'Error generating API key';
    });
});

// Dark mode and light mode toggle functionality
const toggleBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});


// Example API request using fetch
const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

fetch(API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    console.log(`Book generation started. Job ID: ${result.job_id}`);
})
.catch(error => {
    console.error('Error:', error);
});

