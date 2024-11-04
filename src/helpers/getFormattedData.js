export const getFormattedData = (files, filesKey, jsonData, jsonDateKey) => {
  const formData = new FormData();

  if (Array.isArray(files)) {
    for (const file of files) {
      formData.append(filesKey, file);
    }
  } else {
    formData.append(filesKey, files);
  }

  const jsonBlob = new Blob([JSON.stringify(jsonData)], {
    type: 'application/json',
  });

  formData.append(jsonDateKey, jsonBlob);

  return formData;
};
