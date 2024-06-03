export const getAverageAnnualInflation = (ipcSerie) => {
  if (!ipcSerie.length) return 'error...';
  const firstIPCIndex = ipcSerie.length % 12;
  const trimedIPCSerie = ipcSerie.slice(firstIPCIndex);
  const filteredIPCSerie = trimedIPCSerie.filter((ipc, i) => i % 12 === 0);

  const sum = filteredIPCSerie.reduce((acc, el) => acc + Number(el.value), 0);
  const averageInflation = sum / filteredIPCSerie.length;
  return Math.round(Number(averageInflation * 100)) / 100;
};
