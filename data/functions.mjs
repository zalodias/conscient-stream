import { existsSync, readFileSync, writeFileSync } from 'fs';

const readData = (database) => {
  const data = readFileSync(database, 'utf-8');
  return JSON.parse(data);
};

const writeData = (data, database, uniqueKeys = ['id']) => {
  if (!data) {
    console.error('Please provide data to save');
    return;
  }

  try {
    let parsedData = [];

    if (existsSync(database)) {
      const existingData = readFileSync(database, 'utf8');
      parsedData = existingData ? JSON.parse(existingData) : [];
    }

    const isDuplicateData = parsedData.some((item) => {
      return uniqueKeys.some((key) => {
        return item[key] === data[key];
      });
    });
    if (isDuplicateData) {
      console.log('Data already exists');
      return;
    }
    const newData = [...parsedData, data];
    writeFileSync(database, JSON.stringify(newData, null, 2));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data', error);
  }
};

export { readData, writeData };
