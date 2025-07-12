import React from 'react';
import { Button } from '@heroui/react';
import { goAuth } from '@/actions/goAuth';


export default function SocialLogin() {
    
  return (
    <form action={goAuth}>
      <Button type="submit" variant="secondary" className="w-full">
        Continue with Google
      </Button>
    </form>
  );
}