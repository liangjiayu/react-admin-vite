import { Button } from 'antd';
import AccessBox from '@/components/access-box';
import useAccess from '@/hooks/use-access';

const AccessFeature = () => {
  const { isAdmin, isUser, canReadFoo, canUpdateFoo, canDeleteFoo } =
    useAccess();

  return (
    <div>
      <div className="flex items-center gap-3">
        <AccessBox accessible={isAdmin}>
          <Button>我是管理员</Button>
        </AccessBox>
        <AccessBox accessible={isUser}>
          <Button>我是普通用户</Button>
        </AccessBox>
        <AccessBox accessible={canReadFoo} fallback={<div>无读取权限</div>}>
          <Button>我能读取的</Button>
        </AccessBox>
        <AccessBox accessible={canUpdateFoo} fallback={<div>无更新权限</div>}>
          <Button>我能更新的</Button>
        </AccessBox>
        <AccessBox
          accessible={canDeleteFoo(isAdmin)}
          fallback={<div>无删除权限</div>}
        >
          <Button>我能删除的</Button>
        </AccessBox>
      </div>
    </div>
  );
};

export default AccessFeature;
