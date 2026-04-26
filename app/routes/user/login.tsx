import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Alert, message } from 'antd';
import { createStyles } from 'antd-style';
import type React from 'react';
import { useState } from 'react';
import { SITE_LOGO_URL, ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';

const useStyles = createStyles(({ token }, { isDark }: { isDark: boolean }) => {
  return {
    action: {
      marginLeft: '8px',
      color: token.colorTextTertiary,
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: token.colorBgLayout,
      backgroundImage: isDark
        ? 'none'
        : "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const ActionIcons = ({ isDark }: { isDark: boolean }) => {
  const { styles } = useStyles({ isDark });
  return (
    <>
      <AlipayCircleOutlined
        key="AlipayCircleOutlined"
        className={styles.action}
      />
      <TaobaoCircleOutlined
        key="TaobaoCircleOutlined"
        className={styles.action}
      />
      <WeiboCircleOutlined
        key="WeiboCircleOutlined"
        className={styles.action}
      />
    </>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const isDark = useGlobalStore((s) => s.themeMode === ThemeMode.Dark);
  const { styles } = useStyles({ isDark });
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (_values: {
    username?: string;
    password?: string;
    autoLogin?: boolean;
  }) => {
    try {
      message.success('登录成功！');
      const urlParams = new URL(window.location.href).searchParams;
      window.location.href = urlParams.get('redirect') || '/';
    } catch (error) {
      console.error(error);
      message.error('登录失败，请重试！');
      setHasError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src={SITE_LOGO_URL} />}
          title="Antd Admin"
          subTitle={'一个基于 React 的中后台管理系统解决方案'}
          initialValues={{
            autoLogin: true,
          }}
          actions={[
            '其他登录方式 :',
            <ActionIcons key="icons" isDark={isDark} />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '用户名是必填项！',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'密码: 123456'}
            rules={[
              {
                required: true,
                message: '密码是必填项！',
              },
            ]}
          />
          {hasError && (
            <LoginMessage content={'错误的用户名和密码(admin/123456)'} />
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码 ?
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};
export default Login;

export const handle = {
  name: '用户登录',
};
