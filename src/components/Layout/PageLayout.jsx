import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';

import './styles.scss';

const { Header, Content, Footer } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo-wrap">
          <img
            className="logo"
            src="http://static.tvmaze.com/images/tvm-header-logo.png"
            alt="logo"
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <FormattedMessage id="header.navigation.shows" />
          </Menu.Item>
          <Menu.Item key="2">
            <FormattedMessage id="header.navigation.people" />
          </Menu.Item>
          <Menu.Item key="3">
            <FormattedMessage id="header.navigation.networks" />
          </Menu.Item>
          <Menu.Item key="4">
            <FormattedMessage id="header.navigation.webChannels" />
          </Menu.Item>
          <Menu.Item key="5">
            <FormattedMessage id="header.navigation.articles" />
          </Menu.Item>
          <Menu.Item key="6">
            <FormattedMessage id="header.navigation.schedule" />
          </Menu.Item>
          <Menu.Item key="7">
            <FormattedMessage id="header.navigation.calendar" />
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">{children}</div>
      </Content>
      <Footer className="footer">2020 Created by Vadym Burukin</Footer>
    </Layout>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
