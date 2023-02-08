db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: { $currentDate: { lastModified: true } } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { _id: 0, nome: 1 },
);