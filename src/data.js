export const filterData = (dataList, condition) => {
  const dataFilter = dataList.filter((item) => item.house === condition);
  return dataFilter;
};

export const filterProtagonists = (datalist, protagonists) => {
  const dataFilter = datalist.filter((item) => protagonists.includes(item.name));
  return dataFilter;
};

export const sortList = (dataList) => {
  return dataList.concat().sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0
  });
};

export const searchFilter = (dataList, condition) => {
  const dataFilter = dataList.filter( item => item.name.toLowerCase().includes(condition));
  return dataFilter;
};