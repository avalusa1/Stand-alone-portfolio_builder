# PowerShell script to clear browser cache and open portfolio

Write-Host "🧹 Clearing browser cache..." -ForegroundColor Cyan

# Chrome/Edge cache locations (Windows)
$cacheLocations = @(
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Cache",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Code Cache",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Cache",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Code Cache"
)

foreach ($location in $cacheLocations) {
    if (Test-Path $location) {
        try {
            Remove-Item "$location\*" -Force -ErrorAction SilentlyContinue -Recurse
            Write-Host "✓ Cleared: $location" -ForegroundColor Green
        }
        catch {
            Write-Host "⚠ Could not clear: $location (browser may be running)" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "✓ Cache cleared! Opening portfolio..." -ForegroundColor Green
Write-Host ""

# Open the portfolio in default browser
Start-Process "https://avalusa1.github.io/Stand-alone-portfolio_builder/"

Write-Host "🎉 Page opened - you should see images loading now!" -ForegroundColor Cyan
