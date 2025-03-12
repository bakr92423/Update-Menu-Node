const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// 🖼️ إعداد `multer` لتخزين الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images")); // تخزين الصور داخل مجلد `images`
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`;
    cb(null, uniqueName);
  },
});

// 🛑 فلترة الملفات للسماح برفع الصور فقط
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("❌ يُسمح فقط بملفات الصور (JPG, JPEG, PNG)!"), false);
  }
};

// 🚀 تحديد الحد الأقصى لحجم الصورة إلى 2MB
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter,
});

router.post("/", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "❌ يرجى اختيار صورة!" });
    }

    const imageUrl = `/images/${req.file.filename}`;
    console.log("✅ الصورة تم رفعها:", imageUrl);

    res.status(201).json({
      message: "🎉 تم رفع الصورة بنجاح!",
      imageUrl,
    });
  } catch (error) {
    console.error("❌ خطأ أثناء رفع الصورة:", error);
    res.status(500).json({ message: "🚨 خطأ داخلي في السيرفر!", error: error.message });
  }
});

module.exports = router;





 router.post('/',upload.single("image"),(req,res)=>{
    res.json('image uploaded')
 })






 module.exports=router