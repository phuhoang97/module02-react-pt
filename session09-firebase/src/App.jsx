import { useEffect, useState } from "react";
import "./App.css";
import { storage } from "./firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

function App() {
  // Để upload hình ảnh lên firebase
  // 3 bước:
  // Bước 1: Upload Ảnh
  // Bước 2: Download Ảnh
  // Bước 3: Hiển thị hình ảnh cho người dùng

  // State upload ảnh lên
  const [imageUpload, setImageUpload] = useState(null);

  // State lấy đường dẫn (url) về
  const [imageUrls, setImageUrls] = useState([]);

  // Tạo storage lưu trữ từ dịch vụ firebase
  const imageListRef = ref(storage, "images/");

  // Viết hàm upload
  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  // Lấy dữ liệu về
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className='App'>
      <input
        type='file'
        onChange={(e) => setImageUpload(e.target.files[0])}
      ></input>
      <button onClick={uploadFile}>Upload Image</button>
      {imageUrls.map((url) => (
        <img src={url}></img>
      ))}
    </div>
  );
}

export default App;
