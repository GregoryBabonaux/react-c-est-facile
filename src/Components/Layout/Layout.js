import React  from 'react'
import {Route, Link} from 'react-router-dom'
import { Container, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import logo from '../../Assets/Images/logo.svg';

const Layout = ({component: Component, ...rest}) => {
  const {path} = rest;
  return (
    <Route {...rest} render={matchProps => (
      <div>

        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={Link} to="/" header>
              <Image
                  size='mini'
                  src={logo}
                  style={{ marginRight: '1.5em' }}
              />
              Stuffify
            </Menu.Item>
            
            <Menu.Item active={path === '/'} name="/" as={Link} to="/">Home</Menu.Item>
            <Menu.Item active={path === '/login'} name="/login" as={Link} to="/login">Login</Menu.Item>
            
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Component {...matchProps} />
        </Container>

        <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >

          <Container textAlign='center'>
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Sitemap</List.Item>
              <List.Item as='a' href='#'>Contactez-moi</List.Item>
              <List.Item as='a' href='#'>Mentions légales</List.Item>
            </List>
          </Container>
        
        </Segment>
      </div>
    )} />
  )
};
export default Layout