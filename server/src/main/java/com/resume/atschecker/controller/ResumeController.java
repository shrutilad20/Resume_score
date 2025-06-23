package com.resume.atschecker.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import org.apache.tika.Tika;
import java.io.InputStream;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend requests
public class ResumeController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("❌ File is empty", HttpStatus.BAD_REQUEST);
        }

        try {
            String fileName = file.getOriginalFilename();

            // Use Tika to extract text
            Tika tika = new Tika();
            InputStream inputStream = file.getInputStream();
            String resumeText = tika.parseToString(inputStream);

            // Just print it for now
            System.out.println("✅ Extracted Text from Resume:\n" + resumeText);

            return ResponseEntity.ok("✅ File uploaded: " + fileName + "\n\nParsed Content:\n" + resumeText);


            
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("⚠️ Error reading file: " + e.getMessage());
        }
    }
}


