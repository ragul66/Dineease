import React, { useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

const GoogleLoginButton = () => {
    const [accounts, setAccounts] = useState([]);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            // Fetch the user's profile using the token
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    'Authorization': `Bearer ${tokenResponse.access_token}`
                }
            })
                .then(response => response.json())
                .then(data => setAccounts(data));
        },
        onError: error => console.error('Login Failed:', error)
    });

    return (
        <div>
            <button
                className='flex items-center rounded-full border border-1 p-2 border-tertiary'
                onClick={() => login()}
            >
                Continue with <img className='size-6 flex justify-end' src="google-logo.png" alt="Google" />
            </button>
            {accounts && (
                <div>
                    <h3>User Accounts:</h3>
                    <pre>{JSON.stringify(accounts, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

const GoogleLogin = () => (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLoginButton />
    </GoogleOAuthProvider>
);

export default GoogleLogin;
