import { ButtonBoxStyle } from '@/features/post/ui/deadlineCalendar/CustomCalendarContainer.style';
import { Button } from '@/shared/ui';

interface CustomCalendarContainerProps {
  datePickerRef: React.RefObject<any>;
  className?: string;
  children?: React.ReactNode;
  setSelectedDate: (date: Date | null) => void;
  tempDate: Date | null;
  selectedDate: Date | null;
  setTempDate: (date: Date | null) => void;
}

export const CustomCalendarContainer = ({
  className,
  children,
  datePickerRef,
  setSelectedDate,
  selectedDate,
  setTempDate,
  tempDate,
}: CustomCalendarContainerProps) => {
  const handleCancel = () => {
    if (datePickerRef.current) {
      setTempDate(selectedDate);
      datePickerRef.current.setOpen(false);
    }
  };

  const handleAccept = () => {
    if (datePickerRef.current) {
      setSelectedDate(tempDate);
      datePickerRef.current.setOpen(false);
    }
  };

  return (
    <div className={className}>
      {children}
      <ButtonBoxStyle>
        <Button onClick={handleCancel}> 취소</Button>
        <Button onClick={handleAccept}>적용 </Button>
      </ButtonBoxStyle>
    </div>
  );
};