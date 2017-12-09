import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Center } from '../styled/center'
import { Card } from './card'
import { Header } from './header'
import { Container } from './container'
import { IconsWrapper, Icon } from './social-links'
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Google from './google.png'
import { Field } from './field'
import { Row } from './row'
import { Checkbox, GrayLink } from './checkbox'
import { Button } from './button'
import { HelpLink } from './help-link'


export const AuthForm = ({ type, headerText = '', helpText = '', helpPath = '/auth/signin' }) => ((
  <Center>
    <Card>
      <Header>{headerText}</Header>
      <Container>
        {type !== 'reset' && (
          <IconsWrapper>
            <Icon facebook><Facebook width={10} height={18} /></Icon>
            <Icon twitter><Twitter width={20} height={18} /></Icon>
            <Icon google><img className="google" src={Google} alt="google auth link" /></Icon>
          </IconsWrapper>
        )}
        <Field username >
          <input type="text" placeholder="Username" required />
        </Field>
        {type !== 'reset' && (
          <Field password >
            <input type="password" placeholder="Password" required />
          </Field>
        )}
        {type === 'signup' && (
          <Field password >
            <input type="password" placeholder="Repeat password" required />
          </Field>
        )}
        {type === 'signin' && (
          <Row>
            <Checkbox>Remember me</Checkbox>
            <GrayLink to='/auth/reset' >Reset password</GrayLink>
          </Row>
        )}
        <Row>
          <HelpLink to={helpPath} >
            {helpText}
          </HelpLink>
        </Row>
      </Container>
      <Button type='submit' >{headerText.toUpperCase()}</Button>
    </Card>
  </Center>
))
