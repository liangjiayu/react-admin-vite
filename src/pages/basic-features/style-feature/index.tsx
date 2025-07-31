import CssCase from './components/css-case';
import ModifyAntdStyle from './components/modify-antd-style';
import TwCase from './components/tw-case';

const StyleFeature = () => {
  return (
    <div className="flex flex-col gap-5">
      <TwCase />
      <CssCase />
      <ModifyAntdStyle />
    </div>
  );
};

export default StyleFeature;
