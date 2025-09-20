# Fact Checker AI (Hackathon Prototype)

**Fact Checker AI** is a **React + Vite frontend prototype** designed to **demo text, image, and URL fact-checking features**. This prototype demonstrates the concept of detecting misinformation in a simple, interactive, and user-friendly interface.  

> ⚠️ **Note:** This is a **hackathon prototype**. The detection logic is **hardcoded/demo only**, currently checking for the keyword `"nuclear war"` in text. Image and URL detection are also demo-only.

---
## Website Link
[fact-checker](https://fact-checker-gamma.vercel.app/)

## Features

1. **Text Fact-Check**
   - Users can input text.  
   - The demo checks for the keyword `"nuclear war"` and returns:
     - **Potential misinformation** for “nuclear war”.  
     - **Reliable information** for longer, generic text.  
     - **Needs verification** for very short text.  
   - Color-coded results with explanations.  

2. **Image Fact-Check (Demo)**
   - Users can upload any image.  
   - Hardcoded result: **Needs verification**.  
   - Demonstrates the **image checking feature** for evaluators.  

3. **URL Fact-Check (Demo)**
   - Users can enter any URL.  
   - Hardcoded result: **Potential misinformation**.  
   - Shows that URL checking is part of the prototype.  

4. **Interactive Card Slider**
   - Swipe/slide through **Text, Image, and URL cards**.  
   - Smooth animation with active card highlighted.

5. **Hero Section**
   - “Check Fact” button scrolls down to the **Actions Section**.  

---

## Demo Notes for Evaluators
- This is a **prototype only**: all detections are hardcoded.  
- **Text detection** is active for `"nuclear war"` only.  
- **Image and URL detections** return demo messages regardless of input.  
- You can **interact with all three cards** to see how the feature would work in a full version.

---

## Tech Stack
- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **Deployment:** GitHub Pages  

---

## Usage
1. Open the deployed prototype in a browser.  
2. Click the **“Check Fact”** button in the Hero section to scroll to the Actions Section.  
3. Try each card:
   - **Text:** Type a statement (e.g., “There will be a nuclear war in 2026”).  
   - **Image:** Upload any image file.  
   - **URL:** Paste any link.  
4. Click **“Check”** to see the color-coded demo results.  

---

## Future Improvements
1. Integrate a real AI backend (e.g., Google Gemini or OpenAI) for dynamic misinformation detection.
2. Implement image and URL verification using APIs.
3. Add history of checks and better UX for multiple tests.

## Acknowledgements
1. Hackathon prototype built by Azka.
2. Frontend designed using React, Vite, and Tailwind CSS.
