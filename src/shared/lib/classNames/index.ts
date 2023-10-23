
type Mods = Record<string, string | boolean>;

// Функция для удобной работы с классами
// Функция принимает три аргумента (главный класс, модификаторы и дополнительные)
// Вовзвращает строку
// Пример: 
// input: classnames('app', {hovered: true, selected: false}, 'app2')
// output: 'app hovered app2'
export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([clsName, value]) => Boolean(value))
      .map(([clsName]) => clsName)
  ].join(' ');
}