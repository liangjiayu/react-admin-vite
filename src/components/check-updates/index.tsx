import { App, Button } from 'antd';
import { useEffect, useRef } from 'react';

type CheckUpdatesProps = {
  /**
   * 轮训时间，单位：分钟，默认 1 分钟
   */
  checkUpdatesInterval?: number;
  /**
   * 检查更新的地址
   */
  checkUpdateUrl?: string;
};

const CheckUpdates: React.FC<CheckUpdatesProps> = ({
  checkUpdatesInterval = 1,
  checkUpdateUrl = '/',
}) => {
  const { notification } = App.useApp();
  const currentVersionTag = useRef('');
  const lastVersionTag = useRef('');
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  function handleNotice(versionTag: string) {
    currentVersionTag.current = versionTag;

    notification.open({
      message: '系统版本更新通知',
      description: '检测到系统有新版本发布，是否立即刷新页面？',
      duration: 0,
      closable: false,
      btn: (
        <div className="flex gap-2">
          <Button
            size="small"
            onClick={() => {
              start();
              notification.destroy();
            }}
          >
            稍后再说
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              lastVersionTag.current = currentVersionTag.current;
              location.reload();
            }}
          >
            立即刷新
          </Button>
        </div>
      ),
    });
  }

  async function getVersionTag() {
    try {
      if (
        location.hostname === 'localhost' ||
        location.hostname === '127.0.0.1'
      ) {
        return null;
      }
      const response = await fetch(checkUpdateUrl, {
        cache: 'no-cache',
        method: 'HEAD',
        redirect: 'manual',
      });

      return (
        response.headers.get('etag') || response.headers.get('last-modified')
      );
    } catch {
      console.error('Failed to fetch version tag');
      return null;
    }
  }

  async function checkForUpdates() {
    const versionTag = await getVersionTag();
    if (!versionTag) {
      return;
    }

    // 首次运行时不提示更新
    if (!lastVersionTag.current) {
      lastVersionTag.current = versionTag;
      return;
    }

    if (lastVersionTag.current !== versionTag) {
      clearInterval(timer.current);
      handleNotice(versionTag);
    }
  }

  async function start() {
    if (import.meta.env.DEV) {
      return;
    }
    if (checkUpdatesInterval <= 0) {
      return;
    }

    timer.current = setInterval(
      checkForUpdates,
      checkUpdatesInterval * 60 * 1000,
    );
  }

  function stop() {
    clearInterval(timer.current);
    timer.current = undefined;
  }

  useEffect(() => {
    /* Mounted */
    start();

    /* UnMounted */
    return () => {
      stop();
    };
  }, []);
  return null;
};

export default CheckUpdates;
