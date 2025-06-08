
const WEBHOOK_CONFIG = {
    // Replace with your actual n8n webhook URLs
    DEMO_FORM_WEBHOOK: 'https://n8n.srv791889.hstgr.cloud/webhook/113e4481-4a78-43a7-ac35-fd4e059b02ce',
    CONTACT_FORM_WEBHOOK: 'https://n8n.srv791889.hstgr.cloud/webhook/113e4481-4a78-43a7-ac35-fd4e059b02ce',
    
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
