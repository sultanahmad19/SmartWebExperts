import { useEffect, useRef } from 'react';

const TawkToChat = ({ 
  visitorName = '', 
  visitorEmail = '', 
  visitorPhone = '',
  customAttributes = {}
}) => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    
    // Initialize Tawk_API
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      // Set visitor information if provided
      if (visitorName || visitorEmail || visitorPhone) {
        window.Tawk_API.visitor = {
          name: visitorName,
          email: visitorEmail,
          phone: visitorPhone,
          ...customAttributes
        };
      }

      // Set up event handlers
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to loaded successfully');
      };
      
      window.Tawk_API.onStatusChange = function(status) {
        console.log('Tawk.to status:', status);
      };

      // Load Tawk.to script
      (function(){
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/687a9411b76db319156daefe/1j0fd4ptp';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();

      isLoaded.current = true;
    }
  }, [visitorName, visitorEmail, visitorPhone, customAttributes]);

  return null; // This component doesn't render anything visible
};

export default TawkToChat; 