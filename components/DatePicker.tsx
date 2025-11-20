import React, { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  className?: string;
}

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    // Convert Sunday (0) to 6 (index in DAYS), others shift down by 1
    // Monday (1) -> 0
    const firstDayOfMonth = firstDay === 0 ? 6 : firstDay - 1;
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange(newDate);
    setIsOpen(false);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth.getMonth() === today.getMonth() && 
           currentMonth.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentMonth.getMonth() === selectedDate.getMonth() && 
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

  const isPast = (day: number) => {
     const today = new Date();
     today.setHours(0,0,0,0);
     const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
     return checkDate < today;
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer border-b border-nami-earth py-2 group"
      >
        <input
          readOnly
          type="text"
          value={formatDate(selectedDate)}
          placeholder="Choisir une date"
          className="bg-transparent text-nami-wood focus:outline-none w-full cursor-pointer placeholder-nami-wood/50"
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-nami-wood transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 p-4 bg-nami-cream border border-nami-earth/30 shadow-xl rounded-sm w-[320px] left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 animate-fade-in-up">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <button onClick={handlePrevMonth} className="p-1 hover:bg-nami-sand/30 rounded-full transition-colors text-nami-wood focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-serif text-nami-wood font-medium text-lg capitalize">
              {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button onClick={handleNextMonth} className="p-1 hover:bg-nami-sand/30 rounded-full transition-colors text-nami-wood focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map(day => (
              <div key={day} className="text-center text-[10px] text-nami-earth uppercase tracking-widest py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const disabled = isPast(day);
              const selected = isSelected(day);
              const today = isToday(day);
              
              return (
                <button
                  key={day}
                  onClick={(e) => { e.preventDefault(); !disabled && handleDateClick(day); }}
                  disabled={disabled}
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-full text-sm font-light transition-all duration-300 mx-auto
                    ${selected 
                      ? 'bg-nami-wood text-nami-cream shadow-md scale-105' 
                      : disabled 
                        ? 'text-nami-wood/20 cursor-not-allowed'
                        : 'text-nami-wood hover:bg-nami-earth/20'
                    }
                    ${today && !selected ? 'border border-nami-earth text-nami-earth' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};