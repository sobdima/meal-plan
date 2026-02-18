import './Header.css';
import { Button } from '@/components/Button/Button';
import { LogoIcon } from '../Icons/LogoIcon';
import { AddButtonIcon } from '../Icons/AddButtonIcon';

export function Header() {
  const handleGenerate = () => {
    console.log('Генерируем план питания!');
  };

  const handleAdd = () => {
    console.log('Добавляем новый элемент!');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <h1 className="logo-title">
            <LogoIcon />
            MealPlan
          </h1>
        </div>

        <div className="header-buttons">
          <Button
            text={<AddButtonIcon />}
            onClick={handleAdd}
            className="btn-add"
          />
          <Button
            text="Generate"
            onClick={handleGenerate}
            className="btn-generate"
          />
        </div>
      </div>
    </header>
  );
}
