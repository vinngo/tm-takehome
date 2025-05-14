# Stack-Based Navigation Example

## Overview
This project demonstrates a modern mobile app with stack-based navigation using Expo Router. The app starts with a landing page that prompts users to sign in, and then navigates to the main application screens after authentication.

## Navigation Structure
The navigation is organized into distinct groups:

```
App Root
├── / (Landing Page)
├── /(auth)
│   └── sign-in
└── /(app)
    ├── / (Home)
    └── profile
```

## Key Features
- Stack-based navigation with proper animations
- Authentication flow with sign-in screen
- Clean transition between auth and main app contexts
- Animated components for better user experience
- Dark and light mode support

## Getting Started

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

3. Run on a simulator or device:
```
npm run ios
```
or
```
npm run android
```

## Implementation Details

### Navigation
The navigation is implemented using Expo Router, which provides a file-based routing system. The app is organized into three main navigation contexts:

- Root (landing page)
- Auth screens
- Main app screens

### Authentication
The authentication is currently mocked with a simple sign-in screen. In a real app, you would integrate with an authentication provider like Firebase Auth, Auth0, or your own backend.

### UI Components
The UI components use React Native's built-in components along with Expo libraries for additional functionality, such as:
- Animated transitions with react-native-reanimated
- Icons with Expo Symbols
- BlurView for visual effects

### Styling
The app uses a consistent styling approach with:
- Color scheme support for dark and light modes
- Reusable style patterns
- Responsive layouts

## Extending the App
To extend this application, you can:

1. Add more screens to the /(app) directory
2. Implement real authentication using Auth0, Firebase, or another provider
3. Add state management with Redux, Zustand, or Context API
4. Enhance the UI with additional animations and transitions