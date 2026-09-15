# מה הנשמה שלך רוצה להתפלל?

דף נחיתה רספונסיבי בעברית (RTL) לערב הכנה רוחני לקראת יום הכיפורים. הדף מציג את תוכן ההזמנה, מסביר מה מקבלים במפגש ואוסף שם, מייל וטלפון לצורך צירוף לקבוצת WhatsApp שקטה. הזמן והקישור לוובינר נמסרים בקבוצה.

## כתובות

- אתר: https://yacovdroridev.github.io/yom-kippur-webinar/
- Repository: https://github.com/yacovdroridev/yom-kippur-webinar
- גיליון הרשמות: https://docs.google.com/spreadsheets/d/1fNdoffMDaTN3IbzQ3whAbke8_ps4a_C7Zcd9a1L262Q/edit?authuser=yacovdrori%40gmail.com

## ארכיטקטורה

האתר סטטי וללא תהליך build:

- `index.html` - מבנה ותוכן העמוד, SEO בסיסי וטופס ההרשמה.
- `styles.css` - עיצוב mobile-first, RTL, צבעים, טיפוגרפיה ורכיבים רספונסיביים.
- `script.js` - שליחת הטופס, מצבי טעינה והודעת הצלחה/שגיאה.
- `flyer.jpg` - תמונת ההזמנה המקורית.

אין framework או תלויות npm. הפונטים Heebo ו-Frank Ruhl Libre נטענים מ-Google Fonts.

## פריסה

GitHub Pages מוגדר לפרסם מהענף `main`, תיקיית `/ (root)`. כל commit ל-`main` מתפרסם אוטומטית. בדרך כלל השינוי עולה תוך 1-3 דקות.

בדיקה מקומית:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## זרימת נתוני הרשמה

מטרת הזרימה היא:

1. הנרשם ממלא שם מלא, מייל, טלפון ואישור להצטרפות לקבוצת WhatsApp.
2. `script.js` שולח POST אל endpoint של Google Apps Script או Google Form.
3. ה-endpoint מוסיף שורה לגיליון Google Sheets בשם `נרשמים - מה הנשמה שלך רוצה להתפלל`.
4. הגיליון שומר תאריך ושעה, שם, מייל, טלפון ואישור הצטרפות.

כל עוד לא הוגדר endpoint, הטופס מציג הודעת תחזוקה ואינו מאבד נתונים בשקט. כדי לחבר endpoint, מחליפים ב-`index.html` את `FORM_ENDPOINT_PLACEHOLDER` בכתובת ה-Web App/Google Form.

## עדכון תוכן

- כותרות וטקסטים: לערוך ב-`index.html`.
- הודעת זמן/קישור: לחפש את המשפט `הזמן והקישור לוובינר יפורסמו בקבוצת הווצאפ`.
- צבעים: משתני CSS בראש `styles.css` (`--ink`, `--gold`, `--green` וכו').
- תמונה: להחליף את `flyer.jpg` ולשמור את אותו שם, או לעדכן את נתיב ה-`img` ב-HTML.
- שדות טופס: לעדכן גם את ה-HTML וגם את ה-endpoint כך ששמות השדות יישארו תואמים.

## פרטיות ותפעול

העמוד מצהיר שהפרטים ישמשו רק לעדכונים על הוובינר. אין לפרסם את גיליון ההרשמות לציבור. מומלץ לשמור גישה מוגבלת לבעל החשבון ולמי שמנהל את קבוצת ה-WhatsApp.
