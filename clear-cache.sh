#!/bin/bash

# Bash script to clear browser cache and open portfolio

echo "🧹 Clearing browser cache..."

# Chrome cache locations (Linux/Mac)
CHROME_CACHE_LINUX="$HOME/.cache/google-chrome/Default"
CHROME_CACHE_MAC="$HOME/Library/Application Support/Google/Chrome/Default"

FIREFOX_CACHE_LINUX="$HOME/.cache/firefox"
FIREFOX_CACHE_MAC="$HOME/Library/Caches/Firefox"

# Function to clear cache
clear_cache() {
    local path="$1"
    local name="$2"
    
    if [ -d "$path" ]; then
        rm -rf "$path/Cache"* 2>/dev/null
        rm -rf "$path/Code Cache"* 2>/dev/null
        echo "✓ Cleared: $name"
    fi
}

# Detect OS and clear appropriate caches
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    clear_cache "$CHROME_CACHE_MAC" "Chrome (macOS)"
    clear_cache "$FIREFOX_CACHE_MAC" "Firefox (macOS)"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    clear_cache "$CHROME_CACHE_LINUX" "Chrome (Linux)"
    clear_cache "$FIREFOX_CACHE_LINUX" "Firefox (Linux)"
fi

echo ""
echo "✓ Cache cleared! Opening portfolio..."
echo ""

# Open the portfolio
if command -v open &> /dev/null; then
    # macOS
    open "https://avalusa1.github.io/Stand-alone-portfolio_builder/"
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open "https://avalusa1.github.io/Stand-alone-portfolio_builder/"
else
    echo "Please manually open: https://avalusa1.github.io/Stand-alone-portfolio_builder/"
fi

echo "🎉 Page opened - press Ctrl+F5 to hard refresh!"
