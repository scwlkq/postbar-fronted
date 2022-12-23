import { CrownOutlined, GithubOutlined, UserOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 *
 * @author suncong
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className='default-footer'
      copyright={`${currentYear} Java课设 + 备案号`}
      links={[
        {
          key: '1',
          title: (
            <>
              <UserOutlined /> 站长：sc
            </>
          ),
          href: 'https://juejin.cn/user/2859203069749965',
          blankTarget: true,
        },
        {
          key: '2',
          title: (
            <>
              <GithubOutlined /> github
            </>
          ),

          href: 'https://github.com/scwlkq',
          blankTarget: true,
        },
        {
          key: '3',
          title: (
            <>
              <CrownOutlined /> 博客地址
            </>
          ),
          href: 'https://juejin.cn/user/2859203069749965',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
