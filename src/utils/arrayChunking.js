const DIVIDSOR = 3;

export function chunkizeArray(arraySet) {
  const size = Math.floor((arraySet.length + 1) / DIVIDSOR);
  const totalChunkArray = Math.ceil(arraySet.length / size);
  let newArray = [];

  for (let i = 0; i < totalChunkArray; i++) {
    const chunk = arraySet.slice(size * i, size * (i + 1));

    newArray.push(chunk);
  }
  return newArray;
}
