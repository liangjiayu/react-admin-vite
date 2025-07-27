import { useEffect } from 'react';
import { useMatches } from 'react-router';
import { SITE_APP_TITLE } from '@/constants';

/**
 * 根据当前路由动态页面标题
 */
const useTitleUpdater = () => {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1] as any;
  const title = currentMatch?.handle?.name;

  useEffect(() => {
    document.title = title ? `${title} - ${SITE_APP_TITLE}` : SITE_APP_TITLE;
  }, [title]);

  return null;
};

export default useTitleUpdater;
