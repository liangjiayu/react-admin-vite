import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useNavigation } from 'react-router';

NProgress.configure({ showSpinner: false });

/**
 * 路由切换时显示顶部进度条
 */
export function useNProgress() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'loading') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);
}
