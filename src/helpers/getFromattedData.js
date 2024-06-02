export const getFromattedData = (files, filesKey, jsonData, jsonDateKey) => {
  const formData = new FormData();

  for (const file of files) {
    formData.append(filesKey, file);
  }

  const jsonBlob = new Blob([JSON.stringify(jsonData)], {
    type: 'application/json',
  });

  formData.append(jsonDateKey, jsonBlob);

  return formData;
};
