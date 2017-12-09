import React from 'react'
import { Main } from '../views/main'
import { AuthForm } from '../components/auth-form'


export const Auth = (p) => {
  const data = {
    signin: {
      headerText: 'Sign In',
      helpText: 'Don\'t have an account yet? Sign up now',
      helpPath: '/auth/signup',
    },
    signup: {
      headerText: 'Sign Up',
      helpText: 'Already have an account? Sign in',
      helpPath: '/auth/signin',
    },
    reset: {
      headerText: 'Reset password',
      helpText: 'I got a flashback about my old password',
      helpPath: '/auth/signin',
    },
  }
  const { type } = p.match.params

  return (
    <Main>
      <AuthForm
        type={type}
        headerText={data[type].headerText}
        helpText={data[type].helpText}
        helpPath={data[type].helpPath}
      />
    </Main>
  )
}
