import { useTranslation } from "react-i18next";

function Comp2() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <p>{t('labels.test')}</p>
      <p>{t('labels.test')}</p>
    </div>
  );
}

export default Comp2;
