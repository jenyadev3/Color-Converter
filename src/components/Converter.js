import React, { useState } from 'react';

function Converter() {
  const [form, setForm] = useState({ hex: "#34495e", rgb: "rgb(52, 73, 94)" });

  // Функция для конвертации hex в RGB
  const hexToRgb = (hex) => {
    // Убираем символ #, если он есть
    hex = hex.replace(/^#/, '');

    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
        return 'Ошибка!';
      }

    // Разбиваем hex на красный, зеленый и синий компоненты
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Обработчик изменения значения в поле ввода hex
  const handleHexChange = (event) => {
    const newHex = event.target.value;
    const newRgb = hexToRgb(newHex);

    setForm({ hex: newHex, rgb: newRgb });
  };

  const isInvalidHex = form.rgb === 'Ошибка!';

  const figureStyle = {
    backgroundColor: isInvalidHex ? 'white' : form.hex
  };

  return (
    <figure style={figureStyle} className={`${isInvalidHex ? 'warning' : ''}`}>
      <input
        className='hex-field'
        type="text"
        value={form.hex}
        onChange={handleHexChange}
      />
      <output className='message'>{form.rgb}</output>
    </figure>
  );
}

export default Converter;
