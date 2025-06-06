// Webhook Configuration
// Update these URLs with your actual n8n webhook endpoints

const WEBHOOK_CONFIG = {
    // Replace with your actual n8n webhook URLs
    DEMO_FORM_WEBHOOK: 'https://someco.app.n8n.cloud/webhook/demo-form',
    CONTACT_FORM_WEBHOOK: 'https://someco.app.n8n.cloud/webhook/contact-form',
    
    // Optional: Add timeout and retry settings
    TIMEOUT: 10000, // 10 seconds
    RETRY_ATTEMPTS: 3,
    
    // Success/Error messages
    MESSAGES: {
        DEMO_SUCCESS: 'Demo request submitted successfully! We will contact you soon.',
        CONTACT_SUCCESS: 'Thank you! Your message has been sent successfully. We will contact you soon.',
        NEWSLETTER_SUCCESS: 'Thank you for subscribing to our newsletter!',
        ERROR: 'There was an error submitting your request. Please try again or contact us directly.',
        NETWORK_ERROR: 'Network error. Please check your connection and try again.'
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBHOOK_CONFIG;
}

// Make available globally
window.WEBHOOK_CONFIG = WEBHOOK_CONFIG;
