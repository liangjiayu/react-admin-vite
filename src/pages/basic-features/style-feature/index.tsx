import TwCase from './components/TwCase';
import CssCase from './components/CssCase';
import ModifyAntdStyle from './components/ModifyAntdStyle';

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
