import dynamic from 'next/dynamic';

// Dynamically import OTPInput without SSR
const OTPInput = dynamic(() => import('otp-input-react').then(mod => mod.OTPInput), {
  ssr: false,
});

export default OTPInput;
