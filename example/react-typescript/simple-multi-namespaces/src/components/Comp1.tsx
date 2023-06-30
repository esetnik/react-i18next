import { useTranslation } from "react-i18next";

function Comp1() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <p>{t('title')}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
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
