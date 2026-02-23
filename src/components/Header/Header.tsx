import './Header.css';
import { Button } from '@/components/Button/Button';
import { LogoIcon } from '../Icons/LogoIcon';
import { AddButtonIcon } from '../Icons/AddButtonIcon';

interface HeaderProps {
  generateIds: () => void;
}

export function Header({ generateIds }: HeaderProps) {
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
            onClick={generateIds}
            className="btn-generate"
          />
        </div>
      </div>
    </header>
  );
}
