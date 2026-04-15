import { getRandomDishesId } from '@/utils/dishIdsUtils';
import { Button } from '../Button/Button';
import { AddButtonIcon } from '../Icons/AddButtonIcon';
import { LogoIcon } from '../Icons/LogoIcon';
import './Header.css';
import { useState } from 'react';
import { ClearConfirm } from '../Modals/ConfirmClearMenuModal/ConfirmClearMenuModal';
import { hasStoredDishIds } from '@/utils/clearUtils';
import { Modal } from '../Modals/ModalWrapper/ModalWrapper';

interface HeaderProps {
  onGenerate: (ids: string[]) => void;
  onClear: () => void;
}

export function Header({ onGenerate, onClear }: HeaderProps) {
  const [showClearModal, setShowClearModal] = useState(false);

  const handleGenerate = () => {
    const newIds = getRandomDishesId();
    onGenerate(newIds);
  };

  const handleClearClick = () => {
    setShowClearModal(true);
  };

  const handleConfirm = () => {
    localStorage.removeItem('dishIds');
    onClear();
    setShowClearModal(false);
  };

  const handleCancel = () => {
    setShowClearModal(false);
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
            onClick={() => alert('Add')}
            className="btn-add"
          />
          <Button
            text="Generate"
            onClick={handleGenerate}
            className="btn-generate"
          />
          <Button
            text="Clear"
            onClick={handleClearClick}
            className="btn-clear"
          />
        </div>

        {showClearModal && (
          <Modal onClose={handleCancel}>
            <ClearConfirm
              hasData={hasStoredDishIds()}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          </Modal>
        )}
      </div>
    </header>
  );
}
