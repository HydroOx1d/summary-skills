import React from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import Button, { ButtonTheme } from '../Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcher {
  className?: string
}

export const LangSwitcher: React.FC<LangSwitcher> = (props) => {
  const {
    className
  } = props;
  
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button 
      theme={ButtonTheme.CLEAR} 
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {t("language")}
    </Button>
  )
}
