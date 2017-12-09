import React from 'react'
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
import { Checkbox, Link } from './checkbox'
import { Button } from './button'


export const AuthForm = () => ((
  <Center>
    <Card>
      <Header>Sign In</Header>
      <Container>
        <IconsWrapper>
          <Icon facebook><Facebook width={10} height={18} /></Icon>
          <Icon twitter><Twitter width={20} height={18} /></Icon>
          <Icon google><img className="google" src={Google} alt="google auth link" /></Icon>
        </IconsWrapper>
        <Field username >
          <input type="text" placeholder="Username" />
        </Field>
        <Field password >
          <input type="password" placeholder="Password" />
        </Field>
        <Row>
          <Checkbox>Remember me</Checkbox>
          <Link href="/" >Reset password</Link>
        </Row>
      </Container>
      <Button>LOGIN</Button>
    </Card>
  </Center>
))
