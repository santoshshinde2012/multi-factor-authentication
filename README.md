# [Multi-Factor-Authentication](https://github.com/santoshshinde2012/multi-factor-authentication)

2FA TOTP implementation using Node.js, TypeScript, and React.js

# Technology Stack

- Node JS
- Typescript
- React JS
- Vite

## Backend

The backend includes the APIs for generating QR code and verifying TOTP code.

## Client

The client includes a UI for showing QR codes and an input form to take a TOTP code.

# Start The application in Development Mode

```
## Clone the Application 
git clone https://github.com/santoshshinde2012/multi-factor-authentication.git

## Install the dependencies
cd multi-factor-authentication && npm install

## Make sure to up your database
npm run db:up

## Start the application
npm run dev
```

## Initial Folder Structure

```
├── multi-factor-authentication
│   ├── backend
│   │  ├── ....
│   │  ├── package-lock.json
│   │  └── package.json
│   ├── client
│   │  ├── ....
│   │  ├── package-lock.json
│   │  └── package.json
│   ├── wiki
│   │   ├── ....
│   │   └── 
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
```
## Main API

- `api/v1/mfa/ready` : Check setup is ready or not
- `api/v1/mfa/generate` : Generate the OTP Secret
- `api/v1/mfa/verify` : Verify the OTP Secret
- `api/v1/mfa/validate` : Validate the OTP code
- `api/v1/mfa/reset` : Reset using the backup code

<hr/>

### Connect with me on
<div id="badges">
  <a href="https://twitter.com/shindesan2012">
    <img src="https://img.shields.io/badge/shindesan2012-black?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/shindesantosh/">
    <img src="https://img.shields.io/badge/shindesantosh-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
   <a href="https://blog.santoshshinde.com/">
    <img src="https://img.shields.io/badge/Blog-black?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge"/>
  </a>
  <a href="https://www.buymeacoffee.com/santoshshin" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" height="28" width="100">
    </a>
</div>
