import CssCase from './components/CssCase';
import ModifyAntdStyle from './components/ModifyAntdStyle';
import TwCase from './components/TwCase';

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
