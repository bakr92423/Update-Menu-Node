const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// ✅ 1️⃣ إعداد `Cloudinary`
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ 2️⃣ إعداد `Multer` مع `Cloudinary`
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // 🔥 سيتم تخزين الصور في مجلد `uploads` على `Cloudinary`
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 🚀 تحديد الحد الأقصى لحجم الصورة إلى 2MB
});

// ✅ 3️⃣ تعديل `POST /api/upload` لرفع الصور إلى `Cloudinary`
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "❌ يرجى اختيار صورة!" });
    }

    console.log("✅ الصورة تم رفعها إلى Cloudinary:", req.file);

    // ✅ استخدام `secure_url` للحصول على الرابط المباشر للصورة
    const imageUrl = req.file.path || req.file.secure_url;

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
