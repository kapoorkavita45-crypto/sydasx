# Keep-Alive script to maintain 24/7 hosting for 5+ days
$ErrorActionPreference = "SilentlyContinue"
$projectDir = "C:\Users\aagaz\.gemini\antigravity-ide\scratch\astro-website"
Set-Location $projectDir

Write-Host "Starting SYDAS.x Keep-Alive Daemon for 5-day continuous hosting..."

while ($true) {
    # Check static HTTP server on port 4321
    $httpProc = Get-Process -Name node -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*http-server*" }
    if (-not $httpProc) {
        Write-Host "Restarting HTTP Server..."
        Start-Process -FilePath "npx" -ArgumentList "http-server dist -p 4321 -a 0.0.0.0 --cors" -WindowStyle Hidden -WorkingDirectory $projectDir
        Start-Sleep -Seconds 2
    }

    # Check Cloudflare Tunnel
    $cfProc = Get-Process -Name cloudflared -ErrorAction SilentlyContinue
    if (-not $cfProc) {
        Write-Host "Restarting Cloudflare Tunnel..."
        Start-Process -FilePath "$env:TEMP\cloudflared.exe" -ArgumentList "tunnel --url http://localhost:4321" -WindowStyle Hidden -WorkingDirectory $projectDir
        Start-Sleep -Seconds 5
    }

    Start-Sleep -Seconds 15
}
