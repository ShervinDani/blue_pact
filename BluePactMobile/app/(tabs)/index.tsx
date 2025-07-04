import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { InitialLoader } from '@/components/InitialLoader';
import { useEffect, useState } from 'react';
import { LoginComponent } from '@/components/LoginComponent';

export default function HomeScreen() {
  const [showSplashScreen,setShowSplashScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(true);
    }, 2000);
    return () => clearTimeout(timer);
  },[]);

  if(!showSplashScreen)
  {
    return <InitialLoader/>;
  }
  else
  {
    return <LoginComponent/>;
  }

}
