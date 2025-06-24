// src/components/ResendOtpWrapper.js
import dynamic from 'next/dynamic';

const ResendOTP = dynamic(() => import('otp-input-react').then(mod => mod.ResendOTP), {
  ssr: false,
});

export default ResendOTP;
