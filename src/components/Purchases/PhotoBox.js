import React, { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Delete } from "@mui/icons-material";

const PhotoBox = () => {
  const [photo, setPhoto] = useState(null);

  // Capture photo from the camera
  const capturePhoto = async () => {
    try {
      // Access the camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Create a temporary video element
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      // Create a canvas to capture the photo
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");

      // Draw the current frame from the video to the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      setPhoto(imageData);

      // Stop the camera stream
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  // Delete the captured photo
  const deletePhoto = () => {
    setPhoto(null);
  };

  return (
    <Box sx={{position: 'relative'}}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          height: 300,
          border: "2px solid #ccc",
          borderRadius: 2,
          position: "relative",
          backgroundColor: photo ? "transparent" : "#f5f5f5", // Change background when there's a photo
        }}
      >
        {/* Camera Icon or Photo */}
        {!photo ? (
          <IconButton
            onClick={capturePhoto}
            sx={{ fontSize: 80, color: "gray" }}
          >
            <CameraAltIcon sx={{fontSize: '70px'}}/>
          </IconButton>
        ) : (
          <img
            src={photo}
            alt="Captured"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      {/* Delete Button */}
      <Box sx={{position: 'absolute', bottom: '5px', right: '5px'}}>
      {photo && (
        <IconButton
          variant="contained"
          color="error"
          sx={{ marginTop: 2 }}
          onClick={deletePhoto}
          size="small"
        >
          <Delete sx={{fontSize: '40px'}}/>
        </IconButton>
      )}
      </Box>


    </Box>
  );
};

export default PhotoBox;

