import React from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SiderbarProps {
  className?: string;
}

export const Sidebar: React.FC<SiderbarProps> = (props) => {
  const {
    className
  } = props

  const [collapsed, setCollpased] = React.useState(false);

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={() => setCollpased((prev) => !prev)}>Collapse</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* other switchers */}
      </div>
    </div>
  );
}
