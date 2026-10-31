import { readFileSync } from "node:fs";

export const loadData = () => {
  const text = readFileSync("movies.json", "utf-8");
  return JSON.parse(text);
};
//הסבר: הפונקציה loadData קוראת את הקובץ, 
// ממירה אותו ומחזירה אובייקט.
//  זה בדיוק
//  מה שנעשה ב־React עם תשובה מהשרת: מקבלים טקסט 
// ← JSON.parse ← עובדים עם אובייקט.

