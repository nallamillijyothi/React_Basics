import React, { useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';

const ExcelParser = () => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const output = outputRef.current;

    const readFile = (file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        output.value = JSON.stringify(jsonData, null, 2);
      };
      reader.readAsBinaryString(file);
    };

    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      readFile(file);
    });
  }, []);

  return (
    <div>
      <input type="file" ref={inputRef} accept=".xlsx,.xls" />
      <textarea ref={outputRef} readOnly />
    </div>
  );
};

export default ExcelParser;