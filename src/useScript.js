import { useEffect } from 'react';

const useScript = (url, requiredFields = [], addlDeps = []) => {
  useEffect(() => {
    if (requiredFields.every(f => !!f)) {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [url, requiredFields]);
};

export default useScript;
