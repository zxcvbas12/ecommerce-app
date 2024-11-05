import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // uploads 폴더로 저장 경로 지정
    callback(null, path.join(__dirname, "uploads")); // __dirname은 현재 파일의 디렉토리 경로
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
