interface ClearConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  hasData: boolean;
}

export function ClearConfirm({
  onConfirm,
  onCancel,
  hasData,
}: ClearConfirmProps) {
  if (!hasData) {
    return (
      <div>
        <p>No data to clear</p>
        <button onClick={onCancel}>Close</button>
      </div>
    );
  }

  return (
    <div>
      <p>Are you sure you want to clear the meal plan?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}
