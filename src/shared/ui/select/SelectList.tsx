import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@/shared/assets';
import {
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownListItem,
} from '@/shared/ui/select/selectList.style';

type SelectListSize = 'sm' | 'md' | 'lg';

export interface SelectListItem {
  value: string;
  display: string;
}

export interface SelectListProps {
  items: SelectListItem[];
  size: SelectListSize;
  selected: SelectListItem | null;
  onChange: (item: SelectListItem) => void;
}

export const SelectList = ({ items, size, selected, onChange }: SelectListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleItemClick = (item: SelectListItem) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer size={size}>
      <DropdownHeader onClick={toggleDropdown} isOpen={isOpen}>
        {selected ? selected.display : '선택'}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          {items.map((item, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleItemClick(item)}
              isSelected={selected ? item.value === selected.value : false}
            >
              {item.display}
            </DropdownListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};
