import { useTranslation } from 'react-i18next';

function Comp1() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>{t('title')}</p>
      <p>{t('labels.complete')}</p>
      <p>{t('labels.test')}</p>
    </div>
  );
}

export const Test: React.FC<{
  prop?: string;
}> = ({ prop }) => {
  const { t } = useTranslation();

  return <div>{prop ?? `${t('labels.complete')}`}</div>;
};

export default Comp1;
