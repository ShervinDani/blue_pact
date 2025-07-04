import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { SignUpStep1 } from "@/components/SignupForm";
import { SignUpStep2 } from '@/components/SignUp2';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [step,setStep] = useState(1);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const setFormNumber = (number1: number) => {
    setStep(number1);
  }

  if(step == 1)
  {
    return <SignUpStep1 setForm={setFormNumber}></SignUpStep1>
  }
  else if(step == 2)
  {
    return <SignUpStep2 setForm={setFormNumber}></SignUpStep2>
  }

}
