package com.resume.controller;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:3000")
public class ResumeController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(@RequestParam("resume") MultipartFile file) {
        try {
            // Load the PDF document
            PDDocument document = PDDocument.load(file.getInputStream());
            PDFTextStripper stripper = new PDFTextStripper();
            String resumeText = stripper.getText(document);
            document.close();

            // Keywords for example
            String[] keywords = {"Java", "Spring", "React", "REST", "SQL"};
            int matched = 0;

            for (String keyword : keywords) {
                if (resumeText.toLowerCase().contains(keyword.toLowerCase())) {
                    matched++;
                }
            }

            String feedback = "✅ Resume processed. Found " + matched + "/" + keywords.length + " keywords.";

            return ResponseEntity.ok(feedback);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("❌ Error processing resume: " + e.getMessage());
        }
    }
}
