import { withAuthenticator } from '@aws-amplify/ui-react';
import * as React from 'react';

function LoginPage() {
    return <div>Welcome to the app!</div>;
}

export default withAuthenticator(LoginPage);