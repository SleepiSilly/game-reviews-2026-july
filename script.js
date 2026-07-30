document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Progress Bar (Standard corporate tech blog feature)
    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {
        // Calculate how far down the user has scrolled
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        // Convert to percentage
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
        // Update the width of the progress bar
        progressBar.style.width = scrollPercent + "%";
    });

    // 2. Developer Console Easter Egg (For the SWE aesthetic)
    const styles = [
        "color: #00ffcc",
        "font-family: 'Fira Code', monospace",
        "font-size: 14px",
        "font-weight: bold",
        "padding: 10px 0"
    ].join(";");

    console.log("%c> SYSTEM INITIATED: Welcome to Dev_In_Training_02's output terminal.", styles);
    console.log("%c> Current task: Analyzing technical debt in voxel engines...", "color: #8b949e; font-family: monospace;");
    console.log("%c> Verdict: Needs refactoring.", "color: #ff4757; font-family: monospace;");
});
